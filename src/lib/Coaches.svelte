<script>
    import Bio from "./Bio.svelte";
    import Coaches from "./Coaches.json";


</script>
<div class="header">
    <h2>Meet our coaches.</h2>
    <p>Looking to improve your game?  We've got you covered.  No matter where you are on your chess journey we have a coach who can guide you to victory.</p>
</div>

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

    .header {
        background-color: black;
        box-shadow: 20px 20px 50px grey;
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        padding: 20px;
        color: white;
    }
</style>