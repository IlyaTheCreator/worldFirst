<template>
    <div class="new-template">
        <div class="container">
            <form @submit.prevent="submit">
                <label for="template">Выберите шаблон</label>
                <input required accept="text/html" type="file" @change="fileChange" id="template">
                <button type="submit">Загрузить</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from '../../../axios'

    export default {
        name: "NewTemplate",
        data() {
            return {
                template: null
            }
        },
        methods: {
            fileChange(e) {
                this.template = e.target.files[0]
            },
            submit() {
                const formData = new FormData()
                formData.append('template', this.template)

                axios.post('create-template', formData, { 'content-type': 'multipart/form-data' })
                    .then(() => this.$router.push('/admin/templates'))
                    .catch(() => alert('Ошибка'))
            }
        }
    }
</script>

<style scoped>
    .new-template .container {
        height: 500px;
        display: grid;
        place-content: center;
    }

    .new-template form {
        display: flex;
        flex-direction: column;
    }

    .new-template label {
        width: 300px;
        height: 300px;
        background: #3820E9;
        color: #fff;
        font-size: 30px;
        font-weight: bold;
        display: grid;
        place-content: center;
        text-align: center;
        cursor: pointer;
    }

    .new-template input {
        pointer-events: none;
        opacity: 0;
        position: relative;
        top: -30px;
    }

    .new-template button {
        align-self: flex-end;
        background: #4eb543;
        border: 0;
        width: 100%;
        padding: 15px 8px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .new-template button:focus {
        outline: none;
    }

    .new-template button:hover {
        background-color: #dc494c;
    }
</style>
