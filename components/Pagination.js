import React from "react";

function Pagination() {
  const hover_var = "hover:bg-blue-400";
  const count = 1;
  return (
    <>
      <div class="flex bg-gray-100 p-4 justify-evenly">
        <div class="flex flex-row px-8 py-2 rounded-full bg-black text-white ">
          <div class="px-4"> Previous</div>
          <div class="self-center px-0">
            <svg
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.67 1.77L9.9 0L0 9.9L9.9 19.8L11.67 18.03L3.54 9.9L11.67 1.77Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div class="flex flex-row px-8 py-2 rounded-full bg-black text-white ">
          <div class="px-4">Next</div>
          <div class="self-center px-0">
            <svg
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L11 11L1 21" stroke="white" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagination;
