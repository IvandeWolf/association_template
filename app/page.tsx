import Header from "@/app/header.tsx";
import Banner from "@/app/banner.tsx";
import Welcome from "@/app/welcome.tsx";
import WhatWeDo from "@/app/what-we-do.tsx";
import Activities from "@/app/activities.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Welcome />
      <WhatWeDo />
      <Activities />
    </>
  );
}
