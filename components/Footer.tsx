export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Polymarq</h3>
            <p className="text-gray-400 mb-4">
              Building the intelligence layer for real-world systems.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              {/* <li><a href="#features" className="hover:text-white">Features</a></li> */}
              <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
              <li><a href="https://pricing.polymarq.com/" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 l text-gray-400">
              <li><a href="#about-us" className="hover:text-white">About</a></li>
              {/* <li><a href="#" className="hover:text-white">Careers</a></li> */}
              <li><a href="#about-us" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {/* <li><a href="#" className="hover:text-white">Documentation</a></li> */}
              <li><a href="/blogs/polymarq-waste-management-blog" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Polymarq. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
