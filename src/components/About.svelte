<script>
    import Button from './Button.svelte';
    import {onMount} from 'svelte';
    import {observer} from '../store.js';

    let section;

    onMount(() => {
        observer.observe(section);
    });
</script>

<style>
section {
    min-height: 75vh;
    display: flex;
    justify-content: center;
}
.container {
    padding-top: 3rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}
h1 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
    color: #222;
}
img {
    margin: 4rem auto 1rem auto;
    max-width: 14rem;
    border-radius: 50%;
}
h2 {
    color: #555;
    font-weight: bolder;
}
p {
    margin: 0 auto;
    max-width: 400px;
    color: #333;
}
@media (min-width: 1025px){
    .container {
        width: 85%;
    }
}
</style>

<section id="about" bind:this={section}>
    <div class="container">
        <h1>About</h1>
        <img src="https://avatars0.githubusercontent.com/u/47381044" alt="Sameer Tariq" />
        <h2>Who's this guy?</h2>
        <p>I'm a Full-Stack Web Developer from Pakistan, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
        <Button target="tools" text="Next" color="#222222" />
    </div>
</section>
