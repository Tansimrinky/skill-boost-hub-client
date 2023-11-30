
import { useState, useEffect } from 'react'
import SectionTitle from "../SectionTitle/SectionTilte";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";

const Reviews = () => {
    const axiosSecure = useAxiosSecure();
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        axiosSecure.get('/reviews')
        .then(data => {
            setReviews(data.data)
        })
    }, [axiosSecure])
    return (
        <section className="my-20">
      <SectionTitle
        heading={"Explore What Our Students think About Us"}
      ></SectionTitle>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="flex flex-col items-center m-10 p-10 text-center">
              <div className='flex-cols justify-center'>
              <div className='flex justify-center'><img className='h-[50px] w-[50px] rounded-full' src={review.image} alt="" /></div>
              <p className='font-medium text-xl'>{review.name}</p>
              <div className='flex justify-center '><FaQuoteLeft className='h-[50px]' /></div>
              <h2 className='font-bold text-3xl '>{review.feedbackText}</h2>
              
              
              <p className='font-medium text-xl'>{review.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    );
};

export default Reviews;