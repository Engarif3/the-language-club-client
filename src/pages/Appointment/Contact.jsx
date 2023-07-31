import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Calender from "./Calender";

const Contact = ({item}) => {

  const {instructorName,instructorPhoto, instructorEmail, seats} = item;
  const {darkMode} = useAuth();
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    // emailjs
    //   .sendForm(
    //     "service_339zzyo",
    //     "template_opsy1so",
    //     form.current,
    //     "JYmbcbb9qXSLOn_sQ"
    //   )
    //   .then(
    //     (result) => {
    //     //   console.log(result.text);
    //       Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'Your appointment booked successfully ',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //       reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
       
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Your appointment booked successfully ',
             showConfirmButton: false,
             timer: 1500
           })
           reset();
  };



  return (
    <div id='contact'>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start">
        <div className="my-12 md:w-4/12  flex flex-col items-center md:items-start  gap-4 md:ml-20 ">
          <div className="mx-auto  rounded-full">
          <div>
          <img className="  rounded-full h-48 w-48 md:mt-12 md:mr-20" src={instructorPhoto} alt="" />
          </div>
          </div>
          <div className={darkMode?"text-white text-start md:mt-2":"text-slate-900 text-start md:mt-2"}>
          <p className="text-xl text-orange-600">Name: {instructorName}</p>
          <p>Email: {instructorEmail}</p>
          <p>Mobile: +49-15203555728</p>
          <p>Reichenhainer Str.51 / 423</p>
          <p>09126, Chemnitz</p>
          <p>Germany</p>
          </div>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4  text-white mx-auto w-8/12"
          >
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className={darkMode?"bg-transparent text-white input input-bordered input-secondary ":"bg-transparent text-black input input-bordered input-secondary "}
              type="text"
              required
              placeholder="Enter your name"
              {...register("name")}
            />
            <input
              className={darkMode?"bg-transparent text-white input input-bordered input-secondary ":"bg-transparent text-black input input-bordered input-secondary "}
              type="email"
              required
              placeholder="Enter your email"
              {...register("email")}
            />
            <input
              className={darkMode?"bg-transparent text-white input input-bordered input-secondary ":"bg-transparent text-black input input-bordered input-secondary "}
              type="tel"
              required
              placeholder="Enter your Number"
              {...register("number")}
            />
            <textarea
              className={darkMode?"bg-transparent text-white textarea textarea-secondary ":"bg-transparent text-black textarea textarea-secondary"}
              required
              placeholder="Enter your message"
              {...register("message")}
            ></textarea>

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <button
              className="btn  btn-secondary mb-12 "
              type="submit"
            >
              Submit
            </button>
          </form>
         
        </div>
        <div className="bg-white rounded-xl border-[1px] border-red-600 overflow-hidden md:w-5/12  flex justify-center items-center  py-8 m-16 md:m-20">
          <div>
            <Calender></Calender>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
