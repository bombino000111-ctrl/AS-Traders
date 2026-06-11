export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">AS Traders</h3>
            <p className="text-gray-400 text-sm">
              Your trusted wholesale stationery supplier for schools, offices, retailers, and institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/inquiry" className="hover:text-white transition">Wholesale Inquiry</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/products?category=writing-supplies" className="hover:text-white transition">Writing Supplies</a></li>
              <li><a href="/products?category=school-stationery" className="hover:text-white transition">School Stationery</a></li>
              <li><a href="/products?category=office-supplies" className="hover:text-white transition">Office Supplies</a></li>
              <li><a href="/products?category=paper-products" className="hover:text-white transition">Paper Products</a></li>
              <li><a href="/products?category=art-craft" className="hover:text-white transition">Art & Craft</a></li>
              <li><a href="/products?category=educational-supplies" className="hover:text-white transition">Educational Supplies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 123 Business Street, City - 400001</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@astraders.com</li>
              <li>🕒 Mon-Sat: 9AM - 7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AS Traders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
