import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, PenTool, Rocket } from "lucide-react";
import { motion } from "framer-motion";

// Import images from src/assets/bazar/
import applyImg from "../bazar/apply.png";
import listImg from "../bazar/list.png";
import onboardImg from "../bazar/onboard.png";


const Bazar = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "List Product",
      description: "Add your product to our marketplace.",
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      image: listImg,
      link: "/bazar/list-product",
    },
    {
      title: "Apply",
      description: "Apply to sell your products on our platform.",
      icon: <PenTool className="w-8 h-8 text-blue-400" />,
      image: applyImg,
      link: "/bazar/apply",
    },
    {
      title: "Onboard",
      description: "Complete onboarding and start selling now.",
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      image: onboardImg,
      link: "/bazar/onboard",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e1217] text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Bazar Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(feature.link)}
          >
            <Card className="rounded-2xl p-4 bg-[#1b1f24] text-center hover:shadow-xl transition-shadow">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-36 object-cover rounded-lg mb-4"
              />
              <CardContent>
                <div className="flex flex-col items-center gap-2 mb-2">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  {feature.description}
                </p>
                <Button variant="secondary">Explore</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Bazar;
