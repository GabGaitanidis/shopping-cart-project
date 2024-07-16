import { Link } from "react-router-dom";
import "./styles/main.css";
export default function ErrorPage() {
  return (
    <div className="error-container">
      <h1>Oups!!</h1>
      <div>
        There might be a problem with our servers! Dont worry we will refund you
        as soon as possible!
      </div>
      Do not worry!Go to<Link to="/">Home page</Link> to shop more goodies!
    </div>
  );
}
