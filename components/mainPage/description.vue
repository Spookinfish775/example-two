<template>
	<div class="description-wrapper">
		<div class="description-bg" />
		<div class="earth-wrapper tablet ">
			<div class="earth ">
				<div class="vector" />
				<div class="text-wrapper">
					<div :class="`text ${lang}`" />
				</div>
			</div>
		</div>
		<div class="earth-wrapper desctop ">
			<div class="earth ">
				<div class="vector" />
				<div class="text-wrapper">
					<div :class="`text ${lang}`" />
				</div>
			</div>
		</div>
		<div class="description-content">
			<h1 class="page-title">{{ $t("mainPage.description.title") }}</h1>
			<div class="mobile-earth-image mobile">
				<img :src="`/img/main/earth${lang}.svg`" :alt="lang" />
			</div>
			<p class="page-text">{{ $t("mainPage.description.text") }}</p>
			<p class="page-text">{{ $t("mainPage.description.text2") }}</p>
			<div v-for="item in 4" :key="item">
				<div :class="`bubble bubble${item}`" />
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
.description-wrapper {
	width: 100%;
	min-height: 50em;
	padding: 11.4em 0 0 19em;
	display: flex;
	align-items: center;
	position: relative;
	.mobile-earth-image {
		display: flex;
		align-items: center;
		justify-content: center;
		display: none;
		@include max($small) {
			display: flex;
		}
	}
	@include max($large) {
		padding: 1em 4em 0 4em;
	}

	@include max($small) {
		// display: block;
		padding: 1em;
	}
	.description-bg {
		width: 100%;
		height: 50em;
		position: absolute;
		background: url("/img/main/description/vector.svg") center no-repeat;
		background-size: cover;
		left: 0;
		top: -9em;
		// z-index: -1;
		@include max($large) {
			top: -18em;
		}

		@include max($small) {
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
		z-index: 2;
		@include max($large) {
			width: 15em;
			height: 15em;
		}

		.vector {
			width: 15em;
			height: 10em;
			position: absolute;
			z-index: 1;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background: url("/img/main/description/vector.png") center no-repeat;
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
					background: url("/img/main/description/ruText.png") center no-repeat;
					background-size: cover;
				}
				&.en {
					background: url("/img/main/description/enText.png") center no-repeat;
					background-size: cover;
				}
				&.tk {
					background: url("/img/main/description/tkText.png") center no-repeat;
					background-size: cover;
				}
			}
		}
	}
	.description-content {
		width: 65em;
		margin: 0 0 0 12.6em;
		z-index: 10;
		@include max($large) {
			margin: 0 0 0 3em;
			:nth-child(1) {
				margin: 2em 0 0 0;
			}
			:nth-child(2) {
				margin: 3.6em 0 0 0;
			}
			:nth-child(4) {
				margin: 1.5em 0 0 0;
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
				margin: 1.5em 0 0 0;
			}
		}
		@keyframes bubble {
			0% {
				transform: translateY(0%);
			}
			50% {
				transform: translateY(-40%);
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
				bottom: -10em;
				animation: bubble linear infinite 4s;
				@include max($large) {
					width: 4em;
					height: 4em;
					left: 5em;
					bottom: 36em;
					animation: none;
				}

				@include max($small) {
					left: 2em;
					bottom: 25em;
				}
			}
			&.bubble2 {
				width: 13em;
				height: 15em;
				right: 10em;
				bottom: 0em;
				animation: bubble linear infinite 6s;
				@include max($large) {
					width: 7.5em;
					height: 9em;
					left: 10em;
					bottom: 38em;
					animation: none;
				}

				@include max($small) {
					left: 3em;
					bottom: 28em;
				}
			}
			&.bubble3 {
				width: 4.7em;
				height: 5.4em;
				right: 14.4em;
				bottom: 15em;
				animation: bubble linear infinite 4s;
				@include max($large) {
					width: 8em;
					height: 9em;
					right: 0em;
					bottom: 20em;
					animation: none;
				}

				@include max($small) {
				}
			}
			&.bubble4 {
				width: 8.8em;
				height: 10em;
				right: 4em;
				bottom: 17em;
				animation: bubble linear infinite 6s;
				@include max($large) {
					width: 11em;
					height: 13em;
					right: 2em;
					bottom: 30em;
					animation: none;
				}

				@include max($small) {
				}
			}
		}
		:nth-child(2) {
			margin: 3.6em 0 0 0;
		}
		:nth-child(3) {
			margin: 1.5em 0 0 0;
		}
		h1 {
			width: 15em;
			@include max($large) {
				width: 100%;
			}

			@include max($small) {
				width: 100%;
			}
		}
	}
}
</style>