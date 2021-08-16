<template>
	<div class="products-description-wrapper">
		<div class="products-description-color-wrapper" />
		<div class="products-description">
			<div class="products-description-bg" />
			<vue-glide v-model="active" :options="slideOptions">
				<vue-glide-slide v-for="(item, index) in products" :key="index">
					<div class="cards">
						<ProductDescriptionCard :data="item" />
					</div>
				</vue-glide-slide>
			</vue-glide>
			<div class="slider-buttons">
				<div
					class="button"
					v-for="(item, index) in products"
					:key="index"
					:class="{ active: index === active }"
					@click="active = index"
				></div>
			</div>
		</div>
	</div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import ProductDescriptionCard from "~/components/mainPage/products-description/product-description-card.vue";
import { Products } from "./products";
export default {
	components: {
		[Glide.name]: Glide,
		[GlideSlide.name]: GlideSlide,
		ProductDescriptionCard
	},
	data() {
		return {
			products: Products(this),
			active: 0
		};
	},
	computed: {
		isTablet() {
			return window.innerWidth <= 1200;
		},
		isMobile() {
			return window.innerWidth <= 767;
		},
		perView() {
			let per = 2;
			if (this.isTablet) per = 1;
			if (this.isMobile) per = 1;
			return per;
		},
		slideOptions() {
			return {
				type: "carousel",
				perView: this.perView,
				animationDuration: 100,
				animationTimingFunc: "cubic-bezier(0, 0, 0, 0)"
			};
		}
	}
};
</script>

<style lang="scss">
.products-description-wrapper {
	width: 100%;
	height: 90em;
	margin: 20em 0 0 0;
	position: relative;
	display: flex;
	align-items: flex-end;
	@include max($large) {
		margin: 0 0 0 0;
	}

	@include max($small) {
		height: 70em;
		margin: 0 0 0 0;
	}
	.slider-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		.button {
			width: 2em;
			height: 2em;
			margin: 0 0.5em;
			border-radius: 50%;
			border: 1px solid $blue-sky;
			cursor: pointer;
			transition: 0.3s;
			&.active {
				border-radius: 1em;
				width: 4em;
				background-color: $blue-sky;
			}
		}
	}
	.cards {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.products-description-color-wrapper {
		width: 100%;
		height: 160%;
		position: absolute;
		bottom: 45em;
		z-index: -1;
		background: linear-gradient(180deg, #ffffff 0%, #85cbe9 100%);
		@include max($large) {
			display: none;
		}

		@include max($small) {
			display: none;
		}
	}
	.products-description {
		width: 100%;
		height: 70%;
		position: relative;
		background-color: $main-color;
		@include max($large) {
			height: 90%;
		}

		@include max($small) {
			height: 90%;
		}
		.products-description-bg {
			width: 100%;
			height: 50em;
			position: absolute;
			background: url("/img/products-description/vector.svg") center no-repeat;
			background-size: cover;
			left: 0;
			top: -30em;
		}
	}
}
</style>