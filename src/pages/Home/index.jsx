import SuperButton from "../../SuperButton";
import { settingPath } from "../../routes";
import { Link, useParams } from "react-router-dom";

const Home = () => {
  const { lang } = useParams();

  return (
    <div>
      <h1>Home 2</h1>
      <SuperButton>Hello</SuperButton>
      <div>
        <Link to={settingPath(lang)}>Settings</Link>
      </div>
    </div>
  );
};

export default Home;
