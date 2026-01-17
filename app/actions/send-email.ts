"use server"

import emailjs from "@emailjs/nodejs"

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    // Initialize EmailJS with server-side credentials
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      privateKey: process.env.EMAILJS_PRIVATE_KEY,
    })

    // Send email
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      {
        to_email: "mdismail.121510@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
    )

    return { success: true, message: "Email sent successfully" }
  } catch (error) {
    console.error("[v0] Server error sending email:", error)
    return { success: false, message: "Failed to send email" }
  }
}
