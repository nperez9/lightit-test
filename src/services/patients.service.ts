'use server';
import fs, { createWriteStream } from 'node:fs';

import sql from 'better-sqlite3';
import xss from 'xss';
import { DATABASE_NAME } from '@/constants/database';
import { PatientDB } from '@/types/patient';

const db = new sql(DATABASE_NAME);

export async function GetPatients(): Promise<PatientDB[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM Patients ORDER BY id DESC').all() as PatientDB[];
}

export async function GetPatinentById(id: number): Promise<PatientDB> {
  return db.prepare('SELECT * FROM Patients WHERE id = ?').get(id) as PatientDB;
}

// export async function SavePatient(patient: any) {
//   const extension = patient.document_image.split('.').pop();
//   const filename = `${patient.email}${extension}`;

//   const stream = fs.createWriteStream(`public/images/documents/${filename}`);
//   const bufferedImage = await patient.document_image.arrayBuffer();
//   stream.write(Buffer.from(bufferedImage), (error) => {
//     if (error) {
//       throw new Error('Error saving image');
//     }
//   });
//   const savedImage = `/images/documents/${filename}`;

//   const formattedMeal = { ...meal, slug, instructions, image: savedImage };

//   db.prepare(
//     `
//     INSERT INTO meals
//       (title, summary, instructions, image, creator, creator_email, slug)
//     VALUES
//       (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
//     `,
//   ).run(formattedMeal);
// }
