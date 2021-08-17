<template>
	<div :class="`product-card-wrapper position-${position}`">
		<div :class="`product-card ${data.color}`">
			<img :src="`/img/products/${data.image}`" :alt="data.title" />
			<div class="product-information">
				<h2 class="card-title">{{ data.title }}</h2>
				<p class="card-text">{{ data.description }}</p>
			</div>
		</div>
		<a @click="goTo" :class="`detail-button ${data.color}`">
			<span>
				{{ $t("products.more") }}
			</span>
		</a>
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
	height: 60em;
	width: 32em;
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
		@include max($large) {
			// text-align: left;
			// margin: 0 0 2em 1em;
		}
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
		&.blue-sky {
			background-color: $blue-sky;
		}
		&.pink {
			background-color: $pink;
		}
		&.purple {
			background-color: $purple;
		}
		&.green {
			background-color: $green;
		}
	}
	.detail-button {
		display: block;
		width: 20em;
		height: 8em;
		margin: 2.2em 0 0 0;
		border-radius: 11.1em;
		display: flex;
		align-items: center;
		justify-content: center;
		@include max($small) {
			width: 90%;
			margin: 3em 1em 1em 1em ;
		}
		span {
			font-family: "TT Hazelnuts";
			font-style: normal;
			font-weight: 900;
			font-size: 1.8em;
			line-height: 0.8em;
			letter-spacing: 0.2em;
			text-transform: uppercase;
			color: #ffffff;
			@include max($large) {
				font-size: 1.8em;
			}
			@include max($small) {
				font-size: 1.6em;
			}
		}
		&.blue-sky {
			background-color: $blue-sky;
		}
		&.pink {
			background-color: $pink;
		}
		&.purple {
			background-color: $purple;
		}
		&.green {
			background-color: $green;
		}
	}
}
</style>