<template>
	<div class="our-produts-wrapper">
		<h1 class="page-title">{{ $t("mainPage.articles.title") }}</h1>
		<vue-glide :options="slideOptions">
			<vue-glide-slide v-for="(item, index) in articles" :key="index">
				<div class="cards">
					<articlesCard :data="item" :position="index % 2" />
				</div>
			</vue-glide-slide>
		</vue-glide>
	</div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import articlesCard from "~/components/mainPage/articles/articles-card.vue";
import { Articles } from "./articles";
export default {
	components: {
		[Glide.name]: Glide,
		[GlideSlide.name]: GlideSlide,
		articlesCard
	},
	data() {
		return {
			articles: Articles(this)
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
	}
};
</script>

<style lang="scss">
.our-produts-wrapper {
	width: 100%;
	min-height: 100vh;
	@include max($large) {
		min-height: 60vh;
	}
	@include max($small) {
		min-height: 60vh;
		padding: 1em 1em 10em 1em;
	}
	h1 {
		text-align: center;
		margin: 3.6em 0 2.3em 4em;
		@include max($large) {
			margin: 0 0 2em 1em;
		}
		@include max($small) {
			text-align: left;
			margin: 1em 0 2em 0.5em;
		}
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