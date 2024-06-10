import { NextResponse } from "next/server";
import { Resend } from "resend";
import TemplateEmail from "./TemplateEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
  const { email, telefono, mensaje } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "marlon7piri@gmail.com",
      subject: "Mensaje desde tu Portafolio",
      react: (
        <TemplateEmail email={email} telefono={telefono} mensaje={mensaje} />
      ),
    });
    console.log(data, error);
    if (error) {
      return NextResponse.json("Error al enviar el email", { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
