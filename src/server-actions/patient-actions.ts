'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { SavePatient } from '@/services/patients.service';
import { Patient } from '@/types/patient';
import { isValidText, isValidImage } from '@/utils/validations';
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
  if (!isValidText(patient.name)) {
    formState.name = 'Name is required';
  }
  if (!isValidText(patient.email)) {
    formState.email = 'Email is required and must be a gmail account';
  }

  if (!isValidText(patient.phone)) {
    formState.phone = 'Phone is requried';
  }

  if (!isValidImage(patient.document_image)) {
    formState.document_image = 'Image is required and must be a JPG';
  }

  if (Object.keys(formState).length > 0) {
    return formState;
  }

  await SavePatient(patient);
  NotifyEmail(patient.email);
  // TODO: Implement SMS notification
  revalidatePath('/patients');
  return redirect('/patients');
}
