import App from './App.svelte';
import 'carbon-components-svelte/css/all.css';

const app = new App({
  target: document.body,
  props: {
    name: 'Alex',
  },
});

export default app;
