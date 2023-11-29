import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import { useContext } from "react";
import  { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';


const CheakOutForm = ({course}) => {
  const navigate = useNavigate();
    const {price, _id, title, instructor_name, image} = course || {}
    const amount = price;
    const [error, setError] = useState('')
   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = useAxiosSecure();
   const [clientSecret, setClientSecret] = useState("")
   const [transactionId, setTransactionId] = useState("")
   const {user} = useContext(AuthContext)
  
   console.log(user)
   
   
 
   

  
  useEffect(() => {
    if (amount) {
      axiosSecure.post('/create-payment-intent', { price: amount })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret)
        })
        .catch(error => {
          console.error('Error creating payment intent:', error);
          
        });
    }
  }, [axiosSecure, amount]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!stripe || !elements){
        return
    }

    const card = elements.getElement(CardElement)

    if(card === null){
        return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })

    if(error){
        console.log('payment error', error)
        setError(error.message)
    }
    else{
       console.log('payment method', paymentMethod)
       setError("")
    }

    // CONFIRM PAYMENT
    const  { paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email, 
                name: user?.displayName
            }
        }
    })

    if(confirmError){
        console.log('confirm error')
    }
    else {
       console.log('payment intent', paymentIntent)
       if(paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)
        Swal.fire({
          title: `Enrolled successfully!
                  Your Transaction Id: ${paymentIntent.id}`,
                  icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
        navigate('/dashboard/my-enroll-class');

        // save the payment in the database
        const payment = {
            title: title,
            TeacherName: instructor_name,
            image: image,
            email: user.email,
            price: amount,
            transactionId: paymentIntent.id,
            date: new Date(),
            courseId : _id,
            status: "pending"

        }
       const res = axiosSecure.post('/payments', payment)
       console.log(res)
       
       }
    }
  };

  return (
    <div className="h-screen">
        <h2 className="text-blue-500 font-bold text-3xl text-center">Please Pay First</h2>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <input disabled={!stripe || !clientSecret} className="btn bg-blue-500 text-white font-bold" type="submit" value="Pay" />
      {/* <button className="btn bg-blue-500 text-white font-bold" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button> */}
      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-600"> Your Transaction Id: {transactionId} </p>
      }
    </form>
    </div>
  );
};

export default CheakOutForm;
