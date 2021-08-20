<template>
	<div class="about-us-wrapper">
		<div class="description-content">
			<h1 class="page-title">{{ $t("aboutUs.hero.title") }}</h1>
			<div class="earth-wrapper mobile">
				<div class="earth ">
					<div class="vector" />
					<div class="text-wrapper">
						<div :class="`text ${lang}`" />
					</div>
				</div>
			</div>
			<p class="page-text text-page">{{ $t("aboutUs.hero.text") }}</p>
			<p class="page-text">{{ $t("aboutUs.hero.text2") }}</p>
		</div>
		<div class="earth-wrapper desctop">
			<div class="earth ">
				<div class="vector" />
				<div class="text-wrapper">
					<div :class="`text ${lang}`" />
				</div>
			</div>
		</div>
		<div class="earth-wrapper tablet">
			<div class="earth ">
				<div class="vector" />
				<div class="text-wrapper">
					<div :class="`text ${lang}`" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		lang() {
			return this.$i18n.locale;
		}
	}
};
</script>

<style lang="scss">
.about-us-wrapper {
	width: 100%;
	min-height: 60em;
	padding: 27.5em 17em 7em 19em;
	display: flex;
	align-items: center;
	position: relative;
	@include max($large) {
		padding: 18em 5em 5em 5em;
		min-height: 50em;
	}
	@include max($small) {
		padding: 10em 1.5em 1.5em 1.5em;
		align-items: flex-start;
		min-height: 55em;
	}

	.earth-wrapper {
		width: 30em;
		height: 30em;
		position: relative;
		padding: 3em 0 0 0;
		@include max($large) {
			width: 14em;
			height: 14em;
		}
		@include max($small) {
			padding: 0 0 0 0;
			margin: 3em auto;
		}
		.earth {
			width: 30em;
			height: 30em;
			border-radius: 50%;
			background-color: $main-color;
			position: relative;
			z-index: 2;
			@include max($large) {
				width: 14em;
				height: 14em;
			}
			.vector {
				width: 15em;
				height: 15em;
				position: absolute;
				z-index: 1;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				background: url("/img/about-us/hero/vector.svg") center no-repeat;
				background-size: cover;
				@include max($large) {
					width: 8em;
					height: 8em;
				}
			}
			.text-wrapper {
				position: absolute;
				z-index: 4;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				.text {
					width: 27em;
					height: 27em;
					animation: rotate linear 15s infinite;
					@include max($large) {
						width: 13em;
						height: 13em;
						animation: none;
					}
					@include max($small) {
						width: 13em;
						height: 13em;
					}
					&.ru {
						background: url("/img/about-us/hero/ruText.png") center no-repeat;
						background-size: cover;
					}
					&.en {
						background: url("/img/about-us/hero/enText.png") center no-repeat;
						background-size: cover;
					}
					&.tm {
						background: url("/img/about-us/hero/tmText.png") center no-repeat;
						background-size: cover;
					}
				}
			}
		}
	}
	.description-content {
		width: 54em;
		margin: 0 26em 0 0;
		@include max($large) {
			margin: 0 3em 0 0;
		}
		@include max($small) {
			margin: 0;
		}
		.page-title {
			white-space: pre;
			@include max($large) {
				white-space: normal;
				width: 100%;
			}
		}
		.text-page {
			margin: 3.6em 0 1.5em 0;
			@include max($large) {
				margin: 1.5em 0 1em 0;
			}
			@include max($small) {
				margin: 0;
			}
		}
	}
}
</style>