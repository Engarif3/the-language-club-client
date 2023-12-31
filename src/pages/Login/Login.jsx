import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = data => {
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        Swal.fire({
          title: 'Login Successful.',
          showConfirmButton: false,
          timer: 1500,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError("password", {
          type: "manual",
          message: "Email address or password doesn't match."
        });
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='md:w-8/12 mx-auto'>
      <Helmet>
        <title>The Language Club | Login</title>
      </Helmet>

      <div className="  my-8 flex justify-center items-center">
        <div className=" shadow-2xl bg-base-100 md:w-4/12 w-full md:mx-0 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 my-8">
            <h2 className='text-4xl text-center'>Please Login</h2>
            <div className="form-control py-0 my-0">
              <label className="label py-0">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label py-0">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered pr-10"
                />
                <button
                  type="button"
                  className="absolute top-2 right-8 flex bg-slate-400 items-center "
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash size={24}  /> : <FaEye size={24} />}
                </button>
              </div>
              {errors.password && errors.password.type === "manual" && (
                <span className="text-red-500 text-sm">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control mt-2">
              <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
            </div>
            <p className='text-center'><small>Don't have an account? <Link to="/signup"><span className='text-primary'>Register</span> </Link> </small></p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
