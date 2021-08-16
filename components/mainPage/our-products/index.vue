<template>
	<div class="our-produts-wrapper">
		<h1 class="page-title">
			{{ $t("mainPage.ourProducts.title") }}
		</h1>
		<carousel
			:autoplay="!isTablet && !isMobile"
			:dots="false"
			:nav="false"
			:autoplaySpeed="autoplayTimeoutSpeed"
			:autoplayTimeout="autoplayTimeout"
			:items="perView"
			:autoplayHoverPause="true"
			:loop="true"
		>
			<div v-for="(item, index) in products" :key="index" class="cards">
				<ProductCard :data="item" :position="index % 2" />
			</div>
		</carousel>
	</div>
</template>

<script>
import carousel from "vue-owl-carousel";
import ProductCard from "~/components/mainPage/our-products/product-card.vue";
import { Products } from "./products";
export default {
	components: {
		carousel,
		ProductCard
	},
	data() {
		return {
			products: Products(this)
		};
	},
	computed: {
		isTablet() {
			return window.innerWidth <= 1200;
		},
		isMobile() {
			return window.innerWidth <= 767;
		},
		autoplayTimeoutSpeed() {
			let timeout;
			if (!this.isTablet && !this.isMobile) {
				timeout = 3000;
			} else {
				timeout = true;
			}
			return timeout;
		},
		autoplayTimeout() {
			let timeout;
			if (!this.isTablet && !this.isMobile) {
				timeout = 3000;
			} else {
				timeout = 100000;
			}
			return timeout;
		},
		perView() {
			let per = 3;
			if (this.isTablet) per = 2;
			if (this.isMobile) per = 1;
			return per;
		}
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
		margin: 0 5em;
	}
}
</style>