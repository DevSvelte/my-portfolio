<template>
    <page id="aboutme" title="About Me" next="footer" >
        <div id="about" class="columns">
            <div class="column is-one-third">
                <img src="/img/icons/apple-icon-180x180.png" alt="">
            </div>
            <p class="column has-text-justified">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius, officiis possimus dolore porro ipsam itaque suscipit tempore laborum, ab voluptate quidem sint blanditiis placeat molestias neque expedita asperiores dolorum qui? Eaque porro atque deleniti. Quisquam vel, reprehenderit optio, quam sit atque numquam nobis libero distinctio, omnis minima quibusdam tempore officia similique veritatis maiores asperiores delectus vitae voluptatum nihil dolores dolore ab. Facilis, dolor blanditiis, cumque dolore saepe tenetur doloremque soluta, hic dignissimos laboriosam a quisquam quibusdam? Excepturi, ea quaerat eligendi, labore qui similique hic dolorum quo distinctio, tempore natus fugiat? Nulla aliquid quam nihil iusto aut veniam, possimus animi obcaecati iure inventore asperiores! Natus voluptatibus, sunt est atque unde magni magnam laboriosam odio odit quas mollitia aliquam cum id eveniet laborum placeat consequatur accusamus dicta culpa modi repellendus hic? Id quidem iusto delectus vero, perferendis sit, tenetur necessitatibus eum suscipit quod veniam rerum dolorem corrupti nobis fugit at vel enim accusamus aperiam sequi ratione fuga minus repudiandae! Deserunt atque iusto non dignissimos nesciunt officia quidem distinctio in sit tenetur numquam, neque aperiam minus aliquam assumenda explicabo soluta laudantium quasi? Quasi sapiente impedit illum eaque fuga odio corporis, sit ipsum commodi eligendi velit ea ullam, itaque omnis maiores quibusdam exercitationem!
            </p>
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
