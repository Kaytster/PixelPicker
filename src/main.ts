import App from './App.svelte'
import './app.css'
import { mount } from 'svelte'

const app = mount(App, {
    target: document.getElementById('app') as HTMLElement,
});

const colourButtons = document.querySelectorAll('.colourOptions button') as NodeListOf<HTMLButtonElement>;
colourButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', (): void => {
        colourButtons.forEach((btn: HTMLButtonElement) => {
            btn.classList.remove('is-selected');
        });
        button.classList.add('is-selected');
    });
});

export default app