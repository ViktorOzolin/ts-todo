import React from "react";
import { useHistory } from "react-router";

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quasi
        optio nesciunt. Ex rerum vel eligendi asperiores tempore ducimus
        dignissimos atque, fugiat ipsum! Iure, harum similique quidem doloremque
        omnis laborum!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        К списку дел
      </button>
    </>
  );
};

export default AboutPage;
