<template>
    <div id="our-projects">
        <custom-swiper
            :fullscreen="false"
            :slidesArr="swiperContentArr"
        ></custom-swiper>
    </div>
</template>

<script setup>
import CustomSwiper from '@/components/CustomSwiper.vue'

const swiperContentArr = [
    // img path needs to be absolute
    {
        title: 'City Mall',
        subtitle:
            'City Mall is a shopping destination that brings people together from all walks of life.',
        descriptionHTML:
            'To help visitors find precisely what they are looking for, we doubled down on multiple arrows in the original symbol, updated and expanded them into a navigation-friendly design system. <br/><br/><br/>Typography also got a bold upgrade integrating a custom Georgian adaptation of Pangram typeface.',
        imgUrl: '/src/assets/images/our-projects/slide-01.png'
    },
    {
        title: 'Neyco',
        subtitle:
            'Out of nothing, a new source of wealth - Neyco shines through.',
        descriptionHTML:
            "Whether it's trading cryptocurrencies or pawning your bitcoin wallets to get fast access to cash. <br/><br/>Inspired by the eternal Creation of Adam our photo series for Neyco website tries to reframe the struggle between old and new forces, and help the viewers reimagine brand new source of wealth.",
        imgUrl: '/src/assets/images/our-projects/slide-02.png'
    },
    {
        title: 'Kind & Noble',
        subtitle:
            'Out of nothing, if you get tired chewing on your daily fruits and veggies, you can now drink them.',
        descriptionHTML:
            "«Kind and Noble» or [ke-ti-li da pa-ti-o-sa-ni] in our native Georgian language isn't just a name! This noble beverage is made exclusively by mixing fresh fruit and vegetable purees to bring mother nature's kindness to humans in the most convenient form.",
        imgUrl: '/src/assets/images/our-projects/slide-03.png'
    }
]
</script>

<style scoped lang="scss">
#our-projects {
    height: 100vh;
}
</style>
