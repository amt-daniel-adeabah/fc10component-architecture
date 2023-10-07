import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface FormErrors {
  name: string;
  email: string;
  password: string;
}

export function useRegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors: FormErrors = { name: "", email: "", password: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    const hasErrors = errors.name || errors.email || errors.password;
    return !hasErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return {
    formData,
    formErrors,
    handleInputChange,
    handleSubmit
  };
}
