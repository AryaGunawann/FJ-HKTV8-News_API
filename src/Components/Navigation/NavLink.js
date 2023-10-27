import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CNavLink({ item, to }) {
  const location = useLocation();

  return (
    <div className={`mx-auto flex md:flex-row flex-col gap-10 items-center `}>
      <NavLink
        to={to}
        className={
          location.pathname === to
            ? "text-[#ff3333] lg:my-0 my-2"
            : "dark:text-[#0a0a0a] text-slate-600 lg:my-0 my-2"
        }
      >
        {item}
      </NavLink>
    </div>
  );
}
