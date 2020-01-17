<script>
import {onMount} from 'svelte';
import Button from './Button.svelte';

let scrollY, div;

let addY = () => {};
onMount(() => {
	addY = () => {
		div.style.marginTop = (scrollY*0.8)+'px';
	}
});
</script>

<style>
header {
	height: 100vh;
	background: #000020;
	color: #eeeeee;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
}
div {
	padding: 1rem;
	text-align: center;
}
h1 {
	font-weight: normal;
	cursor: pointer;
}
</style>

<svelte:window bind:scrollY={scrollY} on:scroll={addY}></svelte:window>
<header id="hero">
	<div bind:this={div}>
		<h1>Hello, I'm Sameer Tariq.</h1>
		<h1>I'm a full-stack web developer.</h1>

		<Button target='about' text='About Me' color="#eeeeee" />
	</div>
</header>