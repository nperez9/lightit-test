'use server';
import fs from 'node:fs';

import sql from 'better-sqlite3';
import { DATABASE_NAME } from '@/constants/database';
import { Patient, PatientDB } from '@/types/patient';

const db = new sql(DATABASE_NAME);

export async function GetPatients(): Promise<PatientDB[]> {
  // This is to see the loader, i put some effort on it
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare('SELECT * FROM Patients ORDER BY id DESC').all() as PatientDB[];
}

export async function GetPatinentById(id: number): Promise<PatientDB> {
  return db.prepare('SELECT * FROM Patients WHERE id = ?').get(id) as PatientDB;
}

export async function SavePatient(patient: Patient) {
  console.info('Saving patient', patient);
  const extension = patient.document_image.name.split('.').pop();
  const filename = `${patient.email}.${extension}`;

  const stream = fs.createWriteStream(`public/images/documents/${filename}`);
  const bufferedImage = await patient.document_image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Error saving image');
    }
  });
  const savedImage = `/images/documents/${filename}`;

  const formattedPatient = { ...patient, document_image: savedImage };

  return db
    .prepare(
      `
     INSERT INTO Patients
       (name, email, phone, document_image)
     VALUES
       (@name, @email, @phone, @document_image)
     `,
    )
    .run(formattedPatient);
}
