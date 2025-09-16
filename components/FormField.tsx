"use client";

import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormField as ShadFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FormFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: string;
};

export default function FormField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) {
  return (
    <ShadFormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input className="input" {...field} placeholder={placeholder} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
