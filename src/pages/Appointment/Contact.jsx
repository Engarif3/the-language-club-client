import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import img from "../../assets/contact.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Contact = () => {

  const {darkMode} = useAuth();
  const form = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_339zzyo",
        "template_opsy1so",
        form.current,
        "JYmbcbb9qXSLOn_sQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your appointment booked successfully ',
            showConfirmButton: false,
            timer: 1500
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contact'>
      <h2 className="text-3xl text-center text-orange-600 md:pl-36 px-8 md:px-0  font-bold my-8">
        Please provide your contact details
      </h2>
      <div className="md:flex justify-start items-start ">
        <div className="my-12 md:w-4/12  flex flex-col items-center md:items-start  gap-4 ">
          <div className="mx-auto ">
          <img className="w-10/12 md:w-5/12 text-center ml-8  p-8 md:p-0" src={img} alt="" />
          </div>
          <div className={darkMode?"text-white text-start ":"text-slate-900 text-start "}>
          <p>Name: Md Arifur Rahman</p>
          <p>Email: arif.aust.eng@gmail.com</p>
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
              placeholder="Enter your name"
              {...register("name")}
            />
            <input
              className="bg-transparent input input-bordered input-secondary"
              type="email"
              placeholder="Enter your email"
              {...register("email")}
            />
            <input
              className="bg-transparent input input-bordered input-secondary"
              type="text"
              placeholder="Enter your Number"
              {...register("number")}
            />
            <textarea
              className="textarea textarea-secondary bg-transparent"
              placeholder="Enter your message"
              {...register("message")}
            ></textarea>

            {/* include validation with required or other standard HTML validation rules */}
            {/* <input {...register("exampleRequired", { required: true })} /> */}
            {/* errors will return when field validation fails  */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <button
              className="btn btn-outline btn-secondary   mb-12"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
