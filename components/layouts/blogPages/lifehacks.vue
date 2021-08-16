<template>
	<div class="blog-wrapper">
		<div class="title-block">
			<p class="title">{{ $t("blog.lifehacks.title") }}</p>
			<div class="blog-img"></div>
		</div>
		<div class="description-block">
			<div class="title">
				<div class="icon"></div>
				<p>{{ $t("blog.lifehacks.howWashTitle") }}</p>
			</div>
			<div class="description">
				<p>{{ $t("blog.lifehacks.howWashDescription") }}</p>
			</div>
		</div>
		<div class="description-block">
			<div class="title">
				<div class="icon"></div>
				<p>{{ $t("blog.lifehacks.shoesTitle") }}</p>
			</div>
			<div class="description">
				<p>{{ $t("blog.lifehacks.shoesDescription") }}</p>
			</div>
		</div>
		<div class="description-block">
			<div class="title">
				<div class="icon"></div>
				<p>{{ $t("blog.lifehacks.slimTitle") }}</p>
			</div>
			<div class="description">
				<p>{{ $t("blog.lifehacks.slimDescription") }}</p>
			</div>
		</div>
		<div class="description-block">
			<div class="title">
				<div class="icon"></div>
				<p>{{ $t("blog.lifehacks.woolenTitle") }}</p>
			</div>
			<div class="description">
				<p>{{ $t("blog.lifehacks.woolenDescription") }}</p>
			</div>
		</div>
		<div class="description-block">
			<div class="title">
				<div class="icon"></div>
				<p>{{ $t("blog.lifehacks.childTitle") }}</p>
			</div>
			<div class="description paddleft">
				<p>{{ $t("blog.lifehacks.childDescription") }}</p>
			</div>
		</div>
		<div class="navigation-block">
			<div class="left-buttons">
				<div class="active-btn">3</div>
				<nuxt-link to="/blog/washer" class="next-btn">4</nuxt-link>
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
			line-height: 4.6em;
			text-transform: uppercase;
			color: $main-color;
			font-family: TT Hazelnuts;
		}
		.blog-img {
			width: 115.03em;
			height: 61.7em;
			background: url("/img/blog-img/lifehacks.png");
			background-size: cover;
		}
		.description {
			width: 68%;
			margin-top: 6em;
			font-size: 1.81em;
			font-weight: 400;
			line-height: 1.8em;
			color: $main-color;
		}
	}
	.description-block {
		margin-top: 5em;
		width: 68%;
		.title {
			position: relative;
			display: flex;
			align-items: center;
			.icon {
				position: absolute;
				left: -4%;
				width: 1.92em;
				height: 1.92em;
				border-radius: 100%;
				background-color: $blue-sky;
			}
			p {
				font-size: 2.21em;
				font-weight: 900;
				text-transform: uppercase;
				line-height: 3.5em;
				color: $main-color;
			}
		}
		#big-title {
			p {
				line-height: 1.8em;
			}
		}
		.description {
			p {
				font-size: 1.81em;
				font-weight: 400;
				line-height: 1.8em;
				color: $main-color;
			}
		}
		#big-description {
			margin-top: 2.6em;
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
				cursor: pointer;
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
		padding: 0 3.4em;
		margin-top: 20em;
		.title-block {
			.title {
				font-size: 2.77em;
				font-weight: 900;
				line-height: 3.6em;
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
		.description-block {
			margin-top: 3em;
			width: 100%;
			.title {
				position: relative;
				display: flex;
				align-items: center;
				.icon {
					position: relative;
					left: 0;
					margin-right: 2.8em;
					width: 1.9em;
					height: 1.9em;
				}
				p {
					font-size: 2em;
					line-height: 2.6em;
				}
			}
			#big-title {
				p {
					line-height: 1.4em;
				}
			}
			.description {
				p {
					font-size: 1.6em;
					line-height: 1.6em;
					color: $main-color;
					margin-left: 3em;
				}
			}
			#big-description {
				margin-top: 2.2em;
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
				line-height: 2.2em;
			}
			.blog-img {
				background: url("/img/blog-img/lifehacksMobile.png") center no-repeat;
				background-size: contain;
				width: 100%;
				height: 34.5em;
			}
		}
		.description-block {
			margin-top: 2em;
			width: 100%;
			.title {
				position: relative;
				display: flex;
				align-items: center;
				.icon {
					position: relative;
					left: 0;
					padding-right: 1.4em;
					margin-right: 0.9em;
					width: 1.4em;
					height: 1.4em;
					img {
						width: 100%;
					}
				}
				p {
					font-size: 1.8em;
					line-height: 1.4em;
				}
			}
			#big-title {
				p {
					line-height: 1.4em;
				}
			}
			.description {
				p {
					font-size: 1.4em;
					margin-top: 1em;
					margin-left: 0;
					line-height: 1.6em;
				}
			}
			#big-description {
				margin-top: 1.9em;
			}
			.paddleft {
				padding-left: 0em;
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