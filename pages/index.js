import Head from "next/head";
import { fetchAPI } from "../lib/api";

export default function Home({ data }) {
  console.log("data", data);
  return (
    <div>
      <h1>Hello Next {data[0].text}</h1>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = await fetchAPI("/posts");
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}
