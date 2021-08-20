<template>
	<div :class="`articles-card-wrapper position-${position}`">
		<div class="articles-card">
			<img :src="`/img/main/articles/${data.image}`" :alt="data.title" />
			<div class="articles-information">
				<h2 class="card-title">{{ data.title }}</h2>
				<router-link :to="data.link" class="detail-button">
					{{ $t("products.more") }}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		},
		position: {
			type: Number,
			default: 0
		}
	}
};
</script>

<style lang="scss">
.articles-card-wrapper {
	&.position-1 {
		margin: 10em 0 0 0;
		@include max($small) {
			margin: 0;
		}
	}
	.articles-card {
		width: 32em;
		position: relative;
		@include max($small) {
			width: 28em;
		}
		img {
			width: 100%;
			max-height: 30em;
		}
		.card-title {
			font-family: "Montserrat";
			margin: 1.5em 0 0.5em 0;
		}
		.detail-button {
			display: block;
			color: $blue-sky;
			font-family: "Montserrat";
			font-style: normal;
			font-weight: normal;
			font-size: 1.6em;
			line-height: 2.6em;
		}
	}
}
</style>