<script>
    import Bio from "./Bio.svelte";
    import Coaches from "./Coaches.json";


</script>

<h2>Coaches</h2>
{#each Coaches.Coaches as Coach}
    <Bio person={Coach}/>
{/each}