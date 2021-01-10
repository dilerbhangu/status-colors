import { useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";

export default function Page({ data }) {
  //   const router = useRouter();
  //   if (router.isFallback) return <div>Loading...</div>;
  return <div>{/* //       <h1>first page {data[0].text}</h1> */}</div>;
}

// export async function getStaticPaths(context) {
//   return {
//     paths: [{ params: { id: "1", tag: "english" } }],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const limit = "1";
//   const start = params.id - 1;
//   const path = "/posts?_start=" + start + "&_limit=" + limit;
//   const data = await fetchAPI(path);

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data },
//   };
// }
