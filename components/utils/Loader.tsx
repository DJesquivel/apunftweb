import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface LoaderProps {
  loading: boolean;
  size: "small" | "default" | "large";
}

const Loader: React.FC<LoaderProps> = ({ loading, size }) => {
  if (!loading) return null;

  // Set loader size based on the `size` prop
  let loaderSize;
  switch (size) {
    case "small":
      loaderSize = 30; // Size in pixels for small loader
      break;
    case "large":
      loaderSize = 70; // Size in pixels for large loader
      break;
    default:
      loaderSize = 50; // Size in pixels for default loader
  }

  return (
    <div
      className="flex justify-center items-center h-full" // Tailwind for centering
    >
      <ThreeDots
        height={loaderSize}
        width={loaderSize}
        radius="9"
        color="blue" // You can customize this color or use Tailwind's colors
        ariaLabel="three-dots-loading"
        wrapperStyle={{}} // You can add any custom styles here
        visible={true} // Ensure the loader is visible
      />
    </div>
  );
};

export default Loader;
