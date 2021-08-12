<template>
	<div class="our-produts-wrapper">
		<h1 class="page-title">
			{{ $t("mainPage.ourProducts.title") }}
		</h1>
		<div>
			<vue-glide ref="slider" :options="slideOptions">
				<vue-glide-slide v-for="(item, index) in products" :key="index">
					<div
						@mouseover="onMouseOver"
						@mouseleave="onMouseLeave"
						class="cards"
					>
						<ProductCard :data="item" :position="index % 2" />
					</div>
				</vue-glide-slide>
			</vue-glide>
		</div>
	</div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import ProductCard from "~/components/mainPage/our-products/product-card.vue";
import { Products } from "./products";
export default {
	components: {
		[Glide.name]: Glide,
		[GlideSlide.name]: GlideSlide,
		ProductCard
	},
	data() {
		return {
			products: Products(this),
			autoplay: true
		};
	},
	computed: {
		slideOptions() {
			return {
				type: "carousel",
				autoplay: true,
				animationDuration: 3000,
				animationTimingFunc: "cubic-bezier(0, 0, 0, 0)"
			};
		}
	},
	methods: {
		onMouseOver(e) {
			// this.$refs["slider"].glide.pause();
		},
		onMouseLeave(e) {
			// this.autoplay = true;
		}
	},
	mounted() {
		this.$refs["slider"].glide.play();
	}
};
</script>

<style lang="scss">
.our-produts-wrapper {
	width: 100%;
	min-height: 100vh;
	h1 {
		margin: 3.6em 0 2.3em 3.9em;
	}
	.cards {
		display: flex;
		justify-content: center;
	}
	@keyframes bubble {
		0% {
			transition: 0.3s;
			transform: translateX(0%);
		}
		50% {
			transition: 0.3s;
			transform: translateX(-40%);
		}
	}
}
</style>