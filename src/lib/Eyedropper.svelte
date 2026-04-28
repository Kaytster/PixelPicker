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
    <div class="help-box">
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
        <div class="swatch" style:background-color={colour}></div>
        <span class="hex-value">{colour}</span>
    </div>
</div>

<!-- Eyedropper Styling -->

<style>
    .tab-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        gap: 20px;
    }

    .help-box > h2 {
        margin: 0;
        font-size: 1.5rem;
        color: white;
        margin-bottom: 15px;
    }
    .help-box > p {
        /* background-color: var(--primary); */
        color: white;
        font-size: 0.9rem;

    }

    .eyedrop-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 12px;
        padding: 16px 32px;
        background-color: var(--primary);
        color: white;
        border: 2px solid transparent;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }
    .eyedrop-btn:hover {
        background-color: var(--pHover);
        /* border-color: var(--primary); */
    }
    .eyedrop-btn:active {
        trasnform: scale(0.96);
    }

    .error-msg {
        color: black;
        background-color: var(--errorMessage);
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 0.85rem;
        border: 1px solid rgba(255, 0, 0, 0.2)
    }

    .preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 10px;
    }

    .swatch {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 3px solid black;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: background-color 0.3s ease;
    }

    .hex-value {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        letter-spacing: 1px;
        color: #ccc;
    }
</style>