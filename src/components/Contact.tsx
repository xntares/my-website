import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Get In Touch
        </h2>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <p className="text-center text-lg text-gray-700 mb-12 leading-relaxed">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{info.label}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              );

              return info.href ? (
                <a key={index} href={info.href}>
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="mailto:your.email@example.com"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </a>
          </div>
        </div>

        <footer className="text-center mt-16 text-gray-600">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
