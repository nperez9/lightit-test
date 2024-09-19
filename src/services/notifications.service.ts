'use server';

// TODO: Implement mailing
export async function NotifyEmail(email: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Email sent to ${email}`);
    }, 1000);
  });
}

export async function NotifySMS(phone: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`SMS sent to ${phone}`);
    }, 1000);
  });
}
