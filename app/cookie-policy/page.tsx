import React from 'react';

const CookiePolicyPage = () => {
  const sections = [
    {
      title: "What are Cookies?",
      content: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site."
    },
    {
      title: "How We Use Cookies",
      content: "We use cookies for essential purposes, to enhance performance and functionality, for analytics and customization, and for advertising."
    },
    {
      title: "Third-Party Cookies",
      content: "In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on."
    },
    {
      title: "Your Choices Regarding Cookies",
      content: "If you do not wish to accept cookies from us, you should instruct your browser to refuse cookies from our website. Most web browsers allow you to manage cookies through their settings."
    },
    {
      title: "Changes to This Cookie Policy",
      content: "We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this Cookie Policy, please contact us by visiting our contact page."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 lg:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Cookie Policy</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use. This policy is part of Sharp Transportation's Privacy Policy.
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

export default CookiePolicyPage;