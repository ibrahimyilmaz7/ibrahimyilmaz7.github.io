<script>
	import Icon from 'svelte-awesome';
	import { 
		githubSquare, 
		twitterSquare, 
		linkedinSquare, 
		stackOverflow 
	} from 'svelte-awesome/icons';

	export let name;
	export let position;
	export let location;

	export let twitterHandle;
	export let githubHandle;
	export let linkedinHandle;
	export let stackOverflowHandle;
	export let summary;
</script>

<main>
	<img 
		id="intro-image"
		src="./ibrahimyilmaz.png"
		alt="Ibrahim Yilmaz"
	>
	<h1 id="intro">
		<code>
			Hi, I'm <strong>{name}</strong> <br>
			<strong>{position}</strong> <br>
			based in <strong>{location}</strong>
		</code>
	</h1>
	<p id="desc">{summary}</p>
	<p>
		<a href="https://twitter.com/{twitterHandle}" target="_blank">
			<Icon data={twitterSquare} class="social-media-icon twitter" scale="3"/>
		</a>
		<a href="https://linkedin.com/in/{linkedinHandle}" target="_blank">
			<Icon data={linkedinSquare} class="social-media-icon linkedin" scale="3"/>
		</a>
		<a href="https://github.com/{githubHandle}" target="_blank">
			<Icon data={githubSquare} class="social-media-icon github" scale="3"/>
		</a>
		<a href="https://stackoverflow.com/users/{stackOverflowHandle}" target="_blank">
			<Icon data={stackOverflow} class="social-media-icon stackoverflow" scale="3"/>
		</a>
	</p>
</main>

<style>
	main {
		margin: 5% 17%;
	}

	#intro {
		font-size: 3rem;
		font-weight: 200;
		line-height: 1.5;
	}

	#intro-image {
		height: 150px;
		border-radius: 50%;
		vertical-align: middle;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border: 10px solid rgba(0, 0, 0, 0.1);
	}

	#desc {
		font-weight: 300;
	}

	:global(.social-media-icon) {
		font-size: 3rem;
		margin: 15px 10px;
	}

	:global(.social-media-icon.twitter) {
		color: #1da1f2;
	}

	:global(.social-media-icon.github) {
		color: #333333;
	}

	:global(.social-media-icon.linkedin) {
		color: #0a66c2;
	}

	:global(.social-media-icon.stackoverflow) {
		color: #f48024;
	}
</style>
