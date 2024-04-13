"use client";
//import libs
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import icons
import { FaPlus, FaMinus } from "react-icons/fa6";
type FaqProp = {
  faq: Faq;
};
export function FaqCard({ faq }: FaqProp) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  function handleClickFaq() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="bg-white rounded-[5px] p-5 lg:p-8 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <h4 className="font-bold">{faq.question}</h4>
        {isOpen ? (
          <FaMinus
            onClick={handleClickFaq}
            className="text-xl cursor-pointer text-[#525CEB]"
          />
        ) : (
          <FaPlus
            onClick={handleClickFaq}
            className="text-xl cursor-pointer text-[#525CEB]"
          />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm overflow-hidden"
          >
            {faq.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
