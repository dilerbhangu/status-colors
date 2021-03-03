import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Pagination({ endPage }) {
  // const [href, setHref] = useState("");
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  var id = parseInt(router.query.id);
  if (isNaN(id)) {
    id = 1;
  }
  const menu = router.query.menu;
  const submenu = router.query.submenu;
  var previousBtnDisable = false;
  var nextBtnDisable = false;

  if (id === 1) {
    previousBtnDisable = true;
  }
  if (id === endPage) {
    nextBtnDisable = true;
  }

  // useEffect(() => {
  //   const tempLink = "/" + menu + "/" + submenu + "/" + id.toString();
  //   setHref(tempLink);
  // }, [href]);

  function onClickNext() {
    id = id + 1;
    if (id <= endPage) {
      const link = "/" + menu + "/" + submenu + "/" + id.toString();
      router.push(link);
      window.scrollTo(0, 0);
    }
  }

  function onClickPrevious() {
    id = id - 1;
    if (id > 0) {
      const link = "/" + menu + "/" + submenu + "/" + id.toString();
      router.push(link);
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <div className="flex p-4 justify-evenly w-screen">
        <div
          className={`flex flex-row rounded-full bg-black text-white cursor-pointer w-40 text-center justify-center ${
            previousBtnDisable ? "opacity-50" : "opacity-100"
          }`}
          onClick={onClickPrevious}
        >
          <div className="place-self-center"> Previous</div>
          <div className="self-center ml-4">
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

        <div
          className={`flex flex-row py-2 rounded-full bg-black text-white cursor-pointer w-40 justify-center ${
            nextBtnDisable ? "opacity-50" : "opacity-100"
          }`}
          onClick={onClickNext}
        >
          <div className="place-self-center">Next</div>
          <div className="self-center ml-4 transform rotate-180">
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
      </div>
    </>
  );
}

export default Pagination;
