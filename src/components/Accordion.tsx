'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from '@/lib/motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`card-base overflow-hidden transition-all duration-300 ${
              isOpen ? 'ring-1 ring-accent/20' : ''
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-semibold text-base sm:text-lg leading-snug text-primary group-hover:text-accent-deep transition-colors pr-2">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`shrink-0 mt-1 text-primary/40 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-accent' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="h-px bg-primary/[0.06] mb-4" />
                    <p className="text-sm sm:text-base leading-relaxed text-primary-light">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
