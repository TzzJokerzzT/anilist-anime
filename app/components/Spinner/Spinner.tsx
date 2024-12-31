import { Spinner } from "keep-react";

export const SpinnerComponent = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <Spinner color="secondary" />
      <p className="text-lg text-[#2e2e2e] font-medium">
        Loading please wait...
      </p>
    </div>
  );
};
