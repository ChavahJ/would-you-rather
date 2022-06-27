import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="error-404">
      <h1>404 Error</h1>
      <p>Oops! We can't find that page.</p>
      <Link to="/">ET Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
