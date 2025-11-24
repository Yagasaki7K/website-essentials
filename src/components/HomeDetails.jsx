import styled from "styled-components";

const HomeDetails = styled.div`
    z-index: 1;

    .container {
        display: flex;
        min-height: calc(100vh - 90px);

        .content {
            display: flex;
            flex-direction: column;
            flex: 1;
            align-items: center;

            .title {
                display: flex;
                padding: 2rem 4rem 0rem 4rem;

                h4 {
                    font-size: 1.3rem;
                }
            }
        }

        .content-cards {
            padding: 2rem 4rem;
            max-width: 90rem;

            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 3rem 5rem;

            a {
                width: 150px;
                height: 200px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;

                background: var(--background);
                box-shadow: 1px 3px 9px 0px rgba(0, 0, 0, 0.25);
                border-radius: 12px;
                text-decoration: none;
                color: var(--font);

                transition: all 0.3s ease;
            }

            a:hover {
                transform: scale(1.03);
                box-shadow: 2px 6px 18px 0px rgba(0, 0, 0, 0.35);
            }

            .columnDetails {
                width: 13rem;
                height: 200px;

                justify-content: center;
                display: flex;
                flex-wrap: wrap;
                color: var(--font);

                .cardDetails {
                    position: relative;
                    overflow: hidden;
                    isolation: isolate;
                    --pointer-x: 0;
                    --pointer-y: 0;
                    --glow-opacity: 0;
                    --glow-scale: 3.4;
                    width: 150px;
                    height: 200px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;

                    & > :not(.cardGlow) {
                        position: relative;
                        z-index: 2;
                    }

                    background: var(--background-alt);
                    border-radius: 12px;
                    box-shadow: 1px 3px 9px 0px rgba(0, 0, 0, 0.25);

                    cursor: pointer;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                    transform-style: preserve-3d;

                    img {
                        border-radius: 50px;
                    }

                    .cardGlow {
                        position: absolute;
                        inset: -8px;
                        z-index: 0;
                        display: grid;
                        place-items: center;
                        filter: blur(28px) saturate(2) brightness(1.25);
                        opacity: var(--glow-opacity);
                        transform: translate(
                                        calc(var(--pointer-x) * 32px),
                                        calc(var(--pointer-y) * 32px)
                                )
                                scale(var(--glow-scale));
                        transition: opacity 0.22s ease, transform 0.18s ease;
                        pointer-events: none;

                        img {
                            width: 120px;
                            height: 120px;
                            object-fit: contain;
                            border-radius: 999px;
                            filter: saturate(2.2);
                        }
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        inset: 0;
                        border-radius: 12px;
                        background: radial-gradient(
                                        circle at calc(50% + var(--pointer-x) * 40%)
                                                calc(50% + var(--pointer-y) * 40%),
                                        color-mix(in srgb, var(--background-alt), transparent 20%),
                                        color-mix(in srgb, var(--font), transparent 90%)
                                );
                        opacity: 0.08;
                        pointer-events: none;
                        z-index: 1;
                    }

                    .item-image {
                        object-fit: cover;
                        width: 64px;
                        height: 64px;
                        border-radius: 12px;

                        transition: transform 0.2s ease, filter 0.2s ease;
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

                    &.animated-hover:hover {
                        transform: translateY(-4px) scale(1.02);
                        box-shadow: 2px 6px 18px 0px rgba(0, 0, 0, 0.35);
                        --glow-opacity: 0.7;

                        .item-image {
                            transform: translateY(-2px) scale(1.02);
                            filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.25));
                        }
                    }

                    &.static-hover {
                        --glow-scale: 2.5;

                        &:hover {
                            transform: translateY(-3px) scale(1.01);
                            box-shadow: 2px 6px 18px 0px rgba(0, 0, 0, 0.35);
                            --glow-opacity: 0.5;
                            --pointer-x: 0;
                            --pointer-y: 0;

                            .item-image {
                                transform: translateY(-1px) scale(1.01);
                                filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.25));
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

export default HomeDetails;
