<template>
	<div class="production-wrapper">
		<AkNurHand />
		<AkNurAutomat />
	</div>
</template>

<script>
import AkNurHand from "~/components/production/ay-nur/hand.vue";
import AkNurAutomat from "~/components/production/ay-nur/automat.vue";
export default {
	components: {
		AkNurHand,
		AkNurAutomat
	}
};
</script>

<style lang="scss">
</style>