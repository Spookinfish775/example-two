<template>
	<div class="contacts-wrapper">
		<div class="contacts-content">
			<h1 class="page-title">{{ $t("mainPage.contacts.title") }}</h1>
			<div class="mobile-earth-image mobile">
				<img :src="`/img/main/contact${lang}.svg`" :alt="lang" />
			</div>
			<p class="page-text">{{ $t("mainPage.contacts.text") }}</p>
			<p class="page-text">{{ $t("mainPage.contacts.text2") }}</p>
			<button>
				<span> {{ $t("mainPage.contacts.contact") }}</span>
			</button>
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
	@include max($large) {
		padding: 1em 4em 0 1em;
	}

	@include max($small) {
		// display: block;
		padding: 1em;
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
			width: 20em;
			height: 20em;
			position: absolute;
			z-index: 1;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			background: url("/img/main/contacts/vector.svg") center no-repeat;
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
					background: url("/img/main/contacts/ruText.png") center no-repeat;
					background-size: cover;
				}
				&.en {
					background: url("/img/main/contacts/enText.png") center no-repeat;
					background-size: cover;
				}
				&.tk {
					background: url("/img/main/contacts/tkText.png") center no-repeat;
					background-size: cover;
				}
			}
		}
	}
	.contacts-content {
		width: 55em;
		margin: 0 26em 0 0;
		:nth-child(2) {
			margin: 3.6em 0 0 0;
		}
		@include max($large) {
			margin: 0 0 0 3em;
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
		h1 {
			width: 15em;
			@include max($large) {
				width: 100%;
			}

			@include max($small) {
				width: 100%;
			}
		}

		button {
			width: 15em;
			margin: 3.2em 0 0 0;
			padding: 2.2em 2em;
			background: #89cdea;
			border-radius: 11em;
			@include max($small) {
				width: 100%;
			}
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