import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/sidebar.css";

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 500) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h4>Categories</h4>
        {window.innerWidth <= 600 && (
          <button onClick={() => setOpen(!isOpen)} className="toggleBtnClose">
            <p>&times;</p>
          </button>
        )}
        <Link to="/" className="links">
          All (20)
        </Link>
        <Link to="jewitems" className="links">
          Jewelery (4)
        </Link>
        <Link to="electronics" className="links">
          Electronics (6)
        </Link>
        <Link to="mens" className="links">
          Mens (4)
        </Link>
        <Link to="womens" className="links">
          Womens (6)
        </Link>
      </div>
      <div className="toggleBtnDiv">
        {window.innerWidth < 600 && (
          <button onClick={() => setOpen(!isOpen)} className="toggleBtn">
            &#9776;
          </button>
        )}
      </div>
    </div>
  );
}
