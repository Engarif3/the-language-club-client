import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (data) => {
    if (data.password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password mismatch",
        text: "Please make sure the password and confirm password match.",
      });
      return;
    }

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email, photo: data.photoURL };
          fetch(`${import.meta.env.VITE_API_URL}/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                logOut();
                navigate("/login");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className='md:w-8/12 mx-auto'>
      <Helmet>
        <title>The Language Club | Sign Up</title>
      </Helmet>
      <div className="  my-8 flex justify-center items-center">
        <div className=" shadow-2xl bg-base-100 md:w-4/12 w-full md:mx-0 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 my-8">
            <h2 className="text-xl text-center">Please Register</h2>
            <div className="form-control py-0 -my-4">
              <label className="label py-0">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text -py-8 -my-8">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label py-0">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label py-0">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase, one number, and one special
                  character.
                </p>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label py-0">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="confirm password"
                className="input input-bordered"
              />
              {errors.confirmPassword && (
                <span className="text-red-600">Confirm Password is required</span>
              )}
            </div>
            <div className="form-control mt-4">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p className="text-center -my-4">
              <small>
                Already have an account?
                <Link to="/login">
                  <span className="text-primary"> Login </span>{" "}
                </Link>{" "}
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
