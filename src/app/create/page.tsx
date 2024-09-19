import { HomeIcon, ListBulletIcon } from '@radix-ui/react-icons';

import { FixedButton, MainTitle } from '@/components/lib';
import { PatientForm } from '@/components/patient/patient-form';

export const metadata = {
  title: 'Create Patient',
  description: 'Create a new patient in the patient manager',
};

export default function CreatePatient() {
  return (
    <section className="flex-col-container">
      <MainTitle>Create Patient</MainTitle>
      <main>
        <PatientForm />
      </main>

      <FixedButton href="/" className="hover:rotate-0 bottom-24">
        <HomeIcon width={24} height={24} />
      </FixedButton>
      <FixedButton href="/patients">
        <ListBulletIcon width={24} height={24} className="hover:rotate-0 bottom-24" />
      </FixedButton>
    </section>
  );
}
