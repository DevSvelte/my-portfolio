<script>
import {onMount} from 'svelte';

let jumpTo = () => {}

onMount(() => {
    jumpTo = (target) => {
        document.getElementById(target).scrollIntoView();
    }
});

</script>

<style>
nav {
    top: 0;
    position: sticky;
    display: flex;
    background: #332299;
    justify-content: center;
    z-index: 10;
}
ul {
    min-height: 3rem;
    min-width: 70%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}
li {
    margin: 0 0.5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    place-content: center;
    color: white;
}
li:hover {
    color: yellow;
    text-shadow: 0 0 1px yellow;
}
</style>

<nav>
    <ul>
        <li on:click={() => jumpTo("hero")}>Home</li>
        <li on:click={() => jumpTo("about")}>About</li>
        <li on:click={() => jumpTo("tools")}>Tools</li>
        <li on:click={() => jumpTo("projects")}>Projects</li>
        <li on:click={() => jumpTo("contact")}>Contact</li>
    </ul>
</nav>