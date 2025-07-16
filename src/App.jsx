import Layout from "./components/Layout";
import LogoSection from "./components/LogoSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <LogoSection />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
