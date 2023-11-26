import PropTypes from 'prop-types';

const BestCourseCard = ({course}) => {
    const {title, image, price, total_enrollment, instructor_name} = course || {}
  return (
   <div>
      
     <div className="flex justify-center">
      <div className="card card-compact w-[700px] bg-base-100 shadow-xl">
        <figure>
          <img
          className="h-96 w-[700px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-5xl font-bold ">{title}</h2>
          <p className="text-xl font-medium text-slate-700">Instructor Name:
           {instructor_name}</p>
          <p className="text-xl font-medium text-slate-700">Price: ${price}</p>
          <p className="text-xl font-medium text-slate-700">Total Enrollment:{total_enrollment}</p>
        </div>
      </div>
    </div>
   </div>
  );
};
BestCourseCard.propTypes = {
    course: PropTypes.object
}
export default BestCourseCard;
