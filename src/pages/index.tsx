import Image from "next/image";
import { Inter } from "next/font/google";
import MyHeader from "@/components/own/header/header";
import MiddleObj from "@/components/own/middle/MiddleObj";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ marginLeft: "2rem" }}>
      <MyHeader />
      <div style={{ marginTop: "50px" }}>
        <MiddleObj />
      </div>
    </div>
  );
}
