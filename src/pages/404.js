import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <h2 className="bg-gray-700 md:text-2xl text-xl text-center mx-auto font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>

        <Link
          to="/"
          className="bg-jaffa-600 p-3 text-center mx-auto my-5 text-xl font-semibold "
        >
          Go to Home Page →
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
