import Header from "../components/frontend/header/header";
import Footer from "../components/frontend/footer/footer";

// import Contact from "../components/frontend/contact/index";
import Contact from "../components/frontend/contact/index";

import DashboardHeader from "../components/dashboard/header/dashboard-header";

export default function ManinLayout({ children, dashboard }) {
  // notice that for fixed header className="mt-32"

  return (
    <div className="relative">
      {dashboard ? (
        <>
          <DashboardHeader />
          {children}
        </>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
          <Contact />
        </>
      )}
    </div>
  );
}
