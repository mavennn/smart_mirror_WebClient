import React from "react";

import Header from "./Header";

const HeaderContainer = ({ location, basketCount }) => (
  <Header location={location} basketCount={basketCount} />
);

export default HeaderContainer;
