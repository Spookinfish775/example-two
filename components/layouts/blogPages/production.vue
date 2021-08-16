<template>
	<div class="blog-wrapper">
		<div class="title-block">
			<p class="title">{{ $t("blog.production.title") }}</p>
			<div class="blog-img"></div>
			<p class="description">{{ $t("blog.production.descriptionOne") }}</p>
			<p class="description">{{ $t("blog.production.descriptionTwo") }}</p>
			<p class="description">{{ $t("blog.production.descriptionThree") }}</p>
			<p class="description">{{ $t("blog.production.descriptionFour") }}</p>
		</div>
		<div class="navigation-block">
			<div class="left-buttons">
				<div class="active-btn">5</div>
				<nuxt-link to="/blog/funds" class="next-btn">6</nuxt-link>
			</div>
			<div class="right-button">
				<div class="all-articles">
					<nuxt-link to="/articles">
						{{ $t("blog.howWash.allButton") }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.blog-wrapper {
	width: 100%;
	padding: 0 12em;
	margin-top: 20em;
	.title-block {
		.title {
			font-size: 3.83em;
			font-weight: 850;
			line-height: 2.6em;
			text-transform: uppercase;
			color: $main-color;
			font-family: TT Hazelnuts;
			width: 60%;
		}
		.blog-img {
			width: 115.03em;
			height: 61.7em;
			background: url("/img/blog-img/production.png");
			background-size: cover;
		}
		.description {
			width: 68%;
			margin-top: 4em;
			font-size: 1.81em;
			font-weight: 400;
			line-height: 1.8em;
			color: $main-color;
		}
	}
	.navigation-block {
		margin: 18em 0 12em 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-family: TT Hazelnuts;
		.left-buttons {
			display: flex;
			.active-btn {
				width: 7.12em;
				height: 3.26em;
				font-size: 2.01em;
				font-weight: 900;
				cursor: pointer;

				border-radius: 2em;
				color: $default-text-color;
				background-color: $blue-sky;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.next-btn {
				width: 3.26em;
				cursor: pointer;
				height: 3.26em;
				font-size: 2.01em;
				font-weight: 900;
				border: 1px solid $blue-sky;
				border-radius: 2em;
				color: $blue-sky;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 1em;
			}
		}
		.right-button {
			.all-articles {
				width: 10.48em;
				height: 3.76em;
				cursor: pointer;
				font-size: 2.01em;
				font-weight: 900;
				letter-spacing: 0.1em;
				text-transform: uppercase;
				border-radius: 2em;
				a {
					color: $default-text-color;
				}
				background-color: $blue-sky;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	@include max($large) {
		padding: 0 4em;
		margin-top: 16em;
		.title-block {
			.title {
				font-size: 2.77em;
				font-weight: 900;
				line-height: 2em;
				width: 80%;
				margin-bottom: 1em;
			}
			.blog-img {
				width: 100%;
				height: 37.5em;
			}
			.description {
				width: 100%;
				margin-top: 3em;
				font-size: 1.58em;
				line-height: 1.6em;
			}
		}
		.navigation-block {
			margin: 18em 0 12em 0;
			width: 100%;
			display: flex;
			justify-content: space-between;
			font-family: TT Hazelnuts;
			.left-buttons {
				display: flex;
				.active-btn {
					width: 7.12em;
					height: 3.26em;
					font-size: 2.01em;
					font-weight: 900;

					border-radius: 2em;
					color: $default-text-color;
					background-color: $blue-sky;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				.next-btn {
					width: 3.26em;
					height: 3.26em;
					font-size: 2.01em;
					font-weight: 900;
					border: 1px solid $blue-sky;
					border-radius: 2em;
					color: $blue-sky;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-left: 1em;
				}
			}
			.right-button {
				.all-articles {
					width: 10.48em;
					height: 3.76em;
					font-size: 2.01em;
					font-weight: 900;
					letter-spacing: 0.1em;
					text-transform: uppercase;
					border-radius: 2em;
					color: $default-text-color;
					background-color: $blue-sky;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
	}
	@include max($small) {
		padding: 0 2.5em;
		margin-top: 12em;
		.title-block {
			.title {
				font-size: 2.2em;
				font-weight: 900;
				line-height: 1.8em;
			}
			.blog-img {
				background: url("/img/blog-img/productionMobile.png") center no-repeat;
				background-size: contain;
				width: 100%;
				height: 34.5em;
			}
			.description {
				width: 100%;
				margin-top: 2em;
				font-size: 1.4em;
				line-height: 1.6em;
			}
		}
		.navigation-block {
			margin: 6em 0 6em 0;
			width: 100%;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			.left-buttons {
				display: flex;
				justify-content: space-between;
				width: 86%;
				.active-btn {
					width: 3em;
					height: 3em;
					font-size: 2.01em;
					font-weight: 900;
				}
				.next-btn {
					width: 6.7em;
					height: 3em;
					font-size: 2.01em;
					font-weight: 900;
					margin-left: 1em;
				}
			}
			.right-button {
				margin-top: 2em;
				.all-articles {
					width: 15.54em;
					height: 3.8em;
					font-size: 1.8em;
				}
			}
		}
	}
}
</style>