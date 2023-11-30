import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../SectionTitle/SectionTilte';

const TopCategory = () => {
  const category = {
    one: 'Web Development',
    two: 'PhotoGraphy',
    three: 'Fitness',
    four: 'Digital Marketing',
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
   <div>
    <SectionTitle heading={"Some Categories"}></SectionTitle>
     <div data-aos="fade" className="flex items-center justify-center gap-6">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="box-border border-blue-500 h-32 w-32 p-4 border-4 text-blue-500 flex justify-center text-center"
      >
        {category.one}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="box-border border-blue-500 h-32 w-32 p-4 border-4 text-blue-500 text-center"
      >
        {category.two}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="box-border border-blue-500 h-32 w-32 p-4 border-4 text-blue-500 text-center"
      >
        {category.three}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="box-border border-blue-500 h-32 w-32 p-4 border-4 text-blue-500 text-center"
      >
        {category.four}
      </div>
    </div>
   </div>
  );
};

export default TopCategory;