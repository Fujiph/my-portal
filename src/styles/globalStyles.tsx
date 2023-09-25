import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(/assets/panoramic-view-sunset-night.jpg), lightgray 50%;
        background-size: cover;
        background-size: 100vw 100vh;
    }
    :root {
        --primary: #F4AC3E;
        --secondary: #74D2EB;
        --background: #111111;
        --white: #FFFFFF;
        --grey: #CBCBCC;
    }
`

export default GlobalStyles;