import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ibrahim Yilmaz',
		position: 'Senior iOS Developer',
		location: 'Izmir/Turkey',
		twitterHandle: 'iboylmz',
		githubHandle: 'ibrahimyilmaz7',
		linkedinHandle: 'ibrahimyilmaz7',
		stackOverflowHandle: '2696626'
	}
});

export default app;