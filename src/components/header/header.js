import React from "react";
import wsTest from "../../services/testws";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-block">
      <label>Web Data Collector</label>
      <Link to="/">
        <span>Main page</span>
      </Link>
      <Link to="/movies">
        <span>Movies</span>
      </Link>
      <Link to="/vkdata">
        <span>VK data</span>
      </Link>
      <Link to="/testdata">
        <span>Test data</span>
      </Link>
      <Link to="/dbwork/">
        <span>Задачи и посты</span>
      </Link>
      <Link to="/test-styles">
        <span>Тестирование стилей</span>
      </Link>
      {/* <button disabled onClick={() => wsTest()}>WS test</button> */}
    </div>
  );
};

export default Header;
