import Card from "./components/Cards/Card";
import Card2 from "./components/Cards/Card2";
import Card3 from "./components/Cards/Card3";
import Card4 from "./components/Cards/Card4";
import Card5 from "./components/Cards/Card5";
import Navbar from "./components/Navbar/Navbar";
export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#fb9202] to-[#ff4500] w-full min-h-screen">
      <Navbar />
      <div className="bg-gradient-to-r from-[#fb9202] to-[#fd295c] w-full h-2"></div>
      <Card />
      <div className="w-full h-4"></div>
      <Card2 />
      <div className="w-full h-4"></div>
      <Card3 />
      <div className="w-full h-4"></div>
      <Card4 />
      <div className="w-full h-4"></div>
      <Card5 />
    </main>
  );
}
