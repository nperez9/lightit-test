'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { SavePatient } from '@/services/patients.service';
import { Patient } from '@/types/patient';
import { isValidText, isValidImage, isOnlyText, isGmail } from '@/utils/validations';
import { NotifyEmail } from '@/services/notifications.service';

export interface PatientFormState {
  name?: string;
  phone?: string;
  email?: string;
  document_image?: string;
}

// TODO: implmente S3 bucket for images
export async function savePatientAction(prevState: PatientFormState, formData: FormData) {
  const patient: Patient = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    document_image: formData.get('document_image'),
  };

  const formState: PatientFormState = {};
  if (!isOnlyText(patient.name)) {
    formState.name = 'Name cannot be empty and must cotain only letters';
  }
  if (!isGmail(patient.email)) {
    formState.email = 'Email must be a gmail account';
  }

  if (!isValidText(patient.phone)) {
    formState.phone = 'Phone cannot be empty';
  }

  if (!isValidImage(patient.document_image)) {
    formState.document_image = 'Image is required and must be a JPG';
  }

  if (Object.keys(formState).length > 0) {
    return formState;
  }

  await SavePatient(patient);
  NotifyEmail(patient.email, patient.name);
  // TODO: Implement SMS notification
  revalidatePath('/patients');
  return redirect('/patients');
}
