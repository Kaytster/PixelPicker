<!-- <main>
    <p>Colour Picker goes here!</p>
</main> -->

<script lang="ts">
    import EyeDropper from "./EyeDropper.svelte";
    
    let activeTab = $state('eyedropper');
    let colour = $state('#ff0000');
</script>
<nav class="colourOptions">
    <ul>
        <li><button 
            class:is-selected={activeTab === 'eyedropper'}
            onclick={() => activeTab = 'eyedropper'}
            >Eye Dropper</button></li>
        <li><button 
            class:is-selected={activeTab === 'hex'}
            onclick={() => activeTab = 'hex'}
            >HEX Code</button></li>
        <li><button 
            class:is-selected={activeTab === 'colourwheel'}
            onclick={() => activeTab = 'colourwheel'}
            >Colour Wheel</button></li>
    </ul>
</nav>

<div class="content">
    {#if activeTab === 'eyedropper'}
        <EyeDropper bind:colour />
    {:else if activeTab === 'hex'}
        <p>HEX Code goes here!</p>
    {:else if activeTab === 'colourwheel'}
        <p>Colour Wheel goes here!</p>
    {/if}
</div>

<style>
    
.colourOptions > ul > li > button {
    background-color: var(--primary);
}
.colourOptions > ul > li > button:hover {
    background-color: var(--pHover);
}
.colourOptions > ul > li > button.is-selected {
    background-color: var(--pSelected);
}
</style>