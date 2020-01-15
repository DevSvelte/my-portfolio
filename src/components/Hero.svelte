<script>
import Button from './Button.svelte';

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

<header id="hero">
	<div>
		<h1>Hello, I'm Sameer Tariq.</h1>
		<h1>I'm a full-stack web developer.</h1>

		<Button target='about' text='About Me' color="#eeeeee" />
	</div>
</header>