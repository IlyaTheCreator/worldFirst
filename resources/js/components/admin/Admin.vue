<template>
    <div class="admin" v-if="loaded">
        <AdminNav />
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from '../../axios'

    import AdminNav from "./AdminNav";

    export default {
        name: "Admin",
        data() {
            return {
                loaded: false
            }
        },
        components: {
            AdminNav
        },
        created() {
            axios.get('login-check')
                .then(() => {
                    this.loaded = true
                })
                .catch(() => this.$router.push('admin-login'))
        }
    }
</script>

<style scoped>
    .admin {
        padding-top: 15px;
        min-height: 100vh;
        background: #957fef;
    }

    .container-flex {
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>
