import React from "react";
import Form from "../components/Contact/Form";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `nezalab`,
          `company`,
          `Neza Lab`,
          `agakoti`,
          "business china",
          "technology africa",
          "multinational",
          "neza lab",
          "agakoti vpn",
          "vpn china",
          "business consultancy",
          "Network Security",
          "E-Commerce",
          "finance",
          "startup china",
          "africa network Business",
        ]}
        title="Contact"
      />
      <section className="flex flex-col md:flex-row justify-center text-black my-4 m:my-10">
        <div className="md:w-1/2 my-4 md:my-16">
          <h1 className="text-3xl md:text-7xl font-semibold text-center ">
            Fill out the form and we will get back to you
          </h1>
          <h2 className="text-2xl md:text-4xl text-center font-bold my-6 md:my-10">
            🤝{" "}
            <span className="bg-jaffa-500 text-white p-2 rounded-xl">
              Network
            </span>{" "}
            with us!
          </h2>
        </div>
        <div className="md:w-1/2">
          <Form />
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
