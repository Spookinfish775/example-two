<template>
	<div class="production-wrapper">
		<AkNurAutomat />
		<AkNurAutomatColor />
	</div>
</template>

<script>
import AkNurAutomat from "~/components/production/ak-nur/automat.vue";
import AkNurAutomatColor from "~/components/production/ak-nur/automat-color.vue";
export default {
	components: {
		AkNurAutomat,
		AkNurAutomatColor
	}
};
</script>

<style lang="scss">
</style>