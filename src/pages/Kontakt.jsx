import { useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import SimpleContactForm from '../components/SimpleContactForm';

const Kontakt = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle
        title="Kontakt"
        subtitle="Haben Sie Fragen oder möchten Sie einen Service buchen? Kontaktieren Sie uns - wir freuen uns auf Ihre Anfrage."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <div className="bg-white p-6 shadow-md mb-8">
            <h3 className="text-xl font-bold mb-4 section-heading">Kontaktinformationen</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marker-alt text-blue-800"></i>
                </div>
                <div>
                  <h4 className="font-bold">Adresse</h4>
                  <p className="text-gray-700">
                    Premium Chauffeur<br />
                    Musterstraße 123<br />
                    10115 Berlin
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-phone-alt text-blue-800"></i>
                </div>
                <div>
                  <h4 className="font-bold">Telefon</h4>
                  <p className="text-gray-700">
                    +49 (0)176 31454340<br />
                    <span className="text-sm">(Mo-Fr: 8:00-18:00 Uhr)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-envelope text-blue-800"></i>
                </div>
                <div>
                  <h4 className="font-bold">E-Mail</h4>
                  <p className="text-gray-700">
                    info@premium-chauffeur.de<br />
                    buchung@premium-chauffeur.de
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <i className="fas fa-clock text-blue-800"></i>
                </div>
                <div>
                  <h4 className="font-bold">Öffnungszeiten Büro</h4>
                  <p className="text-gray-700">
                    Montag - Freitag: 8:00 - 18:00 Uhr<br />
                    Samstag: 9:00 - 14:00 Uhr<br />
                    <span className="text-sm font-bold">(Fahrservice 24/7 verfügbar)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold mb-4 section-heading">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition duration-300"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="mailto:info@premium-chauffeur.de"
                className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-300"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://wa.me/4917631454340"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-green-700 transition duration-300"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-500 transition duration-300"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div>
          <SimpleContactForm />
        </div>
      </div>

      <div className="bg-white p-6 shadow-md mb-12">
        <h3 className="text-xl font-bold mb-4 section-heading">Anfahrt</h3>
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6890972423837!2d13.383906376929055!3d52.53102287471697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e52cccb2a1%3A0x6f8bdd46eb8c2e54!2sInvalidenstra%C3%9Fe%2C%20Berlin!5e0!3m2!1sen!2sde!4v1682512345678!5m2!1sen!2sde"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Standort von Driversline"
          ></iframe>
        </div>
      </div>

      <div className="bg-blue-800 text-white p-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-headset text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Verfügbarkeit</h3>
            <p>Unser Service steht Ihnen rund um die Uhr zur Verfügung. Wir sind immer für Sie da.</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-comments text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Persönliche Beratung</h3>
            <p>Wir beraten Sie gerne persönlich und erstellen ein individuelles Angebot nach Ihren Wünschen.</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Zuverlässigkeit</h3>
            <p>Verlassen Sie sich auf unsere Pünktlichkeit und Professionalität. Ihre Zufriedenheit ist unser Anspruch.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
