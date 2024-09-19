'use client';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { ImagePicker } from '@/components/lib/image-picker/image-picker';
import { Button, Input } from '@/components/lib';
import { PatientFormState, savePatientAction } from '@/server-actions/patient-actions';

export interface PatientFormProps {}

export const PatientForm: React.FC<PatientFormProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formState, formAction] = useFormState(savePatientAction, {
    name: '',
    email: '',
    phone: '',
    document_image: '',
  } as PatientFormState);
  const { pending } = useFormStatus();

  return (
    <form className="max-w-md m-auto" action={formAction}>
      <div>
        <Input
          label="Name"
          setValue={setName}
          value={name}
          type="text"
          name="name"
          placeholder="Rango Doe"
          errorMessage={formState.name}
          required
        />
        <Input
          label="Email"
          setValue={setEmail}
          value={email}
          type="email"
          name="email"
          placeholder="testmail@gmail.com"
          errorMessage={formState.email}
          required
        />
        <Input
          label="Phone"
          setValue={setPhone}
          value={phone}
          type="text"
          name="phone"
          placeholder="+132 2233344"
          errorMessage={formState.phone}
          required
        />
        <ImagePicker label="choose an Image" name="document_image" errorMessage={formState.document_image} />
        <Button type="submit" disabled={pending}>
          {pending ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </form>
  );
};
