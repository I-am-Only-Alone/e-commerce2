import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Bags = () => {
  const [prevLocation] = useState("");

  return (
    <div className="max-w-container mx-auto">
      <Breadcrumbs title="Bags" prevLocation={prevLocation} />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Bags;
