const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 pt-16 pb-8 px-6 md:px-20 text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">BLOGI</h2>
            <p className="text-gray-500 text-sm">
              © 2026 Blogi. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
              <li className="hover:text-blue-600 cursor-pointer">Features</li>
              <li className="hover:text-blue-600 cursor-pointer">Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Careers</li>
              <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-blue-600 cursor-pointer">Terms</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Cookie Policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Get Started</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get updates and latest blog insights.
            </p>
            <button className="bg-orange-500 text-white px-5 py-2 rounded font-semibold ">
              Download Now
            </button>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>Made with by CD</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-blue-600 cursor-pointer">Facebook</span>
            <span className="hover:text-blue-600 cursor-pointer">Twitter</span>
            <span className="hover:text-blue-600 cursor-pointer">LinkedIn</span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
