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
    <header className=" hadow-sm top-0 sticky md:backdrop-filter md:backdrop-blur-xl backdrop-brightness-75">
      <Navbar />
    </header>
  );
}

export default Header;
