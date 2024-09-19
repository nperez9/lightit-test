import { MainTitle } from '@/components/lib';
import { PatientTable } from '@/components/patient/patient-table';
import { GetPatients } from '@/services/patients.service';

export default async function PatientList() {
  const patients = await GetPatients();

  return (
    <section className="flex-col-container">
      <MainTitle>Patients Lists</MainTitle>
      <PatientTable patients={patients} />
    </section>
  );
}
