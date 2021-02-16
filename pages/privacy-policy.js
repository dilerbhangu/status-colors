import { fetchAPI } from "../lib/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

function privacy_policy({ data, menu_items, menu_sub_items, likeds }) {
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
          <div className=" min-h-screen flex flex-col mx-8">
            <div className="divide-y-2 divide-gray-200flex ">
              <div className="text-center p-6 text-2xl text-gray-600">
                TheStatusWiki-Privacy Policy
              </div>
              <div></div>
            </div>

            <div className="py-4 text-gray-500 text-sm ">
              This privacy policy has been compiled to better serve those who
              are concerned with how their 'Personally identifiable information'
              (PII) is being used online. PII, as used in US privacy law and
              information security, is information that can be used on its own
              or with other information to identify, contact, or locate a single
              person, or to identify an individual in context. Please read our
              privacy policy carefully to get a clear understanding of how we
              collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">
                What personal information do we collect from the people that
                visit our website ?
              </p>
              <p className=" text-sm text-gray-500">
                We do not collect information from visitors of our site.
              </p>
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">Do we use 'cookies'?</p>
              <p className=" text-sm text-gray-500">
                We use cookies for tracking purposes Only. You can instruct your
                browser to refuse all cookies or to indicate when a cookie is
                being sent. Even, if you do not accept cookies, you can access
                all Service.
              </p>
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">Third party links</p>
              <p className=" text-sm text-gray-500">
                We do not include or offer third party products or services on
                our website.
              </p>
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">Google</p>
              <p className=" text-sm text-gray-500">
                We use Google AdSense Advertising on our website. Google, as a
                third party vendor, uses cookies to serve ads on our site.
                Google's use of the DART cookie enables it to serve ads to our
                users based on their visit to our site and other sites on the
                Internet. Users may opt out of the use of the DART cookie by
                visiting the Google ad and content network privacy policy.
              </p>
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">Copyright Policy</p>
              <p className=" text-sm text-gray-500">
                We respect the intellectual property rights of others. It is our
                policy to respond to any claim that Content posted on the
                Service infringes the copyright or other intellectual property
                infringement ("Infringement") of any person. If you believe in
                good faith that any material provided through the Service
                infringes upon your copyright, you may send notice to us (
                bhangutech@gmail.com ) requesting that the material or access to
                the material be removed, according to the Digital Millennium
                Copyright Act (“DMCA”),by providing the following information in
                writing (see 17 U.S.C 512(c)(3) and http://www.loc.gov/copyright
                for further details). The notice must include all of the
                following:{" "}
              </p>
              <p className=" text-sm text-gray-500">
                An electronic or physical signature of the copyright owner or
                person authorized to act on behalf of the copyright owner;
                sufficient identification of the allegedly infringing material;
                sufficient information as to the location of the allegedly
                infringing material so that it may be found and identified; the
                complainant’s name, address, telephone number and, if possible,
                an email address; and a detailed description of the alleged
                Infringement.
              </p>
              <p className=" text-sm text-gray-500">
                Please note that under Section 512(f) of the DMCA, any person
                who knowingly materially misrepresents that material or activity
                is infringing may be subject to liability.
              </p>
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">
                Changes To This Privacy Policy
              </p>
              <p className=" text-sm text-gray-500">
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes. Changes to this Privacy Policy are
                effective when they are posted on this page.
              </p>
            </div>

            <div className="py-4 flex flex-col">
              <p className=" text-lg text-gray-600">Contacting Us</p>
              <p className=" text-sm text-gray-500">
                If there are any questions regarding this privacy policy you may
                contact us using the information on{" "}
                <a
                  href="/contact-us"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Contact Page
                </a>{" "}
              </p>
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

export default privacy_policy;
