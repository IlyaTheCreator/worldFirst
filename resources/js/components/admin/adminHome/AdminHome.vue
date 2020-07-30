<template>
    <div>
        <Filters v-if="user.role === 'admin'" />
        <Table v-if="user.role === 'admin'" />
        <Applications v-else-if="user.role === 'operator'" />
    </div>
</template>

<script>
    import Filters from './Filters'
    import Table from './table/Table'
    import Applications from './Applications'

    export default {
        name: "AdminHome",
        data() {
            return {
                user: {}
            }
        },
        components: {
            Filters,
            Table,
            Applications,
        },
        created() {
            this.getUser().then(res => this.user = res.data)
        }
    }
</script>

<style scoped>

</style>
