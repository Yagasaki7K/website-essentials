import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background-color: ${(props) => props.theme.colors.bgcolor}
    }

    body::-webkit-scrollbar {
        width: 14px;
    /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: #15171b;
        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: #9278ec;
        /* color of the scroll thumb */
        border-radius: 20px;
        /* roundness of the scroll thumb */
        border: 3px solid #15171b;
        /* creates padding around scroll thumb */
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
`;
