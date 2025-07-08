import styled from "styled-components";

const HomeDetails = styled.div`
    opacity: 0.8;
    z-index: 1;

    .container {
        display: flex;

        .content {
            display: flex;
            flex-direction: column;

            .title {
                display: flex;
                padding: 2rem 4rem 0rem 4rem;

                h4 {
                    font-size: 1.3rem;
                }
        }

        .content-cards {
            padding: 0rem 6rem 2rem 10rem;
            max-width: 90rem;

            display: flex;
            flex-wrap: wrap;

            :hover {
                transition: 1s;
                transform: scale(1.03);
            }

            a {
                width: 150px;
                height: 200px;
                margin-right: 5rem;
                margin-top: 2rem;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;

                background: var(--background);
                box-shadow: 1px 3px 9px 0px rgba(0, 0, 0, 0.25);
                border-radius: 12px;
                text-decoration: none;
                color: var(--font);
            }

            .columnDetails {
                width: 13rem;
                height: 200px;

                justify-content: center;
                display: flex;
                flex-wrap: wrap;
                color: var(--font);

                .cardDetails {
                    width: 150px;
                    height: 200px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;

                    background: var(--background-alt);
                    border-radius: 12px;

                    cursor: pointer;

                    .item-image {
                        object-fit: cover;
                        width: 64px;
                        height: 64px;

                        &:hover {
                            transform: scale(1);
                        }
                    }

                    h3, h4 {
                        font-family: Roboto;
                        font-weight: normal;
                        color: var(--font);
                        text-align: center;
                    }

                    h3 {
                        font-style: normal;
                        width: 100px;
                        font-size: 18px;
                        line-height: 21px;
                    }

                    h4 {
                        font-style: italic;
                        font-size: 14px;
                        line-height: 16px;
                    }
                }
            }
        }
    }
}
`;

export default HomeDetails;
