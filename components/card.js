import React from "react";

function Card({ author }) {
  return (
    <>
      <div class="flex flex-col h-64 rounded-2xl shadow-xl m-4 ">
        <div class="flex-grow m-2 p-2 overflow-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          ultricies viverra tincidunt quis nibh nec amet. Libero fames diam,
          tempor faucibus volutpat vel, vitae. Gravida purus amet, porta pretium
          tempor, amet urna, lacus bibendum. Consequat, auctor orci, viverra
          dictum turpis tristique ut .
        </div>
        <div class="flex items-center">
          <div class="bg-black rounded-xl py-2 px-4 mx-8 mb-2">
            <div class="text-white">Copy</div>
          </div>
          <div class="flex-grow"></div>
          <div class="mx-8 mb-2">
            <svg
              width="39"
              height="36"
              viewBox="0 0 39 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M19.1352 32.43C18.9003 32.4293 18.6723 32.3555 18.4867 32.22C12.5761 27.9 8.50455 24.18 5.65554 20.51C2.01986 15.82 1.19067 11.49 3.18923 7.64001C4.61374 4.89001 8.70653 2.64001 13.4903 3.95001C15.7712 4.56975 17.7612 5.89879 19.1352 7.72001C20.5092 5.89879 22.4992 4.56975 24.78 3.95001C29.5532 2.66001 33.6566 4.89001 35.0811 7.64001C37.0797 11.49 36.2505 15.82 32.6148 20.51C29.7658 24.18 25.6943 27.9 19.7836 32.22C19.5981 32.3555 19.3701 32.4293 19.1352 32.43ZM10.7689 5.58001C9.6306 5.53834 8.50175 5.78906 7.50351 6.30526C6.50526 6.82146 5.67531 7.58365 5.10275 8.51001C3.455 11.69 4.19914 15.23 7.3777 19.32C10.7557 23.4186 14.7111 27.0654 19.1352 30.16C23.5585 27.0685 27.514 23.4251 30.8927 19.33C34.0818 15.23 34.8154 11.69 33.1676 8.52001C32.1045 6.52001 28.9154 4.93001 25.3647 5.87001C24.2262 6.18651 23.1708 6.72373 22.2663 7.44708C21.3619 8.17044 20.6284 9.06392 20.1132 10.07C20.0331 10.2534 19.8969 10.4103 19.7218 10.5207C19.5467 10.6311 19.3407 10.69 19.1299 10.69C18.9191 10.69 18.713 10.6311 18.538 10.5207C18.3629 10.4103 18.2266 10.2534 18.1465 10.07C17.6352 9.0614 16.903 8.16584 15.998 7.44203C15.0929 6.71822 14.0355 6.18251 12.895 5.87001C12.204 5.68121 11.4884 5.58361 10.7689 5.58001Z"
                fill="black"
              />{" "}
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
