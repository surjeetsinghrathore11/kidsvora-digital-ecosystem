
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export const Products = () => {
  const productCategories = [
    {
      title: "Newborn Baby Kit",
      description: "Complete starter kit for newborns with all essentials",
      price: "₹2,999",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=200&fit=crop&crop=center",
      items: ["Diapers", "Wipes", "Body wash", "Blanket"]
    },
    {
      title: "First Aid Kit",
      description: "Child-safe first aid essentials for home use",
      price: "₹899",
      image: "https://images.unsplash.com/photo-1603398938113-d9d9a6a8c2d8?w=300&h=200&fit=crop&crop=center",
      items: ["Thermometer", "Bandages", "Antiseptic", "Instructions"]
    },
    {
      title: "Baby Formula & Care",
      description: "Premium formula milk and care products",
      price: "₹1,499",
      image: "https://images.unsplash.com/photo-1555169062-013468b47731?w=300&h=200&fit=crop&crop=center",
      items: ["Formula milk", "Shampoo", "Lotion", "Care guide"]
    },
    {
      title: "Clothing Packs",
      description: "2-pack clothes with accessories for babies",
      price: "₹1,299",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
      items: ["2 Outfits", "Cap", "Socks", "Soft blanket"]
    },
    {
      title: "Educational Kit",
      description: "Learning materials and vaccination charts",
      price: "₹699",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop&crop=center",
      items: ["Guidebook", "Vaccination chart", "Milestones tracker", "Tips"]
    },
    {
      title: "Baby Care Bundle",
      description: "Complete care package for daily needs",
      price: "₹1,799",
      image: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=300&h=200&fit=crop&crop=center",
      items: ["Diapers pack", "Wipes", "Lotion", "Powder"]
    }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Carefully curated baby care essentials and parenting products for every stage of your child's development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {product.title}
                  </CardTitle>
                  <span className="text-2xl font-bold text-purple-600">
                    {product.price}
                  </span>
                </div>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-300 text-purple-600 hover:bg-purple-50 px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
