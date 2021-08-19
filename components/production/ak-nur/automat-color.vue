<template>
	<div class="ak-nur-automat-color-wrapper">
		<div class="ak-nur-automat-wrapper-title-wrapper">
			<div v-for="item in 4" :key="item">
				<div :class="`bubble bubble${item}`" />
			</div>
			<div class="ak-nur-automat-wrapper-title">
				<h1 class="page-title title">
					{{ $t("production.aknur.automatColor.title") }}
				</h1>
				<p class="page-text subtitle">
					{{ $t("production.aknur.automatColor.subTitle") }}
				</p>
			</div>
		</div>
		<div class="product-wrapper">
			<div class="product-description">
				<div class="description-block">
					<h2 class="second-page-title">{{ $t("production.compount") }}:</h2>
					<p class="page-text product-description-text">
						{{ $t("production.aknur.automatColor.compount") }}
					</p>
				</div>
				<div class="description-block">
					<h2 class="second-page-title">
						{{ $t("production.precautionaryMeasures") }}:
					</h2>
					<p class="page-text product-description-text">
						{{ $t("production.aknur.automatColor.precautionaryMeasures") }}
					</p>
					<p class="page-text product-description-text">
						{{ $t("production.aknur.automatColor.precautionaryMeasures2") }}
					</p>
					<p class="page-text product-description-text">
						{{ $t("production.aknur.automatColor.precautionaryMeasures3") }}
					</p>
				</div>
				<div class="description-block">
					<h2 class="second-page-title">
						{{ $t("production.storageConditions") }}:
					</h2>
					<p class="page-text product-description-text">
						{{ $t("production.aknur.automatColor.storageConditions") }}
					</p>
				</div>
			</div>
			<div>
				<div class="product-image">
					<div
						class="image"
						:style="
							`background-image: url('/img/products/${products[activeIndex].image}')`
						"
					></div>
				</div>
				<div class="product-buttons">
					<div
						class="button"
						v-for="(button, index) in buttons"
						:key="index"
						:style="
							`background-image: url('/img/buttons/${
								activeIndex === index ? button.activeImage : button.image
							}'`
						"
						@click="activeIndex = index"
						:class="{ active: activeIndex === index }"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: 0
		};
	},
	computed: {
		products() {
			return [
				{
					image: "aknur-automat-color-3kg.png"
				},
				{
					image: "aknur-automat-color-6kg.png"
				},
				{
					image: "aknur-automat-color-9kg.png"
				}
			];
		},
		buttons() {
			return [
				{
					image: "bubble3kg.png",
					activeImage: "active3kg.png"
				},
				{
					image: "bubble6kg.png",
					activeImage: "active6kg.png"
				},
				{
					image: "bubble9kg.png",
					activeImage: "active9kg.png"
				}
			];
		}
	}
};
</script>

<style lang="scss">
.ak-nur-automat-color-wrapper {
	width: 100%;
	min-height: 50em;
	padding: 11.4em 12em 20em 12em;
	margin: 13em 0 0 0;
	position: relative;
	@include max($large) {
		padding: 1em 4em 5em 1em;
	}

	@include max($small) {
		margin: 0 0 0 0;
		padding: 1em 1em 5em 1em;
	}
	.subtitle {
		width: 37em;
		margin: 2.7em 0 0 0;
		@include max($large) {
			width: 35.4em;
			margin: 1.7em 0 0 2em;
		}

		@include max($small) {
			width: 100%;
			margin: 1.7em 0 0 0.7em;
		}
	}
	.ak-nur-automat-wrapper-title-wrapper {
		display: flex;
		justify-content: flex-end;
		position: relative;
		@include max($large) {
			justify-content: flex-start;
		}
		.bubble {
			position: absolute;
			background: url("/img/main/bubble.png") center no-repeat;
			background-size: cover;
			&.bubble1 {
				width: 8em;
				height: 10em;
				left: 5em;
				top: 20em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					display: none;
				}
			}
			&.bubble2 {
				width: 13em;
				height: 15em;
				left: 15em;
				top: 15em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					display: none;
				}
			}
			&.bubble3 {
				width: 8em;
				height: 10em;
				left: 25em;
				top: 10em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					display: none;
				}
			}
			&.bubble4 {
				width: 4em;
				height: 5em;
				left: 25em;
				top: 0;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					display: none;
				}
			}
		}
	}
	.title {
		@include max($large) {
			width: 100%;
			margin: 1em 0 0 1.2em;
		}

		@include max($small) {
			width: 100%;
			margin: 1em 0 0 0.5em;
		}
	}

	.product-wrapper {
		margin: 10em 0 0 0;
		display: flex;
		@include max($large) {
			flex-direction: column;
		}
		.product-image {
			width: 45em;
			height: 65em;
			border-radius: 12em;
			margin: 0 0 0 20em;
			background-color: $blue-sky;
			display: flex;
			align-items: center;
			justify-content: center;
			@include max($large) {
				order: 1;
				margin: 0 auto;
			}
			@include max($small) {
				width: 28em;
				height: 42em;
				border-radius: 10em;
			}
			.image {
				width: 40em;
				height: 60em;
				transition: 0.3s;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				@include max($small) {
					width: 15em;
					height: 35em;
					background-size: 100%;
				}
			}
		}
		.product-buttons {
			display: flex;
			align-items: center;
			margin: 5em 0 0 25em;
			@include max($large) {
				justify-content: center;
				margin: 5em 0 5em 0;
			}

			.button {
				width: 7em;
				height: 7em;
				margin: 0 2em 0 0;
				cursor: pointer;
				background-position: center;
				background-repeat: no-repeat;
				background-size: cover;
				opacity: 0.7;
				transition: 0.3s;
				&.active {
					opacity: 1;
				}
				@include max($small) {
					width: 5em;
					height: 5em;
				}
			}
		}
		.product-description {
			@include max($large) {
				margin: 0 0 0 3.5em;
				order: 2;
			}
			@include max($small) {
				margin: 0 0 0 1em;
			}
			.description-block {
				margin: 0 0 3em 0;
			}
			.product-description-text {
				width: 29.5em;
				margin: 0.5em 0 0 0;
				@include max($small) {
					width: 100%;
				}
			}
		}
	}
}
</style>