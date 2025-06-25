
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-gray-800 pt-12 pb-6">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-sm">
              Dedicated to providing high-quality services and products to our customers. 
              Mission is to make a positive impact in our community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-600 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/disha-runwal-663131234/" target="_blank" rel="noopener noreferrer"className="hover:text-blue-700 transition-colors"><FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Experience</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Jamkhandi, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <a href="mailto:info@example.com" className="hover:text-blue-600 transition-colors">
                  disharunwal111@gmail.com
                </a>
              </div>
             
            </div>
          </div>

          {/* Get In Touch */}
<div className="space-y-4">
  <h3 className="text-xl font-bold">Get In Touch</h3>
  <p className="text-sm">Ready to start your project?</p>
  <a 
    href="/contact" 
    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
  >
    Contact 
  </a>
</div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-400 text-center text-sm">
          <p>&copy; {currentYear}  All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;