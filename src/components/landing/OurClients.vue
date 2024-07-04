<template>
    <div id="our-clients">
        <h1>Clients</h1>
        <div class="client-logos">
            <swiper-container
                :autoplay="{ delay: 0, reverseDirection: true }"
                preventInteractionOnTransition="true"
                speed="5000"
                slidesPerView="5"
                space-between="50"
                loop="true"
                :injectStyles="[
                    `.swiper-wrapper {
                        transition-timing-function: linear !important;
                    }`
                ]"
            >
                <swiper-slide
                    v-for="client in clientsPart1"
                    :key="client"
                    :style="{ 'background-image': `url(${client})` }"
                >
                    <!-- <img :src="client" /> -->
                </swiper-slide>
            </swiper-container>
            <swiper-container
                autoplay-delay="0"
                preventInteractionOnTransition="true"
                speed="5000"
                slidesPerView="5"
                space-between="50"
                loop="true"
                :injectStyles="[
                    `.swiper-wrapper {
                    transition-timing-function: linear !important;
                    }`
                ]"
            >
                <swiper-slide
                    v-for="client in clientsPart2"
                    :key="client"
                    :style="{ 'background-image': `url(${client})` }"
                >
                    <!-- <img :src="client" /> -->
                </swiper-slide>
            </swiper-container>

            <div class="static-logos">
                <div
                    v-for="client in clientsPart1"
                    :key="client"
                    :style="{ 'background-image': `url(${client})` }"
                ></div>
            </div>
            <div class="static-logos">
                <div
                    v-for="client in clientsPart2"
                    :key="client"
                    :style="{ 'background-image': `url(${client})` }"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'
register()

const clients = [
    '/src/assets/images/client-logos/client-01.svg',
    '/src/assets/images/client-logos/client-02.svg',
    '/src/assets/images/client-logos/client-03.svg',
    '/src/assets/images/client-logos/client-04.svg',
    '/src/assets/images/client-logos/client-05.svg',
    '/src/assets/images/client-logos/client-06.svg',
    '/src/assets/images/client-logos/client-07.svg',
    '/src/assets/images/client-logos/client-08.svg',
    '/src/assets/images/client-logos/client-09.svg',
    '/src/assets/images/client-logos/client-10.svg',
    '/src/assets/images/client-logos/client-11.svg',
    '/src/assets/images/client-logos/client-12.svg'
]
const clientsPart1 = clients.slice(0, clients.length / 2)
const clientsPart2 = clients.slice(clients.length / 2, clients.length)
</script>

<style scoped lang="scss">
#our-clients {
    height: 100vh;
    background-color: $bgColor;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8em;

    & > h1 {
        font-size: 14rem;
        text-align: center;
    }

    .client-logos {
        swiper-slide {
            height: 8rem;
            background-position: center;
            background-repeat: no-repeat;
        }
        .static-logos {
            display: none;
        }
    }
}

@media (max-width: 1280px) {
    #our-clients {
        gap: 6rem;
        padding-top: 1.5rem;

        & > h1 {
            font-size: 10rem;
        }
        .client-logos {
            swiper-slide {
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: 66.6% 66.6%;
            }
        }
    }
}
@media (orientation: portrait) {
    #our-clients {
        padding: 1rem 0;

        & > h1 {
            font-size: 8rem;
        }
        .client-logos {
            display: flex;
            justify-content: center;
            gap: 1rem;
            height: 74%;

            swiper-container {
                display: none;
            }

            .static-logos {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 40%;
                height: 100%;

                & > div {
                    flex-basis: 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                }
            }
        }
    }
}

@media (max-width: 767px) and (orientation: portrait) {
    #our-clients {
        gap: 32px;

        & > h1 {
            font-size: 4.875rem;
        }
        .client-logos {
            height: 73%;

            .static-logos {
                & > div {
                    background-size: 60% 80%;
                }
            }
        }
    }
}
</style>
