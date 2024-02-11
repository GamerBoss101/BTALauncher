<script lang="ts">
    let gameDownloaded = true;
    let latestVersion = "1.0.0";
    let lastestGame = "Better than Adventure";
    let gameStarted = false;
    let gameText = "Start Game";

    function startGame() {
        gameStarted = !gameStarted;
        gameText = gameStarted ? "Stop Game" : "Start Game";
    }

    function getLatestGame() {
        // Fetch the latest game from github link https://github.com/Better-than-Adventure/bta-download-repo/releases (https://api.github.com/repos/OWNER/REPO/releases)
        fetch("https://api.github.com/repos/Better-than-Adventure/bta-download-repo/releases")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            latestVersion = data[0].name;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function downloadServer() {
        // Fetch the latest game from github link
        fetch("https://api.github.com/repos/Better-than-Adventure/bta-download-repo/releases")
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    getLatestGame();


</script>

<div class="game-box">
    {#if gameDownloaded}
        <h1>{lastestGame}</h1>
        <h2>{latestVersion}</h2>
        <select class="ram-selector">
            <option value="2">2GB</option>
            <option value="4">4GB</option>
            <option value="8">8GB</option>
            <option value="16">16GB</option>
        </select>
        <button class="btn" on:click={startGame}>{gameText}</button>
    {:else}
        <h1>No game downloaded</h1>
        <button class="btn" on:click={getLatestGame}>Download Game</button>
    {/if}
    <button class="btn" on:click={downloadServer}>Download Server</button>
</div>

<style>
    .game-box {
        text-align: center;
        margin: 20px;
        background-color: blueviolet;
        padding: 10px;
        border-radius: 15px;
        min-height: 500px;
    }

    .btn {
        width: 90%;
        padding: 10px;
        margin: 10px;
        font-size: 20px;
        border-radius: 10px;
        border: none;
    }

    .ram-selector {
        width: 90%;
        padding: 10px;
        margin: 10px;
        font-size: 20px;
        border-radius: 10px;
    }

</style>