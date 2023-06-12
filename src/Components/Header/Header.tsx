import { Link } from '@mongez/react-router';
import React from 'react'
import styled from "styled-components";

export default function Header() {
  const StyledHeader = styled("header")`
  background:#ddd;
  padding:15px;
`
  return (
    <StyledHeader>
      
            <ul>
            <Link to="/">
        <li>
          Home
        </li>
        </Link>
        <Link to="/about">
        <li>
          About me
        </li>
        </Link>
        <Link to="/contact">
        <li>
          contact with me
        </li>
        </Link>
      </ul>
    </StyledHeader>
  )
}
