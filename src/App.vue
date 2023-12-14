<template>
	<div id="app">
		<div class="logos">
			<img alt="Vue logo" src="@/assets/vue.svg" />
			<h1>+</h1>
			<img alt="Vue logo" src="/vite.svg" />
		</div>
		<RouterView />
	</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	margin-top: 60px;

	.logos {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		margin-bottom: 2em;

		img {
			height: 6em;
			padding: 1.5em;
			will-change: filter;
			transition: filter 300ms;
		}
	}
}
</style>
