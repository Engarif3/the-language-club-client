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
      <div className="md:flex justify-between items-start ">
        <div className="my-12 md:w-4/12  flex flex-col items-center md:items-start  gap-4 ">
          <div className="mx-auto h-48 w-48 rounded-full">
          <img className="  text-center rounded-full " src={instructorPhoto} alt="" />
          </div>
          <div className={darkMode?"text-white text-start ":"text-slate-900 text-start "}>
          <p>Name: {instructorName}</p>
          <p>Email: {instructorEmail}</p>
          <p>Mobile: +49-15203555728</p>
          <p>Address: Reichenhainer Str.51 / 423</p>
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
              className="bg-transparent input input-bordered input-secondary "
              type="text"
              required
              placeholder="Enter your name"
              {...register("name")}
            />
            <input
              className="bg-transparent input input-bordered input-secondary"
              type="email"
              required
              placeholder="Enter your email"
              {...register("email")}
            />
            <input
              className="bg-transparent input input-bordered input-secondary"
              type="text"
              required
              placeholder="Enter your Number"
              {...register("number")}
            />
            <textarea
              className="textarea textarea-secondary bg-transparent"
              required
              placeholder="Enter your message"
              {...register("message")}
            ></textarea>

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <button
              className="btn  btn-secondary   mb-12 hidden md:block "
              type="submit"
            >
              Submit
            </button>
          </form>
         
        </div>
        <div className="bg-white rounded-xl border-[1px] border-red-600 overflow-hidden   md:w-5/12  flex justify-center items-center  md:py-8 m-16 md:m-20">
          <div>
            <Calender></Calender>
            <button
              className="btn  btn-secondary w-full   mb-4 block md:hidden "
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
