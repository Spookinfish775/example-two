<template>
	<div class="about-us-wrapper">
		<h1 class="page-title">{{ $t("aboutUs.hero.title") }}</h1>
		<div class="about-us-flex">
			<div class="contacts-content">
				<div class="mobile-earth-image mobile">
					<img :src="`/img/about-us/hero/${lang}.svg`" :alt="lang" />
				</div>
				<p class="page-text">{{ $t("aboutUs.hero.text") }}</p>
				<p class="page-text">{{ $t("aboutUs.hero.text2") }}</p>
			</div>
			<div class="earth-wrapper desctop">
				<div class="earth">
					<div class="vector" />
					<div class="text-wrapper">
						<div :class="`text ${lang}`" />
					</div>
				</div>
			</div>
			<div class="earth-wrapper tablet">
				<div class="earth">
					<div class="vector" />
					<div class="text-wrapper">
						<div :class="`text ${lang}`" />
					</div>
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
	},
	created() {}
};
</script>

<style lang="scss">
.about-us-wrapper {
	width: 100%;
	min-height: 50em;
	padding: 11.4em 0 0 19em;

	position: relative;
	margin: 13em 0 0 0;
	@include max($large) {
		padding: 1em 4em 0 1em;
	}

	@include max($small) {
		margin: 0 0 0 0;
		padding: 1em;
	}
	.about-us-flex {
		display: flex;
		align-items: center;
	}
	.mobile-earth-image {
		display: flex;
		align-items: center;
		justify-content: center;
		display: none;
		@include max($small) {
			display: flex;
		}
	}
	.earth-wrapper {
		width: 33em;
		height: 33em;
		position: relative;
		@include max($large) {
			width: 18em;
			height: 18em;
		}

		@include max($small) {
			width: 100%;
			height: 100%;
			margin: 0 auto;
		}
	}
	.earth {
		width: 30em;
		height: 30em;
		border-radius: 50%;
		background-color: $main-color;
		position: relative;
		@include max($large) {
			width: 15em;
			height: 15em;
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
				width: 7em;
				height: 5em;
			}
		}
		@keyframes rotate {
			0% {
				transform: rotate(0%);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		.text-wrapper {
			position: absolute;
			z-index: 2;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			.text {
				width: 27em;
				height: 27em;
				translate: -50%, -50%;
				animation: rotate linear 15s infinite;
				@include max($large) {
					width: 13em;
					height: 13em;
					animation: none;
				}

				@include max($small) {
					width: 13em;
					height: 13em;
					margin: 0;
				}
				&.ru {
					background: url("/img/about-us/hero/ruText.png") center no-repeat;
					background-size: cover;
				}
				&.en {
					background: url("/img/about-us/hero/enText.png") center no-repeat;
					background-size: cover;
				}
				&.tk {
					background: url("/img/about-us/hero/tkText.png") center no-repeat;
					background-size: cover;
				}
			}
		}
	}
	h1 {
		@include max($large) {
			width: 100%;
			margin: 5em 0 3em 1em;
		}

		@include max($small) {
			width: 100%;
		}
	}
	.contacts-content {
		width: 55em;
		margin: 0 26em 0 0;
		:nth-child(3) {
			margin: 2em 0 0 0;
		}
		:nth-child(4) {
			margin: 1em 0 0 0;
		}
		@include max($large) {
			margin: 0 5em 0 3em;
			width: 45em;
			:nth-child(3) {
				margin: 3em 0 0 0;
			}
			:nth-child(4) {
				margin: 2em 0 0 0;
			}
		}

		@include max($small) {
			width: 100%;
			margin: 0;
			:nth-child(1) {
				margin: 2em 0 0 0;
			}
			:nth-child(2) {
				margin: 3.6em 0 0 0;
			}
			:nth-child(3) {
				margin: 3.6em 0 0 0;
			}
		}
	}
}
</style>