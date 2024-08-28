import React, { useEffect } from "react";
import Cookies from "js-cookie";

const WithCookie = ({ children, cookieName, cookieValue }) => {
  useEffect(() => {
    Cookies.set(cookieName, cookieValue, { expires: 7 });
  }, [cookieName, cookieValue]);

  return <>{children}</>;
};

export default WithCookie;
