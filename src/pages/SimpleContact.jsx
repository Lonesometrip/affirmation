import { useState, useEffect } from 'react';

const SimpleContact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    customerType: 'private', // 'private' or 'business'
    privacy: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      customerType: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie Ihre Nachricht ein';
    }

    if (!formData.privacy) {
      newErrors.privacy = 'Bitte akzeptieren Sie die Datenschutzerklärung';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          customerType: 'private',
          privacy: false
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-lg overflow-hidden">
          <div className="bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Premium Chauffeur – Unser Unternehmen</h1>
            <h2 className="text-xl mb-6">Limousinen- und Chauffeurservice</h2>

            <p className="mb-4">
              Seit über 10 Jahren stellen wir unseren Kunden zuverlässig unseren Limousinen- und Chauffeur Service zur Verfügung. Die Premium Chauffeur GmbH ist kein Vermittler, sondern ein eigenständiger Chauffeurdiensteister.
            </p>

            <p className="mb-4">
              Gemäß Personenbeförderungsgesetz sind wir ein von der IHK lizenziertes Unternehmen und verfügen über alle notwendigen Zulassungen sowie Versicherungen. Wir geben Ihre Anfrage nicht an ein Bieterpool weiter, sondern führen unsere Aufträge in Eigenleistung aus.
            </p>

            <p className="mb-4">
              Unser Credo steht für maximale Exklusivität, Diskretion und Service auf höchstem Niveau. Das Wohlbefinden und die Zufriedenheit unserer Kunden sind unser Ansporn.
            </p>
          </div>

          <div className="bg-white p-8">
            <h2 className="text-2xl font-bold mb-2">Premium Chauffeur Limousinenservice</h2>
            <p className="text-gray-700 mb-6">Exklusiv. Zuverlässig. Komfortabel.</p>

            <p className="text-gray-700 mb-6">
              Fragen Sie jetzt unverbindlich Ihren persönlichen Limousinenservice an. Gerne erstellen wir Ihnen ein individuelles Angebot.
            </p>

            <p className="text-gray-700 mb-6">
              Die mit einem * versehenen Felder sind Pflichtfelder.
            </p>

            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative mb-6 fade-in" role="alert">
                <strong className="font-bold">Vielen Dank!</strong>
                <span className="block sm:inline"> Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.</span>
              </div>
            ) : null}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">E-Mail-Adresse *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="E-Mail-Adresse"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Telefonnummer</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Telefonnummer"
                />
              </div>

              <div className="mb-4 flex items-center space-x-8">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="privateCustomer"
                    name="customerType"
                    checked={formData.customerType === 'private'}
                    onChange={() => handleRadioChange('private')}
                    className="mr-2"
                  />
                  <label htmlFor="privateCustomer" className="text-gray-700">Privatkunde</label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="businessCustomer"
                    name="customerType"
                    checked={formData.customerType === 'business'}
                    onChange={() => handleRadioChange('business')}
                    className="mr-2"
                  />
                  <label htmlFor="businessCustomer" className="text-gray-700">Geschäftskunde</label>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Ihre Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Ihre Anfrage"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <div className="mb-6">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className={`mt-1 ${errors.privacy ? 'border-red-500' : ''}`}
                  />
                  <span className="ml-2 text-gray-700 text-sm">
                    Ich stimme der Datenschutzerklärung zu. *
                  </span>
                </label>
                {errors.privacy && <p className="text-red-500 text-sm mt-1">{errors.privacy}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-6 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleContact;
