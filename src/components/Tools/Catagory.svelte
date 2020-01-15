<script>
    export let title;
</script>

<style>
.tools {
    display: grid;
    grid-gap: 0.1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    overflow: hidden;
    border-radius: 0.3rem;
    margin: 0.1rem;
}
h3 {
    font-weight: 700;
    margin-bottom: 0.1rem;
}
@media (min-width: 1025px){
    .tools {
        border-radius: 0.3rem;
    }
}
</style>

<h3>{title}</h3>
<div class="tools">
    <slot></slot>
</div>
