import styled from 'styled-components'

const NavigationDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    text-align: center;
    padding: 0 3rem;

    height: 90px;
    width: 100%;

    background: transparent;
    box-shadow: 0px 2px 23px rgba(0, 0, 0, 0.25);
    z-index: 100;

    input {
        border-radius: 25px;
        border: 1px solid var(--gray);
        width: 60rem;
        height: 40px;
        padding: 0 15px;
        background: transparent;
        color: var(--font);
        font-size: 15px;
        font-family: 'Poppins', sans-serif;

        @media (max-width: 1560px) {
            width: 55rem;
        }

        @media (max-width: 1550px) {
            width: 50rem;
        }

        @media (max-width: 1400px) {
            width: 40rem;
        }

        @media (max-width: 1230px) {
            width: 30rem;
        }

        @media (max-width: 1080px) {
            width: 20rem;
        }
    }

    input:focus {
        outline: none;
    }

    ::-webkit-input-placeholder {
        color: var(--gray-alt);
    }

    img {
        width: 280px;
    }

    i {
        font-size: 1.8rem;
    }

    .navItems {
        a {
            font-size: 2rem;
            font-weight: 400;
            margin: 0 20px 0 0;
            background: -webkit-linear-gradient(90deg, var(--purple), var(--blue));
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: var(--purple);
        }

        a:hover {
            transition: 2s;
            color: var(--purple);
        }

        span {
            color: var(--font);
            margin-top: 40px;
        }
    }
`

export default NavigationDetails