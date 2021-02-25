import { v4 as uuidv4 } from "uuid";
function MakeProducts() {
  return [
    {
      name: "T-Shirt",
      emoji: "👕",
      id: uuidv4(),
      price: 21.18
    },
    {
      name: "Sandals",
      emoji: "👡",
      id: uuidv4(),
      price: 7.42
    },
    {
      name: "Animal Figurine",
      emoji: "🐼",
      id: uuidv4(),
      price: 16
    },
    {
      name: "Chocolate Bar",
      emoji: "🍫",
      id: uuidv4(),
      price: 5.3
    },
    {
      name: "Popcorn",
      emoji: "🍿",
      id: uuidv4(),
      price: 8.5
    }
  ];
}

export default MakeProducts;
