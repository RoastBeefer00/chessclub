<script>
    import Calendar from "./Calendar.svelte";
    let current_date = new Date();
</script>

<div>
    <h1>Welcome to Cruces Chess Club!</h1>
   <Calendar month={current_date.getMonth()} />
</div>

<style>
    div {
        background-color: inherit;
    }
</style>