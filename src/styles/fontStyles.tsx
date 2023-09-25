import { createGlobalStyle } from "styled-components";

const GlobalTextStyle = createGlobalStyle`
    h1, h2, h3, p{
        font-family: 'Poppins', sans-serif;
        color: var(--primary);
    }
`

export default GlobalTextStyle