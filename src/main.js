import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ibrahim Yilmaz',
		position: 'Senior iOS Developer @ CHECK24',
		location: 'Frankfurt/Germany',
		twitterHandle: 'iboylmz',
		githubHandle: 'ibrahimyilmaz7',
		linkedinHandle: 'ibrahimyilmaz7',
		stackOverflowHandle: '2696626',
		summary: 'I have almost %d years of experience. I\'m a "Natural Born Engineer" and I have an open personality for improvement. I love following new technologies, and enjoy writing code. <br/>Currently, I\'m working as a Senior iOS Developer at CHECK24 Bank.<br/> I have significant banking/finance experience.'
	}
});

export default app;
