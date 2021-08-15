<template>
	<div class="main-page-wrapper">
		<Hero />
		<Factory />
		<BlueSpace1 />
		<Factory2 />
		<BlueSpace2 />
		<Properties />
	</div>
</template>

<script>
import Hero from "~/components/about-us/hero.vue";
import Factory from "~/components/about-us/factory.vue";
import BlueSpace1 from "~/components/about-us/blue-space-1.vue";
import Factory2 from "~/components/about-us/factory2.vue";
import BlueSpace2 from "~/components/about-us/blue-space-2.vue";
import Properties from "~/components/about-us/properties.vue";
export default {
	components: {
		Hero,
		Factory,
		BlueSpace1,
		Factory2,
		BlueSpace2,
		Properties
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