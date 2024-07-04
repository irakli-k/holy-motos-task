<template>
    <div id="landing-headings">
        <h1 @click="scrollTo('our-projects')">
            <span>Our</span> <span>Projects</span>
        </h1>
        <h1 @click="scrollTo('our-works')">
            <span>Our</span> <span>Works</span>
        </h1>
        <h1 @click="scrollTo('our-clients')">
            <span>Our</span> <span>Clients</span>
        </h1>
        <h1 @click="scrollTo('our-story')">
            <span>Our</span> <span>Story</span>
        </h1>
    </div>
</template>
<script setup>
function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>
<style scoped lang="scss">
#landing-headings {
    height: 100vh;
    padding: 6rem 2.5rem 3.5rem;
    background-color: $dimTextColor;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1 {
        font-size: min(24vh, 24vw);
        line-height: 0.9;
        cursor: pointer;
        user-select: none;

        span {
            display: inline-block;
        }

        span:first-child {
            color: $bgColor;
        }
        span:last-child {
            color: $accentColor;
        }
    }
}
@media (orientation: portrait) {
    #landing-headings {
        justify-content: flex-end;

        h1 {
            font-size: 20.5vw;
        }
    }
}
</style>
