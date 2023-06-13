import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const AddClass = () => {
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
    };
    fetch("https://assignment-12-server-engarif3.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-8">
        <div className="card w-1/2 p-0 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body mt-0">
            <h2 className="text-xl text-center">Add A Class</h2>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                type="text"
                {...register("nameClass", { required: true })}
                placeholder="Class Name"
                className="input input-bordered"
              />
              {errors.className && (
                <span className="text-red-600">Class name is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text">Class Image</span>
              </label>
              <input
                type="text"
                {...register("classImage", { required: true })}
                placeholder="Class image"
                className="input input-bordered"
              />
              {errors.classImage && (
                <span className="text-red-600">Class image is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text">Instructor name</span>
              </label>
              <input
                type="text"
                {...register("instructorName", { required: true })}
                defaultValue={user.displayName}
                readOnly
                className="input input-bordered"
              />
              {errors.instructorName && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text">Instructor email</span>
              </label>
              <input
                type="email"
                {...register("instructorEmail", { required: true })}
                defaultValue={user.email}
                readOnly
                className="input input-bordered"
              />
              {errors.instructorEmail && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text">Available seats</span>
              </label>
              <input
                type="text"
                {...register("seats", { required: true })}
                placeholder="Available seats"
                className="input input-bordered"
              />
              {errors.seats && (
                <span className="text-red-600">Available seats is required</span>
              )}
            </div>
            <div className="form-control -mb-8">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
              {errors.price && (
                <span className="text-red-600">Price is required</span>
              )}
            </div>
            <div className="form-control mt-2">
              <input
                className="btn btn-primary"
                type="submit"
                value="Add Class"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
