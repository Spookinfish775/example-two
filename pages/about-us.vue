<template>
	<div class="main-page-wrapper">
		<Hero />
		<Factory />
	</div>
</template>

<script>
import Hero from "~/components/about-us/hero.vue";
import Factory from "~/components/about-us/factory.vue";
export default {
	components: {
		Hero,
		Factory
	}
};
</script>

<style lang="scss">
.main-page-wrapper {
	width: 100%;
	min-height: 100vh;
	position: relative;
}
</style>