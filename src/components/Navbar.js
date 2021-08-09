import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    let linksHeight = linksRef.current.getBoundingClientRect().height;
    // console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h3>Header</h3>
            </Link>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li>
                <Link to="/">First Component</Link>
              </li>
              <li>
                <Link to="/secondComp">Second Component</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
