import React from "react";
import Introduce from "./components/Introduce";
import CustomerProblem from "./components/CustomerProblem";
import Interface from "./components/Interface";
import Related from "./components/Related";
import Summary from "./components/Summary";
import Banner from "./components/Banner";
import ContactUsNowSection from "../../home/components/sections/ContactUsNowSection";

const ProjectDetailPage = () => {
  return (
    <div className="flex flex-col gap-9 xl:gap-12">
      <Introduce />
      <CustomerProblem />
      <Banner />
      <Interface />
      <Summary />
      <Related />
      <ContactUsNowSection />
    </div>
  );
};

export default ProjectDetailPage;
