<script>
    import Bio from "./Bio.svelte";
    import Coaches from "./Coaches.json";


</script>

<h2>Coaches</h2>
<div class="container">
    {#each Coaches.Coaches as Coach}
        <Bio person={Coach}/> 
    {/each}
</div>

<style>
    .container {
        display: grid;
        grid-row: auto auto;
        grid-template-columns: auto auto;
        /* ?flex-wrap: flex; */
    }

    @media (max-width: 1200px) {
        .container {
            display: grid;
            grid-row: auto;
            grid-template-columns: auto;
        }
    }
</style>