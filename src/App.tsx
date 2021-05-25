import { Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Logo from "./assets/logoPizzeria.png";
import Button, { BUTTON_SIZES } from "./components/common/Button/Button";

import "./App.scss";

function App() {
  return (
    <Layout>
      <div className="app__container">
        <img src={Logo} alt="logo" />
        <Link to="/Order">
          <Button buttonLabel="Let's go" size={BUTTON_SIZES.SM} />
        </Link>
      </div>
    </Layout>
  );
}

export default App;
