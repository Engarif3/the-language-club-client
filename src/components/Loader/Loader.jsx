import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <FadeLoader color="#fb1114" size={150} />
    </div>
  );
};

export default Loader;
