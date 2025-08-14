import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 1. Send email to YOU
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: message,
    })

    // 2. Send copy to sender
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "Copy of your message to Usman Khurshid",
    //   text: `Hi ${name},\n\nThanks for reaching out!\n\nHere's a copy of your message:\n\n"${message}"\n\nI'll get back to you soon.\n\nBest,\nUsman Khurshid`,
    // })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
