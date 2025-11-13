import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Life Coach Pro</title>
        <meta name="description" content="Learn about Life Coach Pro's qualifications, experience, and patient-centered approach to healthcare." />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <About />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
