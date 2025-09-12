import React from 'react';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "User Accounts",
      content: "If our Service requires an account, you are responsible for maintaining the confidentiality of your account and password. You must notify us immediately of any unauthorized use of your account."
    },
    {
      title: "Intellectual Property",
      content: "The Service and its original content, features, and functionality are and will remain the exclusive property of Sharp Transportation and its licensors."
    },
    {
      title: "User Conduct",
      content: "You agree not to use the Service in any way that violates any applicable law or regulation, or for any fraudulent or harmful purpose."
    },
    {
      title: "Disclaimer of Warranties",
      content: "The Service is provided on an \"AS IS\" and \"AS AVAILABLE\" basis. Sharp Transportation makes no warranties, express or implied, regarding the Service."
    },
    {
      title: "Limitation of Liability",
      content: "Except as prohibited by law, you will hold us harmless for any indirect, punitive, special, incidental, or consequential damage."
    },
    {
      title: "Termination",
      content: "We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, for any reason whatsoever."
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions."
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about these Terms of Service, please contact us by visiting our contact page."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Terms of Service</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Please read these Terms of Service carefully before using the Sharp Transportation website (the "Service") operated by Sharp Transportation ("us", "we", or "our"). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
          </p>
          <div className="mt-10 space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{section.title}</h2>
                <p className="mt-4 text-base leading-7 text-gray-600">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;