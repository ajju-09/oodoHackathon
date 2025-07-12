import React from "react";

const categories = [
  {
    title: "Tops",
    items: ["T-shirts", "Shirts", "Blouses", "Crop Tops"],
  },
  {
    title: "Footwear",
    items: ["Sneakers", "Sandals", "Formal Shoes", "Boots"],
  },
  {
    title: "Accessories",
    items: ["Bags & Purses", "Belts", "Jewelry", "Scarves & Hats"],
  },
  {
    title: "Bottoms",
    items: ["Jeans", "Trousers", "Shorts", "Skirts"],
  },
  {
    title: "Dresses & Jumpsuits",
    items: ["Casual Dresses", "Jumpsuits", "Party Dresses"],
  },
  {
    title: "Outerwear",
    items: ["Jackets", "Coats", "Hoodies", "Sweaters"],
  },
];

const Categories = () => {
  return (
    <section className="min-h-screen w-full px-4 py-10 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
        Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-md hover:shadow-[#4cc9f0] transition hover:-translate-y-1 duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-xl font-semibold text-[#7b2cbf]">
                {category.title}
              </h2>
            </div>
            <ul className="text-gray-300 space-y-1 list-disc list-inside pl-2">
              {category.items.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition duration-200 text-[#e0aaff]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
