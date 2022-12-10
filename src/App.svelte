<script>
  import svelteLogo from './assets/svelte.svg';
  import About from "./lib/About.svelte"
  import Calendar from "./lib/Calendar.svelte"

  export let menu = 1;
</script>

<main>
  <h1>Las Cruces Chess Club</h1>

  <div>
    <ul id="menu">
      <li>
        <a href="/" on:click|preventDefault={() => (menu = 1)}>
          About
        </a>
      </li> |
      <li>
        <a href="/" on:click|preventDefault={() => (menu = 2)}>
          Calendar
        </a>
      </li>
    </ul>
  </div>
  {#if menu === 1 }
    <About />
  {:else if menu === 2}
    <Calendar />
  {/if}

</main>

<style>
  ul#menu li{
    display: inline;
  }
</style>
