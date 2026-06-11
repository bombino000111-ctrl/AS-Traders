import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'About Us - AS Traders',
  description: 'Learn about AS Traders, your trusted wholesale stationery supplier serving schools, offices, retailers, and institutions.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">About AS Traders</h1>
            <p className="text-xl text-primary-100">Your Trusted Wholesale Stationery Partner</p>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  AS Traders has been a leading wholesale stationery supplier for over 15 years, 
                  dedicated to providing high-quality stationery products at competitive prices. 
                  We serve a diverse clientele including schools, colleges, corporate offices, 
                  retail stores, and government institutions.
                </p>
                <p className="text-gray-700 mb-4">
                  Our commitment to quality, reliability, and customer satisfaction has made us 
                  a trusted partner for bulk stationery requirements across the region.
                </p>
                <p className="text-gray-700">
                  With an extensive product range covering all major stationery categories, 
                  we ensure one-stop shopping for all your stationery needs.
                </p>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Company Image</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Mission</h3>
                <p className="text-gray-700">
                  To provide exceptional quality stationery products at wholesale prices, 
                  ensuring customer satisfaction through reliable service, timely delivery, 
                  and competitive pricing. We aim to be the preferred choice for all bulk 
                  stationery requirements.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">Our Vision</h3>
                <p className="text-gray-700">
                  To become the most trusted and reliable wholesale stationery supplier in the region, 
                  known for our extensive product range, outstanding customer service, and commitment 
                  to quality. We envision building long-term partnerships with our customers based on 
                  trust and mutual growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Customers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Who We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🏫</div>
                <h3 className="font-semibold text-lg mb-2">Schools & Colleges</h3>
                <p className="text-gray-600 text-sm">
                  Complete stationery solutions for educational institutions of all sizes
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="font-semibold text-lg mb-2">Corporate Offices</h3>
                <p className="text-gray-600 text-sm">
                  Office supplies and stationery for businesses and organizations
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🏪</div>
                <h3 className="font-semibold text-lg mb-2">Retailers</h3>
                <p className="text-gray-600 text-sm">
                  Wholesale products for stationery shops and retail stores
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="font-semibold text-lg mb-2">Institutions</h3>
                <p className="text-gray-600 text-sm">
                  Bulk supplies for government and private institutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Contact us today for all your wholesale stationery needs
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
