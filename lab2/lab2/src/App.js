import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import BookingSection from "./components/BookingSection";

function App() {
  const menuItems = [
    {
      title: "Margherita Pizza",
      price: "$24.00",
      originalPrice: "$40.00",
      tag: "SALE",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      description: "Classic tomato, mozzarella and basil.",
    },
    {
      title: "Mushroom Pizza",
      price: "$25.00",
      originalPrice: null,
      tag: "",
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
      description: "Fresh mushrooms with creamy cheese.",
    },
    {
      title: "Hawaiian Pizza",
      price: "$30.00",
      originalPrice: null,
      tag: "NEW",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      description: "Sweet pineapple and savory ham.",
    },
    {
      title: "Pesto Pizza",
      price: "$30.00",
      originalPrice: "$50.00",
      tag: "SALE",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
      description: "Basil pesto, mozzarella and cherry tomatoes.",
    },
  ];

  return (
    <div className="bg-dark text-white min-vh-100">
      <Navbar />
      <Hero />
      <MenuSection items={menuItems} />
      <BookingSection />
    </div>
  );
}

export default App;
