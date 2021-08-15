<template>
	<div class="main-page-wrapper">
		<Articles />
	</div>
</template>

<script>
import Articles from "~/components/articles/hero.vue";
export default {
	components: {
		Articles
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