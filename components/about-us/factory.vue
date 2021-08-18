<template>
	<div class="factory-wrapper"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.factory-wrapper {
	width: 100%;
	height: 80em;
	position: relative;
	margin: 11em 0 0 0;
	background: url("/img/about-us/factory.png") center no-repeat;
	background-size: cover;
	@include max($large) {
		height: 45em;
		margin: 8em 0 0 0;
		background-position: bottom;
	}
	@include max($small) {
		height: 35em;
		margin: 3em 0 0 0;
		background: url("/img/about-us/factory-small.png") bottom no-repeat;
	}
}
</style>