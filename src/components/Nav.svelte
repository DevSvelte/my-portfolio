<script>
import {onMount} from 'svelte';

let jumpTo = () => {}
let active = false;

onMount(() => {
    jumpTo = (target) => {
        active = false;
        setTimeout(() => {
            document.getElementById(target).scrollIntoView();
        }, 200);
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
    border-bottom: 0.3rem solid navy;
    user-select: none;
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
li:first-child {
    display: none;
}
@media (max-width: 767px){
    ul {
        display: block;
        width: 100%;
    }
    li {
        width: 100%;
        height: 3rem;
        margin: 0;
        padding: 0;
        margin-top: 1px;
        background: #22222233;
    }
    li:hover {
        background: #22222266;
    }
    li:first-child {
        background: none;
        border: 0;
        display: flex;
    }
    .mobile-hidden {
        display: none;
    }
}
</style>

<nav>
    <ul>
        {#if active}
            <li on:click={() => active=false} ><i class="fas fa-times"></i></li>
        {:else}
            <li on:click={() => active=true}><i class="fas fa-bars"></i></li>
        {/if}
        <li class:mobile-hidden={!active} on:click={() => jumpTo("hero")}>Home</li>
        <li class:mobile-hidden={!active} on:click={() => jumpTo("about")}>About</li>
        <li class:mobile-hidden={!active} on:click={() => jumpTo("tools")}>Tools</li>
        <li class:mobile-hidden={!active} on:click={() => jumpTo("projects")}>Projects</li>
        <li class:mobile-hidden={!active} on:click={() => jumpTo("contact")}>Contact</li>
    </ul>
</nav>