<template>
	<div class="description-wrapper">
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
		<div class="description-content">
			<h1 class="page-title">{{ $t("mainPage.description.title") }}</h1>
			<div class="earth-wrapper mobile">
				<div class="earth ">
					<div class="vector" />
					<div class="text-wrapper">
						<div :class="`text ${lang}`" />
					</div>
				</div>
			</div>
			<p class="page-text text-page">{{ $t("mainPage.description.text") }}</p>
			<p class="page-text">{{ $t("mainPage.description.text2") }}</p>
		</div>
		<div v-for="item in 4" :key="item" :class="`bubble bubble${item}`" />
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
.description-wrapper {
	width: 100%;
	min-height: 60em;
	padding: 11.4em 17em 7em 19em;
	display: flex;
	align-items: center;
	position: relative;
	@include max($large) {
		padding: 5em;
		min-height: 50em;
	}
	@include max($small) {
		padding: 1.5em;
		align-items: flex-start;
		min-height: 55em;
	}

	.earth-wrapper {
		width: 30em;
		height: 30em;
		position: relative;
		@include max($large) {
			width: 14em;
			height: 14em;
		}
		@include max($small) {
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
			.text-wrapper {
				position: absolute;
				z-index: 2;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				.text {
					width: 27em;
					height: 27em;
					animation: rotate linear 15s infinite;
					@include max($large) {
						width: 12em;
						height: 12em;
						animation: none;
					}
					@include max($small) {
						width: 13em;
						height: 13em;
					}
					&.ru {
						background: url("/img/main/description/ruText.png") center no-repeat;
						background-size: cover;
					}
					&.en {
						background: url("/img/main/description/enText.png") center no-repeat;
						background-size: cover;
					}
					&.tm {
						background: url("/img/main/description/tmText.png") center no-repeat;
						background-size: cover;
					}
				}
			}
		}
	}
	.description-content {
		margin: 0 0 0 12.5em;
		@include max($large) {
			margin: 0 0 0 3em;
		}
		@include max($small) {
			margin: 0;
		}
		.page-title {
			width: 15em;
			@include max($small) {
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
	.bubble {
		position: absolute;
		background: url("/img/main/bubble.png") center no-repeat;
		background-size: cover;
		&.bubble1 {
			width: 8em;
			height: 10em;
			right: 21em;
			bottom: -10em;
			animation: bubble1 linear infinite 4s;
			z-index: 10;
			@include max($large) {
				width: 4em;
				height: 4em;
				left: 5em;
				top: 8em;
				animation: none;
			}

			@include max($small) {
				left: 2em;
				top: 18em;
			}
		}
		&.bubble2 {
			width: 13em;
			height: 15em;
			right: 10em;
			bottom: 0em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				width: 7.5em;
				height: 9em;
				left: 10em;
				top: 2em;
				animation: none;
			}

			@include max($small) {
				left: 3em;
				top: 8em;
			}
		}
		&.bubble3 {
			width: 4.7em;
			height: 5.4em;
			right: 13em;
			bottom: 15em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				width: 8em;
				height: 9em;
				right: 0em;
				top: 0em;
				animation: none;
			}

			@include max($small) {
				width: 4em;
				height: 4em;
				right: 6.5em;
				top: 25em;
			}
		}
		&.bubble4 {
			width: 8.8em;
			height: 10em;
			right: 4em;
			bottom: 17em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				width: 11em;
				height: 13em;
				right: 5em;
				top: 3em;
				animation: none;
			}

			@include max($small) {
				width: 5.5em;
				height: 6.5em;
				right: 2em;
				top: 20em;
				animation: none;
			}
		}
	}
}
</style>