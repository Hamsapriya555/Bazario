import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex space-x-4 p-4 bg-gray-900 border-b border-white">
      {["Home", "List Product", "Apply", "Onboard"].map((item) => (
        <motion.div
          key={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar;
