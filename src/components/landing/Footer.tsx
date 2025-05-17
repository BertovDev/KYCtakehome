import { motion } from "framer-motion";
import React from "react";

const links = [
  {
    title: "Products",
    links: [
      { label: "Quantum Payments", href: "#" },
      { label: "Neural Trading", href: "#" },
      { label: "Crypto Vault", href: "#" },
      { label: "Financial Analytics", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Security", href: "#" },
      { label: "Compliance", href: "#" },
    ],
  },
];

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="border-t w-full  border-zinc-800 bg-black">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">Cryptiva</span>
            </div>
            <p className="text-sm text-zinc-400">
              Pioneering the future of finance in the digital age.
            </p>
          </motion.div>

          <div className="flex flex-row justify-between  ">
            {links.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * (sectionIndex + 1),
                }}
              >
                <h3 className="mb-4 text-sm font-medium text-white">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-sm text-zinc-400 ">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + linkIndex * 0.1,
                      }}
                    >
                      <motion.a
                        whileHover={{ x: 3, color: "#22d3ee" }}
                        href={link.href}
                        className="hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 border-t  border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center"
        >
          <p className="text-xs text-zinc-500">
            © 2025 Cryptiva. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {["facebook", "twitter", "instagram"].map((social, index) => (
              <motion.a
                key={social}
                whileHover={{ y: -3, color: "#22d3ee" }}
                href="#"
                className="text-zinc-500 hover:text-cyan-400 transition-colors duration-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {social === "facebook" ? (
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  ) : social === "twitter" ? (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
