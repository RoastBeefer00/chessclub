<script>
    import Bio from "./Bio.svelte";
    import Coaches from "./Coaches.json";
    import Header from "./Header.svelte";

</script>

<Header>
    <h2><u>Meet our coaches.</u></h2>
    <p>Looking to improve your game?  We've got you covered.  No matter where you are on your chess journey we have a coach who can guide you to victory.</p>
</Header>

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