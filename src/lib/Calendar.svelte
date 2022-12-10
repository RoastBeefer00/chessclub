<script>
  import { onMount } from 'svelte';
  let wednesdays = getWednesdays();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  let bars = [
    "Amaro Winery",
    "Lucky Dog Billiards"
  ]


  function getWednesdays() {
    var d = new Date(),
      month = d.getMonth(),
      wednesdays = [];

    d.setDate(1);

    // Get the first Wednesday in the Month
    while (d.getDay() != 3) {
      d.setDate(d.getDate() + 1);
    }

    while (d.getMonth() == month) {
      wednesdays.push(new Date(d.getTime()));
      d.setDate(d.getDate() + 7);
    }

    return wednesdays;
  }

</script>


<h2> {months[wednesdays[0].getMonth()]} </h2>

{#each wednesdays as wednesday, count}
  <b> {wednesday.getMonth()+1}/{wednesday.getDate()}/{wednesday.getFullYear()} </b>
  {#if count < bars.length}
    {bars[count]}
  {/if}
  <br>
{/each}
