import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    name: "Drashti Bavarva",
    position: "Founder, The Art Leaf",
    message: "Om is an exceptional developer who understands both the frontend and the complex AI backends perfectly.",
  },
  {
    name: "Hemant Barasara",
    position: "CEO, Patel Engineering & Earthmovers",
    message: "Working with Om was a great experience. He delivered the AI-powered chatbot ahead of schedule.",
  },
  {
    name: "Amitbhai Panara",
    position: "CEO, Nilkanth Real Estate",
    message: "Om's ability to translate complex requirements into working software is impressive.",
  },
  {
    name: "Nakul Kundaliya",
    position: "CEO, Mayora Infotech",
    message: "Om's expertise in RAG systems and LLM integration helped us achieve a 40% boost in efficiency.",
  },
  {
    name: "Savan Dava",
    position: "Founder, Leflour",
    message: "Highly recommended for full-stack projects. He built our entire e-commerce platform with perfection.",
  },
  {
    name: "Kishan Kavar",
    position: "Marketing Director",
    message: "The automation workflows Om implemented saved us hundreds of hours of manual lead qualification.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1200: { slidesPerView: 3, spaceBetween: 40 },
      }}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="testimonials_swiper"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="testimonial_card">
            {/* Quote Icon */}
            <div className="testimonial_quote">
              <FaQuoteLeft />
            </div>

            {/* Message */}
            <p className="testimonial_text">{person.message}</p>

            {/* Footer / User Info */}
            <div className="testimonial_user">
              <div className="testimonial_meta">
                <div className="testimonial_name">{person.name}</div>
                <div className="testimonial_role">{person.position}</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
