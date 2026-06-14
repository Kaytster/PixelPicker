declare module "*.svelte" {
    import type { Component } from "svelte";
    const component: Component<any>;
    export default component;
}

interface EyeDropper {
    new (): EyeDropper;
    open(options?: {signal: AbortSignal}): Promise<{sRGBHex: string}>;
}
interface Window {
    EyeDropper: EyeDropper;
}