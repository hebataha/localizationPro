import React from 'react'
import styled from "styled-components";

export default function Header() {
  const StyledHeader = styled("header")`
  background:#ddd;
  padding:15px;
  git init
  
`
  return (
    <StyledHeader>
      
            <ul>
        <li>
          home
        </li>

        <li>
          about me
        </li>
        <li>
          contact with me
        </li>
      </ul>
    </StyledHeader>
  )
}
