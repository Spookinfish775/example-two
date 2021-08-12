<template>
	<div class="contacts-wrapper">
		<div>
			<h1 class="page-title">{{ $t("aboutUs.hero.title") }}</h1>
			<div class="contacts-content">
				<p class="page-text">{{ $t("aboutUs.hero.text") }}</p>
				<p class="page-text">{{ $t("aboutUs.hero.text2") }}</p>
			</div>
		</div>
		<div class="earth">
			<div class="vector" />
			<div class="text-wrapper">
				<div :class="`text ${lang}`" />
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
.contacts-wrapper {
	width: 100%;
	min-height: 50em;
	padding: 11.4em 0 0 19em;
	display: flex;
	align-items: center;
	position: relative;
	h1{
		margin: 0 0 2.3em 0;
	}
	.earth {
		width: 30em;
		height: 30em;
		border-radius: 50%;
		background-color: $main-color;
		position: relative;
		.vector {
			width: 17em;
			height: 17em;
			position: absolute;
			z-index: 1;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background: url("/img/about-us/hero/vector.svg") center no-repeat;
			background-size: cover;
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
	.contacts-content {
		width: 55em;
		margin: 0 26em 0 0;
		@keyframes bubble {
			0% {
				transform: translateY(0%);
			}
			50% {
				transform: translateY(-40%);
			}
		}
		:nth-child(2) {
			margin: 3.6em 0 0 0;
		}
		:nth-child(3) {
			margin: 1.5em 0 0 0;
		}

		button {
			width: 15em;
			margin: 3.2em 0 0 0;
			padding: 2.2em 2em;
			background: #89cdea;
			border-radius: 11em;
			span {
				color: $default-text-color;
				font-family: "TT Hazelnuts";
				font-style: normal;
				font-weight: 900;
				font-size: 1.3em;
				line-height: 0.8em;
				letter-spacing: 0.2em;
				text-transform: uppercase;
			}
		}
	}
}
</style>