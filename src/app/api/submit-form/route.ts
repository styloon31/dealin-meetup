import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // PASTE YOUR GOOGLE APPS SCRIPT URL HERE
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwntdZkcF30MsJftEdZ60q6QG3He0MZEkJ3MdooQqKMSY-EOeNpUtSjYyKFslygbKxhhA/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return NextResponse.json({ success: true, data: result });
  } catch (error: any) {
    console.error("Submission Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}