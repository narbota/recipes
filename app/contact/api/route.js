import { headers } from "next/headers";

/* eslint-disable import/no-anonymous-default-export */
export async function POST(request) {
  const {
    firstName,
    lastName,
    email,
    countryCode,
    phoneNumber,
    company,
    message,
    budget,
  } = await request.json();

  const headersList = headers();
  const ip = headersList.get("x-forwarded-for");
  const userAgent = headersList.get("user-agent");
  const referrer = headersList.get("referer");

  const body = `
    <h1>Contact Inquiry</h1>
    <p>From: ${firstName} ${lastName}
    <br/>Email: ${email}
    <br/>Phone: [${countryCode}] ${phoneNumber}
    <br/>Company: ${company}
    <br/>Budget: ${budget}
    <br/>Message: ${message}</p>
    ----------------------------
    <p>IP: ${ip}</p>
    <p>Lookup: <a href="https://ipinfo.io/${ip}">https://ipinfo.io/${ip}</a></p>
    <p>Browser: ${userAgent}</p>
    <p>Referrer: ${referrer}</p>
    <p>Time: ${new Date()}</p>
    `;

  try {
    await sendEmail(body, email);
    return new Response("success", {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", {
      status: 500,
    });
  }
}

const sendEmail = async (body, replyTo) => {
  const sendgrid = require("@sendgrid/mail");
  sendgrid.setApiKey(
    "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"
  );

  const msg = {
    to: "andrea@narbot.com",
    from: {
      email: "andrea@narbot.com",
      name: "Recipes",
    },
    replyTo,
    subject: "Cooks Contact",
    text: body,
    html: body,
  };

  try {
    await sendgrid.send(msg);
  } catch (e) {
    console.error(e);
    throw e;
  }
};
