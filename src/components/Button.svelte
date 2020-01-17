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
    height: 2.5rem;
	font-family: 'Raleway';
    margin: 2rem auto;
	outline: 0;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    overflow: hidden;
    transform: scale(1);
    border-radius: 0.3rem;
    min-width: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.9rem;
    background-image: linear-gradient( 45deg,transparent 50%, var(--color) 50%);
    background-size: 300%;
    background-position: left;
    transition: background-position 1s, color 0.5s 0.5s;
}
button:hover {
    background-position: right;
}
button:hover > span {
    filter: invert(0%);
    border-bottom: 1px solid var(--color);
    animation: 0.5s invertColor forwards;
}
@keyframes invertColor {
    0% {
        filter: invert(0%);
    }
    70% {
        filter: invert(0%);
    }
    100% {
        filter: invert(100%);
    }
}
</style>

<button bind:this={button} style="--color: {color};"><span>{text}</span></button>
