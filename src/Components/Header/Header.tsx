import { Link, changeLocaleCode } from '@mongez/react-router';
import React from 'react'
import { trans } from "@mongez/localization";
import "../../Config/localization";
import "../../Config/index";
import styled from "styled-components";
import { current } from '@mongez/react';

export default function Header() {
  const StyledHeader = styled("header")`
  background:#ddd;
  padding:15px;
`
const ChangeLang = () => {
  const localeCode = current("localeCode" ) === "en" ? "ar" : "en";
  changeLocaleCode(localeCode);
console.log("heba")
}
  return (
    <StyledHeader>
      
            <ul>
            <Link to="/">
        <li>
          {trans("home")}
        </li>
        </Link>
        <Link to="/about">
        <li>
          
          {trans("about")}
        </li>
        </Link>
        <Link to="/contact">
        <li>
          {trans("contact")}
        </li>
        </Link>
        <button onClick={ChangeLang}>en</button>
      </ul>
    </StyledHeader>
  )
}
