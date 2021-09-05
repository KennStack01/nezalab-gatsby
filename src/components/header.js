import React from "react";
import Navbar from "./Navbar";

function Header() {
  // const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="bg-white shadow-sm">
      <Navbar />
    </header>
  );
}

export default Header;
