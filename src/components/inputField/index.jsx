import { useState } from "react";

function InputField({
  type,
  name,
  className,
  labelClassName,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
}) {
  const requiredMark = required ? <span className="text-[red]">*</span> : null;

  return (
    <div className="flex-col">
      <label className={labelClassName}>
        {label} {requiredMark}
      </label>
      <div className="relative h-full flex items-center">
        <input
          type={type}
          name={name}
          disabled={disabled}
          onChange={onChange}
          value={value}
          className={`${className} focus:outline-none block text-black`}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}

export { InputField };
