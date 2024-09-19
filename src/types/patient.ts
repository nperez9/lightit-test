export interface Patient {
  name: string;
  phone: string;
  email: string;
  document: number;
  document_image: string;
}

export interface PatientDB extends Patient {
  id: number;
}
