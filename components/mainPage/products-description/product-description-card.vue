<template>
	<div class="product-description-card-wrapper">
		<img :src="`/img/product-icon/${data.image}`" :alt="data.title" />
		<div class="product-information">
			<h2 class="card-title">{{ data.title }}</h2>
			<p class="card-text">{{ data.description }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss">
.product-description-card-wrapper {
	width: 55em;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	@include max($small) {
		padding: 0 1.5em;
	}
	img {
		height: 17em;
	}
	.product-information {
		.card-title {
			text-align: center;
			letter-spacing: 0.2em;
			color: $default-text-color;
			margin: 1.8em 0;
		}
		.card-text {
			text-align: center;
			color: $default-text-color;
			text-transform: none;
			line-height: 1.8em;
		}
	}
}
</style>