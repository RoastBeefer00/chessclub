<script>
  export let month;

  let wednesdays = getWednesdays(month);

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


  function getWednesdays(month_index) {
    var current_date = new Date();
    var year = current_date.getFullYear();
    var d = new Date(year, month_index),
      month = d.getMonth(),
      wednesdays = [];

    d.setDate(1);
    console.log(month);

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

<div id="table">
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
</div>

<style>
  #table {
    background-color: white;
    padding: 20px 10px;
    border: 10px solid #5C4033;
    display: inline-block;
  }

  td, th {
    text-align: left;
    margin: 10px;
    padding: 10px;
    background-color: #F5DEB3;
  }

  th {
    background-color: #5C4033;
    color: white;
  }

  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }


  table {
    margin-left: auto;
    margin-right: auto;
  }
</style>

