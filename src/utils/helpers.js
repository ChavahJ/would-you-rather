import { useNavigate, useParams } from "react-router-dom";

export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ navigate, params }} />;
  };
  return ComponentWithRouterProp;
};
