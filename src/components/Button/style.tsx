import { styled } from "styled-components";

export const PrimaryButton = styled.button`

    p{
        font-family: 'Poppins', sans-serif;
    }

    background: none;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 60px;
    border: 1px solid var(--grey);
    width: 100%;

    &:hover {
      background-color: var(--primary);
      border: none;
      transition: 400ms;
      p{
        color: var(--black);
      }
    }
`