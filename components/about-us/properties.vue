<template>
	<div>
		<div class="properties-wrapper">
			<h1 class="page-title">{{ $t("aboutUs.properties.title") }}</h1>
			<div class="content-wrapper">
				<div class="contacts-content">
					<div class="mobile-powder-image mobile">
						<div class="mobile-powder-images">
							<div class="aknur" />
							<div class="aynur" />
						</div>
					</div>

					<p class="page-text" v-for="(word, index) in 10" :key="index">
						{{ $t(`aboutUs.properties.prop${index + 1}`) }}
					</p>
					<ContactBtn />
				</div>
				<div class="powder-wrapper desctop">
					<div class="aknur" />
					<div class="aynur" />
					<div v-for="item in 4" :key="item">
						<div :class="`bubble bubble${item}`" />
					</div>
				</div>
				<div class="powder-wrapper tablet">
					<div class="aknur" />
					<div class="aynur" />
					<div v-for="item in 4" :key="item">
						<div :class="`bubble bubble${item}`" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ContactBtn from "~/components/layouts/contact-btn.vue";

export default {
	components: {
		ContactBtn
	},
	computed: {
		lang() {
			return this.$i18n.locale;
		}
	},
	created() {}
};
</script>

<style lang="scss">
.properties-wrapper {
	width: 100%;
	min-height: 50em;
	padding: 11.4em 0 11em 12em;

	position: relative;
	@include max($large) {
		padding: 11em 4em 9em 1em;
	}

	@include max($small) {
		// display: block;
		padding: 6em 1em 6em 1em;
	}
	h1 {
		@include max($large) {
			padding: 0 0 1em 1em;
		}

		@include max($small) {
			width: 100%;
			padding: 0;
		}
	}
	.content-wrapper {
		display: flex;
		align-items: center;
		position: relative;
	}
	.mobile-powder-image {
		display: flex;
		align-items: center;
		justify-content: center;
		display: none;
		position: relative;
		@include max($small) {
			display: flex;
		}
		.aknur {
			position: absolute;
			width: 40.1em;
			height: 58em;
			right: 23em;
			bottom: 0em;
			z-index: 1;
			background: url("/img/main/aknur-color.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 10s;
			@include max($small) {
				width: 20.5em;
				height: 32em;
				left: 0em;
				top: -2em;
				animation: none;
			}
		}
		.aynur {
			position: absolute;
			width: 34em;
			height: 62em;
			right: 5em;
			bottom: 0em;
			z-index: 2;
			background: url("/img/main/aynur.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 8s;
			@include max($small) {
				width: 18.5em;
				height: 30em;
				left: 10em;
				top: 2em;
				animation: none;
			}
		}
		.mobile-powder-images {
			width: 100%;
			height: 32em;
		}
	}
	.powder-wrapper {
		@keyframes bubble1 {
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
				width: 4.5em;
				height: 5.5em;
				left: 45em;
				top: 14em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					width: 4.5em;
					height: 5.5em;
					left: 30em;
					top: 2em;
					animation: none;
				}
				@include max($small) {
					display: none;
				}
			}
			&.bubble2 {
				width: 9em;
				height: 10em;
				left: 55em;
				top: 18.5em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					width: 9em;
					height: 10em;
					left: 33em;
					top: -5em;
					animation: none;
				}
				@include max($small) {
					display: none;
				}
			}
			&.bubble3 {
				width: 13em;
				height: 15em;
				left: 48em;
				top: 25em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					width: 13em;
					height: 15em;
					left: 33.5em;
					top: 4em;
					animation: none;
				}
				@include max($small) {
					display: none;
				}
			}
			&.bubble4 {
				width: 5.5em;
				height: 6.5em;
				left: 60em;
				top: 42em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					width: 5.5em;
					height: 6.5em;
					left: 38em;
					top: 18em;
					animation: none;
				}
				@include max($small) {
					display: none;
				}
			}
		}
		.aknur {
			position: absolute;
			width: 40.1em;
			height: 58em;
			right: 23em;
			bottom: 0em;
			z-index: 1;
			background: url("/img/main/aknur-color.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 10s;
			@include max($large) {
				width: 20em;
				height: 43em;
				right: 5em;
				bottom: 14em;
				animation: none;
			}
			@include max($small) {
				width: 13.5em;
				height: 25em;
				right: 7em;
				top: 23em;
			}
		}
		.aynur {
			position: absolute;
			width: 34em;
			height: 62em;
			right: 5em;
			bottom: 0em;
			z-index: 2;
			background: url("/img/main/aynur.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 8s;
			@include max($large) {
				width: 20em;
				height: 43em;
				right: -3em;
				bottom: 13em;
				animation: none;
			}
			@include max($small) {
				width: 13.5em;
				height: 25em;
				left: 14em;
				top: 22em;
			}
		}
	}

	.contacts-content {
		// width: 55em;
		margin: 7em 26em 0 0;
		@include max($large) {
			margin: 0 0 0 3em;
		}
		p {
			margin: 1.2em 0 0 0;
		}
		@include max($small) {
			width: 100%;
			margin: 0;
			:nth-child(1) {
				margin: 2em 0 2em 0;
			}
		}
		h1 {
			// width: 15em;
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