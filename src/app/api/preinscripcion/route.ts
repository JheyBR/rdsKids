import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxiRn_pv3qifWOSxZ8yggpwLPfhkOkPceiH0AUp2qgrsx4riZIZicTwRkjJql7V2tTj2Q/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { status: "error", message: "Respuesta inválida del servidor" },
        { status: 500 }
      );
    }

    // 🔥 VALIDACIÓN REAL
    if (data.status === "error") {
      return NextResponse.json(
        { status: "error", message: data.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ status: "success" });

  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}