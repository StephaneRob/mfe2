import { homePath } from "../../routes";
import { Link, useParams } from "react-router-dom";

const Settings = () => {
  const { lang } = useParams();
  return (
    <div>
      <h1>Settings 2</h1>
      <Link to={homePath(lang)}>Home</Link>
    </div>
  );
};

export default Settings;
