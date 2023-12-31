import avatar from "/avatar.png?url";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../../utils/useMediaQuery";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav className="realtive mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg:mx-32">
      <div className="flex flex-1 items-center">
        <img src={avatar} alt="Profile Picture" />
        <div>
          {/* TITLE */}
          <h1 className="text-3xl font-bold ml-8">
            <a href="/">Hua.</a>
          </h1>
        </div>
      </div>

      {matches && (
        <div className="flex gap-12">
          <a className="text-black hover:text-orange-600" href="/">
            Home
          </a>
          <a className="text-black hover:text-orange-600" href="/gallery">
            Gallery
          </a>
          <a className="text-black hover:text-orange-600" href="/services">
            Services
          </a>
          <a className="text-black hover:text-orange-600" href="/contact">
            Contact
          </a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <div className="fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center">
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col gap-24 text-lg"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/gallery">
              Gallery
            </motion.a>
            <motion.a variants={itemMotion} href="/services">
              Services
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a>
          </motion.div>
        </div>
      )}
    </nav>
  );
}
