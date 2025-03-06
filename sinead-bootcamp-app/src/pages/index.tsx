import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="bg-gray-700 flex flex-grow flex-col items-center justify-center">
        <Button/>
      </main>
      <Footer/>
    </div>
  );
}