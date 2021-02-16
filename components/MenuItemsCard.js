import React from "react";

function MenuItemsCard(props) {
  return (
    <>
      <div
        className="flex divide-y divide-gray-300 flex-col cursor-pointer"
        onClick={() => props.data.menuItemClick(props.data.id, props.data.name)}
      >
        <div className="bg-white p-4 px-8 flex justify-between items-center ">
          <div className="font-mono font-bold tracking-wide">
            {props.data.name}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MenuItemsCard;
