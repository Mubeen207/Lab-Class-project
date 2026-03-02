const data = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    brand: "SoundMax",
    category: "electronics",
    price: 59.99,
    currency: "USD",
    stock: 120,
    rating: 4.5,
    features: [
      "Bluetooth 5.3",
      "Noise Cancellation",
      "20-hour Battery Life",
      "Built-in Microphone",
    ],
  },
  {
    id: 2,
    name: "Smart LED TV 55 Inch 4K",
    brand: "VisionPlus",
    category: "electronics",
    price: 499.99,
    currency: "USD",
    stock: 45,
    rating: 4.7,
    features: ["4K Ultra HD", "HDR10", "Android TV", "WiFi & Ethernet"],
  },
  {
    id: 3,
    name: "Gaming Laptop 16GB RAM",
    brand: "TechPro",
    category: "electronics",
    price: 1099.99,
    currency: "USD",
    stock: 30,
    rating: 4.6,
    features: [
      "Intel i7 Processor",
      "16GB RAM",
      "512GB SSD",
      "NVIDIA RTX Graphics",
    ],
  },
  {
    id: 4,
    name: "Smartphone 128GB 5G",
    brand: "NovaTech",
    category: "electronics",
    price: 699.99,
    currency: "USD",
    stock: 85,
    rating: 4.4,
    features: [
      "5G Connectivity",
      "128GB Storage",
      "AMOLED Display",
      "Triple Camera",
    ],
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    brand: "BeatBox",
    category: "electronics",
    price: 89.99,
    currency: "USD",
    stock: 200,
    rating: 4.3,
    features: [
      "Waterproof IPX7",
      "12-hour Playtime",
      "Deep Bass",
      "USB-C Charging",
    ],
  },
];
export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(data);
  } else {
    return res
      .status(404)
      .json({ message: "This methode is not allowed" })
      .send();
  }
}
