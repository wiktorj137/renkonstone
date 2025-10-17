import React, { useState } from 'react';
import { Section, SectionHeader, Input, TextArea, Button, Card } from '@/components/ui';
import { ContactFormData, FormErrors } from '@/types';
import { validateForm } from '@/utils';
import { services } from '@/constants/data';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 2000);
  };

  return (
    <Section id="contact" gradient>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          icon="fa-envelope"
          title={
            <>
              Skontaktuj się <span className="text-renkon-orange font-medium">z Nami</span>
            </>
          }
          subtitle="Masz pytania? Potrzebujesz wyceny? Skontaktuj się z nami - odpowiemy w ciągu 24 godzin"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Imię i Nazwisko *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jan Kowalski"
                    icon="fa-user"
                    error={errors.name}
                    required
                  />
                  
                  <Input
                    label="Email *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jan@example.com"
                    icon="fa-envelope"
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    label="Telefon *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+48 123 456 789"
                    icon="fa-phone"
                    error={errors.phone}
                    required
                  />
                  
                  <div>
                    <label className="block text-renkon-beige mb-2 font-medium">
                      Rodzaj usługi *
                    </label>
                    <div className="relative">
                      <i className="fas fa-cogs absolute left-4 top-1/2 transform -translate-y-1/2 text-renkon-beige z-10" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full bg-renkon-dark-4 border ${
                          errors.service ? 'border-red-500' : 'border-renkon-dark-5'
                        } rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-renkon-orange transition-colors appearance-none`}
                        required
                      >
                        <option value="">Wybierz usługę</option>
                        {services.map(service => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-renkon-beige pointer-events-none" />
                    </div>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                    )}
                  </div>
                </div>

                <TextArea
                  label="Wiadomość *"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Opisz szczegóły projektu..."
                  rows={6}
                  error={errors.message}
                  required
                />

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-sm text-renkon-beige/60">
                    * Pola wymagane
                  </p>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={isSubmitting ? '' : 'fa-paper-plane'}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij Zapytanie'}
                  </Button>
                </div>
              </form>

              {/* Success Message */}
              {submitSuccess && (
                <div className="mt-6 bg-green-600/20 border border-green-600 text-green-100 px-6 py-4 rounded-lg animate-fade-in">
                  <i className="fas fa-check-circle mr-2" />
                  Dziękujemy za zapytanie! Skontaktujemy się z Państwem w ciągu 24 godzin.
                </div>
              )}
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <i className="fas fa-phone text-renkon-orange mr-3" />
                Dane Kontaktowe
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-renkon-beige/60 mb-2">Telefon</h4>
                  <a href="tel:+48123456789" className="text-white hover:text-renkon-orange transition-colors flex items-center space-x-2">
                    <i className="fas fa-mobile-alt" />
                    <span>+48 123 456 789</span>
                  </a>
                  <a href="tel:+48987654321" className="text-white hover:text-renkon-orange transition-colors flex items-center space-x-2 mt-2">
                    <i className="fas fa-mobile-alt" />
                    <span>+48 987 654 321</span>
                  </a>
                </div>

                <div>
                  <h4 className="text-sm text-renkon-beige/60 mb-2">Email</h4>
                  <a href="mailto:kontakt@renkonstone.pl" className="text-white hover:text-renkon-orange transition-colors flex items-center space-x-2">
                    <i className="fas fa-envelope" />
                    <span>kontakt@renkonstone.pl</span>
                  </a>
                </div>

                <div>
                  <h4 className="text-sm text-renkon-beige/60 mb-2">Obszar działalności</h4>
                  <div className="space-y-2 text-white">
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-map-marker-alt text-renkon-orange" />
                      <span>Polska</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-map-marker-alt text-renkon-orange" />
                      <span>Anglia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <i className="fas fa-map-marker-alt text-renkon-orange" />
                      <span>Irlandia</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-renkon-orange/10 to-transparent">
              <h3 className="text-lg font-semibold text-white mb-4">
                Godziny pracy
              </h3>
              <div className="space-y-2 text-renkon-beige">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek:</span>
                  <span className="font-semibold text-white">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota:</span>
                  <span className="font-semibold text-white">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Niedziela:</span>
                  <span className="font-semibold text-white">Zamknięte</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
