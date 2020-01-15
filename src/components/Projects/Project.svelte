<script>
    import {onMount} from 'svelte';

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
    });

</script>

<style>
.project {
    background: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    height: 300px;
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
/* div:hover:before {
    position: absolute;
    color: white;
    content: "Hello World";
    min-height: 300px;
    background: #22222277;
    min-height: 400px;
    transition: 2s all;
} */
</style>

<div class="project" style="background: https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg;">
    <a href="/">Details</a>
    <a href="/"><i class="fab fa-github fa-3x"></i></a>
</div>