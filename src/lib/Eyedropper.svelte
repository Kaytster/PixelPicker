<script lang="ts">
    let {colour = $bindable()} = $props();

    let errorMessage = $state("");

    async function openEyedropper() {
        errorMessage = "";
        if (!window.EyeDropper) {
            errorMessage = "The Eyedropper is not supported by your browser. Please use the HEX Codes or Colour Wheel." 
            return;       
        }

        const eyeDropper = new EyeDropper();

        try {
            const result = await eyeDropper.open();
            colour = result.sRGBHex;
        } catch (e) {
            console.log("Eyedropper closed")
        }
    }
</script>