<template>
	<div class="footer-wrapper">
		<div class="logo">
			<img src="/img/logo-white.svg" alt="logo" />
		</div>
		<div class="middle-group">
			<div class="form">
				<form @submit.prevent="sendEmail">
					<button type="submit" class="submit-button">
						<div class="top"></div>
						<div class="bottom"></div>
					</button>

					<input v-model="email" type="email" placeholder="e-mail" id="email" />
					<label for="email">{{ $t("menu.emailLabel") }}</label>
				</form>
				<div class="our-socials">
					<p class="header">{{ $t("menu.socialLink") }}</p>
					<a target="_blank" href="https://www.instagram.com/bagtlyzamana"
						><img src="/img/instagram.svg" alt=""
					/></a>
				</div>
			</div>
			<div class="links-group">
				<div class="inner-group">
					<div class="products">
						<p class="header">{{ $t("menu.productLink") }}</p>
						<router-link to="/production/ak-nur">{{
							$t("menu.productSubMenuLinks[0]")
						}}</router-link>
						<router-link to="/production/ay-nur">{{
							$t("menu.productSubMenuLinks[1]")
						}}</router-link>
						<router-link to="/production/ak-nur-oxy">{{
							$t("menu.productSubMenuLinks[3]")
						}}</router-link>
						<router-link to="/production/pakize">{{
							$t("menu.productSubMenuLinks[2]")
						}}</router-link>
					</div>
					<div class="about">
						<router-link to="/about-us">
							<p class="header">{{ $t("menu.aboutLink") }}</p>
						</router-link>
					</div>
				</div>
				<div class="inner-group">
					<div class="products">
						<p class="header">{{ $t("menu.contactLink") }}</p>
						<nuxt-link to="/dealership">{{
							$t("menu.contactsSubMenuLink")
						}}</nuxt-link>
						<a href="tel:+99312 576239">+99312 576239</a>
						<a href="tel:+99312 576240">+99312 576240</a>
						<a href="mailto:info@bagtlyzamana.com">info@bagtlyzamana.com</a>
					</div>
					<div class="about">
						<nuxt-link to="/articles">
							<p class="header">{{ $t("menu.articlesLink") }}</p>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-group">
			<p class="location">{{ $t("menu.contactsSubMenuLocation") }}</p>
			<p class="rights">{{ $t("menu.rightsLabel") }}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: ""
		};
	},
	methods: {
		async sendEmail() {
			let options = {
				"Content-Type": "multipart/form-data"
			};
			let formData = new FormData();
			formData.append(email, this.email);
			try {
				await this.$axios.post("/mailing", formData, options);
				this.email = "";
				alert(this.$t("successSended"));
			} catch (error) {
				console.log(error, { error });
			}
		}
	}
};
</script>

<style lang="scss">
.footer-wrapper {
	width: 100%;
	height: 68.75em;
	background-color: $main-color;
	padding: 0 0 0 12em;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.logo {
		width: 10.1em;
		img {
			margin-top: 7.47em;
			width: 100%;
		}
	}
	.middle-group {
		height: 45%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		.form {
			display: flex;
			flex-direction: column;
			position: relative;
			width: 38.11em;
			height: 100%;
			.submit-button {
				position: absolute;
				right: -0.5em;
				top: 0;
				z-index: 10;
				width: 1.9em;
				height: 2.5em;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: inherit;
				.top {
					width: 0.9em;
					height: 0.2em;
					background-color: $default-text-color;
					transform: rotate(45deg) translate(-0.26em);
				}
				.bottom {
					width: 0.9em;
					height: 0.2em;
					background-color: $default-text-color;
					transform: rotate(-45deg) translate(-0.26em);
				}
			}
			input {
				outline: none;
				width: 100%;
				background-color: transparent;
				padding: 0em 0em 1em 0em;
				border: none;
				color: white;
				font-family: Montserrat;
				font-weight: 300;
				font-size: 1.85em;
				border-bottom: 1px solid $default-text-color;
			}
			label {
				margin-top: 1.4em;
				font-weight: 300;
				font-size: 1.21em;
				color: $default-text-color;
				font-family: Montserrat;
			}
			.our-socials {
				position: absolute;
				bottom: 0;
				.header {
					font-size: 1.42em;
					font-weight: 700;
					text-transform: uppercase;
					color: $default-text-color;
				}
				a {
					margin-top: 1em;
					img {
						margin-top: 1.42em;
					}
				}
			}
		}
		.links-group {
			width: 50%;
			height: 100%;
			display: flex;
			.inner-group {
				width: 50%;
				.products {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					height: 70%;
					.header {
						font-size: 1.42em;
						font-weight: 900;
						color: $default-text-color;
						text-transform: uppercase;
						letter-spacing: 0.1em;
						padding-bottom: 0.7em;
					}
					a {
						font-size: 1.42em;
						font-weight: 400;
						line-height: 3em;
						color: $default-text-color;
						font-family: Montserrat;
						opacity: 0.8;
						transition: 0.3s;
						&:hover {
							opacity: 1;
						}
					}
					p {
						font-size: 1.42em;
						font-weight: 400;
						line-height: 3em;
						color: $default-text-color;
						font-family: Montserrat;
					}
				}
				.about {
					.header {
						font-size: 1.42em;
						font-weight: 900;
						color: $default-text-color;
						text-transform: uppercase;
						letter-spacing: 0.1em;
						margin-top: 2.3em;
					}
				}
			}
		}
	}
	.bottom-group {
		width: 27%;
		margin-bottom: 4em;
		.location {
			font-size: 1.21em;
			font-weight: 400;
			line-height: 3em;
			color: $default-text-color;
		}
		.rights {
			font-size: 1.01em;
			font-weight: 700;
			line-height: 1.8em;
			color: $default-text-color;
		}
	}
	@include max($large) {
		width: 100%;
		height: 89em;
		padding: 0 0 0 5.41em;
		.logo {
			width: 11.4em;
			img {
				margin-top: 6.25em;
				width: 100%;
			}
		}
		.middle-group {
			height: 45%;
			width: 100%;
			.form {
				width: 70%;
				height: 100%;
				.submit-button {
					width: 1.9em;
					height: 2.5em;
					.top {
						width: 1.7em;
						height: 0.4em;
						transform: rotate(45deg) translate(-0.26em);
					}
					.bottom {
						width: 1.7em;
						height: 0.4em;
						transform: rotate(-45deg) translate(-0.26em);
					}
				}
				input {
					font-size: 2.7em;
				}
				label {
					margin-top: 1.4em;
					font-weight: 300;
					font-size: 2.1em;
				}
				.our-socials {
					position: absolute;
					bottom: 0;
					.header {
						font-size: 2.03em;
						font-weight: 700;
						text-transform: uppercase;
						color: $default-text-color;
					}
					a {
						margin-top: 1em;
						img {
							margin-top: 1.42em;
						}
					}
				}
			}
			.links-group {
				display: none;
			}
		}
		.bottom-group {
			width: 42%;
			margin-bottom: 4em;
			.location {
				font-size: 2.03em;
			}
			.rights {
				font-size: 1.7em;
			}
		}
	}
	@include max($small) {
		width: 100%;
		height: 62em;
		padding: 0 0 0 2.28em;
		align-items: center;
		.logo {
			width: 7em;
			img {
				margin-top: 4.7em;
				width: 100%;
			}
		}
		.middle-group {
			height: 40%;
			width: 100%;
			.form {
				width: 95%;
				height: 90%;
				.submit-button {
					width: 1.9em;
					height: 2.5em;
					.top {
						width: 1.7em;
						height: 0.4em;
						transform: rotate(45deg) translate(-0.3em);
					}
					.bottom {
						width: 1.7em;
						height: 0.4em;
						transform: rotate(-45deg) translate(-0.3em);
					}
				}
				input {
					font-size: 2em;
				}
				label {
					margin-top: 1.4em;
					font-weight: 300;
					font-size: 1.71em;
				}
				.our-socials {
					position: absolute;
					bottom: 0;
					.header {
						font-size: 1.43em;
						font-weight: 700;
						text-transform: uppercase;
						color: $default-text-color;
					}
					a {
						margin-top: 1em;
						img {
							margin-top: 1.42em;
						}
					}
				}
			}
		}
		.bottom-group {
			width: 100%;
			margin-bottom: 4em;
			.location {
				font-size: 1.61em;
				line-height: 2.4em;
			}
			.rights {
				font-size: 1.43em;
			}
		}
	}
}
</style>