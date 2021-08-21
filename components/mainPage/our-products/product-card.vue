<template>
	<div :class="`product-card-wrapper position-${position}`">
		<div :class="`product-card ${data.color}`">
			<img :src="`/img/products/${data.image}`" :alt="data.title" />
			<div class="product-information">
				<h2 class="card-title">{{ data.title }}</h2>
				<p class="card-text">{{ data.description }}</p>
			</div>
		</div>
		<button :class="`detail-button ${data.color}`">
			<nuxt-link :to="data.link">
				{{ $t("products.more") }}
			</nuxt-link>
		</button>
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
	},
	methods: {
		goTo() {
			this.$router.push(this.data.link);
		}
	}
};
</script>

<style lang="scss">
.product-card-wrapper {
	&.position-1 {
		margin: 10em 0 0 0;
		@include max($small) {
			margin: 0;
		}
	}
	.product-card {
		width: 32em;
		height: 47em;
		border-radius: 12em;
		position: relative;
		@include max($small) {
			width: 28em;
			height: 40em;
		}
		img {
			position: absolute;
			left: 50%;
			top: 30%;
			max-width: 25em;
			max-height: 35em;
			transform: translate(-50%, -30%);
		}
		.product-information {
			position: absolute;
			left: 0;
			bottom: -1em;
		}
	}
	.detail-button {
		cursor: pointer;
		margin: 2.2em 0 0 0;
		padding: 1.5em;
		border-radius: 11.1em;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: "TT Hazelnuts";
		font-style: normal;
		font-weight: 900;
		font-size: 1.8em;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		a {
			color: #ffffff;
		}
		@include max($small) {
			width: 90%;
			margin: 3em 1em 1em 1em;
			font-size: 1.6em;
		}
	}
	.blue-sky {
		background-color: $blue-sky;
	}
	.pink {
		background-color: $pink;
	}
	.purple {
		background-color: $purple;
	}
	.green {
		background-color: $green;
	}
}
</style>