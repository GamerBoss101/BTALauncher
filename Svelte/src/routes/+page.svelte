<script lang="ts">
    import Player from "$lib/components/Player.svelte";
    import GameControl from "$lib/components/GameControl.svelte";
</script>
   

<div class="container" >
    <img src="/logo.png" alt="BTA" />
    <br>
    <div class="row">
        <div class="col">
            <Player />
        </div>
        <div class="col">
            <GameControl />
        </div>
    </div>
</div>


<style>
    img {
        display: block;
        margin: auto;
        width: 35%;
    } 

    .row {
        display: flex;
        justify-content: center;
        background-color: brown;
    }
    
    .col {
        margin: auto;
        background-color: cadetblue;
        width: 45%;
    }

</style>