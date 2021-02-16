import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function TagList({ tags }) {
  const router = useRouter();
  var path = "";
  const [selectedTag, setselectedTag] = useState(" ");
  // console.log("taglist router", router.query);
  useEffect(() => {
    // if (tags[0].page === "index") {
    //   setselectedTag("latest");
    // }
    // console.log("taglist router", router.query);

    if ("submenu" in router.query) {
      setselectedTag(router.query.submenu);
    } else {
      setselectedTag("latest");
    }
  }, []);

  function setSelectedTagFunc(e) {
    // console.log("selected tag", selectedTag, e.target.id);
    setselectedTag(e.target.id);
  }

  const getSelectedTag = function (tag, i) {
    path = "/" + tag.Menu_ID + "/" + tag.tagId;
    // console.log("in loop selected tag", selectedTag);

    if (tag.tagId === selectedTag) {
      return (
        <Link href={path} key={i}>
          <a
            className="text-lg font-medium whitespace-nowrap text-black bg-gray-200 px-4 py-1 rounded-xl flex items-center"
            onClick={(e) => setSelectedTagFunc(e)}
            id={tag.tagId}
          >
            {tag.tagName}
          </a>
        </Link>
      );
    } else {
      return (
        <Link href={path} key={i}>
          <a
            className="text-lg font-medium whitespace-nowrap text-gray-700 cursor-pointer flex items-center "
            id={tag.tagId}
            onClick={(e) => setSelectedTagFunc(e)}
          >
            {tag.tagName}
          </a>
        </Link>
      );
    }
  };

  return (
    <>
      <div className="bg-gray-100 px-4 py-4">
        <div className="space-x-6 flex overflow-x-auto scrollbars-hidden">
          {tags.map((tag, i) => getSelectedTag(tag, i))}
        </div>
      </div>
    </>
  );
}

export default TagList;
