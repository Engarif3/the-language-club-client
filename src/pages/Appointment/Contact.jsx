import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import img from "../../assets/contact.png";

const Contact = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id='contact'>
      <h2 className="text-3xl text-center text-orange-600 pl-24 font-bold my-8">
        Please provide your contact details
      </h2>
      <div className="md:flex justify-start items-start ">
        <div className="my-12 md:w-4/12  md:flex flex-col items-start gap-4 ">
          <div className="mx-auto">
          <img className="md:w-4/12 text-center" src={img} alt="" />
          </div>
          <div className="text-white text-start ">
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
            className="flex flex-col gap-4  text-white mx-auto"
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
