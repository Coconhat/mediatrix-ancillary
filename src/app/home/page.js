import Footer from "../components/Footer";
import HomePage from "../sections/HomePage";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add padding-top to account for the fixed Navbar */}
      <main className="flex-grow pt-24 pb-16">
        {" "}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
