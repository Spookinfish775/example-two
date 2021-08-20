<template>
	<div class="products-description-wrapper">
		<div class="top-wave" />
		<vue-glide v-model="active" :options="slideOptions">
			<vue-glide-slide v-for="(item, index) in products" :key="index">
				<div class="cards">
					<ProductDescriptionCard :data="item" />
				</div>
			</vue-glide-slide>
		</vue-glide>
		<div class="slider-buttons">
			<button
				v-for="(item, index) in products"
				:key="index"
				:class="{ active: index === active }"
				@click="active = index"
			/>
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
	position: relative;
	background-color: $main-color;
	padding: 0 0 10em 0;
	.top-wave {
		position: absolute;
		top: -25em;
		width: 100%;
		height: 52em;
		background: url("/img/products-description/vector.svg") center no-repeat;
		background-size: cover;
	}
	.slider-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10em 0 0 0;
		@include max($small) {
			margin: 5em 0 0 0;
		}
		button {
			width: 2em;
			height: 2em;
			margin: 0 0.5em;
			border-radius: 50%;
			border: 1px solid $blue-sky;
			cursor: pointer;
			transition: 0.3s;
			background-color: inherit;
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
}
</style>