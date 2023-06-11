// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// // import useCart from "../../../hooks/useCart";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//     // const [cart] = useCart();
//     // const total = cart.reduce((sum, item) => sum + item.price, 0);
//     const total = 75;
//     const price = parseFloat(total.toFixed(2))
//     return (
//         <div>
//             <h2 className="text-center text-2xl mt-4"> Please provide your card details</h2>
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm  price={price}></CheckoutForm>
//             </Elements>
//         </div>
//     );
// };

// export default Payment;

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { useLocation } from "react-router-dom";
// import CheckoutForm from "./CheckoutForm";

// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

// const Payment = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const priceString = searchParams.get("price");
//   const price = parseFloat(priceString);
  

//   return (
//     <div>
//       <h2 className="text-center text-2xl mt-4">Please provide your card details</h2>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm price={price}></CheckoutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Payment;

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const priceString = searchParams.get("price");
  const price = parseFloat(priceString);

  // Access additional parameters
  const courseName = searchParams.get("courseName");
  const instructorName = searchParams.get("instructorName");
  const email = searchParams.get("email");

  const booking = {
    price,
    courseName,
    instructorName,
    email
  };
console.log(courseName)
  return (
    <div>
      <h2 className="text-center text-2xl mt-4">Please provide your card details</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm booking={booking}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;


