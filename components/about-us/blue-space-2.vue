<template>
	<div class="blue-space-one-wrapper">
		<div class="second-page-title blue-space-title">
			{{ $t("aboutUs.blueSpace2.title") }}
		</div>
		<div class="page-text blue-space-text">
			{{ $t("aboutUs.blueSpace2.text") }}
		</div>
		<div class="page-text blue-space-text">
			{{ $t("aboutUs.blueSpace2.text2") }}
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.blue-space-one-wrapper {
	padding: 15em 0 12em 38em;
	background-color: $main-color;
	position: relative;
	@include max($large) {
		padding: 15em 0 12em 3em;
	}

	@include max($small) {
		padding: 6em 2em;
	}
	.blue-space-title {
		max-width: 36.3em;
		color: $default-text-color !important;
		@include max($large) {
			max-width: 20em;
		}
	}
	.blue-space-text {
		width: 29.5em;
		margin: 1.5em 0 0 0;
		color: $default-text-color !important;
		@include max($large) {
			width: 100%;
		}
		@include max($small) {
			width: 100%;
		}
	}
}
</style>