// @ts-nocheck
'use strict';
import { onMount } from 'svelte';
import pkg from 'electron';
const { ipcRenderer } = pkg;

onMount(() => {
    var closeButton = document.getElementById("close");
    closeButton.addEventListener("click", async function (e) {
        ipcRenderer.send('close-window');
    }); 
    
    var miniButton = document.getElementById("mini");
    miniButton.addEventListener("click", function (e) {
        ipcRenderer.send('minimize-window');
    }); 
    
    var maxiButton = document.getElementById("maxi");
    maxiButton.addEventListener("click", function (e) {
        ipcRenderer.send('maximize-window');
    }); 
});