import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        background-image: url('/assets/panoramic-view-sunset-night.jpg');
        background-size: cover;
    }
    :root {
        --primary: #F4AC3E;
        --secondary: #74D2EB;
        --background: "public/assets/panoramic-view-sunset-night.jpg";
        --white: #FFFFFF;
        --grey: #CBCBCC;
    }

`

export default GlobalStyles;