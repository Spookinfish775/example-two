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
		isTablet() {
			return window.innerWidth <= 1200;
		},
		isMobile() {
			return window.innerWidth <= 767;
		},
		perView() {
			let per = 3;
			if (this.isTablet) per = 2;
			if (this.isMobile) per = 1;
			return per;
		},
		slideOptions() {
			return {
				type: "carousel",
				autoplay: !this.isTablet && !this.isMobile,
				perView: this.perView,
				hoverpause: true,
				animationDuration: 3000
				// animationTimingFunc: "cubic-bezier(0, 0, 0, 0)"
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

<style lang="scss" scoped>
.our-produts-wrapper {
	width: 100%;
	min-height: 100vh;
	@include max($large) {
		background: linear-gradient(180deg, #ffffff 0%, #85cbe9 100%);
	}
	@include max($small) {
		padding: 1em;
	}
	h1 {
		margin: 3.6em 0 2.3em 3.9em;
		@include max($large) {
			text-align: left;
			margin: 0 0 2em 1em;
		}
		@include max($small) {
			margin: 1em 0 2em 0.5em;
		}
	}
	.cards {
		display: flex;
		justify-content: center;
	}
}
</style>