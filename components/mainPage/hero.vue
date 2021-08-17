<template>
	<div class="hero-wrapper">
		<p class="desctop">{{ $t("mainPage.hero.flawlessPurity") }}</p>
		<div class="tablet-text tablet mobile">
			<p class="tablet mobile">{{ $t("mainPage.hero.flawlessPurity") }}</p>
			<p class="tablet mobile">{{ $t("mainPage.hero.gentleCare") }}</p>
			<p class=" mobile">{{ $t("mainPage.hero.flawlessPurity") }}</p>
			<p class=" mobile">{{ $t("mainPage.hero.gentleCare") }}</p>
		</div>
		<div class="images-wrapper">
			<div class="images">
				<div v-for="item in 8" :key="item">
					<div :class="`bubble bubble${item}`" />
				</div>
				<div class="aknur" />
				<div class="aynur" />
			</div>
		</div>
		<div class="frame" />
		<p class="desctop">{{ $t("mainPage.hero.gentleCare") }}</p>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero-wrapper {
	width: 100%;
	height: 120vh;
	display: flex;
	position: relative;
	background: linear-gradient(180deg, #ffffff 0%, #85cbe9 43.69%);
	@include max($large) {
		height: 100vh;
		background: linear-gradient(180deg, #ffffff 0%, #85cbe9 17.33%);
	}
	@include max($small) {
		height: 60em;
	}
	.tablet-text {
		position: absolute;
		top: 18em;
		left: 50%;
		width: 100%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10;
		@include max($small) {
			top: 10em;
		}
	}
	p {
		text-align: center;
		align-self: center;
		color: $default-text-color;
		font-size: 4em;
		font-weight: 900;
		line-height: 1.4em;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		@include max($large) {
			font-size: 2.1em;
		}
		@include max($small) {
			font-size: 2.2em;
		}
		&:nth-child(1) {
			width: 13em;
			padding-left: 1.2em;
			@include max($large) {
				width: 100%;
				padding: 0;
			}
		}
		&:nth-last-child(1) {
			width: 10em;
			padding-right: 1.2em;
			@include max($large) {
				width: 100%;
				padding: 0.3em 0 0 0;
			}
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
		@include max($large) {
			width: 14.5em;
			height: 14.5em;
			right: 8.5em;
			top: 78em;
			z-index: 3;
		}
		@include max($small) {
			width: 7.5em;
			height: 7.5em;
			right: 3em;
			top: 40em;
			z-index: 3;
		}
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


		.bubble {
			position: absolute;
			background: url("/img/main/bubble.png") center no-repeat;
			background-size: cover;
			&.bubble1 {
				width: 4.5em;
				height: 5.5em;
				left: -19em;
				top: 19em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					width: 4.5em;
					height: 5.5em;
					left: 1.5em;
					top: 31em;
					animation: none;
				}
				@include max($small) {
					width: 1.8em;
					height: 2.1em;
					left: 2em;
					top: 21em;
				}
			}
			&.bubble2 {
				width: 9em;
				height: 10em;
				left: -15em;
				top: 18.5em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					width: 9em;
					height: 10em;
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
				left: -14em;
				top: 25em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					width: 13em;
					height: 15em;
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
				left: -7em;
				top: 47em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					width: 5.5em;
					height: 6.5em;
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
				left: 42em;
				top: 26em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					width: 8.5em;
					height: 10em;
					left: 61em;
					top: 66em;
					z-index: 12;
					animation: none;
				}
				@include max($small) {
					width: 5em;
					height: 6em;
					left: 27em;
					top: 33em;
				}
			}
			&.bubble6 {
				width: 13em;
				height: 15em;
				left: 40em;
				top: 52em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					width: 13em;
					height: 15em;
					left: 58em;
					z-index: 12;
					top: 41em;
					animation: none;
				}
				@include max($small) {
					width: 2em;
					height: 2em;
					left: 32em;
					top: 21em;
				}
			}

			&.bubble7 {
				width: 4.5em;
				height: 5.5em;
				left: 50.5em;
				top: 20.4em;
				animation: bubble1 linear infinite 4s;
				@include max($large) {
					width: 4.5em;
					height: 5.5em;
					right: 4em;
					top: 35em;
					animation: none;
				}
				@include max($small) {
					width: 2em;
					height: 2em;
					left: 30em;
					top: 26em;
				}
			}
			&.bubble8 {
				width: 5.5em;
				height: 6.5em;
				left: 56em;
				top: 20em;
				animation: bubble1 linear infinite 6s;
				@include max($large) {
					width: 5.5em;
					height: 6.5em;
					left: 70em;
					z-index: 12;
					top: 31em;
					animation: none;
				}
				@include max($small) {
					display: none;
				}
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
			@include max($large) {
				width: 31em;
				height: 54em;
				left: 15em;
				top: 30em;
				animation: none;
			}
			@include max($small) {
				width: 13.5em;
				height: 25em;
				left: 40%;
				transform: translateX(-40%);
				top: 23em;
			}
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
			@include max($large) {
				width: 31em;
				height: 54em;
				left: 30.5em;
				top: 28em;
				animation: none;
			}
			@include max($small) {
				width: 13.5em;
				height: 25em;
				left: 70%;
				transform: translateX(-70%);
				top: 22em;
			}
		}
	}
}
</style>