
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: ["Newborn Kits", "Baby Care", "Clothing", "First Aid", "Educational Materials"]
    },
    {
      title: "Services", 
      links: ["Legal Documentation", "Parental Support", "Testing & Screening", "Consultations", "Therapies"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "FAQ", "Shipping Info", "Returns"]
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Privacy Policy", "Terms of Service", "Blog"]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                KIDSVORA
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Your complete parenting ecosystem - supporting families from pregnancy to teenage years with products, services, and expert guidance.
            </p>
            
            {/* Newsletter signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2024 KIDSVORA. All rights reserved.</p>
              <p className="mt-1">Supporting families across India with love and care.</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
