<script>
    import Tool from '../components/Tools/Tool.svelte';
    import Tools from '../components/Tools/Catagory.svelte';
    import Button from './Button.svelte';

</script>

<style>
section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background: #d5d5d5;
}
h1 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
}
.container {
    padding: 3rem 0;
    width: 100%;
    font-family: cursive, sans-serif;
}
@media (min-width: 1025px){
    .container {
        width: 85%;
    }
}
</style>

<section id="tools">
    <div class="container">
        <h1>What tools do I use?</h1>
        <Tools title="Base Technologies">
            <Tool name="HTML" icon="b fa-html5" value="90" />
            <Tool name="CSS" icon="b fa-css3" value="85" />
            <Tool name="JavaScript" icon="b fa-js" value="80" />
        </Tools>
        <Tools title="Frontend">
            <Tool name="VueJS" icon="b fa-vuejs" value="80" />
            <Tool name="Svelte" icon="s fa-code" value="70" />
        </Tools>
        <Tools title="Backend">
            <Tool name="ExpressJS" icon="b fa-node" value="85" />
            <Tool name="SocketIO" icon="b fa-node" value="65" />
            <Tool name="PHP" icon="b fa-php" value="70" />
        </Tools>
        <Tools title="Databases">
            <Tool name="MongoDB" icon="s fa-database" value="75" />
            <Tool name="MySQL" icon="s fa-database" value="55" />
        </Tools>
        <Tools title="Deploy">
            <Tool name="Zeit Now" icon="s fa-server" value="89" />
            <Tool name="Netlify" icon="s fa-server" value="65" />
            <Tool name="Heroku" icon="s fa-server" value="75" />
        </Tools>
        <Tools title="Other">
            <Tool name="Git" icon="b fa-git" value="76" />
            <Tool name="Github" icon="b fa-github" value="80" />
            <Tool name="VS Code" icon="s fa-code" value="65" />
            <Tool name="Linux" icon="b fa-linux" value="70" />
        </Tools>
        <div style="text-align: center;">
            <Button target="projects" text="Next" color="#222222" />
        </div>
    </div>
</section>