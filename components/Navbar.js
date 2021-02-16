import React from "react";
import { useState } from "react";
import MenuItemsCard from "./MenuItemsCard";
import SubMenuItemsCard from "./SubMenuItemsCard";
import Link from "next/link";

function Navbar({ menu_items }) {
  const [hambargerClose, setHambargerClose] = useState(false);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const [submenuID, setsubmenuID] = useState({});
  const [submenuItems, setSubmenuItems] = useState([]);
  const id = "";

  function onHumburgerClick() {
    setHambargerClose(true);
  }

  function onCloseHamburger() {
    setHambargerClose(false);
  }

  function menuItemClick(id, name) {
    setsubmenuOpen(true);
    setsubmenuID({ id, name });
  }

  function submenuItemClick() {
    setHambargerClose(false);
  }

  const menuItemCard = (
    <>
      {menu_items.map((key, i) => {
        return (
          <MenuItemsCard
            key={i}
            data={{
              id: key.Menu_ID,
              name: key.Menu_Name,
              menuItemClick: menuItemClick,
            }}
          />
        );
      })}
    </>
  );

  const submenuItemCard = (
    <>
      <SubMenuItemsCard
        key={submenuID.id}
        menu_items={menu_items}
        submenu_id={submenuID.id}
        submenuItemClick={submenuItemClick}
      />
    </>
  );

  const submenuPanel = (
    <div className="bg-white relative overflow-y-auto h-menu-container">
      <div
        className="flex flex-col divide-y divide-gray-300"
        onClick={() => setsubmenuOpen(false)}
      >
        <div className="bg-gray-50 p-4 px-8 flex ">
          <div className="flex-1 place-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="font-mono font-bold tracking-wider text-sm place-self-center">
            {submenuID.name}
          </div>
          <div className="flex-1"></div>
        </div>
        <div></div>
      </div>

      <div>{submenuItemCard}</div>
    </div>
  );

  const Sidebar = (
    <div className="bg-white h-screen w-screen ">
      {submenuOpen ? submenuPanel : menuItemCard}
    </div>
  );

  const humburgerIcon = (
    <button onClick={onHumburgerClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );

  const crossIcon = (
    <button onClick={onCloseHamburger}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );

  const Navbar = (
    <div className="flex items-center p-4 justify-between bg-white shadow-lg">
      <div className="flex flex-1">
        {hambargerClose ? crossIcon : humburgerIcon}
      </div>

      <Link href="/">
        <div className="flex cursor-pointer ">
          <img
            src="/thestatuswiki_logo1.svg"
            alt="thestatuswiki"
            className="h-8"
          />
        </div>
      </Link>

      <div className="flex flex-1"></div>
    </div>
  );

  return (
    <>
      {Navbar}
      {hambargerClose ? Sidebar : null}
    </>
  );
}

export default Navbar;
