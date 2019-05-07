<template>
    <page id="aboutme" title="About Me" next="footer" >
        <div id="about" class="columns">
            <div class="column is-one-third">
                <img src="/img/icons/apple-icon-180x180.png" alt="">
            </div>
            <div class="column">
              <p class="has-text-justified">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate repellat maxime tenetur reprehenderit! A facilis soluta odio beatae sit omnis! Suscipit quibusdam consequatur hic! Minus dolores laboriosam possimus distinctio atque ab neque voluptate quae non iste veniam, a, quo hic? Deleniti quaerat itaque omnis dignissimos praesentium, ipsam nihil minima delectus expedita sapiente excepturi illo esse facere, cum modi aliquam accusantium consectetur voluptate magni nesciunt vel error natus nostrum. Fugiat explicabo adipisci aliquid odit ab doloremque ad eius, ex dicta sunt perspiciatis optio. Molestias quae natus sunt inventore? Ducimus voluptatum architecto fugiat enim porro. Quidem pariatur voluptatem ullam minima optio!
              </p>
              <p class="has-text-justified">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste perferendis doloribus accusantium rem velit fuga, consectetur odit, minus, laudantium maxime dicta placeat? Necessitatibus blanditiis at quo voluptatibus voluptatem saepe soluta deleniti possimus veritatis repellendus, architecto totam vero quos natus enim deserunt voluptatum! Unde sequi deserunt obcaecati, at odio accusamus, quibusdam explicabo quidem sint, blanditiis voluptate ad totam atque neque fuga soluta distinctio! Minus corrupti animi eos voluptatibus rerum explicabo eum expedita, labore aut exercitationem commodi eaque delectus in repellendus?
              </p>
              <p class="has-text-justified">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, unde quod impedit dicta id rem. Aut iste nostrum magni obcaecati ratione, distinctio illum molestiae accusantium sequi, commodi non ipsum eos praesentium omnis! Consectetur soluta quos est totam, placeat dolore repudiandae nam, assumenda corporis, culpa quae dolorum laudantium rem sequi! Odit inventore ut illum eum quae odio unde praesentium dolores debitis?
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
