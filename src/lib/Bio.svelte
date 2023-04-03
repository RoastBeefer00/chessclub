<script>
    export let person;
</script>

<div class="frame">
    <h3>{person.Name}</h3>
    <div class="selfie">
        <img class="image" src="{person.Picture}" alt="Put Person Here">
    </div>
    <div class="strengths">
        <h4>Strengths</h4>
        <ul>
            {#each person.Strengths as strength}
                <li>{strength}</li>
            {/each}
        </ul>
        <p>{person.Phone}</p>
        <p>{person.Email}</p>
    </div>
</div>



<style>
    .image {
        width: 100%;
        height: auto;
        /* display: block; */
        /* object-fit: contain; */
    }

    .frame {
        /* margin-left: auto; */
        /* margin-right: auto; */
        /* margin-top: 30px; */
        /* margin-bottom: 30px; */
        margin: 10px;
        padding: 30px;
        border: 1px solid black;
        border-radius: 4px;
        /* width: 50%; */
        height: 450px;
        background-color: lightgray;
        box-shadow: 20px 20px 50px grey;
        /* float: left; */
        
    }

    .selfie {
        float: left;
        width: 45%;
        /* max-height: 60%; */
        padding: 5px;
        margin: 5px;
    }

    .strengths {
        float: right;
        width: 45%;
        padding: 5px;
        margin: 5px;
        text-align: left;
        color: black;
    }

    ul {
        /* float: right; */
        text-align: left;
    }

    li {
        text-align: left;
    }

    p {
        text-align: left;
    }

    h3 {
        background-color: black;
        color: white;
        padding: 5px;
    }
</style>