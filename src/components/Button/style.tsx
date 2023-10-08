import { styled } from "styled-components";

export const PrimaryButton = styled.button`
    background: none;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 60px;
    border: 1px solid var(--grey);
    width: 100%;
    margin-bottom: 2rem;

    &:hover {
      background-color: var(--primary);
      border: none;
      transition: 400ms;
      cursor: pointer;
      p{
        color: var(--black);
      }
    }
`