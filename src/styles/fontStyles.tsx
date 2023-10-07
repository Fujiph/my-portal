import { createGlobalStyle } from "styled-components";

const GlobalTextStyle = createGlobalStyle`
    h1, h2, h3{
        font-family: 'Poppins', sans-serif;
        color: var(--primary);
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-size: medium;
        color: var(--primary);
        margin: 0;
    }
`

export default GlobalTextStyle