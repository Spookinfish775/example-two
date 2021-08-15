<template>
	<div class="articles-wrapper">
		<h1 class="page-title">
			{{ $t("articles.title") }}
		</h1>

		<div class="articles-cards">
			<ArticleCard
				v-for="(item, index) in articles"
				:key="index"
				:data="item"
			/>
		</div>
	</div>
</template>

<script>
import ArticleCard from "~/components/mainPage/articles/articles-card.vue";
import { Articles } from "~/components/mainPage/articles/articles.js";
export default {
	components: {
		ArticleCard
	},
	data() {
		return {
			articles: Articles(this)
		};
	}
};
</script>

<style lang="scss">
.articles-wrapper {
	padding: 27em 15em 15em 12em;
	@include max($large) {
		padding: 27em 3em 10em 3em;
	}
	@include max($small) {
		padding: 15em 3em 10em 3em;
	}
	.articles-cards {
		margin: 10em 0 0 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-content: center;
		justify-items: center;
		@include max($large) {
			grid-template-columns: repeat(2, 1fr);
			:nth-child(1) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(3) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(5) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
		}
		@include max($small) {
			grid-template-columns: repeat(1, 1fr);
			grid-row-gap: 15em;
			:nth-child(1) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(3) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(5) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
		}
		@include min($large + 1) {
			:nth-child(1) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(3) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(4) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
			:nth-child(6) {
				&.articles-card-wrapper {
					margin: 10em 0 0 0;
					@include max($small) {
						margin: 0;
					}
				}
			}
		}
	}
}
</style>