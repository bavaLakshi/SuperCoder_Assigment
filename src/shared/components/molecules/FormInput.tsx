import React from "react";

type FormInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
};

export default function FormInput({ label, type = "text", placeholder }: FormInputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
