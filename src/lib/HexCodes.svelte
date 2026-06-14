<script>
    let colourCode = $state('#');
</script>

<main>
    <input bind:value={colourCode} placeholder="Enter a HEX code" />
    <p>Your Colour</p>
    <p>{colourCode || '#000000'}</p>

    <p>Recent Colours</p>
</main>