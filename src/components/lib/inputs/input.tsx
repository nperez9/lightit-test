export interface InputProps {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  error = null,
  errorMessage = '',
  className = '',
}) => {
  return (
    <div className="mb-5 flex flex-col">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@flowbite.com"
        required
      />
      <span></span>
    </div>
  );
};
