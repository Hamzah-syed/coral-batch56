import { Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const links = [
  {
    name: "Jewelry & Accessories",
    link: "/shop",
  },
  {
    name: "Clothing & Shoes",
    link: "/shop",
  },
  {
    name: "Home & Living",
    link: "/shop",
  },
  {
    name: "Wedding & Party",
    link: "/shop",
  },
  {
    name: "Toys & Entertainment",
    link: "/shop",
  },
  {
    name: "Art & Collectibles",
    link: "/shop",
  },
  {
    name: "Craft Supplies & Tools",
    link: "/shop",
  },
];

const Header = () => {
  return (
    <div>
      {/* TOP HEADER */}
      <div className="flex justify-between wrapper py-5 border-b items-center">
        <Search />
        <Image src="/logo.png" alt="logo" width={180} height={34} />
        <div className="flex gap-x-4">
          <div className="flex">
            <User />
            <h3>Accounts</h3>
          </div>
          <div className="flex">
            <ShoppingBag />
            <h3>Shpping</h3>
          </div>
        </div>
      </div>

      {/* Nav Buttons */}
      <ul className="flex justify-between gap-x-4 wrapper py-4">
        {links.map((item) => {
          return (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
