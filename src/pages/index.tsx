import PrivateLayout from "@/layouts/PrivateLayout";
import Home from "@/views/HomePage";
import React from "react";
import {} from "react-dom";

function HomePage() {
  return (
    <div className="-mt-[2px] text-white">
      <Home />
    </div>
  );
}
HomePage.getLayout = function getLayout(page: any) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default HomePage;
