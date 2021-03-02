import { Router, useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";
import Cards from "../../components/card";
import Navbar from "../../components/Navbar";
import TagList from "../../components/TagList";
import Footer from "../../components/Footer";
import { useState } from "react";
import Pagination from "../../components/Pagination";

export default function Page({ data, menu_items, likeds, totalPosts }) {
  const router = useRouter();
  const endPage = Math.ceil(totalPosts / 6);

  // if (data !== undefined) {
  //   data = [...data];
  //   if (data.length > 0) {
  //     data = data[0].posts;
  //   }
  // }
  if (router.isFallback) return <div>Loading...</div>;

  const tagList = [];
  const sub_menu_items_filter = menu_items.filter(
    (menu_item) => menu_item.Menu_ID === router.query.menu
  );
  const sub_menu_items = sub_menu_items_filter[0].menu_sub_items;

  sub_menu_items.map((key) => {
    tagList.push({
      tagId: key.subitem_id,
      Menu_ID: router.query.menu,
      tagName: key.subitem_name,
      page: "",
    });
  });

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

        <div className="flex flex-col mt-32 min-h-screen">
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
      { params: { menu: "status", submenu: "alone" } },
      { params: { menu: "status", submenu: "latest" } },
    ],
    // fallback: false,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const limit = 6;
  const start = 0;
  const end = 1;

  const startIndex = start * limit;
  const endIndex = end * limit;

  const menu_items = await fetchAPI("/menu-items");
  const likeds = await fetchAPI("/likeds");
  const path = "/tags?tag=" + params.submenu;
  // const data = await fetchAPI(path);
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
