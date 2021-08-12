<template>
	<div :class="`articles-card-wrapper position-${position}`">
		<div class="articles-card">
			<img :src="`/img/main/articles/${data.image}`" :alt="data.title" />
			<div class="articles-information">
				<h2 class="card-title">{{ data.title }}</h2>
				<a class="detail-button">
					<span>
						{{ $t("products.more") }}
					</span>
				</a>
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
	width: 32em;
	height: 45em;
	&.position-1 {
		margin: 10em 0 0 0;
	}
	.articles-card {
		width: 32em;
		height: 47em;
		position: relative;
		img {
			max-width: 32em;
			max-height: 32em;
		}
		h2 {
			width: 12.5em;
		}
	}
	.detail-button {
		display: block;
		span {
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