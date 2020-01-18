<script>
    import {onMount} from 'svelte';
    import Project from './Projects/Project.svelte';
    import Button from './Button.svelte';
    import {observer} from '../store.js';

    let section;

    onMount(() => {
        let projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.addEventListener('mouseenter', (e) => {
                projects.forEach(t => t.style.filter = 'blur(5px) grayscale(1)');
                e.srcElement.style.filter = 'blur(0)';
            });
            project.addEventListener('mouseleave', (e) => {
                projects.forEach(t => t.style.filter = 'blur(0) grayscale(0)');
            });
        });
        observer.observe(section);
    });

</script>

<style>
section {
    min-height: 85vh;
    display: flex;
    justify-content: center;
}
h1 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.container {
    padding: 0.1rem;
    padding-top: 3rem;
    width: 100%;
    font-family: 'Raleway';
}
.projects {
    border-radius: 0.3rem;
    overflow: hidden;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    width: 100%;
    min-height: 60vh;
    font-size: 16px;
}
@media (max-width: 1600px){
    .projects {
        font-size: 15px;
    }
}
@media (max-width: 1460px){
    .projects {
        font-size: 14px;
    }
}
@media (max-width: 1366px){
    .projects {
        font-size: 16px;
    }
}
</style>

<section id="projects" bind:this={section}>
    <div class="container">
        <h1>Some of my latest work</h1>
        <div class="projects">
            <Project title="Portfolio V2" image="portfolio-v2.jpg" source="https://github.com/imsamtar/" visit="https://dotme.ml" />
            <Project title="Portfolio V1" image="portfolio-v1.jpg" source="https://github.com/imsamtar/portfolio" visit="https://imsamtar.ml" />
            <Project title="HosterXML" image="hosterxml.jpg" source="https://github.com/imsamtar/hosterxml" visit="https://hosterx.ml" />
            <Project title="Gif Finder" image="gifinder.jpg" source="https://github.com/imsamtar/gifinder" visit="https://gifinder.netlify.com/" />
            <Project title="My Todos" image="mytodos-ga.jpg" source="https://github.com/imsamtar/my-todos" visit="https://my-todos-imsamtar.netlify.com/" />
        </div>
        <div style="text-align: center;">
            <Button target="contact" text="Next" color="#222222" />
        </div>
    </div>
</section>