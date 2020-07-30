<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App",
    }
</script>

<style>
     * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     }

    body {
        font-family: 'Montserrat', sans-serif;
        position: relative;
    }

    .container {
        max-width: 1440px;
        margin: 0 auto;
    }

    .container-flex {
        display: flex;
        justify-content: space-between;
    }
</style>
