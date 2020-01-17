<script>
import {onMount} from 'svelte';

export let text, target, color;

let button;
onMount(() => {
	button.addEventListener('click', (e) => {
		document.getElementById(target).scrollIntoView();
	});
});
</script>

<style>
button {
    user-select: none;
	background: transparent;
	color: var(--color);
    border: 1px solid var(--color);
    height: 2rem;
	font-family: 'Raleway';
    margin: 2rem auto;
	outline: 0;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    overflow: hidden;
    transform: scale(1);
}
button > div {
    position: absolute;
    background: black;
    color: black;
    width: 100px;
    height: 0;
    opacity: 0.5;
    transform: translateX(-1rem) translateY(-1rem);
    transition: 0.7s height;
}
button:hover > div {
    height: 100px;
}
</style>

<button bind:this={button} style="--color: {color};"><span>{text}</span><div>.</div></button>
