<template>
	<div class="main-page-wrapper">
		<DealerForm />
	</div>
</template>

<script>
import DealerForm from "~/components/layouts/dealerForm/index.vue";
export default {
	components: {
		DealerForm
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