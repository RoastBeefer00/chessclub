<script>
  import About from "./lib/About.svelte"
  import Calendar from "./lib/Calendar.svelte"

  export let menu = 1;

  function setMenu(id) {
    menu = id;
  }
</script>

<main>
  <div id="title">
    <img src="Organ_Mountains.png" alt="Organ Mountains" id="mountains">
    <h1 class="bottom-center">Las Cruces Chess Club</h1>

    <div class="nav">
      <ul id="menu">
        <li>
          <a href="/" on:click|preventDefault={() => setMenu(1)}>
            {#if menu == 1}
              &#x2654;
            {/if}
            Home
            {#if menu == 1}
              &#x2654;
            {/if}
          </a>
        </li>
        <li>
          <a href="/" on:click|preventDefault={() => setMenu(2)}>
            {#if menu == 2}
              &#x2654;
            {/if}
            About
            {#if menu == 2}
              &#x2654;
            {/if}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="content">
    {#if menu === 1 }
      <Calendar />
    {:else if menu === 2}
      <About />
    {/if}
  </div>

</main>

<style>
  #title {
    width: 100%;
    position: relative;
    text-align: center;
  }

  .bottom-center {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .content {
    position: relative;
  }

  #mountains {
    width: 100%;
    height: 250px;

    object-fit: cover;
    object-position: top;
  }


  #menu {
    list-style-type: none;
    padding: 0;
    text-align: center;
    width: 100%;
    overflow: hidden;
    display: inline;
    background-color: #5C4033;
  }

  li {
    display: block;
    float: left;
    border-right: 1px solid black;
    padding: 10px;
  }

  ul {
    border: 1px solid black;
  }

  a {
    text-align: center;
    padding: 8px;
    margin: 8px;
    text-decoration: none;
    color: white;
  }

  h1 {
    color: white;
  }

  body {
    padding-top: 60px;
    padding-bottom: 40px;
  }

</style>
