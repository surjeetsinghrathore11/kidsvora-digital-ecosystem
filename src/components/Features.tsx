
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Age-Specific Solutions",
      description: "Tailored products and services for every stage from 0-14 years",
    },
    {
      title: "Expert Consultations",
      description: "Connect with certified doctors, lawyers, and child psychologists",
    },
    {
      title: "Secure & Compliant", 
      description: "HIPAA compliant with end-to-end encryption for all sensitive data",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your parenting needs",
    },
    {
      title: "Multilingual Platform",
      description: "Available in English, Hindi, and Marathi for better accessibility",
    },
    {
      title: "Evidence-Based Content",
      description: "All recommendations backed by pediatric research and best practices",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">KIDSVORA</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built by parents, for parents - with the expertise and care your family deserves
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
