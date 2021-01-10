import React from "react";
import { useState } from "react";
import MenuItemList from "../components/MenuItemList";

function Navbar() {
  const [hambarger, setHambarger] = useState(false);

  function onHumburgerClick() {
    setHambarger(true);
  }

  function onCloseHamburger() {
    setHambarger(false);
  }

  let Navbar = (
    <div class="flex bg-black h-16  ">
      <div class="m-2 p-2 flex-grow">
        <h1 className="font-logo text-2xl text-white">Status-Colors</h1>
      </div>
      <div className="p-2 m-4">
        <svg
          width="30"
          height="20"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={onHumburgerClick}
        >
          <path
            d="M0 10V12H20V10H0ZM0 5V7H20V5H0ZM0 0V2H20V0H0Z"
            fill="#E1E1E1"
          />
        </svg>
      </div>
    </div>
  );

  let MenuItemList = (
    <div class="bg-black min-h-screen ease-in-out duration-100">
      <div class="text-white">Menu Item1</div>
      <svg
        width="61"
        height="65"
        viewBox="0 0 61 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onCloseHamburger}
      >
        <path
          d="M51.6302 9.48254C40.0638 -3.16085 21.083 -3.16085 9.51661 9.48254C-2.04981 22.1259 -2.04981 42.8741 9.51661 55.5175C21.083 68.1608 39.7672 68.1608 51.3336 55.5175C62.9 42.8741 63.1966 22.1259 51.6302 9.48254ZM38.8775 46.116L30.5734 37.0386L22.2693 46.116L18.1173 41.5773L26.4214 32.5L18.1173 23.4227L22.2693 18.884L30.5734 27.9613L38.8775 18.884L43.0295 23.4227L34.7254 32.5L43.0295 41.5773L38.8775 46.116Z"
          fill="white"
        />
      </svg>
    </div>
  );

  return <>{hambarger ? MenuItemList : Navbar}</>;
}

export default Navbar;
