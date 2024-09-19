import { MainTitle } from '@/components/lib';
import { PatientForm } from '@/components/patient/patient-form';

export const Metadata = {
  title: 'Create Patient',
  description: 'Create a new patient in the patient manager',
};

export default function CreatePatient() {
  return (
    <>
      <header>
        <MainTitle>Add a new User!</MainTitle>
      </header>
      <main>
        <PatientForm />
      </main>
    </>
  );
}
