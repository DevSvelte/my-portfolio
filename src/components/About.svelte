<script>
    import Button from './Button.svelte';
</script>

<style>
section {
    min-height: 80vh;
    display: flex;
    justify-content: center;
}
.container {
    padding-top: 1rem;
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
    margin: 5rem auto 1rem auto;
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

<section id="about">
    <div class="container">
        <h1>About</h1>
        <img src="data:image/jpeg;base64,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" alt="Sameer Tariq" />
        <h2>Who's this guy?</h2>
        <p>I'm a Full-Stack Web Developer from Pakistan, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
        <Button target="tools" text="Next" color="#222222" />
    </div>
</section>
