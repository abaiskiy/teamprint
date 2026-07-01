import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2, "Укажите имя"),
  phone: z.string().min(10, "Укажите корректный номер телефона"),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  calculatorData: z.record(z.string(), z.unknown()).optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
});

async function sendTelegramNotification(data: z.infer<typeof leadSchema>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const lines = [
    "🔔 *Новая заявка с сайта TeamPrint*",
    "",
    `👤 *Имя:* ${data.name}`,
    `📞 *Телефон:* ${data.phone}`,
    data.company ? `🏢 *Компания:* ${data.company}` : null,
    data.message ? `💬 *Сообщение:* ${data.message}` : null,
    `📍 *Источник:* ${data.source ?? "неизвестно"}`,
    data.utm_source ? `📊 *UTM:* ${data.utm_source}` : null,
    data.calculatorData
      ? `🧮 *Расчёт:* ${JSON.stringify(data.calculatorData, null, 2)}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines,
        parse_mode: "Markdown",
      }),
    });
  } catch (err) {
    console.error("[Telegram] Failed to send notification:", err);
  }
}

async function appendToGoogleSheets(data: z.infer<typeof leadSchema>) {
  // TODO: Добавить Google Sheets через service account
  // Будет реализовано в Этапе 2 после настройки сервисного аккаунта
  console.log("[Sheets] Row to append:", data);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = leadSchema.parse(body);

    await Promise.all([
      sendTelegramNotification(data),
      appendToGoogleSheets(data),
    ]);

    return NextResponse.json(
      { success: true, message: "Заявка принята" },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.flatten().fieldErrors },
        { status: 422 }
      );
    }
    console.error("[Lead API Error]", err);
    return NextResponse.json(
      { success: false, message: "Ошибка сервера. Попробуйте позже." },
      { status: 500 }
    );
  }
}
