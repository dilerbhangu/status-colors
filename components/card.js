import React, { useState, useEffect } from "react";
import { putAPI, fetchAPI } from "../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Cards({ id, text, like }) {
  const [likeClicked, setLikeClicked] = useState(false);
  const [liked, setLiked] = useState(0);
  const [firstTimeFlag, setFirstTimeFlag] = useState(true);

  // const notify = () => toast("Wow so easy!");

  var likeBtnId = "";
  var temp_liked = 0;
  var flg = true;
  // console.log("likeee", like);
  if (like !== undefined) {
    temp_liked = like.likes;
    likeBtnId = like._id;
  }

  // console.log("likeee liked", liked);
  // console.log("temp likeee liked", temp_liked);

  useEffect(() => {
    // console.log("yess");
    setLiked(temp_liked);
    flg = true;
    setLikeClicked(false);
  }, [like]);

  useEffect(() => {
    if (flg === false) {
      setLiked(liked);
      flg = true;
    }
  }, [liked]);

  const CustomToast = () => {
    return <div>Successfully Copied</div>;
  };

  function copyDivToClipboard(e) {
    var range = document.createRange();
    range.selectNode(document.getElementById(e.target.id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // to deselect
    // toast("Wow so easy!");
    toast.success(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
    });
  }

  async function setLikedClickedFunc(e, likeBtnId) {
    setLikeClicked(true);
    var path = "";
    var reqMethod = "";
    var status_id = "";
    var req = {};
    if (liked === 0) {
      path = "/likeds/";
      reqMethod = "POST";
      status_id = id;
      req = {
        status_id: status_id,
        likes: liked + 1,
      };
    } else {
      console.log("e", e);
      path = "/likeds/" + likeBtnId;
      reqMethod = "PUT";
      req = {
        likes: liked + 1,
      };
    }

    await putAPI(path, req, reqMethod);
    setLiked(liked + 1);
  }

  return (
    <>
      <div className="flex shadow-sm rounded-xl p-6 mx-6 my-4 flex-col border-gray-200 border-2 bg-white">
        <p className=" text-lg font-light text-black" id={id}>
          {text}
        </p>
        <div className="flex justify-between items-center pt-4">
          <div className="flex h-6 w-6 items-center">
            <button
              className="bg-black px-6 py-1 text-white rounded-2xl font-semibold1"
              onClick={(e) => copyDivToClipboard(e)}
              id={id}
            >
              Copy
            </button>
          </div>
          <div className="flex">
            {likeClicked ? (
              <button id={likeBtnId}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke="none"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    strokeWidth="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            ) : (
              <button
                id={likeBtnId}
                onClick={(e) => setLikedClickedFunc(e, likeBtnId)}
              >
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
                    strokeWidth="1"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            )}
            <div id={likeBtnId}>{liked}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
