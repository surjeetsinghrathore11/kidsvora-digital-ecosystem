
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Heart, Book, User } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Legal Documentation",
      description: "Birth certificates, passport applications, Aadhaar registration, and legal consultation services.",
      features: ["Birth Certificate Support", "Passport Applications", "Legal Consultations", "Adoption Documentation"],
      color: "purple"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Parental Support",
      description: "Comprehensive courses, counselling, and therapy sessions for parents and expecting mothers.",
      features: ["Parental Courses", "Pre/Post Birth Counselling", "Diet & Exercise Planning", "Baby Planning Checklist"],
      color: "pink"
    },
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Kids Testing & Screening",
      description: "Professional IQ testing, development assessments, and psychological evaluations for children.",
      features: ["IQ Testing & Reports", "Development Quotient Tests", "Reflex & Impulse Tests", "Kids Screening"],
      color: "blue"
    },
    {
      icon: <Book className="w-8 h-8 text-green-600" />,
      title: "Education & Therapy",
      description: "Brain mapping, experiential learning, and specialized therapies for comprehensive child development.",
      features: ["Brain Mapping Modules", "Aptitude Testing", "Cleft Lip/Palate Support", "Genetic Analysis"],
      color: "green"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for every aspect of your child's development and your parenting journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-${service.color}-500 mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className={`w-full border-${service.color}-300 text-${service.color}-600 hover:bg-${service.color}-50`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
