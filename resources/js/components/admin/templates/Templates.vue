<template>
    <div class="templates">
        <TemplatesNav />
        <router-view />
    </div>
</template>

<script>
    import TemplatesNav from './TemplatesNav'

    export default {
        name: "Templates",
        components: {
            TemplatesNav,
        },
    }
</script>

<style scoped>
    .templates {
        background: #fff;
        min-height: 100vh;
    }
</style>
