'use client';

import React, { useState } from 'react';
import { FaRegEye,FaRegEyeSlash } from 'react-icons/fa6';

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'> {
  id: string;
  label: string;
  placeholder?: string;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function Input(props: IInputProps) {
  const { id, label, placeholder, type, error, className, ...rest } = props;
  const isPassword = type === 'password';
  const [show, setShow] = useState(false);

  const inputType: React.HTMLInputTypeAttribute = isPassword ? (show ? 'text' : 'password') : (type || 'text');

  return (
    <div className="w-full">
      <label className="block mb-2" htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={[
            'w-full p-2 rounded focus:outline-none focus:ring-1 text-foreground border border-border bg-background focus:ring-foreground placeholder-foreground',
            isPassword ? 'pr-10' : '',
            className || ''
          ].join(' ')}
          {...rest}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            className="absolute inset-y-0 right-2 flex items-center"
            aria-label={show ? 'Hide password' : 'Show password'}
            aria-pressed={show}
            title={show ? 'Hide password' : 'Show password'}
            tabIndex={0}
          >
            {show ? <FaRegEye size={20}/> : <FaRegEyeSlash size={20}/>}
          </button>
        )}
      </div>

      {error && <span className="mt-1 block text-sm text-red-500">{error}</span>}
    </div>
  );
}
