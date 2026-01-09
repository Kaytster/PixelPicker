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