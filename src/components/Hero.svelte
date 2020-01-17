<script>
import {onMount} from 'svelte';
import Button from './Button.svelte';

let scrollY, div;

let addY = () => {};
onMount(() => {
	addY = () => {
		div.style.marginTop = (scrollY*0.8)+'px';
		div.parentElement.style.backgroundPosition = "left, 0 "+(Math.max(scrollY*0.9 - 40, 0))+"px, right";
	}
});
</script>

<style>
header {
	height: 100vh;
	background-image: linear-gradient(45deg, #000022, #44442277), url(../bg.jpg), linear-gradient(#000022, #000022);
	background-repeat: no-repeat, no-repeat;
	background-position: left, center, right;
	background-size: cover, cover, cover;
	color: #eeeeee;
	display: flex;
	align-items: center;
	justify-content: center;
	user-select: none;
	overflow: hidden;
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