import { Link } from "react-router-dom";
import "./styles/ordered.css";
export default function Ordered() {
  return (
    <div className="ordered-container">
      <h1>Thanks for buying!!</h1>
      <div>
        For more goodies, go to <Link to="/">Home page</Link> and buy more
        things!{" "}
      </div>
    </div>
  );
}
