import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Layout2 from "./components/Layout/Layout2";
import Layout3 from "./components/Layout/Layout3";
import CaseStudyDetailsPage from "./components/Pages/CaseStudyDetailsPage";
import ErrorPage from "./components/Pages/ErrorPage";
import Home from "./components/Pages/Home";
import PortfolioDetailsPage from "./components/Pages/PortfolioDetailsPage";
import PortfolioPage from "./components/Pages/PortfolioPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import Shop from "./components/Pages/Shop";
import Cart from "./components/Pages/Shop/Cart";
import Checkout from "./components/Pages/Shop/Checkout";
import ProductDetails from "./components/Pages/Shop/ProductDetails";
import Success from "./components/Pages/Shop/Success";
import Wishlist from "./components/Pages/Shop/Wishlist";
import TeamDetailsPage from "./components/Pages/TeamDetailsPage";
import TeamPage from "./components/Pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DigitalAgencyPage from "./pages/DigitalAgencyPage";
import ServicePage from "./pages/ServicePage";

function App() {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);
   return (
      <Routes>
         <Route path="/" element={<Layout darkMode />}>
            <Route path="home" element={<DigitalAgencyPage darkMode />} />
            <Route path="about" element={<AboutPage darkMode />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="service/:serviceDetailsId" element={<ServiceDetailsPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/:portfolioDetailsId" element={<PortfolioDetailsPage />} />
            <Route path="case-study-details" element={<CaseStudyDetailsPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="team/:teamDetailsId" element={<TeamDetailsPage />} />
            <Route path="contact" element={<ContactPage />} />
         </Route>
         <Route path="/" element={<Layout2 darkMode />}>
            <Route index element={<DigitalAgencyPage darkMode />} />
         </Route>
         <Route path="/" element={<Layout3 darkMode />}>
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:productId" element={<ProductDetails />} />
            <Route path="shop/cart" element={<Cart />} />
            <Route path="shop/checkout" element={<Checkout />} />
            <Route path="shop/success" element={<Success />} />
            <Route path="shop/wishlist" element={<Wishlist />} />
         </Route>

         {/* Start Light Mode */}
         <Route path="/light/" element={<Layout />}>
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="service/:serviceDetailsId" element={<ServiceDetailsPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/:portfolioDetailsId" element={<PortfolioDetailsPage />} />
            <Route path="case-study-details" element={<CaseStudyDetailsPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="team/:teamDetailsId" element={<TeamDetailsPage />} />
            <Route path="contact" element={<ContactPage />} />
         </Route>
         <Route path="/light/" element={<Layout2 />}>
            <Route index element={<Home />} />
         </Route>
         <Route path="/light/" element={<Layout3 />}></Route>
         {/* End Light Mode */}
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
}

export default App;
