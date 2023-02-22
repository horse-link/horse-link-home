import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const isNotTerms = pathname !== "/terms";

  return (
    <div className="w-full bg-white text-sm text-center py-4">
      {isNotTerms && <Link to="/terms">Terms & Conditions</Link>}
    </div>
  );
};
