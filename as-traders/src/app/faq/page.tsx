import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ - AS Traders',
  description: 'Frequently asked questions about AS Traders wholesale stationery products and services.',
};

const faqs = [
  {
    question: 'What is the minimum order quantity?',
    answer: 'Minimum order quantities vary by product. Typically, we require a minimum of 5-10 units per product for wholesale orders. For specific products, please check the product details or contact us directly.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes! We offer competitive bulk discounts based on order quantity. The more you order, the better the discount. Contact us for a custom quote based on your requirements.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including bank transfer, cheque, UPI, and cash for local orders. For institutional buyers, we also offer credit facilities subject to approval.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery time depends on your location and order size. Local deliveries are typically completed within 2-3 business days. For distant locations, it may take 5-7 business days. Bulk orders may require additional processing time.',
  },
  {
    question: 'Do you provide product samples?',
    answer: 'Yes, we can provide samples for bulk orders. Sample charges may apply depending on the product value, which can be adjusted against your final order.',
  },
  {
    question: 'Can I customize products with my logo?',
    answer: 'Yes, we offer customization services for bulk orders. This includes logo printing, custom packaging, and branding. Minimum quantities apply for customized orders.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns for damaged or defective products within 7 days of delivery. Please contact us immediately if you receive any damaged items. Returns for change of mind are subject to our approval.',
  },
  {
    question: 'Do you supply to schools and institutions?',
    answer: 'Absolutely! We specialize in supplying to educational institutions, corporate offices, government organizations, and retail stores. We understand the unique requirements of institutional buyers.',
  },
  {
    question: 'How can I place an order?',
    answer: 'You can place an order through our website inquiry form, by calling us directly, via WhatsApp, or by visiting our office. Our sales team will guide you through the process.',
  },
  {
    question: 'Do you provide GST invoices?',
    answer: 'Yes, we provide proper GST invoices for all orders. Please provide your GST number when placing the order if you need a GST invoice.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-100">Find answers to common questions about our products and services</p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <span className="text-primary-600 group-open:rotate-180 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Feel free to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Contact Us
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
