'use client';
import { ImagePicker } from '@/components/lib/image-picker/image-picker';
import { Button } from '@/components/lib';
import React from 'react';

export interface PatientFormProps {}

export const PatientForm: React.FC<PatientFormProps> = () => {
  return (
    <form>
      <div>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required />
        </p>
      </div>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" name="summary" required />
      </p>
      <p>
        <label htmlFor="instructions">Instructions</label>
        <textarea id="instructions" name="instructions" rows={10} required></textarea>
      </p>
      <ImagePicker label="choose an Image" name="image" />
      <p>
        {'use client'}
        <Button
          type="submit"
          onclick={() => {
            console.info('stuff');
          }}
        >
          Submit
        </Button>
      </p>
    </form>
  );
};
