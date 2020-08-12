<script>
  import Tool from "../components/Tools/Tool.svelte";
  import Tools from "../components/Tools/Catagory.svelte";
  import Button from "./Button.svelte";
  import { onMount } from "svelte";
  import { observer } from "../store.js";

  let section;
  let tools = [];
  const query = `{
  portfolio_tools_category(order_by: {id: asc}) {
    title
    tools(order_by: {tool_id: asc}) {
      name
      value
      icon
    }
  }
}`;

  onMount(() => {
    observer.observe(section);
    fetchTools();
  });

  async function fetchTools() {
    let result = await fetch("https://imsamtar.herokuapp.com/v1/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });
    result = await result.json();
    if (result) {
      tools = result.data.portfolio_tools_category;
    }
  }
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
  @media (min-width: 1025px) {
    .container {
      width: 85%;
    }
  }
</style>

<section id="tools" bind:this={section}>
  <div class="container">
    <h1>What tools do I use?</h1>
    {#each tools as category}
      <Tools title={category.title}>
        {#each category.tools as tool}
          <Tool name={tool.name} icon={tool.icon} value={tool.value} />
        {/each}
      </Tools>
    {/each}
    <div style="text-align: center;">
      <Button target="projects" text="Next" color="#222222" />
    </div>
  </div>
</section>
