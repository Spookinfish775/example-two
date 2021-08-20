<template>
	<div class="blue-space-one-wrapper">
		<div class="second-page-title blue-space-title">
			{{ $t("aboutUs.blueSpaceOne.title") }}
		</div>
		<div class="page-text blue-space-text">
			{{ $t("aboutUs.blueSpaceOne.text") }}
		</div>
		<div v-for="item in 4" :key="item">
			<div :class="`bubble bubble${item}`" />
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
 
	.bubble {
		position: absolute;
		background: url("/img/main/bubble.png") center no-repeat;
		background-size: cover;
		&.bubble1 {
			width: 8em;
			height: 10em;
			right: 21em;
			bottom: 10em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				width: 4em;
				height: 4em;
				right: 8em;
				bottom: 45em;
				animation: none;
			}

			@include max($small) {
				display: none;
			}
		}
		&.bubble2 {
			width: 13em;
			height: 15em;
			right: 10em;
			bottom: 14em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				width: 7.5em;
				height: 9em;
				right: 2em;
				bottom: 48em;
				animation: none;
			}

			@include max($small) {
				display: none;
			}
		}
		&.bubble3 {
			width: 4.7em;
			height: 5.4em;
			right: 14.4em;
			bottom: 25em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				width: 8em;
				height: 9em;
				right: 10em;
				bottom: 20em;
				animation: none;
			}

			@include max($small) {
				display: none;
			}
		}
		&.bubble4 {
			width: 8.8em;
			height: 10em;
			right: 4em;
			bottom: 37em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				width: 11em;
				height: 13em;
				right: 2em;
				bottom: 30em;
				animation: none;
			}

			@include max($small) {
				display: none;
			}
		}
	}
}
</style>