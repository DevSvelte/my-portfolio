<script>
    import Button from './Button.svelte';
    import {onMount} from 'svelte';
    import {observer} from '../store.js';

    let section;

    onMount(() => {
        observer.observe(section);
    });
    let loading = false;
    let defaultEmail = {name: '', email: '', subject: '', message: ''};
    let email = {...defaultEmail};
    async function sendEmail(){
        loading = true;
        let res = await (await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify(email)
        })).json();
        if(res.sent) email = {...defaultEmail};
        else alert('Failed to send email');
        loading = false;
    }
</script>

<style>
section {
    min-height: 70vh;
    display: flex;
    justify-content: center;
    background: #d5d5d5;
    clip-path: polygon(0 0, 50% 1.5vw, 100% 0, 100% 100%, 0 100%);
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
    padding: 0.3rem;
    justify-content: center;
}
.form > input {
    margin: 0.5rem 0;
}
.form > * {
    width: 100%;
    padding: 0.7rem 0.5rem;
    border-radius: 0.3rem;
    border: 0;
    font-family: 'Raleway', sans-serif;
}
.form > button {
    margin: 0.5rem 0;
    padding: 0.7rem 1rem;
    background: rgb(13, 133, 39);
    color: #d5d5d5;
    user-select: none;
    font-weight: bold;
}
.disabled {
    opacity: 0.7;
}
@media (min-width: 1025px){
    .container {
        width: 85%;
    }
}
</style>

<section id="contact" bind:this={section}>
    <div class="container">
        <h1>Contact</h1>
        <form class="form" on:submit|preventDefault={sendEmail}>
            <input type="text" placeholder="Name" bind:value={email.name} required>
            <input type="email" placeholder="Email" bind:value={email.email} required>
            <input type="text" placeholder="Subject" bind:value={email.subject} required>
            <textarea name="message" id="message" cols="40" rows="10" placeholder="Message" bind:value={email.message} required></textarea>
            <button type="submit" class:disabled={!(email.name && email.email && email.subject && email.message) || loading}>Send Message</button>
        </form>
        <Button target="hero" text="Back to top" color="#222222" />
    </div>
</section>
