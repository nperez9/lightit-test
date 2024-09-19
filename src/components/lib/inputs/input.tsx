import { ErrorText } from '@/components/lib';

export interface InputProps {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  value,
  setValue,
  placeholder = '',
  required = false,
  disabled = false,
  errorMessage = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-5">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 align-middle justify-center items-center">
        <label htmlFor={name} className="block text-lg font-medium text-gray-900 dark:text-white md:w-1/4 text-left">
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          onChange={handleChange}
          value={value}
          className="border text-sm rounded-lg block w-full p-2
          bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      </div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </div>
  );
};
