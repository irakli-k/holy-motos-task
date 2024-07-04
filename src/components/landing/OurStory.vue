<template>
    <div id="our-story">
        <div class="dim-overlay">
            <div class="story-text">
                <div class="short-texts">
                    <h1>Story</h1>
                    <p class="open-date-text">
                        On the first day of April, 3 years ago holistic design
                        agency Holy Motors opened for business.
                    </p>
                    <br />
                    <p>
                        <strong
                            >Holy Motors is a holistic design agency helping
                            brands leave their mark on culture.
                        </strong>
                    </p>
                </div>
                <div class="long-text">
                    <p>
                        With multidisciplinary teams of designers, developers,
                        strategists, writers, creators, and artists, we work
                        closely with founders and brand owners through all
                        stages of bringing their vision to life. <br /><br />
                        As most glorious human endeavours often are, Holy Motors
                        was created out of nothing when Georgia's renowned
                        creative duo Giorgi Avaliani and Nick Kumbari joined
                        their forces to be reborn. Bringing together years of
                        creative and design excellence.
                    </p>
                </div>
            </div>
            <div class="story-logos">
                <img
                    src="@/assets/images/story-logos/logo-01.svg"
                    alt="Trusted Partner Network"
                />
                <img
                    src="@/assets/images/story-logos/logo-02.svg"
                    alt="Warner Media"
                />
                <img
                    src="@/assets/images/story-logos/logo-03.svg"
                    alt="The Walt disney Studios"
                />
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
#our-story {
    height: 100vh;
    position: relative;
    background-image: url('@/assets/images/story-bg.png');
    background-size: cover;
    background-position: center center;

    .dim-overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        overflow: hidden;
        $contentWidth: 64rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-top: 8rem;

        .story-text {
            display: flex;
            gap: 3.25rem;
            width: $contentWidth;

            .short-texts,
            .long-text {
                flex-basis: 100%;
            }

            .short-texts {
                h1 {
                    font-size: 14rem;
                }
                p {
                    font-size: 1.5rem;
                    line-height: 1.35;

                    strong {
                        font-family: 'Inter Tight Semi Bold';
                        font-size: 2rem;
                        line-height: 0.75;
                        text-transform: uppercase;
                    }
                }
            }
            .long-text {
                font-size: 1.5rem;
                line-height: 1.47;
                padding-top: 1.25rem;
            }
        }
        .story-logos {
            width: $contentWidth;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}

@media (max-width: 1600px) {
    #our-story .dim-overlay .story-logos img {
        &:nth-child(1) {
            width: 133px;
        }
        &:nth-child(2) {
            width: 208px;
        }
        &:nth-child(3) {
            width: 255px;
        }
    }
}

@media (max-width: 1280px) {
    #our-story {
        .dim-overlay {
            $contentWidth: 49.25rem;

            .story-text {
                width: $contentWidth;

                .short-texts {
                    h1 {
                        font-size: 10.5rem;
                    }
                    p {
                        font-size: 1.125rem;

                        strong {
                            font-size: 1.5rem;
                        }
                    }
                }
                .long-text {
                    font-size: 1.125rem;
                }
            }
            .story-logos {
                width: $contentWidth;

                img {
                    &:nth-child(1) {
                        width: 95px;
                    }
                    &:nth-child(2) {
                        width: 149px;
                    }
                    &:nth-child(3) {
                        width: 182px;
                    }
                }
            }
        }
    }
}

@media (orientation: portrait) {
    #our-story {
        background-image: unset;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 40%;
            left: 0;
            right: 0;
            top: 0;
            bottom: auto;

            background-image: url('@/assets/images/story-bg.png');
            background-size: cover;
            background-position: center center;
        }

        .dim-overlay {
            padding: 0;
            // background-color: rgba(0, 0, 0, 0.5);
            background-image: linear-gradient(
                to top,
                #000,
                #000 60%,
                rgba(0, 0, 0, 0) 83%
            );
            z-index: 1;

            .story-text {
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: flex-end;
                gap: 2rem;
                padding: 3rem 1.5rem;

                .short-texts {
                    flex-basis: unset;

                    h1 {
                        font-size: 8rem;
                    }
                    p {
                        font-size: 1.875rem;

                        &.open-date-text {
                            margin: 1.5rem 0;
                        }

                        strong {
                            font-size: 2.625rem;
                            letter-spacing: 0.0625rem;
                            line-height: 1.05;
                        }
                    }
                }
                .long-text {
                    flex-basis: unset;
                    font-size: 1.875rem;
                }
            }

            .story-logos {
                display: none;
            }
        }
    }
}
@media (max-width: 767px) and (orientation: portrait) {
    #our-story {
        height: 65rem;

        &::after {
            height: 20%;
        }

        .dim-overlay {
            gap: 2rem;
            background-image: linear-gradient(
                to top,
                #000,
                #000 75%,
                rgba(0, 0, 0, 0) 95%
            );

            .story-text {
                padding: 1rem;
                gap: 0.75rem;

                .short-texts {
                    h1 {
                        font-size: 4em;
                    }
                    p {
                        font-size: 1.1875rem;

                        &.open-date-text {
                            margin: 1rem 0 0 0;
                        }
                        strong {
                            font-size: 1.5rem;
                        }
                    }
                }
                .long-text {
                    font-size: 1.1875rem;
                }
            }
            .story-logos {
                display: flex;
                flex-direction: column;
                gap: 1.375rem;
                margin: 1rem 0;
            }
        }
    }
}
</style>
