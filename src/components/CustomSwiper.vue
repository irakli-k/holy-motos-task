<template>
    <swiper-container
        :class="props.fullscreen ? 'full-screen' : 'half-and-half'"
        loop="true"
        navigation="true"
        pagination="true"
        space-between="50"
    >
        <swiper-slide v-for="(slide, ind) in slidesArr" :key="slide.imgUrl">
            <div
                class="img-container"
                :style="{ 'background-image': `url(${slide.imgUrl})` }"
            >
                <div class="slide-index">{{ ('0' + (ind + 1)).slice(-2) }}</div>
                <h2 v-if="slide.title" class="slide-title">
                    {{ slide.title }}
                </h2>
            </div>
            <div class="slide-desc-container">
                <h3
                    v-if="slide.subtitle && !props.fullscreen"
                    class="slide-subtitle"
                >
                    {{ slide.subtitle }}
                </h3>
                <p
                    v-if="slide.descriptionHTML"
                    class="slide-desc"
                    v-html="slide.descriptionHTML"
                ></p>
            </div>
        </swiper-slide>
    </swiper-container>
</template>

<script setup>
import { register } from 'swiper/element/bundle'
register()

const props = defineProps({
    fullscreen: Boolean,
    slidesArr: Array
})
</script>

<style scoped lang="scss">
$horPadding: 2.4375rem;
swiper-container {
    --swiper-pagination-top: #{$horPadding};
    --swiper-pagination-bottom: auto;
    --swiper-theme-color: #{$accentColor};
    --swiper-pagination-bullet-inactive-color: #{$dimTextColor};
    --swiper-navigation-color: #{$textColor};
    ---swiper-pagination-bullet-height: 0.5rem;
    --swiper-navigation-size: 1.875rem;
    height: 100%;
    padding: 6.25rem 2.5rem;
    background-color: $bgColor;

    &::part(button-prev),
    &::part(button-next) {
        width: var(--swiper-navigation-size);
        padding: 0.5rem;
        box-sizing: border-box;
        background-color: $accentColor;
        //thicken default arrow
        stroke: $textColor;
        stroke-width: 0.1rem;
    }

    &::part(pagination) {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding: 0 $horPadding;
        box-sizing: border-box;
        margin: 0;
    }

    &::part(bullet),
    &::part(bullet-active) {
        flex: 1;
        border-radius: 0;
        opacity: 1;
        margin: 0;
    }

    swiper-slide {
        .img-container {
            height: 100%;
            background-size: cover;
            background-position: center;

            .slide-index {
                position: absolute;
                font-family: 'Mango Grotesque Bold';
                font-size: 2.25rem;
                color: $accentColor;
            }

            .slide-title {
                position: absolute;
                right: 0;
                bottom: 0;
                background-color: $bgColor;
                color: $textColor;
                font-size: 6.875rem;
                max-width: 37%;
                line-height: 0.9;
                padding: 1.875rem 0 0 1.875rem;
                margin: 0 -0.0625rem -1.125rem 0;
                z-index: 1;
            }
        }

        .slide-desc-container {
            .slide-desc {
                line-height: 1.35;
            }
        }
    }

    &.half-and-half {
        &::part(pagination) {
            width: 50%;
            right: 0;
            left: auto;
        }

        &::part(button-prev),
        &::part(button-next) {
            top: auto;
            bottom: 1.5rem;
        }

        &::part(button-next) {
            left: auto;
            right: 25%;
        }
        &::part(button-prev) {
            left: auto;
            right: calc(25% + var(--swiper-navigation-size) + 1rem);
        }

        swiper-slide {
            display: flex;

            .img-container {
                position: absolute;
                width: 50%;
                left: auto;
                right: 0;

                .slide-index {
                    bottom: 1.125rem;
                    top: auto;
                    left: $horPadding;
                    right: auto;
                }

                .slide-title {
                    color: $dimTextColor;
                    max-width: 48%;
                }
            }

            .slide-desc-container {
                color: $dimTextColor;
                width: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-right: $horPadding;

                .slide-subtitle {
                    font-family: 'Inter Tight Semi Bold';
                    font-size: 2.25rem;
                }

                .slide-desc {
                    font-size: 2.25rem;
                }
            }
        }
    }

    &.full-screen {
        &::part(button-prev),
        &::part(button-next) {
            top: 5.5rem;
            bottom: auto;
        }

        &::part(button-next) {
            left: auto;
            right: $horPadding;
        }
        &::part(button-prev) {
            left: auto;
            right: calc($horPadding + var(--swiper-navigation-size) + 1rem);
        }

        swiper-slide {
            .img-container {
                width: 100%;
                .slide-index {
                    top: 3.875rem;
                    left: calc($horPadding - 0.0625rem);
                }
            }

            .slide-desc-container {
                height: 74%;
                width: 100%;
                position: absolute;
                bottom: 0;
                background-image: linear-gradient(
                    to top,
                    #000,
                    rgba(0, 0, 0, 0.57) 50%,
                    rgba(0, 0, 0, 0) 100%
                );
                display: flex;
                align-items: end;

                .slide-desc {
                    display: block;
                    max-width: 45%;
                    padding: 0 0 3rem $horPadding;
                    font-size: 1.5rem;
                }
            }
        }
    }

    &.alt-color-theme {
        background-color: $accentColor;

        &::part(button-prev),
        &::part(button-next) {
            background-color: $bgColor;
        }

        .img-container {
            .slide-index {
                color: $bgColor;
            }

            .slide-title {
                background-color: $accentColor;
            }
        }
    }
}

@media (max-width: 1280px) {
    swiper-container {
        padding: 3rem 1.5rem;
        --swiper-pagination-top: 1.875rem;
        --swiper-pagination-bullet-height: 3px;

        swiper-slide {
            .img-container {
                .slide-title {
                    font-size: 4.5rem;
                    margin-bottom: -0.75rem;
                }
            }
        }

        &.half-and-half {
            swiper-slide {
                .slide-desc-container {
                    .slide-desc {
                        font-size: 1.75rem;
                    }
                }
            }
        }
        &.full-screen {
            swiper-slide {
                .slide-desc-container {
                    .slide-desc {
                        font-size: 1.0625rem;
                    }
                }
            }
        }
    }
}

@media (orientation: portrait) {
    //  and (max-width: 1280px)
    swiper-container {
        --swiper-pagination-bullet-height: 0.3125rem;
        --swiper-navigation-size: 3rem;

        &::part(button-prev),
        &::part(button-next) {
            padding: 1.0625rem;
        }

        &.half-and-half {
            &::part(pagination) {
                width: 100%;
            }

            &::part(button-prev),
            &::part(button-next) {
                top: auto;
                bottom: 48.5%;
            }

            swiper-slide {
                display: flex;
                flex-direction: column;

                .img-container {
                    width: 100%;
                    height: 54%;

                    .slide-index {
                        left: calc($horPadding - 0.0625rem);
                        font-size: 3.25rem;
                    }
                    .slide-title {
                        max-width: 24%;
                    }
                }

                .slide-desc-container {
                    width: 100%;
                    height: 46%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 1.5rem 0 0 0;

                    .slide-subtitle {
                        padding-right: 25%;
                    }

                    .slide-desc {
                        font-size: 2rem;
                        line-height: 1.2;
                    }
                }
            }
        }

        &.full-screen {
            &::part(button-prev),
            &::part(button-next) {
                bottom: 1rem;
                top: auto;
            }
            &::part(button-next) {
                right: 50%;
                left: auto;
            }
            &::part(button-prev) {
                right: calc(50% + var(--swiper-navigation-size) + 1rem);
            }

            swiper-slide {
                .img-container {
                    .slide-index {
                        font-size: 3.25rem;
                        bottom: 0.5rem;
                        top: auto;
                    }
                    .slide-title {
                        max-width: 48%;
                    }
                }
                .slide-desc-container {
                    // display: none;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    bottom: auto;
                    left: 0;
                    right: 0;
                    align-items: start;
                    padding: 3.5rem $horPadding 10rem;

                    background-image: linear-gradient(
                        to bottom,
                        rgba(0, 0, 0, 0.7),
                        rgba(0, 0, 0, 0) 100%
                    );

                    .slide-desc {
                        max-width: unset;
                        padding: 0;
                        font-size: 1.75rem;
                    }
                }
            }
        }
    }
}

@media (max-width: 767px) and (orientation: portrait) {
    swiper-container {
        --swiper-pagination-top: 0.875rem;
        --swiper-pagination-bullet-height: 3px;
        --swiper-navigation-size: 1.5rem;
        $horPadding: 0.875rem;

        &::part(pagination) {
            gap: 0.375rem;
            padding: 0 $horPadding;
        }

        &::part(button-prev),
        &::part(button-next) {
            padding: 0.375rem;
        }

        swiper-slide {
            .img-container {
                .slide-index {
                    font-size: 1.875rem !important;
                    left: $horPadding !important;
                    right: auto !important;
                }
            }
        }

        &.half-and-half {
            padding: 1.5rem 0.75rem;

            &::part(button-prev),
            &::part(button-next) {
                top: 2.5rem;
            }

            &::part(button-next) {
                right: $horPadding;
                left: auto;
            }
            &::part(button-prev) {
                right: calc(
                    $horPadding + var(--swiper-navigation-size) + 0.75rem
                );
                left: auto;
            }

            swiper-slide {
                .img-container {
                    height: 42%;

                    .slide-index {
                        left: $horPadding;
                        top: 1.375rem;
                        bottom: auto;
                    }

                    .slide-title {
                        max-width: 50%;
                        padding: 0.5rem 0 0 0.625rem;
                        font-size: 3.75rem;
                        margin-bottom: -0.5625rem;
                    }
                }
                .slide-desc-container {
                    height: 58%;
                    padding: 0.75rem 0;

                    .slide-subtitle {
                        font-size: 1.1875rem;
                        padding: 0;
                    }
                    .slide-desc {
                        font-size: 1.25rem;
                        line-height: 1.35;
                    }
                }
            }
        }
        &.full-screen {
            padding: 3.5rem 0.75rem;

            &::part(button-next) {
                right: 57%;
                left: auto;
            }
            &::part(button-prev) {
                right: calc(57% + var(--swiper-navigation-size) + 0.75rem);
                left: auto;
            }

            swiper-slide {
                .img-container {
                    .slide-title {
                        max-width: 55% !important;
                        padding: 1rem 0 0 0.625rem;
                        font-size: 2.25rem;
                        margin-bottom: -0.375rem;
                    }
                }

                .slide-desc-container {
                    padding: 1.875rem $horPadding;

                    .slide-desc {
                        font-size: 1.04rem;
                    }
                }
            }
        }
    }
}
</style>
