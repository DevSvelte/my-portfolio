<template>
    <page id="aboutme" title="About Me" next="footer" >
        <div id="about" class="columns">
            <div class="column is-one-third">
                <img src="/img/icons/apple-icon-180x180.png" alt="">
            </div>
            <div class="column">
              <p class="has-text-justified">
                  Hi! Thanks for being here! My name is Sameer Tariq. I am a creative web develepor holding minimum 3 year experience. Excellent work is always my aim. I am here to provide services in a more reliable and effective mode. 100% quality work is guaranteed. Cordially waiting for a chance to surprise you.
              </p>
              <p class="has-text-justified">
                  You can hire me to create a website that is modern / attractive. So why waste any time just send me an email <a target="_blank" href="mailto://imsamtar@gmail.com" style="color: springgreen;">imsamtar@gmail.com</a> and i will respond you.
              </p>
              <p>
                  Thank You!
              </p>
            </div>
        </div>
    </page>
</template>
<script>
import Page from '@/components/Pages/Page/Page.vue';

export default {
    components: { Page }
}
</script>
<style scoped>
.columns > .is-one-third {
    display: grid;
    place-items: center;
}
.columns > .column > img {
    border-radius: 50%;
}
</style>
