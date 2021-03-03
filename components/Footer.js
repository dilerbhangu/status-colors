import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  function btnClick(e) {
    // console.log("footer", e.target.id);
    if (e.target.id === "privacy") {
      router.push("/privacy-policy");
    } else if (e.target.id === "contact_us") {
      router.push("/contact-us");
    } else if (e.target.id === "site_map") {
      router.push("/sitemap");
    }
  }

  return (
    <>
      <div className="w-screen flex p-4 bg-white justify space-x-4 justify-end transform rotate-180 shadow-lg ">
        <div
          className="text-sm font-medium underline  transform rotate-180 cursor-pointer md:p-2"
          id="contact_us"
          onClick={(e) => btnClick(e)}
        >
          CONTACT US
        </div>
        {/* <div
          className="text-sm font-medium underline  transform rotate-180 cursor-pointer md:p-2"
          id="site_map"
          onClick={(e) => btnClick(e)}
        >
          SITE MAP
        </div> */}
        <div
          className="text-sm font-medium underline transform rotate-180 cursor-pointer md:p-2"
          id="privacy"
          onClick={(e) => btnClick(e)}
        >
          PRIVACY POLICY
        </div>
      </div>
    </>
  );
}

export default Footer;
