import { Router, useRouter } from "next/router";
import { fetchAPI } from "../../../lib/api";
import Cards from "../../../components/card";
import Navbar from "../../../components/Navbar";
import TagList from "../../../components/TagList";
import Footer from "../../../components/Footer";
import { useState, useEffect } from "react";
import Pagination from "../../../components/Pagination";

export default function Page({ data, menu_items, likeds, totalPosts }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const endPage = Math.ceil(totalPosts / 1000);

  const tagList = [];
  const sub_menu_items_filter = menu_items.filter(
    (menu_item) => menu_item.Menu_ID === router.query.menu
  );
  const sub_menu_items = sub_menu_items_filter[0].menu_sub_items;

  if (router.isFallback) return <div>Loading...</div>;

  sub_menu_items.map((key) => {
    tagList.push({
      tagId: key.subitem_id,
      Menu_ID: router.query.menu,
      tagName: key.subitem_name,
      page: "",
    });
  });

  // const scroll = () => {
  //   window.scrollTo(0, 0);
  // };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subMenu = router.query.submenu;
  const menu = router.query.menu;

  function findLike(e, d) {
    if (e.status_id === d) {
      return e;
    }
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="w-screen fixed min-h-scren z-10">
          <Navbar menu_items={menu_items} />
          <TagList tags={tagList} />
        </div>

        <div className="flex flex-col mt-32 min-h-screen sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
          <div className="flex flex-grow flex-col">
            {/* {scroll} */}
            {data.map((d) => {
              return (
                <Cards
                  key={d.id}
                  id={d.id}
                  text={d.text}
                  like={likeds.find((e) => findLike(e, d.id))}
                />
              );
            })}
          </div>
          <div className="flex">
            <Pagination endPage={endPage} />
          </div>
        </div>

        <div className=" w-screen left-0 bottom-0 z-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { menu: "status", submenu: "alone", id: "1" } },
      { params: { menu: "status", submenu: "latest", id: "1" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const limit = 1000;
  const start = params.id - 1;
  const end = params.id;

  const startIndex = start * limit;
  const endIndex = end * limit;

  const menu_items = await fetchAPI("/menu-items");
  const likeds = await fetchAPI("/likeds");
  const path = "/tags?tag=" + params.submenu;
  const dataTemp = await fetchAPI(path);

  const postData = dataTemp[0].posts;
  const postDatatemp = postData.slice(startIndex, endIndex);
  const data = postDatatemp;
  const totalPosts = postData.length;

  if (!data) {
    return {
      notFound: true,
    };
  }

  const title =
    params.submenu +
    " status for whatsapp,instagram,fb,signal,snapchap-The Status Wiki";
  const descr =
    "Best " +
    params.submenu +
    " status. All your favourite " +
    params.submenu +
    " status in english for whatsapp,fb,instagram,signal,telegram and snapchat";
  const keywords =
    params.submenu +
    " Status, " +
    params.submenu +
    " Status in english, " +
    "Best " +
    params.submenu +
    " Status," +
    "Ultimate " +
    params.submenu +
    " Status,";

  return {
    props: { data, menu_items, likeds, totalPosts, title, descr, keywords },
    revalidate: 60,
  };
}
