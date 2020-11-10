import React from "react";

import HeaderLog from "./header/HeaderLog";
import HeaderNav from "./header/HeaderNav";
import HeaderNavWrapper from "./header/HeaderNavWrapper";
import HeaderWrapper from "./header/HeaderWrapper/HeaderWrapper";

export default function Header({ log, logOut }) {
  return (
    <HeaderWrapper>
      <HeaderNavWrapper>
        <HeaderNav />
      </HeaderNavWrapper>
      <HeaderLog log={log} logOut={logOut} />
    </HeaderWrapper>
  );
}
