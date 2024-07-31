import _ from "lodash";
import { icons } from "@/components/Base/Lucide";

export interface Category {
  name: string;
  icon: keyof typeof icons;
  tags: string[];
  slug: string;
  isActive: boolean;
}

const fakers = {
  fakeCategories() {
    const categories: Array<Category> = [
      {
        name: "Boxing",
        icon: "Laptop",
        tags: ["Gadgets", "Tech", "Electrical"],
        slug: "electronics",
        isActive: true,
      },
      {
        name: "Racing",
        icon: "Shirt",
        tags: ["Apparel", "Fashion", "Style"],
        slug: "clothing",
        isActive: true,
      },
      {
        name: "Swimming",
        icon: "DoorOpen",
        tags: ["Decor", "Furniture", "Outdoor"],
        slug: "home-and-garden",
        isActive: false,
      },
      {
        name: "Racing",
        icon: "Book",
        tags: ["Reading", "Literature", "Knowledge"],
        slug: "books",
        isActive: true,
      },
      {
        name: "Boxing",
        icon: "Trophy",
        tags: ["Fitness", "Recreation", "Nature"],
        slug: "sports-and-outdoors",
        isActive: true,
      },
      {
        name: "Dog racing",
        icon: "Gamepad2",
        tags: ["Play", "Entertainment", "Fun"],
        slug: "toys-and-games",
        isActive: true,
      },
      {
        name: "Music",
        icon: "VenetianMask",
        tags: ["Beauty", "Personal Hygiene", "Self-care"],
        slug: "beauty-and-personal-care",
        isActive: true,
      },
      {
        name: "Wrestling",
        icon: "Armchair",
        tags: ["Home Decor", "Interior", "Comfort"],
        slug: "furniture",
        isActive: true,
      },
      {
        name: "Music",
        icon: "Gem",
        tags: ["Accessories", "Ornaments", "Luxury"],
        slug: "jewelry",
        isActive: true,
      },
      {
        name: "Dog racing",
        icon: "Cookie",
        tags: ["Food", "Groceries", "Consumables"],
        slug: "food-and-grocery",
        isActive: true,
      },
    ];
    return _.shuffle(categories);
  },
};

export default fakers;
