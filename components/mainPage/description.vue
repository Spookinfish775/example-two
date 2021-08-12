<template>
	<div class="description-wrapper">
		<div class="earth">
			<div class="vector" />
			<div class="text-wrapper">
				<div :class="`text ${lang}`" />
			</div>
		</div>
		<div class="description-content">
			<h1 class="page-title">{{ $t("mainPage.description.title") }}</h1>
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
	.earth {
		width: 30em;
		height: 30em;
		border-radius: 50%;
		background-color: $main-color;
		position: relative;
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
			}
			&.bubble2 {
				width: 13em;
				height: 15em;
				right: 10em;
				bottom: 0em;
				animation: bubble linear infinite 6s;
			}
			&.bubble3 {
				width: 4.7em;
				height: 5.4em;
				right: 14.4em;
				bottom: 15em;
				animation: bubble linear infinite 4s;
			}
			&.bubble4 {
				width: 8.8em;
				height: 10em;
				right: 4em;
				bottom: 17em;
				animation: bubble linear infinite 6s;
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
		}
	}
}
</style>