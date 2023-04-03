<script>
    import Calendar from "./Calendar.svelte";
    import Header from "./Header.svelte";

    let current_date = new Date();
</script>

<Header>
    <h2><u>Where will we be?!</u></h2>
</Header>

<div class="calendars">
    <div>
        <Calendar month={current_date.getMonth()}/>
    </div>
    <div>
        <Calendar month={current_date.getMonth()+1}/>
    </div>
    <div>
        <Calendar month={current_date.getMonth()+2}/>
    </div>
</div>

<style>
    .calendars {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-row: auto auto auto;
        /* background-color: beige; */
        margin: 10px;
        background-color: white;
        box-shadow: 20px 20px 50px grey;
    }

    @media (max-width: 1200px) {
        .calendars {
            display: inline-block;
            grid-row: auto;
            grid-template-columns: auto;
            background-color: white;
            box-shadow: 20px 20px 50px grey;  
        }
    }
</style>