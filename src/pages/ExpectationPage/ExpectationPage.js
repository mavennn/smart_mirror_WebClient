import React from "react";
import Emoji from "../../components/Emoji/Emoji";
import { Link, useHistory } from "react-router-dom";
import routes from "../../constants/routes";
import api from "../../api";

const ExpectationPage = () => {
  const history = useHistory();

  const handleContinueClick = () => {
    history.goBack();
  };

  const handleResetClick = () => {
    const userId = localStorage.getItem("userId");

    api.user.reset(userId).then((result) => {
      if (result) {
        history.push("/");
      }
    });
  };

  return (
    <div className="expectation">
      <div className="expectation__welcome_text">
        <h1 className="expectation">Привет!</h1>
        <p>
          Я - умное зеркало, я помогу тебе с выбором одежды
          <Emoji symbol="✌️" />
          <Emoji symbol="👖" />
          <Emoji symbol="👗" />
        </p>
      </div>
      <div className="expectation__buttons">
        <Link
          className="expectation__button"
          to={routes.HOME}
          onClick={() => handleResetClick()}
        >
          НАЧАТЬ ЗАНОВО
        </Link>
        <Link
          className="expectation__button"
          to=""
          onClick={() => handleContinueClick()}
        >
          ПРОДОЛЖИТЬ
        </Link>
      </div>
    </div>
  );
};

export default ExpectationPage;
