<script>
    import Calendar from "./Calendar.svelte";
    import Header from "./Header.svelte";

    let current_date = new Date();
</script>

<div>
    <Header>
        <h1><u>Welcome to Cruces Chess Club!</u></h1>
    </Header>
    <div class="calendar">
        <Calendar month={current_date.getMonth()} />
    </div>
</div>

<style>
    .calendar {
        background-color: white;
        box-shadow: 20px 20px 50px grey;
        /* margin: 2px; */
        /* padding: 5px; */
        /* max-width: 50%; */
        display: inline-block;
    }
</style>