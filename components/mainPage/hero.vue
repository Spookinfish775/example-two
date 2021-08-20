<template>
	<div class="hero-wrapper">
		<h1 class="page-title hero-text  left">
			{{ $t("mainPage.hero.flawlessPurity") }}
		</h1>
		<div class="powder-images">
			<div class="aknur" />
			<div class="aynur" />
		</div>
		<div v-for="item in 8" :key="item" :class="`bubble bubble${item}`" />
		<div class="instagram-contact">
			<div class="line"></div>
			<a target="_blank" href="https://www.instagram.com/bagtlyzamana"
				><img src="/img/instagramblue.svg" alt="instagramm"
			/></a>
		</div>
		<div class="frame" />
		<h1 class="page-title hero-text  right">
			{{ $t("mainPage.hero.gentleCare") }}
		</h1>
		<div class="bottom-wave" />
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-wrapper {
	width: 100%;
	min-height: 87em;
	overflow: hidden;
	position: relative;
	background: linear-gradient(180deg, #ffffff 0%, #85cbe9 43.69%);
	@include max($large) {
		min-height: 100em;
		background: linear-gradient(180deg, #ffffff 0%, #85cbe9 17.33%);
	}
	@include max($small) {
		min-height: 57em;
	}
	.hero-text {
		color: #fefeff;
		position: absolute;
		text-align: center;
		&.left {
			width: 11.5em;
			top: 10.2em;
			left: 0.8em;
			@include max($large) {
				width: 100%;
				top: 6.4em;
				left: 50%;
				transform: translateX(-50%);
			}
			@include max($small) {
				top: 4.5em;
			}
		}
		&.right {
			width: 11.5em;
			top: 10.2em;
			right: 0.8em;
			@include max($large) {
				width: 100%;
				top: 8em;
				left: 50%;
				transform: translateX(-50%);
			}
			@include max($small) {
				top: 7em;
			}
		}
	}
	.instagram-contact {
		position: absolute;
		top: 37em;
		right: 4em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		@include max($large) {
			display: none;
		}
		.line {
			height: 9em;
			width: 0.2em;
			background-color: $main-color;
		}
		img {
			margin: 4em 0 0 0;
			width: 2em;
			height: 2em;
		}
	}
	.frame {
		position: absolute;
		width: 18em;
		height: 18em;
		right: 20em;
		bottom: 11em;
		background: url("/img/main/frame.png") center no-repeat;
		background-size: cover;
		@include max($large) {
			width: 14.5em;
			height: 14.5em;
			right: 8em;
			bottom: 10em;
			z-index: 3;
		}
		@include max($small) {
			width: 7.5em;
			height: 7.5em;
			right: 3em;
			bottom: 8em;
			z-index: 3;
		}
	}
	.bubble {
		position: absolute;
		background: url("/img/main/bubble.png") center no-repeat;
		background-size: cover;
		&.bubble1 {
			width: 4.5em;
			height: 5.5em;
			left: 29em;
			top: 19em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				left: 2em;
				top: 31em;
				animation: none;
			}
			@include max($small) {
				width: 1.8em;
				height: 2.1em;
				left: 1.5em;
				top: 22em;
			}
		}
		&.bubble2 {
			width: 9em;
			height: 10em;
			left: 35em;
			top: 18.5em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				left: 9em;
				top: 30em;
				animation: none;
			}
			@include max($small) {
				width: 3.5em;
				height: 4em;
				left: 2em;
				top: 26em;
			}
		}
		&.bubble3 {
			width: 13em;
			height: 15em;
			left: 35em;
			top: 25em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				left: 3.5em;
				top: 37em;
				animation: none;
			}
			@include max($small) {
				width: 5em;
				height: 6em;
				left: 2em;
				top: 30em;
			}
		}
		&.bubble4 {
			width: 5.5em;
			height: 6.5em;
			left: 41em;
			top: 47em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				left: 8em;
				top: 62em;
				animation: none;
			}
			@include max($small) {
				width: 2em;
				height: 2.5em;
				left: 3.5em;
				top: 42em;
			}
		}
		&.bubble5 {
			width: 9em;
			height: 10em;
			right: 40em;
			top: 52em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				right: 6.5em;
				top: 66em;
				z-index: 12;
				animation: none;
			}
			@include max($small) {
				width: 5em;
				height: 6em;
				right: 2.5em;
				top: 33em;
			}
		}
		&.bubble6 {
			width: 13em;
			height: 15em;
			right: 35em;
			top: 26em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				right: 6em;
				top: 41em;
				animation: none;
			}
			@include max($small) {
				width: 2em;
				height: 2em;
				right: 4em;
				top: 28em;
			}
		}

		&.bubble7 {
			width: 4.5em;
			height: 5.5em;
			right: 35em;
			top: 24em;
			animation: bubble1 linear infinite 4s;
			@include max($large) {
				right: 8em;
				top: 35em;
				animation: none;
			}
			@include max($small) {
				width: 2.2em;
				height: 2.5em;
				right: 2em;
				top: 25em;
			}
		}
		&.bubble8 {
			width: 5.5em;
			height: 6.5em;
			right: 29em;
			top: 21em;
			animation: bubble1 linear infinite 6s;
			@include max($large) {
				right: 2em;
				top: 31em;
				animation: none;
			}
			@include max($small) {
				display: none;
			}
		}
	}
	.powder-images {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: 55em;
		height: 100%;
		@include max($large) {
			width: 47em;
		}
		@include max($small) {
			width: 21em;
		}
		.aknur {
			position: absolute;
			width: 41em;
			height: 58em;
			left: 0em;
			top: 16em;
			z-index: 2;
			background: url("/img/main/aknur.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 10s;
			@include max($large) {
				width: 31em;
				height: 54em;
				top: 30em;
				animation: none;
			}
			@include max($small) {
				width: 14em;
				height: 24em;
				top: 23em;
			}
		}
		.aynur {
			position: absolute;
			width: 34em;
			height: 62em;
			right: 0em;
			top: 13em;
			z-index: 1;
			background: url("/img/main/aynur.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 8s;
			@include max($large) {
				width: 31em;
				height: 54em;
				top: 28em;
				animation: none;
			}
			@include max($small) {
				width: 13.5em;
				height: 25em;
				top: 22em;
			}
		}
	}
	.bottom-wave {
		position: absolute;
		bottom: -41em;
		width: 100%;
		height: 52em;
		background: url("/img/main/description/vector.svg") center no-repeat;
		background-size: cover;
		@include max($large) {
			bottom: -33em;
		}
		@include max($small) {
			bottom: -30em;
		}
	}
}
</style>