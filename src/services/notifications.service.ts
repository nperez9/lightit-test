'use server';
import { sendRegistrationEmail } from '@/providers/mail.provider';

export async function NotifyEmail(email: string, name: string) {
  try {
    sendRegistrationEmail(email, name);
  } catch (error) {
    console.error('Error sending email', error);
  }
}

export async function NotifySMS(phone: string, name: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`SMS sent to ${phone} | ${name}`);
    }, 1000);
  });
}
