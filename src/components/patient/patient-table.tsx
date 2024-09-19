'use client';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { PatientDB } from '@/types/patient';
import { useState } from 'react';
import Image from 'next/image';

export interface PatientTableProps {
  patients: PatientDB[];
}

export const PatientTable: React.FC<PatientTableProps> = ({ patients }) => {
  const [openPatientId, setOpenPatientId] = useState<number | null>(null);

  const togglePatientDetails = (patientId: number) => {
    if (openPatientId === patientId) {
      setOpenPatientId(null); // Close if the same patient is clicked again
    } else {
      setOpenPatientId(patientId); // Open the clicked patient's details
    }
  };

  return (
    <section>
      {patients.map((patient) => (
        <div key={patient.id} className="border-b mb-4">
          <div
            className="transition-all flex items-center justify-between p-4 cursor-pointer hover:bg-gray-700 rounded-t-3xl border border-gray-700 border-b-0"
            onClick={() => togglePatientDetails(patient.id)}
          >
            <span>{patient.name}</span>
            <EyeOpenIcon />
          </div>
          {openPatientId === patient.id && (
            <div className="p-6 rounded bg-gray-800 flex flex-col md:flex-row gap-2 md:h-60">
              <div className="w-full md:flex-1/2 md:text-left">
                <ul className="flex flex-col gap-5 text-lg">
                  <li>
                    <span className="font-bold">Name:</span>
                    <span className="ml-4">{patient.name}</span>
                  </li>
                  <li>
                    <span className="font-bold">Id:</span>
                    <span className="ml-4">{patient.id}</span>
                  </li>
                  <li>
                    <span className="font-bold">Email:</span>
                    <span className="ml-4">{patient.email}</span>
                  </li>
                  <li>
                    <span className="font-bold">Phone:</span>
                    <span className="ml-4">{patient.phone}</span>
                  </li>
                </ul>
              </div>
              <div className="w-full mt-8 md:m-0 md:flex-1/2 mx-auto">
                <img className="mx-auto max-h-full max-w-full" src={patient.document_image} alt={patient.name} />
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};
