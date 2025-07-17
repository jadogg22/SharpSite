import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";

const faqs = [
  {
    question: "What types of freight do you transport?",
    answer: "We specialize in refrigerated and dry van freight, but we can accommodate a wide range of shipping needs. Please contact us for more information."
  },
  {
    question: "What is your service area?",
    answer: "Sharp Transportation operates across the entire continental United States and Canada. Our primary service areas are the Western and Midwestern states."
  },
  {
    question: "How can I track my shipment?",
    answer: "Shippers can track their shipments in real-time through our online portal. You will receive a tracking number and login credentials when you book a shipment with us."
  },
  {
    question: "What are the requirements to become a driver for Sharp?",
    answer: "We require our drivers to have a valid Class A CDL, a clean driving record, and at least two years of verifiable over-the-road experience. You can find more details and apply on our employment page."
  },
  {
    question: "Do you offer benefits for drivers?",
    answer: "Yes, we offer a comprehensive benefits package including medical, dental, 401K with company match, free Teladoc, and life insurance. Benefits start after 60 days of employment."
  },
  {
    question: "How often do drivers get home?",
    answer: "We offer flexible scheduling options designed to maximize your home time. Specific home time varies based on route and driver preference, but we prioritize getting our drivers home regularly."
  }
];

const FaqPage = () => (
  <>
    <MyHeader />
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Have questions? We have answers. Here are some of the most common questions we receive.
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
    <MyFooter />
  </>
);

export default FaqPage;