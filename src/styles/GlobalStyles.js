import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --primary: #2f2618;
        --secondary: #ff9d01;
        --tertiary: #ff005c;
        --shadows: #2b2b2c;
    }

    html {
        scroll-behavior: smooth;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #080808;
        font-family: "Montserrat",sans-serif;
        color: white;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: white;
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }
`;
