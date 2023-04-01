<script>
    export let person;
</script>

<div class="frame">
    <h3>{person.Name}</h3>
    <div class="selfie">
        <img src="{person.Picture}" alt="Put Person Here">
    </div>
    <div class="strengths">
        <ul>
            <h4>Strengths</h4>
            {#each person.Strengths as strength}
                <li>{strength}</li>
            {/each}
        </ul>
        <p>{person.Phone}</p>
        <p>{person.Email}</p>
    </div>
</div>



<style>
    img {
        max-width: 100%;
        max-height: 100%;
        /* object-fit: contain; */
    }

    .frame {
        margin: 30px;
        padding: 30px;
        border: 1px solid black;
        border-radius: 4px;
        width: 500px;
        height: 300px;
        display: inline-block
    }

    .selfie {
        float: left;
        width: 45%;
        padding: 5px;
        margin: 5px;
    }

    .strengths {
        float: right;
        width: 45%;
        padding: 5px;
        margin: 5px;
    }

    ul {
        float: right;
    }

    li {
        text-align: left;
    }

    p {
        text-align: center;
    }
</style>