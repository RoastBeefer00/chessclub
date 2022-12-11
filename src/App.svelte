<script>
  import About from "./lib/About.svelte"
  import Calendar from "./lib/Calendar.svelte"

  export let menu = 1;
</script>

<main>
  <div id="title">

    <h1>Las Cruces Chess Club</h1>

    <ul id="menu">
      <li>
        <a href="/" on:click|preventDefault={() => (menu = 1)}>
          Home
        </a>
      </li>
      <li>
        <a href="/" on:click|preventDefault={() => (menu = 2)}>
          About
        </a>
      </li>
    </ul>
  </div>
  <div>
    {#if menu === 1 }
      <Calendar />
    {:else if menu === 2}
      <About />
    {/if}
  </div>

</main>

<style>
  #title {
    background-color: lightskyblue;
    top: 0;
    width: 100%;
    position: fixed;
    text-align: center;
  }

  #menu {
    list-style-type: none;
    padding: 0;
    text-align: center;
    width: 100%;
    overflow: hidden;
    display: inline;
  }

  li {
    display: block;
    float: left;
  }

  a {
    text-align: center;
    padding: 8px;
    margin: 8px;
  }

  .active {
    background-color: #04AA6D;
    color: white;
  }

  h1 {
  }

</style>
