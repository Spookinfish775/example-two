<template>
	<div class="factory2-wrapper"></div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.factory2-wrapper {
	width: 100%;
	height: 80em;
	position: relative;
	background: url("/img/about-us/factory2.png") center no-repeat;
	background-size: cover;
	@include max($large) {
		height: 45em;
	}
	@include max($small) {
		height: 32em;
		background: url("/img/about-us/factory2-small.png") center no-repeat;
		background-size: 100% 100%;
	}
}
</style>