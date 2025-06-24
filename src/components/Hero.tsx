
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Complete
              </span>
              <br />
              <span className="text-gray-800">
                Parenting Ecosystem
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl">
              From newborn care to teenage development - everything you need for your child's journey from 0 to 14 years. Products, legal support, education, and expert guidance all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg"
              >
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-75"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl mb-3"></div>
                    <h3 className="font-semibold text-purple-800">Products</h3>
                    <p className="text-sm text-purple-600">Baby care essentials</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-4">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl mb-3"></div>
                    <h3 className="font-semibold text-pink-800">Legal</h3>
                    <p className="text-sm text-pink-600">Documentation help</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl mb-3"></div>
                    <h3 className="font-semibold text-blue-800">Education</h3>
                    <p className="text-sm text-blue-600">Learning support</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl mb-3"></div>
                    <h3 className="font-semibold text-green-800">Health</h3>
                    <p className="text-sm text-green-600">Testing & screening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
