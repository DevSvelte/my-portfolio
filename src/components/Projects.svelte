<script>
    import Project from './Projects/Project.svelte';
    import Button from './Button.svelte';

</script>

<style>
section {
    min-height: 90vh;
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
    padding-top: 2rem;
    width: 100%;
    font-family: cursive;
}
.projects {
    border-radius: 0.3rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 0.1rem;
}
@media (min-width: 1025px){
    .container {
        width: 85%;
    }
    .projects {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>

<section id="projects">
    <div class="container">
        <h1>Some of my latest work</h1>
        <div class="projects">
            <Project name="HTML" icon="b fa-html5" value="90" />
            <Project name="CSS" icon="b fa-css3" value="85" />
            <Project name="JavaScript" icon="b fa-js" value="80" />
            <Project name="HTML" icon="b fa-html5" value="90" />
            <Project name="CSS" icon="b fa-css3" value="85" />
            <Project name="JavaScript" icon="b fa-js" value="80" />
        </div>
        <div style="text-align: center;">
            <Button target="contact" text="Next" color="#222222" />
        </div>
    </div>
</section>