import React from "react";
import { Link, useLocation, useMatches } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = () => {
  const matches = useMatches();

  return (
    <nav className="flex items-center">
      {matches.map((match, index) => (
        <React.Fragment key={match.pathname}>
          {index > 0 && <FaChevronRight className="mx-2" />}
          <Link to={match.pathname} className="text-blue-600">
            {match.handle?.crumb ? match.handle.crumb() : match.pathname}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
