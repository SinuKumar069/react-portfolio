import { useEffect } from "react";
import { motion } from "framer-motion";

const HamburgerMenu = ({ closeMenu }) => {
  useEffect(() => {
    // Prevent background scrolling when the menu is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const menuVariants = {
    hidden: { x: "-100%" },
    visible: { x: "0%", transition: { duration: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 },
    }),
  };

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "ProjectPage", href: "#ProjectPage" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sinu-kumar-6788902a8/",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/SinuKumar069",
      external: true,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={closeMenu}
      ></div>

      {/* Sliding Menu */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        className="absolute top-0 left-0 w-3/4 max-w-sm h-full bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white shadow-lg p-6 space-y-6"
      >
        {menuItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : "_self"}
            rel={item.external ? "noopener noreferrer" : undefined}
            variants={itemVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            className="block text-sm font-medium hover:text-blue-400 transition-colors duration-300"
            onClick={closeMenu}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default HamburgerMenu;
