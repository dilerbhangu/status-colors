import Head from "next/head";
import { fetchAPI } from "../lib/api";
import Cards from "../components/card";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import Page from "./[menu]/[submenu]/[id]";
import { useEffect } from "react";

function sitemap({ data, menu_items, menu_sub_items, likeds }) {
  const siteMapList = [
    { id: 1, name: "Item1" },
    { id: 2, name: "Item2" },
  ];

  const tagList = [];
  menu_sub_items.map((key) => {
    tagList.push({
      tagId: key.subitem_id,
      Menu_ID: key.menu_item.Menu_ID,
      tagName: key.subitem_name,
      page: "index",
    });
  });

  if (data !== undefined) {
    data = [...data];
    if (data.length > 0) {
      data = data[0].posts;
    }
  }

  function findLike(e, d) {
    if (e.status_id === d) {
      return e;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className="w-screen fixed min-h-scren z-10 flex-none">
          <Navbar menu_items={menu_items} />
          {/* <TagList tags={tagList} /> */}
        </div>

        <div className="flex flex-col mt-16  flex-auto">
          <div className="flex flex-col">
            <div className="flex flex-col divide-y-2 divide-gray-200">
              <div className="flex justify-center text-xl text-black p-2">
                TheStatusWiki-SiteMap
              </div>
              <div></div>
            </div>

            <div className="flex flex-col">
              {siteMapList.map((e, i) => {
                return (
                  <div
                    className="p-2 px-8 text-xl cursor-pointer tracking-wider font-serif text-gray-600"
                    key={i}
                  >
                    {e.name}
                  </div>
                );
              })}
              {/* <div className="p-2 px-8 text-xl cursor-pointer tracking-wider font-serif text-gray-600">
                Item1
              </div> */}
            </div>
          </div>
        </div>

        <div className=" w-screen left-0 bottom-0 z-0 flex-none">
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const menu_items = await fetchAPI("/menu-items");
  const menu_sub_items = await fetchAPI("/menu-sub-items");
  const likeds = await fetchAPI("/likeds");
  const path = "/tags?tag=" + "latest";
  const data = await fetchAPI(path);
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data, menu_items, menu_sub_items, likeds },
  };
}

export default sitemap;
