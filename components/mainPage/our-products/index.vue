<template>
	<div class="our-produts-wrapper">
		<h1 class="page-title">
			{{ $t("mainPage.ourProducts.title") }}
		</h1>
		<div class="cards-wrapper">
			<carousel
				:margin="stagePadding"
				:stagePadding="stagePadding"
				:autoplay="!isTablet && !isMobile"
				:dots="false"
				:nav="false"
				:autoplaySpeed="autoplayTimeoutSpeed"
				:autoplayTimeout="autoplayTimeout"
				:items="perView"
				:autoplayHoverPause="true"
				:loop="true"
			>
				<ProductCard
					v-for="(item, index) in products"
					:key="index"
					:data="item"
					:position="index % 2"
				/>
			</carousel>
		</div>
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
			active: 0,
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
		stagePadding() {
			let stagePadding;
			if (!this.isTablet && !this.isMobile) {
				stagePadding = 150;
			}
			if (this.isTablet) {
				stagePadding = 30;
			}
			if (this.isMobile) {
				stagePadding = 15;
			}
			return stagePadding;
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
	min-height: 105em;
	padding: 5em 0 5em 0;
	position: relative;
	overflow: hidden;
	background: linear-gradient(180deg, #ffffff 0%, #85cbe9 100%);
	@include max($large) {
		background: linear-gradient(180deg, #ffffff 0%, #85cbe9 100%);
	}
	@include max($small) {
		background: linear-gradient(180deg, #ffffff 43.25%, #85cbe9 100%);
		min-height: 75em;
		padding: 1.5em 0;
	}
	.page-title {
		margin: 0 0 0 4em;
		@include max($large) {
			margin: 0 0 0 1em;
		}
		@include max($small) {
			margin: 0 0 0 0.6em;
		}
	}
	.cards-wrapper {
		margin: 9em 0 0 0;
		@include max($large) {
			margin: 5em 0 0 0;
		}
	}
}
</style>