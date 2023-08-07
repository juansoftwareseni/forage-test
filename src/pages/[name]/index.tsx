import PrivateLayout from "@/layouts/PrivateLayout";
import DetailPage from "@/views/DetailPage";
import React from "react";

function Detail() {
  return (
    <div>
      <DetailPage />
    </div>
  );
}
Detail.getLayout = function getLayout(page: any) {
  return <PrivateLayout>{page}</PrivateLayout>;
};
export default Detail;
