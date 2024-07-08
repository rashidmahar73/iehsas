import { Routes, Route } from "react-router-dom";
import { AboutUs, FAQ, Home, OurPeople } from "../pages";
import { navPaths } from "../utils/constants";
import { Testimonials } from "../pages/testimonials";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={navPaths.about} element={<AboutUs />} />
      <Route path={navPaths.ourPeople} element={<OurPeople />} />
      <Route path={navPaths.testimonials} element={<Testimonials />} />
      <Route path={navPaths.FAQ} element={<FAQ/>} />
    </Routes>
  );
};

export default Routing;
