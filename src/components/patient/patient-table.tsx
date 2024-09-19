import { EyeOpenIcon } from '@radix-ui/react-icons';
import { PatientDB } from '@/types/patient';

export interface PatientTableProps {
  patients: PatientDB[];
}

export const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  return (
    <table className="table-auto p-2">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient: PatientDB) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.email}</td>
            <td>
              <button className="btn btn-primary">
                <EyeOpenIcon />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
