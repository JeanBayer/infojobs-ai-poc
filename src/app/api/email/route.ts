import { render } from "@react-email/render";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { empresa, oferta, postulante } = await req.json();
  try {
    const data = await sendEmail({
      to: postulante.info.email,
      subject: `${empresa.nombre} quiere contactarte para una entrevista en el puesto de ${oferta?.puesto}`,
      html: render(
        WelcomeTemplate({
          empresa,
          oferta,
          postulante,
        })
      ),
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ message: "Error sending email" });
  }

  return NextResponse.json({ message: "Email sent successfully" });
}
