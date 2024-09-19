'use server';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { APIResponse } from 'mailersend/lib/services/request.service';

import { mailConfig } from '@/config';

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY as string,
});

const sentFrom = new Sender(mailConfig.sender.email, mailConfig.sender.name);

export async function sendRegistrationEmail(email: string, name: string): Promise<APIResponse> {
  const recipients = [new Recipient(email, name)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject('Welcome to Light.it')
    .setHtml(`<strong>Welcome ${name}</strong>`)
    .setText(`Welcome ${name}`);

  return await mailerSend.email.send(emailParams);
}
