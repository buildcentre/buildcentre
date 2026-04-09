import Header from "~/components/Header";
import type { Route } from "./+types/home";

import Swiper from "~/components/Swiper";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Home" }];
}

export default function Home() {
  return (
    <>
      <Header />
      <Swiper />
    </>
  );
}
