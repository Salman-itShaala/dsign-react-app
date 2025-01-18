import React from "react";
import dashboardImage from "../../public/images/dashboard.png";

const Dashboard = () => {
  return (
    <section className="h-screen flex justify-center items-center w-full p-4">
      <img src={dashboardImage} alt="" className="rounded-[60px] w-3/4" />
    </section>
  );
};

export default Dashboard;
