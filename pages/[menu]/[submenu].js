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
  const endPage = Math.ceil(totalPosts / 1000);

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

        <div className="flex flex-col mt-32 min-h-screen sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
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
          {/* <div className="flex">
            <Pagination endPage={endPage} />
          </div> */}
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
      { params: { menu: "status", submenu: "attitude" } },
      { params: { menu: "status", submenu: "sad" } },
      { params: { menu: "status", submenu: "love" } },
      { params: { menu: "status", submenu: "hate" } },
      { params: { menu: "status", submenu: "cute" } },
      { params: { menu: "status", submenu: "miss_you" } },
      { params: { menu: "status", submenu: "cry" } },
      { params: { menu: "status", submenu: "pain" } },
      { params: { menu: "status", submenu: "hurt" } },
      { params: { menu: "status", submenu: "angry" } },
      { params: { menu: "status", submenu: "sorry" } },
      { params: { menu: "status", submenu: "cheat" } },
      { params: { menu: "status", submenu: "flirt" } },
      { params: { menu: "status", submenu: "breakup" } },
      { params: { menu: "status", submenu: "life" } },
      { params: { menu: "status", submenu: "faith" } },
      { params: { menu: "status", submenu: "gym" } },
      { params: { menu: "status", submenu: "busy" } },
      { params: { menu: "status", submenu: "exam" } },
      { params: { menu: "status", submenu: "rain" } },
      { params: { menu: "status", submenu: "crush" } },
      { params: { menu: "status", submenu: "funny" } },
      { params: { menu: "status", submenu: "music" } },
      { params: { menu: "status", submenu: "short" } },
      { params: { menu: "status", submenu: "selfie" } },
      { params: { menu: "status", submenu: "single" } },
      { params: { menu: "status", submenu: "emotional" } },
      { params: { menu: "status", submenu: "devotional" } },
      { params: { menu: "status", submenu: "technology" } },
      { params: { menu: "status", submenu: "school" } },
      { params: { menu: "status", submenu: "friends" } },
      { params: { menu: "status", submenu: "thanks" } },
      { params: { menu: "status", submenu: "naughty" } },
      { params: { menu: "status", submenu: "heart" } },
      { params: { menu: "status", submenu: "happiness" } },
      { params: { menu: "birthday", submenu: "girlfriend" } },
      { params: { menu: "birthday", submenu: "boyfriend" } },
      { params: { menu: "birthday", submenu: "mom" } },
      { params: { menu: "birthday", submenu: "dad" } },
      { params: { menu: "birthday", submenu: "brother" } },
      { params: { menu: "birthday", submenu: "sister" } },
      { params: { menu: "birthday", submenu: "son" } },
      { params: { menu: "birthday", submenu: "daughter" } },
      { params: { menu: "birthday", submenu: "wife" } },
      { params: { menu: "birthday", submenu: "husband" } },
      { params: { menu: "birthday", submenu: "bestfriend" } },
      { params: { menu: "birthday", submenu: "teacher" } },
      { params: { menu: "birthday", submenu: "student" } },
      { params: { menu: "birthday", submenu: "boss" } },
      { params: { menu: "festival", submenu: "christmas" } },
      { params: { menu: "festival", submenu: "holi" } },
      { params: { menu: "festival", submenu: "diwali" } },
      { params: { menu: "festival", submenu: "newyear" } },
      { params: { menu: "motivational", submenu: "elonmusk" } },
    ],
    // fallback: false,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const limit = 1000;
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
    " status for whatsapp,instagram,fb,signal,snapchat-The Status Wiki";
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
