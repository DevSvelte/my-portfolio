<template>
    <page id="my-projects" title="My Projects" next="aboutme" background="#821354">
        <div id="projects">
            <div 
                v-for="(project, index) in projects"
                :key="index"
                :style="`color:#ffffffaa`"
            >
                <div class="snapshot" :style="`background: url(${project.img});background-size: cover;background-position: center`">
                    <a :href="project.github" target="_blank" class="github">
                        <i class="fab fa-github fa-3x"></i>
                    </a>
                </div>
                <a :href="project.link" target="_blank" class="is-link is-success">
                    <h1 class="mysubtitle">{{project.title}}</h1>
                </a>

            </div>
        </div>
    </page>
</template>
<script>
import Page from '@/components/Pages/Page/Page.vue';

export default {
    components: { Page },
    data: () => ({
        projects: [
            { img: '/img/projects/my-portfolio.png', github: '//github.com/imsamtar/my-portfolio', title: 'My Portfolio Website (This Site)', link: '//google.com'},
            { img: '/img/projects/my-todos.png', github: '//github.com/imsamtar/my-portfolio', title: 'My Todos App' , link: '//mytodos.ml'},
            { img: '/img/projects/hosterxml.png', github: '//github.com/imsamtar/hosterx.ml', title: 'HosterXML Web Hoster'  , link: '//google.com'},
            { img: '//', github: '//github.com/imsamtar', title: '#', link: '#'},
            { img: '//', github: '//github.com/imsamtar', title: '#', link: '#'},
            { img: '//', github: '//github.com/imsamtar', title: '#', link: '#'}
        ]
    })
}
</script>
<style scoped>
#projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 12px;
}
#projects > * {
    padding: 5px;
    background: var(--color-b);
    text-align: center;
    border-radius: 5px;
}

.snapshot {
    height: 180px;
    display: grid;
    filter: blur(2px);
}
.snapshot:hover { filter: blur(0); }
.snapshot > .github {
    opacity: 0;
    background: var(--color-b);
    display: grid;
    align-content: center;
    justify-content: center;
}
.snapshot > .github:hover {
    opacity: 0.95;
}

.mysubtitle {
    margin: 7px;
    font-size: 20px;
}
#projects > * > a {
    margin: 10px 0;
    border-radius: 4px;
    opacity: 0.6;
}
@media screen and (max-width: 600px){
    #projects {
        grid-gap: 5px;
    }
    #projects > * {
        border-radius: 0;
    }
}
</style>
