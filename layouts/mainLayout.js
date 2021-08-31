import Header from "../components/frontend/header/header";
import Footer from "../components/frontend/footer/footer";

// import Contact from "../components/frontend/contact/index";
import Contact from "../components/frontend/contact/index";
import SideNav from "../components/frontend/header/side-nav";

export default function ManinLayout({ children }) {
  // notice that for fixed header className="mt-32"

  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
      <Contact />
    </div>
  );
}
