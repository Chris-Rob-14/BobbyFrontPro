<template>
    <p> OK </p>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "RdvHomePage",
        props: {
            rdv: {
                type: Object,
            },
            },
        data() {
            return {
                title: ''
            }
        }
        beforeMount() {
            console.log('ok');
        }
    })

</script>