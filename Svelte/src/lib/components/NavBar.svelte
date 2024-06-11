<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    let version = "0.0.0";
    onMount(() => {
        version = window.game.getVersion();
    });

    function close(event) {
        event.preventDefault();
        window.electron.close();
    }

    function minimize(event) {
        event.preventDefault()
        window.electron.minimize();
    }

    function maximize(event) {
        event.preventDefault()
        window.electron.maximize();
    }

</script>

<div id="nav-grid">
    <div class="success" id="name">BTA LAUNCHER</div>
    <div id="version">{version || "0.0.0"}</div>
    <div id="drag"></div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={minimize} id="mini">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nO3RsQkAAAgEsd9/aa3tBUGSDY5LAAAAAGCqY9kiZEkcAQAAAOCpBi/1/hCBX+p4AAAAAElFTkSuQmCC">
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={maximize} id="maxi">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdUlEQVR4nO2UsQnAIBBFHchpXCatpRNklDQ2FkKmcAgneEFIOiXFXSHih9feg1ecMcsMcMClhOsJElCBW0htt0aCpFAirS0owCGkjAQnkIEgJLdbPYFvKCTy3Ttb8G0n+t1ONH+iqPDs4khgFR5deLHSEvPsARU9c/1t2k0fAAAAAElFTkSuQmCC">
    </div>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="close" on:click={close} >
        <!-- svelte-ignore a11y-missing-attribute -->
        <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO2WSwqEMBBEvYSi9z9OXI0Lj/NkUJDJwv6kBmHGgqy0eN1tUqbrHv2lgAGYjzU0+IvbD/TAi1MrMAWgOT97pbUWT+VHp+93a5Us2IRfQN3gvhoV1tgcntEER+EyaAQuhzq/22I8Cx/DDxldaTttgOugAbgeGgC7E+4bo9bAyW2uNjh3HCcc4ZCJ10tFEkkGJxGDEjg3/hbnKNQBL9mrizuRmvzslZfQZU3of/Qb2gDIApP3EFwGCQAAAABJRU5ErkJggg==">
    </div>
</div>

<style>
    #nav-grid {
        display: grid;
        grid-template-columns: auto auto 1fr auto auto auto;
        grid-template-rows: 1fr;
        grid-gap: 10px;
        margin: 0px;
        padding: 0px;
        position: sticky;
        top: 0px;
        left: 0px;
        width: 100%;
        height: auto;
        background-color: var(--bg-color-dark);
        z-index: 2;
    }

    #nav-grid div {
        display: flex;
        font-size: 1.2rem;
        cursor: pointer;
        transition: 0.2s;
        padding: 5px;
        margin-left: 5px;
        margin-right: 5px;
    }

    #drag {
        -webkit-app-region: drag;
    }
    
    #mini:hover {
        background-color: var(--bg-color);
        border-radius: 5px;
    }

    #maxi:hover {
        background-color: var(--bg-color);
        border-radius: 5px;
    }

    #close:hover {
        background-color: var(--color-error);
        border-radius: 5px;
    }
</style>