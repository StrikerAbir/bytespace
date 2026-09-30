"use client";
import Image from 'next/image';
import { useState } from 'react';

interface TextInputProps {
  label?: string;
  name?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'date'
    | 'time';
  placeholder?: string;
  error?: string;
  required?: boolean;
  inputClass?: string;
  containerClass?: string;
  labelClass?: string;
  disabled?: boolean;
}

const TextInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  error,
  required = false,
  containerClass = '',
  inputClass = '',
  labelClass = '',
  disabled = false,
}: TextInputProps) => {
  const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleWheel = (e: any) => {
    if (inputType === 'number') {
      e.target.blur();
      e.preventDefault();
    }
  };

  const inputType =
    type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type;

  return (
    <div className={`${containerClass}`}>
      {label && (
        <div className="flex-grow items-center gap-2 w-full pb-1">
          <div className="flex items-center gap-2">
            <label
              className={`first-letter:capitalize flex items-center gap-1 ${labelClass}`}
            >
              {label} {required && <span className="text-error_">*</span>}
            </label>
          </div>
        </div>
      )}
      <div className="relative">
        <input
          type={inputType}
          min={inputType === "number" ? 0 : undefined}
          onKeyDown={(e) => {
            if (inputType === "number" && (e.key === "-" || e.key === "e")) {
              e.preventDefault();
            }
          }}
          onWheel={handleWheel}
          name={name}
          value={value}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={(e) => onChange && onChange(e.target.value)}
          disabled={disabled}
          className={`min-w-full border outline-none px-6 py-2.5 bg-white rounded-lg overflow-hidden w-full placeholder:text-placeholder ${
            error ? "border-red-600" : "border-neutral-200"
          } ${disabled ? "opacity-70 cursor-not-allowed" : ""} ${inputClass}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {isPasswordVisible ? (
              <span role="img" aria-label="Hide password">
                <Image
                  src="/icons/home/header/eye-close.svg"
                  alt="Hide password"
                  width={14}
                  height={14}
                />
              </span>
            ) : (
              <span role="img" aria-label="Show password">
                <Image
                  src="/icons/home/header/eye.svg"
                  alt="Show password"
                  width={14}
                  height={14}
                />
              </span>
            )}
          </button>
        )}
        {error && (
          <p id={error} className="mt-1 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
