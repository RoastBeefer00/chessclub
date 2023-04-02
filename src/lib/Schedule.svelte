<script>
    import Calendar from "./Calendar.svelte";
    let current_date = new Date();
</script>

<h2>Where will we be?!</h2>
<div class="calendars">
    <Calendar month={current_date.getMonth()}/>
    <Calendar month={current_date.getMonth()+1}/>
    <Calendar month={current_date.getMonth()+2}/>
</div>

<style>
    .calendars {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-row: auto auto auto;
        /* background-color: beige; */
        margin: 10px;
    }

    @media (max-width: 1200px) {
        .calendars {
            display: grid;
            grid-row: auto;
            grid-template-columns: auto;
        }
    }
</style>