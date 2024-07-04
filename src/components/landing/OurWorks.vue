<template>
    <div id="our-works">
        <custom-swiper
            :fullscreen="true"
            :slidesArr="swiperContentArr"
            class="alt-color-theme"
        ></custom-swiper>
    </div>
</template>

<script setup>
import CustomSwiper from '@/components/CustomSwiper.vue'
const swiperContentArr = [
    // img path needs to be absolute
    {
        title: 'Megobar - Georgian Food Shop',
        descriptionHTML:
            'Friendliest food in the neighborhood <br/><br/>Megobar is a new chain of food shops wish a mission to make delicious Georgian food accessible to everyone around the world. Megobar (mdmn) means "a friend" in Georgian, and originally only referred to people you share a meal with, proving that food and friendship are colossally important to our culture.',
        imgUrl: '/src/assets/images/our-works/slide-01.png'
    },
    {
        title: 'Blauenstein Farm',
        descriptionHTML:
            'Blauenstein is a Swiss-Georgian company creating the finest meat products in pristine highlands of Racha, Georgia. With a culture of respect to nature and local traditions, Swiss-trained professionals and an absolute control over the entire chain of production, Blauenstein shops are always full of meat connoisseurs.',
        imgUrl: '/src/assets/images/our-works/slide-02.png'
    },
    {
        title: 'CCLA - Law Consulting Agency',
        descriptionHTML:
            'Out of nothing comes the brand new visual identity for CCLA, Tbilisi-based law consulting agency which uses creativity to open right doors for its clients.',
        imgUrl: '/src/assets/images/our-works/slide-03.png'
    },
    {
        title: null,
        descriptionHTML:
            "This is not Harper's Bazaar. The exclusive issue of Women From The Bazaar unites six trader women from Tbilisi's open-air markets. <br/><br/>In addition to working 70 hours a week, trader women are often synonymous with waist bags, which are used as self-made cash registers. In collaboration with Cosmo, a handmade accessories brand, we decided to launch an extraordinary fashion magazine about universal, everyday fashion.",
        imgUrl: '/src/assets/images/our-works/slide-04.png'
    }
]
</script>

<style scoped lang="scss">
#our-works {
    height: 100vh;
}
</style>
