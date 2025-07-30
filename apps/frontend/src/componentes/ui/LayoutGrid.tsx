"use client";
import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: ReactNode;
  className: string;
  thumbnail: string;
  alt?: string;
};

interface LayoutGridProps {
  cards: Card[];
}

export const LayoutGrid = ({ cards }: LayoutGridProps) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto relative">
      {cards.map((card) => (
        <div
          key={card.id}
          className={cn("cursor-pointer transition-transform duration-300 hover:scale-105", card.className)}
          onClick={() => handleClick(card)}
        >
          <img
            src={card.thumbnail}
            alt={card.alt ?? "Cliente"}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      ))}

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl p-6 max-w-xl w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>{selected.content ?? null}</div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
