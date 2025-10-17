import { ContactFormData, FormErrors } from '@/types';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[\s\-\(\)0-9]{9,}$/;
  return phoneRegex.test(phone);
};

export const validateForm = (formData: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = 'Imię i nazwisko jest wymagane';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email jest wymagany';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Podaj prawidłowy adres email';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Numer telefonu jest wymagany';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Podaj prawidłowy numer telefonu';
  }

  if (!formData.service) {
    errors.service = 'Wybierz rodzaj usługi';
  }

  if (!formData.message.trim()) {
    errors.message = 'Wiadomość jest wymagana';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Wiadomość musi mieć minimum 10 znaków';
  }

  return errors;
};
