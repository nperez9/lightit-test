'use client';
import React, { useRef, useState } from 'react';
import { Button, ErrorText } from '@/components/lib';

export interface ImagePickerProps {
  label: string;
  name: string;
  errorMessage?: string;
}

// TODO implement drag and drop
export const ImagePicker: React.FC<ImagePickerProps> = ({ label, name, errorMessage }) => {
  const [pickedImage, setImagePicked] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const hadlePickClick = () => {
    imageInputRef.current?.click();
  };

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target?.files?.length) {
      return;
    }

    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePicked(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-6 m-4 items-center align-middle">
      <label className="hidden" htmlFor={name}>
        {label}
      </label>
      <input
        className="hidden"
        type="file"
        id={name}
        name={name}
        accept="image/*"
        ref={imageInputRef}
        onChange={handleImageChange}
      />
      {pickedImage ? (
        <img className="rounded w-52 h-52" src={pickedImage} alt="picked image" width={300} height={300} />
      ) : (
        <p>No image picked</p>
      )}
      <Button type="button" className="block" onclick={hadlePickClick}>
        Pick an image
      </Button>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};
