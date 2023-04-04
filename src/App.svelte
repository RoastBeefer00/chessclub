<script>
  import About from "./lib/About.svelte";
  import Coaches from "./lib/Coaches.svelte";
  import Schedule from "./lib/Schedule.svelte";
  import Home from "./lib/Home.svelte"
  export let menu = 1;

  function setMenu(id) {
    menu = id;
  }

</script>

<main>
  <div id="title">
    <!-- <img src="Organ_Mountains.png" alt="Organ Mountains" id="mountains"> -->
    <h1>&#x2656; Las Cruces Chess Club &#x2656;</h1>

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
        <li>
          <a href="/" on:click|preventDefault={() => setMenu(3)}>
            {#if menu == 3}
              &#x2654;
            {/if}
            Private Lessons
            {#if menu == 3}
              &#x2654;
            {/if}
          </a>
        </li>
        <li>
          <a href="/" on:click|preventDefault={() => setMenu(4)}>
            {#if menu == 4}
              &#x2654;
            {/if}
            Schedule
            {#if menu == 4}
              &#x2654;
            {/if}
          </a>
        </li>
        <li class="donate">
          <a href="/" on:click|preventDefault={() => setMenu(5)}>
            {#if menu == 5}
              &#x2654;
            {/if}
            Donate
            {#if menu == 5}
              &#x2654;
            {/if}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="content">
    {#if menu === 1 }
      <Home />
    {:else if menu === 2}
      <About />
    {:else if menu === 3}
      <Coaches />
    {:else if menu === 4}
      <Schedule />
    {/if}
  </div>

</main>

<style>
  #title {
    width: 100%;
    /* height: 500px; */
    position: relative;
    text-align: center;
    display: block;
    background: black;
  }

  h1 {
    /* font-size: 50pt; */
    padding: 20px;
  }

  .bottom-center {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .content {
    position: relative;
    padding: 5px;
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
    /* background-color: #5C4033; */
    background-color: black;
  }

  li {
    display: block;
    float: left;
    border-right: 1px solid white;
    padding: 10px;
  }

  ul {
    border: 1px solid white;
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
    /* height: 400px; */
  }

  body {
    padding-top: 60px;
    padding-bottom: 40px;
  }

  .donate {
    float: right;
    border-left: 1px solid white;
  }

</style>
