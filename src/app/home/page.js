import Footer from "../components/Footer";
import HomePage from "../sections/HomePage";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
