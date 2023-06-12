import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}