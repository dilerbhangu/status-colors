import Head from "next/head";
import { fetchAPI } from "../lib/api";
import Card from "../components/card";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";
import TagList from "../components/TagList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div class="grid grid-flow-row grid-cols-1">
        <div class="bg-red-500 fixed w-full">
          <Navbar />
          <TagList />
        </div>
        <div class="mt-28">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <Pagination />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
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

// export async function getStaticProps(context) {
//   const data = await fetchAPI("/posts");
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data },
//   };
// }
