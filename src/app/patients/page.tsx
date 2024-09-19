import { HomeIcon, PlusIcon } from '@radix-ui/react-icons';

import { MainTitle, FixedButton } from '@/components/lib';
import { PatientTable } from '@/components/patient/patient-table';
import { GetPatients } from '@/services/patients.service';

export const metadata = {
  title: 'Patients List',
  description: 'List of all patients',
};

export default async function PatientList() {
  const patients = await GetPatients();

  return (
    <section className="flex-col-container min-h-screen">
      <MainTitle>Patients Lists</MainTitle>
      <PatientTable patients={patients} />
      <FixedButton href="/" className="bottom-24">
        <HomeIcon width={24} height={24} />
      </FixedButton>
      <FixedButton href="/create" className="hover:rotate-180 bottom-7">
        <PlusIcon width={24} height={24} />
      </FixedButton>
    </section>
  );
}
