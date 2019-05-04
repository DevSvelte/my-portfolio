<template>
    <page title="My Skills" next="true" >
        <div id="skills">
            <div 
                v-for="(skill, index) in skills"
                :key="index"
                :style="`color:#ffffffaa`"
            >
                <div class="icon" :style="`color:${skill.color}cc`">
                    <i :class="skill.icon"></i>
                </div>
                <h1 class="mysubtitle">{{skill.title}}</h1>
                <progress class="progress is-success" max="100" :value="skill.level"></progress>

            </div>
        </div>
    </page>
</template>
<script>
import Page from '@/components/Pages/Page/Page.vue';

export default {
    components: { Page },
    data: () => ({
        skills: [
            { color: '#e64c18', icon: 'fab fa-html5', title: 'HTML5', level: 90},
            { color: '#1758a7', icon: 'fab fa-css3', title: 'CSS3' , level: 85},
            { color: '#f7df1e', icon: 'fab fa-js', title: 'Venilla JS'  , level: 80},
            { color: '#563d7c', icon: 'fab fa-bootstrap', title: 'Bootstrap / Bulma', level: 74},
            { color: '#41b883', icon: 'fab fa-vuejs', title: 'VueJS', level: 78},
            { color: '#ffffff', icon: 'fab fa-github', title: 'GIT / Github', level: 75},
            { color: '#888888', icon: 'fas fa-feather', title: 'FeathersJS', level: 40},
            { color: '#3e863d', icon: 'fab fa-node', title: 'NodeJS', level: 50},
            { color: '#892bff', icon: 'fab fa-php', title: 'PHP', level: 40},
        ]
    })
}
</script>
<style scoped>
#skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 12px;
}
#skills > * {
    padding: 15px 10px 10px 15px;
    background: var(--color-b-2);
    text-align: center;
    border-radius: 5px;
}
#skills > * > .mysubtitle {
    font-size: 20px;
}
#skills > * > progress {
    margin: 10px 0;
    border-radius: 4px;
    opacity: 0.6;
}
.icon {
    padding: 30px;
    text-align: center;
    width: 100%;
    font-size: 55px;
}
@media screen and (max-width: 600px){
    #skills {
        grid-gap: 5px;
    }
    #skills > * {
        border-radius: 0;
    }
}
</style>
