<script>
    import Button from './Button.svelte';
</script>

<style>
section {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    background: #d5d5d5;
    clip-path: polygon(0 0, 50% 3%, 100% 0, 100% 100%, 0 100%);
}
.container {
    padding-top: 2rem;
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
.form {
    max-width: 400px;
    display: flex;
    flex-flow: wrap;
    margin: 2rem auto;
    justify-content: center;
}
.form > input {
    border: 0;
    margin: 0.5rem 0;
}
.form > * {
    width: 100%;
    padding: 0.7rem 0.5rem;
    border-radius: 0.3rem;
}
.form > button {
    margin: 0.5rem 0;
    padding: 0.7rem 1rem;
    background: rgb(13, 133, 39);
    color: #d5d5d5;
}
@media (min-width: 1025px){
    .container {
        width: 85%;
    }
}
</style>

<section id="contact">
    <div class="container">
        <h1>Contact</h1>
        <div class="form">
            <input type="text" placeholder="Name">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Subject">
            <textarea name="message" id="message" cols="40" rows="10" placeholder="Message"></textarea>
            <button>Send Message</button>
        </div>
        <Button target="hero" text="Back to Top" color="#222222" />
    </div>
</section>
