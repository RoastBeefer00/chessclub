<script>
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
    {
      "name": "Amaro Winery",
      "address": "402 S Melendres St, Las Cruces, NM 88005"
    },
    {
      "name": "Lucky Dog Billiards",
      "address": "245 E Lohman Ave, Las Cruces, NM 88001"
    },
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

<table>
  <tr>
    <th>Date</th>
    <th>Name</th>
    <th>Address</th>
  </tr>
  {#each wednesdays as wednesday, count}
  <tr>
    <td> {wednesday.getMonth()+1}/{wednesday.getDate()}/{wednesday.getFullYear()} </td>
    {#if count < bars.length}
      <td> {bars[count].name} </td>
      <td> {bars[count].address} </td>
    {:else}
      <td></td>
      <td></td>
    {/if}
  </tr>
  {/each}
</table>

<style>
  td, th {
    text-align: left;
    margin: 10px;
    padding: 10px;
    border: 1px solid #dddddd;
  }

  th {
    background-color: blue;
  }

  tr:nth-child(even) {
    background-color: lightskyblue;
  }

  table {
    width: 100%;
  }
</style>

