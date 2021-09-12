import React from "react";

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
      <section className="flex flex-row justify-center">
        <div className="font-bold text-2xl md:text-4xl">
          <h1>Fill out the form and we will get back to you</h1>
        </div>
        <form action=""></form>
      </section>
    </Layout>
  );
}

export default ContactPage;
