import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCourses from "../../hooks/useCourses/useCourses";
import { useParams } from "react-router-dom";
import CheakOutForm from "./CheakOutForm";




const stripePromise = loadStripe(import.meta.env.VITE_Payment)

const EnrollClass = () => {

    const [courses] = useCourses()
    const {id} = useParams()
    const findEnrollClass = courses.filter(course => course._id == id)
    console.log(findEnrollClass)
    return (
        <div>
           <Elements stripe={stripePromise}>
               {
                findEnrollClass.map((course) => <CheakOutForm key={course._id} course={course}></CheakOutForm> )
               }
        </Elements>
        </div>
    );
};

export default EnrollClass;