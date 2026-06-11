import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Details - AS Traders',
  description: 'View detailed product information and submit inquiry for bulk orders.',
};

// Sample product data - in production, this would come from database
const product = {
  id: '1',
  name: 'Premium Ballpoint Pens (Box of 50)',
  category: 'writing-supplies',
  price: 450,
  minOrder: 10,
  description: 'High-quality ballpoint pens with smooth ink flow. Perfect for offices, schools, and retail. Available in blue, black, and red ink colors.',
  specifications: {
    'Pack Size': '50 pens per box',
    'Ink Color': 'Blue, Black, Red',
    'Tip Size': '1.0mm',
    'Material': 'Plastic barrel with metal tip',
    'Usage': 'Office, School, Home',
  },
  images: ['/images/products/pens-1.jpg', '/images/products/pens-2.jpg'],
};

const categoryNameMap: Record<string, string> = {
  'writing-supplies': 'Writing Supplies',
  'school-stationery': 'School Stationery',
  'office-supplies': 'Office Supplies',
  'paper-products': 'Paper Products',
  'art-craft': 'Art & Craft Materials',
  'educational-supplies': 'Educational Supplies',
};

export default function ProductDetailsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-500 hover:text-primary-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link href="/products" className="text-gray-500 hover:text-primary-600">Products</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-medium">{product.name}</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div>
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">Main Product Image</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-200 h-24 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-75">
                      <span className="text-gray-400 text-xs">Image {i}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <span className="text-sm text-primary-600 font-medium uppercase">
                  {categoryNameMap[product.category]}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Price:</span>
                    <span className="text-2xl font-bold text-primary-600">₹{product.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Minimum Order:</span>
                    <span className="font-semibold">{product.minOrder} boxes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Availability:</span>
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/inquiry"
                    className="block w-full bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
                  >
                    Request Bulk Quote
                  </Link>
                  <a
                    href="https://wa.me/919876543210?text=I'm interested in this product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                  >
                    Inquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-gray-700 w-1/3">{key}</td>
                        <td className="px-6 py-4 text-gray-600">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bulk Pricing Info */}
            <div className="mt-12 bg-primary-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Bulk Pricing Benefits</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Special discounts on orders above 50 units
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Free shipping on orders above ₹10,000
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Customized packaging available for large orders
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Flexible payment terms for institutional buyers
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Products CTA */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for More Products?</h2>
            <p className="text-gray-600 mb-6">Browse our complete catalog of wholesale stationery items</p>
            <Link
              href="/products"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              View All Products
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
