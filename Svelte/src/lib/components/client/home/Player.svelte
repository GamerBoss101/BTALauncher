<script lang="ts">
    let isLogined = true;
    let username = "Sir_Blob_";
</script>

<div class="player-box">
    <h1>{username}</h1>
    <img src="/download.png" alt="MC SKIN">
    { #if isLogined }
        <button class="btn btn-logout">Logout</button>
    {:else}
        <button class="btn btn-login">Login</button>
    {/if}
</div>

<style>
    .player-box {
        text-align: center;
        margin: 20px;
        background-color: blueviolet;
    }

    .btn {
        width: 90%;
        padding: 10px;
        margin: 10px;
        border: none;
        font-size: 20px;
        border-radius: 10px;
        border: none;
    }

    .btn-logout {
        background-color: red;
    }

    .btn-login {
        background-color: green;
    }
</style>