import React from "react";
import { FaStar } from "react-icons/fa";
import FadeIn from "../layout/FadeIn";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Eleanor V.",
      text: "The craftsmanship is unparalleled. I receive compliments every time I wear my Lumina Pearl Necklace.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah M.",
      text: "Exceptional quality and the unboxing experience was truly luxurious. Highly recommend LaFleur.",
      rating: 5,
    },
    {
      id: 3,
      name: "Victoria C.",
      text: "A beautiful addition to my collection. The Ethereal Gold Ring is stunning and fits perfectly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-[90rem] mx-auto">
      <FadeIn delay={0}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline text-white mb-4">
            Words of Adoration
          </h2>
          <p className="text-neutral-400 font-body text-lg font-light">
            Hear from those who have experienced the uncompromising quality of LaFleur.
          </p>
        </div>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <FadeIn key={i} delay={Math.min(i * 200, 600)} className="bg-neutral-900/20 p-8 border border-[#D4AF37]/10 flex flex-col items-center text-center">
            <div className="flex gap-1 text-primary mb-8">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-sm" />
              ))}
            </div>
            <p className="text-neutral-300 font-body text-lg italic leading-relaxed mb-6">
              "{review.text}"
            </p>
            <span className="text-white font-headline tracking-wider">
              {review.name}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
