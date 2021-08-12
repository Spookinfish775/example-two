<template>
	<div class="hero-wrapper">
		<p>{{ $t("mainPage.hero.flawlessPurity") }}</p>
		<div class="images-wrapper">
			<div class="images">
				<div v-for="item in 6" :key="item">
					<div :class="`bubble bubble${item}`" />
				</div>
				<div class="aknur" />
				<div class="aynur" />
			</div>
		</div>
		<div class="frame" />
		<p>{{ $t("mainPage.hero.gentleCare") }}</p>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-wrapper {
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	background: linear-gradient(180deg, #ffffff 0%, #85cbe9 43.69%);
	p {
		text-align: center;
		align-self: center;
		color: $default-text-color;
		font-size: 4em;
		font-weight: 900;
		line-height: 1.4em;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		&:nth-child(1) {
			width: 13em;
			padding-left: 1.2em;
		}
		&:nth-last-child(1) {
			width: 10em;
			padding-right: 1.2em;
		}
	}
	.frame {
		position: absolute;
		width: 18em;
		height: 18em;
		right: 19em;
		bottom: 11em;
		background: url("/img/main/frame.png") center no-repeat;
		background-size: cover;
	}
	.images-wrapper {
		flex-grow: 1;
		position: relative;
		.images {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		@keyframes bubble1 {
			0% {
				transform: translateY(0%);
			}
			50% {
				transform: translateY(-40%);
			}
		}

		@keyframes anim2 {
			0% {
				transform: translateY(0%);
			}
			50% {
				transform: translateY(-10%);
			}
		}
		.bubble {
			position: absolute;
			background: url("/img/main/bubble.png") center no-repeat;
			background-size: cover;
			&.bubble1 {
				width: 13em;
				height: 15em;
				left: -15em;
				top: 25em;
				animation: bubble1 linear infinite 4s;
			}
			&.bubble2 {
				width: 5.5em;
				height: 6.5em;
				left: -11em;
				top: 47em;
				animation: bubble1 linear infinite 6s;
			}
			&.bubble3 {
				width: 9em;
				height: 10em;
				left: 42em;
				top: 26em;
				animation: bubble1 linear infinite 4s;
			}
			&.bubble4 {
				width: 13em;
				height: 15em;
				left: 40em;
				top: 52em;
				animation: bubble1 linear infinite 6s;
			}

			&.bubble5 {
				width: 4.5em;
				height: 5.5em;
				left: 50.5em;
				top: 20.4em;
				animation: bubble1 linear infinite 4s;
			}
			&.bubble6 {
				width: 5.5em;
				height: 6.5em;
				left: 56em;
				top: 20em;
				animation: bubble1 linear infinite 6s;
			}
		}
		.aknur {
			position: absolute;
			width: 40.1em;
			height: 58em;
			left: -7em;
			top: 13em;
			z-index: 2;
			background: url("/img/main/aknur.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 10s;
		}
		.aynur {
			position: absolute;
			width: 34em;
			height: 62em;
			left: 13em;
			top: 10em;
			z-index: 1;
			background: url("/img/main/aynur.png") center no-repeat;
			background-size: cover;
			animation: anim2 linear infinite 8s;
		}
	}
}
</style>