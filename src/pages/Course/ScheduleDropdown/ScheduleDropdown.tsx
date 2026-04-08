import React, { useState } from "react";

import { motion, AnimatePresence } from "motion/react";

import type { ScheduleDropdownProps } from "./ScheduleDropdown.types";

import "./ScheduleDropdown.scss";

const ScheduleDropdown: React.FC<ScheduleDropdownProps> = ({ children }) => {
  const [showDropdown, setShodDropdown] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShodDropdown((prev) => !prev);
  };

  return (
    <div className="shcedule-dropdown-container">
      <button onClick={handleButtonClick} className="btn-schedule">
        <div className="number-and-session-type">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4541 2.70312C17.5704 2.70313 20.5591 3.94098 22.7627 6.14453C24.9662 8.34808 26.2041 11.3368 26.2041 14.4531C26.2041 15.996 25.9 17.5237 25.3096 18.9492C24.7191 20.3748 23.8538 21.6706 22.7627 22.7617C21.6716 23.8528 20.3758 24.7181 18.9502 25.3086C17.5247 25.899 15.997 26.2031 14.4541 26.2031C12.9112 26.2031 11.3835 25.899 9.95801 25.3086C8.53243 24.7181 7.2366 23.8528 6.14551 22.7617C5.05442 21.6706 4.18913 20.3748 3.59863 18.9492C3.00823 17.5237 2.7041 15.996 2.7041 14.4531C2.7041 11.3368 3.94196 8.34808 6.14551 6.14453C8.34906 3.94098 11.3378 2.70312 14.4541 2.70312Z"
              stroke={showDropdown ? "#130E67" : `#8A8A8A`}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.8786 18.6866V9.3125L11.6562 11.656"
              stroke={showDropdown ? "#0A0836" : "#8A8A8A"}
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className={showDropdown ? "active" : ""}>Weekly Schedule</span>
        </div>
        <motion.svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: showDropdown ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <path
            d="M13.8524 7.02679C13.9246 7.08878 14.0095 7.13723 14.1023 7.1694C14.1951 7.20156 14.2939 7.21681 14.3932 7.21425C14.4924 7.2117 14.5902 7.19141 14.6808 7.15453C14.7714 7.11765 14.8532 7.0649 14.9214 6.99931C14.9896 6.93371 15.0429 6.85655 15.0783 6.77223C15.1137 6.68791 15.1304 6.59808 15.1276 6.50787C15.1248 6.41765 15.1025 6.32883 15.0619 6.24646C15.0213 6.16409 14.9633 6.08979 14.8911 6.02781L8.08755 0.187802C7.9472 0.0671986 7.76137 -1.61001e-07 7.56821 -1.65223e-07C7.37506 -1.69444e-07 7.18923 0.0671985 7.04887 0.187802L0.244541 6.02781C0.170789 6.08938 0.111234 6.16366 0.0693354 6.24634C0.0274376 6.32901 0.00403062 6.41842 0.000475314 6.50938C-0.00308095 6.60035 0.013286 6.69105 0.0486234 6.77621C0.0839609 6.86138 0.137564 6.93931 0.206321 7.00549C0.275079 7.07167 0.357619 7.12477 0.449148 7.16171C0.540675 7.19865 0.639368 7.21869 0.739492 7.22068C0.839615 7.22266 0.939174 7.20654 1.03239 7.17325C1.1256 7.13997 1.2106 7.09019 1.28246 7.02679L7.56821 1.632L13.8524 7.02679Z"
            fill="#8A8A8A"
          />
        </motion.svg>
      </button>
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
            transition={{ duration: 0.5 }}
            className="slots-container"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScheduleDropdown;
