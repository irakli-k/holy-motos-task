<template>
    <div id="landing-view">
        <landing-headings></landing-headings>
        <our-projects></our-projects>
        <our-works></our-works>
        <our-clients></our-clients>
        <our-Story></our-Story>
    </div>
</template>

<script setup>
import LandingHeadings from '@/components/landing/LandingHeadings.vue'
import OurProjects from '@/components/landing/OurProjects.vue'
import OurWorks from '@/components/landing/OurWorks.vue'
import OurClients from '@/components/landing/OurClients.vue'
import OurStory from '@/components/landing/OurStory.vue'
</script>

<style scoped lang="scss">
#landing-view {
    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;

    & > * {
        scroll-snap-align: start;
    }
}
</style>
