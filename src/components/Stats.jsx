import React from "react";
import StatCard from "./StatCard";

import shoppingBag from "../../public/images/shopping-bag.svg";
import settingImg from "../../public/images/settings.svg";
import cartImg from "../../public/images/shopping-cart.svg";
import userImg from "../../public/images/users.svg";

const statsArray = [
  {
    imgUrl: shoppingBag,
    num: "80K",
    title: "Buyers",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
  {
    imgUrl: settingImg,
    num: "80K",
    title: "Buyers",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
  {
    imgUrl: cartImg,
    num: "80K",
    title: "Buyers",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
  {
    imgUrl: userImg,
    num: "80K",
    title: "Buyers",
    desc: " Follow a hashtag growth total posts, videos and images.",
  },
];

const Stats = () => {
  return (
    <div className="flex justify-between px-36">
      {statsArray.map((item) => {
        return (
          <StatCard
            imgUrl={item.imgUrl}
            num={item.num}
            title={item.title}
            desc={item.desc}
          />
        );
      })}
    </div>
  );
};

export default Stats;
