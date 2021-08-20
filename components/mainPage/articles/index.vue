<template>
	<div class="our-articles-wrapper">
		<h1 class="page-title">
			{{ $t("mainPage.articles.title") }}
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
				<ArticlesCard
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
import ArticlesCard from "~/components/mainPage/articles/articles-card.vue";
import { Articles } from "./articles";
export default {
	components: {
		carousel,
		ArticlesCard
	},
	data() {
		return {
			active: 0,
			products: Articles(this)
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
.our-articles-wrapper {
	width: 100%;
	min-height: 90em;
	padding: 5em 0 5em 0;
	position: relative;
	overflow: hidden;
	@include max($large) {
		min-height: 70em;
	}
	@include max($small) {
		min-height: 60em;
		padding: 1.5em 0;
	}
	.page-title {
		text-align: center;
		@include max($small) {
			text-align: left;
			padding: 0 0 0 0.8em;
		}
	}
	.cards-wrapper {
		margin: 9em 0 0 0;
		@include max($large) {
			margin: 5em 0 0 0;
		}
		@include max($small) {
			// .articles-card {
			// 	padding: 0 1.5em;
			// }
		}
	}
}
</style>