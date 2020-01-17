<script>
    import {onMount} from 'svelte';

    export let image, visit, source;
    let project;

    onMount(() => {
        if(image){
            project.style.background = `url('projects/${image}') 50% 50% / cover no-repeat`;
        }
    });

</script>

<style>
.project {
    background: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg') 50% 50% / cover no-repeat;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin: 0.1rem;
    width: 32em;
    height: 18em;
    display: flex;
    transition: 1s filter;
}
.project > a {
    background: #22222277;
    color: white;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 0.3s opacity;
    text-decoration: none;
}
.project > a:hover {
    opacity: 1;
}
@media (max-width: 512px){
    .project {
        width: 100vw;
        height: 56.3vw;
    }
}
</style>

<div class="project" bind:this={project}>
    <a target="_blank" href={visit}><i class="fas fa-external-link-alt fa-3x"></i></a>
    <a target="_blank" href={source}><i class="fab fa-github fa-3x"></i></a>
</div>