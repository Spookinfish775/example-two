<template>
	<div class="our-produts-wrapper">
		<h1 class="page-title">{{ $t("mainPage.articles.title") }}</h1>
		<vue-glide :options="slideOptions">
			<vue-glide-slide v-for="(item, index) in articles" :key="index">
				<div class="cards">
					<ArticlesCard :data="item" :position="index % 2" />
				</div>
			</vue-glide-slide>
		</vue-glide>
	</div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import ArticlesCard from "~/components/mainPage/articles/articles-card.vue";
import { Articles } from "./Articles";
export default {
	components: {
		[Glide.name]: Glide,
		[GlideSlide.name]: GlideSlide,
		ArticlesCard
	},
	data() {
		return {
			articles: Articles(this)
		};
	},
	computed: {
		slideOptions() {
			return {
				type: "carousel",
				autoplay: 3000,
				animationDuration: 3000,
				animationTimingFunc: "cubic-bezier(0, 0, 0, 0)"
			};
		}
	}
};
</script>

<style lang="scss">
.our-produts-wrapper {
	width: 100%;
	min-height: 100vh;
	h1 {
		text-align: center;
		margin: 3.6em 0 2.3em 4em;
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