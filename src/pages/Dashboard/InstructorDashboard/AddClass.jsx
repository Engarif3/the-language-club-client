import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
  const navigate = useNavigate();
const {user} = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    const saveClass = {
      nameClass: data.nameClass,
      classImage: data.classImage,
      instructorName: data.instructorName,
      email: data.instructorEmail,
      seats: parseFloat(data.seats),
      price: parseFloat(data.price),
      status:"pending"
    };
    fetch(`${import.meta.env.VITE_API_URL}/classes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveClass),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class added successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/dashboard/myclass")
      });
  };

  return (
    <div className='md:w-10/12 mx-auto'>
      <div className="  my-8 flex justify-center items-center w-7/12 md:w-full px-4">
        <div className=" shadow-2xl bg-base-100  w-full md:mx-0 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body py-0 my-8">
            <h2 className="text-xl text-center text-indigo-800 mb-2">Add A Course</h2>
            <div className="form-control py-0 -my-8">
              <label className="label">
                <span className="label-text italic">Course name</span>
              </label>
              <input
                type="text"
                {...register("nameClass", { required: true })}
                placeholder="Course Name"
                className="input input-bordered"
              />
              {errors.nameClass && (
                <span className="text-red-600 text-sm">Course name is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text italic">Course Image</span>
              </label>
              <input
                type="text"
                {...register("classImage", { required: true })}
                placeholder="Course image"
                className="input input-bordered"
              />
              {errors.classImage && (
                <span className="text-red-600 text-sm">Course image is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text italic">Instructor name</span>
              </label>
              <input
                type="text"
                {...register("instructorName", { required: true })}
                defaultValue={user.displayName}
                readOnly
                className="input input-bordered"
              />
              {errors.instructorName && (
                <span className="text-red-600 text-sm">Name is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text italic">Instructor email</span>
              </label>
              <input
                type="email"
                {...register("instructorEmail", { required: true })}
                defaultValue={user.email}
                readOnly
                className="input input-bordered"
              />
              {errors.instructorEmail && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text italic">Available seats</span>
              </label>
              <input
                type="text"
                {...register("seats", { required: true })}
                placeholder="Available seats"
                className="input input-bordered"
              />
              {errors.seats && (
                <span className="text-red-600 text-sm">Available seats is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text italic">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-600 text-sm">Price is required</span>
              )}
            </div>
            <div className="form-control mt-4">
              <input
                className="btn btn-primary"
                type="submit"
                value="Add Course"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
