<template>
	<div class="product-description-card-wrapper">
		<img :src="`/img/product-icon/${data.image}`" :alt="data.title" />
		<div class="product-information">
			<h2 class="card-title title-card">{{ data.title }}</h2>
			<p class="card-text text-card">{{ data.description }}</p>
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
	height: 55em;
	width: 55em;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	.title-card {
		letter-spacing: 0.2em;
	}
	.text-card {
		font-size: 1.6em;
		line-height: 1.8em;
	}
	img {
		height: 17em;
		margin: 0 0 4em 0;
	}
	.product-information {
		h2 {
			text-align: center;
			color: $default-text-color;
		}
		p {
			margin: 2.5em 0 0 0;
			text-align: center;
			color: $default-text-color;
			text-transform: none;
		}
	}
}
</style>