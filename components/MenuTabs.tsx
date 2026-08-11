"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

export type MenuPriceTier = {
  label: string;
  price: string;
};

export type MenuDish = {
  nameVi: string;
  nameEn?: string;
  note?: string;
  priceTiers?: MenuPriceTier[];
};

export type MenuSubcategory = {
  titleVi: string;
  titleEn?: string;
  dishes: MenuDish[];
};

export type MenuCategoryGroup = {
  title: string;
  subcategories: MenuSubcategory[];
};

export default function MenuTabs({ categories }: { categories: MenuCategoryGroup[] }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(0);

  const activeCategory = categories[activeTab];
  if (!activeCategory) return null;

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <button
            key={category.title}
            type="button"
            onClick={() => {
              setActiveTab(index);
              setOpenSubIndex(0);
            }}
            className={`px-6 py-3 text-xs md:text-sm uppercase tracking-widest transition-colors ${
              index === activeTab
                ? "bg-primary text-on-primary"
                : "bg-surface text-on-surface-variant hover:bg-primary/10"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-3xl">
        {activeCategory.subcategories.map((sub, index) => {
          const isOpen = openSubIndex === index;
          return (
            <div key={sub.titleVi} className="border-b border-outline-variant">
              <button
                type="button"
                onClick={() => setOpenSubIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-serif text-xl text-primary md:text-2xl">
                  {sub.titleVi}
                  {sub.titleEn && (
                    <span className="ml-2 text-xs italic text-on-surface-variant md:text-sm">
                      ({sub.titleEn})
                    </span>
                  )}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="space-y-5 pb-8">
                  {sub.dishes.map((dish) => (
                    <div key={dish.nameVi}>
                      <p className="text-on-surface">
                        {dish.nameVi}
                        {dish.nameEn && (
                          <span className="ml-1 text-sm italic text-on-surface-variant">
                            ({dish.nameEn})
                          </span>
                        )}
                        {dish.note && (
                          <span className="ml-2 align-middle text-[10px] uppercase tracking-wide text-secondary">
                            {dish.note}
                          </span>
                        )}
                      </p>
                      {dish.priceTiers && dish.priceTiers.length > 0 && (
                        <div className="mt-2 space-y-1 pl-4">
                          {dish.priceTiers.map((tier) => (
                            <div
                              key={tier.label}
                              className="flex items-end gap-4 text-sm text-on-surface-variant"
                            >
                              <span>{tier.label}</span>
                              <span className="hidden flex-grow border-b border-dotted border-outline-variant sm:block" />
                              <span className="whitespace-nowrap text-primary">{tier.price}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
