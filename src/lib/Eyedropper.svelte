<script lang="ts">
    interface EyeDropper {
        new (): EyeDropper;
        open(options?: {signal: AbortSignal}): Promise<{sRGBHex: string}>;
    }

    const _EyeDropper = (window as any).EyeDropper as EyeDropper;

    let {colour = $bindable()} = $props();

    let errorMessage = $state("");

    async function openEyedropper() {
        errorMessage = "";
        if (!_EyeDropper) {
            errorMessage = "The Eyedropper is not supported by your browser. Please use the HEX Codes or Colour Wheel." 
            return;       
        }

        const eyeDropper = new _EyeDropper();

        try {
            const result = await eyeDropper.open();
            colour = result.sRGBHex;
        } catch (e) {
            console.log("Eyedropper closed")
        }
    }
</script>

<div class="tab-container">
    <div class="instruction-box">
        <h2>Eye Dropper</h2>
        <p>Use the eyedropper to pick any colour on screen, from the image or elsewhere in the browser window!</p>
    </div>

    <button class="eyedrop-btn" onclick={openEyedropper}>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColour" stroke-width="2" fill="none">
            <path d="M11 4l9 9-3 3-9-9 3-3zM3 21l3.5-3.5M15 8l2 2" />
        </svg>
        Activate Eyedropper
    </button>

    {#if errorMessage}
        <div class="error-msg">
            {errorMessage}
        </div>
    {/if}

    <div class="preview">
        <div class="swatch" style="background-color={colour}"></div>
        <span class="hex-value">{colour}</span>
    </div>
</div>

<!-- Eyedropper Styling -->

<!-- <style>
    .tab-container {
        display: flex;
        flex-direction: column;

    }
</style> -->