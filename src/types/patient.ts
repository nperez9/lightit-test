export interface Patient {
  name: string;
  phone: string;
  email: string;
  document_image: any;
}

export interface PatientDB extends Patient {
  id: number;
  document_image: string;
}
