import React from 'react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect various types of information in connection with the services we provide, including personal information (name, email, address, phone number), usage data (IP address, browser type, pages visited), and information from cookies and tracking technologies."
    },
    {
      title: "How We Collect Information",
      content: "We collect information directly from you (when you fill out forms or register), automatically (through your use of the Service), and from third parties (like analytics providers)."
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to provide and maintain our Service, notify you about changes, provide customer support, improve our Service, monitor usage, and for other purposes with your consent."
    },
    {
      title: "Sharing Your Information",
      content: "We may share your information with service providers, for business transfers, with affiliates, with business partners, with your consent, or for legal requirements."
    },
    {
      title: "Data Security",
      content: "The security of your data is important to us, but no method of transmission over the Internet is 100% secure. We strive to use commercially acceptable means to protect your Personal Information, but we cannot guarantee its absolute security."
    },
    {
      title: "Your Data Protection Rights",
      content: "Depending on your location, you may have rights to access, rectify, erase, restrict processing, object to processing, and data portability of your personal data. Please contact us to exercise these rights."
    },
    {
      title: "Links to Other Websites",
      content: "Our Service may contain links to other websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us by visiting our contact page."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This Privacy Policy describes how Sharp Transportation ("we," "us," or "our") collects, uses, and discloses your personal information when you visit, use, or make a purchase from the Sharp Transportation Website (the "Service").
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

export default PrivacyPolicyPage;