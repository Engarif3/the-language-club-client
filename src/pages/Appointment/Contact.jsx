import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import Calender from "./Calender";
import { MdLocationCity, MdLocationOn, MdOutlineAttachEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";



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
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start md:border md:mb-12 md:border-cyan-900">
        <div className="my-12 md:w-4/12  flex flex-col items-center md:items-start  gap-4 md:ml-20 ">
          <div className="mx-auto  rounded-full">
          <div>
          <img className="  rounded-full h-48 w-48 md:mt-10 md:mr-20" src={instructorPhoto} alt="" />
          </div>
          </div>
          <div className={darkMode?"text-white text-start md:mt-2":"text-slate-900 text-start md:mt-2"}>
          <p className="text-xl text-center text-orange-600 mb-4 mr-4 italic"> {instructorName}</p>
          <p className="flex items-center gap-2"> <MdOutlineAttachEmail className="text-rose-500"></MdOutlineAttachEmail> {instructorEmail}</p>
          <p className="flex items-center gap-2"><FaMobile className="text-rose-500"></FaMobile> +49-15203555728</p>
          <p className="flex items-center gap-2"><MdLocationCity className="text-rose-500"></MdLocationCity> Reichenhainer Str.51 / 423</p>
          <p className="flex items-center gap-2"><MdLocationOn className="text-rose-500"></MdLocationOn>09126, Chemnitz</p>
          <p className="ml-6">Germany</p>
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
        <div className="bg-[#f0f9ff] rounded-lg border-[1px] border-cyan-900 shadow-2xl overflow-hidden md:w-5/12  flex justify-center items-center  py-4 m-8 md:m-20">
          <div>
            <Calender></Calender>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
