import React from "react";
import { ClipLoader } from "react-spinners";
import { PageLayout } from "../components";

const Transition: React.FC = () => (
  <PageLayout>
    <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center bg-hl-background">
      <ClipLoader color="white" size={20} />
    </div>
  </PageLayout>
);

export default Transition;
