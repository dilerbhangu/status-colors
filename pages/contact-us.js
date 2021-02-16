import Head from "next/head";
import { fetchAPI } from "../lib/api";
import Cards from "../components/card";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import Page from "./[menu]/[submenu]/[id]";

function contact_us({ data, menu_items, menu_sub_items, likeds }) {
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

  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className="w-screen fixed min-h-scren z-10 flex-none">
          <Navbar menu_items={menu_items} />
          {/* <TagList tags={tagList} /> */}
        </div>

        <div className="flex flex-col mt-16  flex-auto">
          <div className="bg-white flex flex-col">
            <div className="flex place-content-center text-2xl text-gray-500 p-4 underline">
              CONTACT US
            </div>
            <div className="flex place-content-center text-md text-black p-2 font-bold">
              bhangutech@gmail.com
            </div>
            <div className="flex place-content-center text-md text-black px-4">
              © Wireframe Design and Color Harmony of the website is strictly
              copyrighted to thestatuswiki.com
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

export default contact_us;
