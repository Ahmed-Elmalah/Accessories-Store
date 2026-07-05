import React from "react";
import HeroSection from "../../components/user/home/HeroSection";
import CuratedCollections from "../../components/user/home/CuratedCollections";
import FeaturedProducts from "../../components/user/home/FeaturedProducts";
import CustomerReviews from "../../components/user/home/CustomerReviews";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CuratedCollections />
      <FeaturedProducts />
      <CustomerReviews />
    </>
  );
}
