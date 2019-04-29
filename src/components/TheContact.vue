<template>
    <page title="Leave a message for me" id="contact" next="footer" :onecolumn="true" :pink="true">
        <div class="notification is-dark has-text-primary" v-for="i in 6" :key="i">
            <div class="notification-content columns has-text-white">
                <h2 class="column is-2">HTML5</h2>
                <progress class="progress is-success" value="80" max="100"></progress>
            </div>
        </div>
    </page>
</template>
<script>
import Page from '@/components/Page.vue';

export default {
    components: {
        Page
    }
}
</script>
<style scoped>
.notification.is-dark {
    background: transparent;
    margin: 0;
    padding-top: 5px;
}
h2.column {
    font-size: 20px;
    font-weight: bold;
}
progress.progress {
    align-self: center;
}
</style>
