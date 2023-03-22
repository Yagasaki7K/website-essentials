import styled from 'styled-components'

const DownloadDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 46rem;
    width: 91.2%;

    @media (max-width: 1440px) {
        margin-top: 43rem;
        margin-left: -7rem;
        width: 92.5%;
    }

    @media (max-width: 1366px) {
        width: 90.84%;
    }

    img {
        margin-top: 3rem;
        margin-bottom: -2rem;
        width: 25rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 400;
        padding: 30px 0 3px;
        font-weight: 600;
        letter-spacing: -.01em;
        color: ${props => props.theme.colors.switch};
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 300;
        margin-top: -2.5rem;
        color: ${props => props.theme.colors.fontcolor};
    }

    p {
        margin-top: -1rem;
        color: ${props => props.theme.colors.fontcolor};
    }

    a {
        color: ${props => props.theme.colors.essentials};
    }

    .archor {
        margin-top: 2.7rem;
        margin-bottom: -3rem;

        @media (max-width: 1366px) {
            margin-top: 2.7rem;
            margin-bottom: -6rem;
        }
    }

    .downloadContent {
        margin-top: 23rem;
        width: 175%;
        background: #7b4afc;

        @media (max-width: 1366px) {
            margin-top: 12em;
        }

        img {
            width: 10rem;
            margin-top: 0rem;
            margin-bottom: 1rem;
        }

        a {
            text-decoration: underline;
            color: ${props => props.theme.colors.alwaysWhite};
        }
    }

    .blogContent {
        width: 175%;

        background: ${props => props.theme.colors.essentials};
    }

    .downloadContent, .blogContent {
        h3, h2 {
            color: ${props => props.theme.colors.alwaysWhite};

            @media (min-width: 1367px) {
                padding: 2rem 0;
            }

            a {
                text-decoration: underline;
                color: ${props => props.theme.colors.alwaysWhite};
            }
        }

        p {
            color: ${props => props.theme.colors.alwaysWhite};
            padding: 0rem 20rem;

            @media (max-width: 1366px) {
                padding: 0rem 10rem;
            }
        }
    }
`

export default DownloadDetails
