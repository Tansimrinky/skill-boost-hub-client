import { useEffect, useState } from "react";
import BestCourseCard from "../BestCourseCard/BestCourseCard"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionTitle from "../SectionTitle/SectionTilte";


const BestCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => {
            setCourses(data)
        })
    },[])
    const bestCourses = courses.sort((a, b) => b.total_enrollment - a.total_enrollment).slice(0, 10)
    return (
        <div >
            <SectionTitle heading={"Explore some of our best courses"}></SectionTitle>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
              <div>
              {
                bestCourses.map(course =><SwiperSlide key={course.id}> <BestCourseCard  course={course}></BestCourseCard></SwiperSlide>)
            }
              </div>
              
      </Swiper>
           
        </div>
    );
};

export default BestCourses;