import { fetchAPI } from "../lib/api";
import Cards from "../components/card";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import TagList from "../components/TagList";
import Footer from "../components/Footer";
import Page from "./[menu]/[submenu]/[id]";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

export default function Home({
  data,
  menu_items,
  menu_sub_items,
  likeds,
  totalPosts,
}) {
  const tagList = [];
  const endPage = Math.ceil(totalPosts / 1000);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1640px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px)",
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 640px)",
  });

  menu_sub_items.map((key) => {
    tagList.push({
      tagId: key.subitem_id,
      Menu_ID: key.menu_item.Menu_ID,
      tagName: key.subitem_name,
      page: "index",
    });
  });

  function findLike(e, d) {
    if (e.status_id === d) {
      return e;
    }
  }

  const MobileLayout = (
    <div className="flex flex-col">
      <div className="w-screen fixed min-h-scren z-10 ">
        <Navbar menu_items={menu_items} />
        <TagList tags={tagList} />
      </div>

      <div className="flex flex-col mt-32 min-h-screen sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
        {data.map((d, i) => {
          return (
            <Cards
              key={i}
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
  );

  return (
    <>
      {/* {isMobile && MobileLayout} */}
      {MobileLayout}

      {/* {isDesktop && <div>Hello Desktop</div>}
      {isTablet && <div>Hello Tablet</div>} */}
    </>
  );
}

// export default function Home({ data }) {
//   // console.log("data", data);
//   return (
//     <div>
//       <Card author="Bhangu" />
//       <Pagination />
//       {/* <h1>Hello Next {data[0].text}</h1> */}
//     </div>
//   );
// }

export async function getStaticProps(context) {
  const limit = 1000;
  const start = 0;
  const end = 1;

  const startIndex = start * limit;
  const endIndex = end * limit;

  const menu_items = await fetchAPI("/menu-items");
  const menu_sub_items = await fetchAPI("/menu-sub-items");
  const likeds = await fetchAPI("/likeds");
  const path = "/tags?tag=" + "latest";
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

  const title = "The Status Wiki";
  const descr =
    "The Status Wiki is one of largest library of best status all around the world.You can find status as per your mood. Love,Attitude,Romantic,Hate etc. we've tried to cover every possible combination of various status ";
  const keywords =
    "Latest Status, Whatsapp Status, Instagram Status , Signal Status, Facebook Status, Romantic Status, Birthday Wishes Status";

  return {
    props: {
      data,
      menu_items,
      menu_sub_items,
      likeds,
      totalPosts,
      title,
      descr,
      keywords,
    },
    revalidate: 60,
  };
}
