<template>
	<div class="menu-wrapper">
		<div class="link-group">
			<div class="product">
				<a to="/" class="link products">{{ $t("menu.productLink") }}</a>
				<div class="productSubMenu">
					<ProductSubMenu />
				</div>
			</div>
			<nuxt-link to="/about-us" class="link">{{
				$t("menu.aboutLink")
			}}</nuxt-link>
		</div>
		<div class="logo">
			<nuxt-link to="/">
				<img src="/img/logo.svg" alt="logo" />
			</nuxt-link>
		</div>
		<div class="link-group">
			<nuxt-link to="/articles" class="link">{{
				$t("menu.articlesLink")
			}}</nuxt-link>
			<div class="contact">
				<a class="link">{{ $t("menu.contactLink") }}</a>
				<div class="contactSubMenu">
					<ContactSubMenu />
				</div>
			</div>
			<div class="lang-bar">
				<span class="lang-bar link">{{ $i18n.locale }}</span>
				<div class="langs">
					<LanguageBar />
				</div>
			</div>
		</div>
		<div
			class="menu-button"
			@click="openMenu"
			:class="{ active: menuVisibility }"
		>
			<div class="top line"></div>
			<div class="middle line"></div>
			<div class="bottom line"></div>
		</div>
		<transition name="slide-fade">
			<div class="menu-mobile" v-if="menuVisibility">
				<MobileMenu />
			</div>
		</transition>
	</div>
</template>

<script>
import ProductSubMenu from "./productsSubMenu.vue";
import ContactSubMenu from "./contactsSubMenu.vue";
import LanguageBar from "./languageBar.vue";
import MobileMenu from "./mobileMenu/index.vue";
export default {
	data() {
		return {
			menuVisibility: false
		};
	},
	components: {
		ProductSubMenu,
		ContactSubMenu,
		MobileMenu,
		LanguageBar
	},
	computed: {
		route() {
			return this.$route.fullPath;
		}
	},
	watch: {
		route() {
			this.menuVisibility = false;
		}
	},
	methods: {
		openMenu() {
			if (this.menuVisibility == false) {
				this.menuVisibility = true;
			} else {
				this.menuVisibility = false;
			}
		}
	}
};
</script>

<style lang="scss">
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
	transform: translateX(100%);
}
.menu-wrapper {
	width: 100%;
	background-color: transparent;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	z-index: 100;
	justify-content: space-between;
	align-items: center;
	font-family: Montserrat;
	.link-group {
		width: 35%;
		height: 100%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		.link {
			font-size: 1.4em;
			font-weight: 700;
			text-transform: uppercase;
			color: $main-color;
		}
		.lang-bar {
			font-weight: 500;
		}
		.product {
			position: relative;
			.productSubMenu {
				display: none;
				position: absolute;
				top: 1.5em;
				left: 22%;
				animation: AnimSubmenu 0.3s;
			}
			&:hover {
				.productSubMenu {
					display: block;
				}
			}
		}
		.contact {
			position: relative;
			.contactSubMenu {
				display: none;
				position: absolute;
				top: 1.5em;
				left: -50%;
				animation: AnimSubmenu 0.3s;
			}
			&:hover {
				.contactSubMenu {
					display: block;
				}
			}
		}
		.lang-bar {
			position: relative;
			.langs {
				display: none;
				position: absolute;
				top: 1.5em;
				left: -90%;
				animation: AnimSubmenu 0.3s;
			}
			&:hover {
				.langs {
					display: block;
				}
			}
		}
	}
	.logo {
		padding-top: 2.9em;
		width: 10.6em;
		img {
			width: 100%;
		}
	}
	.menu-button {
		display: none;
	}
	@keyframes AnimSubmenu {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes AnimSubmenuClose {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@include max($large) {
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: 0 3.2em;
		.link-group {
			display: none;
			.link {
				font-size: 1.4em;
			}
			.productSubMenu {
				display: none;
				position: absolute;
				top: 8.5em;
				left: 17.8em;
			}
			.contactSubMenu {
				display: none;
				position: absolute;
				top: 8.5em;
				right: 17.8em;
			}
		}
		.logo {
			padding-top: 2.9em;
			width: 10.6em;
			img {
				width: 100%;
			}
		}
		.menu-button {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 5.6em;
			height: 4.93em;
			z-index: 10;
			.line {
				height: 0.65em;
				background-color: $main-color;
				transition: 0.4s;
			}
			.top {
				width: 3.8em;
				align-self: flex-end;
				margin-right: 0.4em;
			}
			.middle {
				opacity: 1;
			}
			.bottom {
				width: 3.8em;
				margin-left: 0.4em;
			}
			&.active {
				.line {
					background-color: $default-text-color;
				}
				.middle {
					opacity: 0;
					// position: absolute;
				}
				.top {
					width: 4.5em;
					height: 0.55em;
					transform: rotate(-46deg) translate(-3.3em);
				}
				.bottom {
					width: 4.5em;
					height: 0.55em;
					transform: rotate(46deg) translate(-2.7em);
				}
			}
		}
		.menu-mobile {
			width: 100vw;
			height: 100vh;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	@include max($small) {
		padding: 0 2.3em;
		.logo {
			padding-top: 2em;
			width: 3.5em;
			img {
				width: 100%;
			}
		}
		.menu-button {
			width: 2.56em;
			height: 2.28em;
			z-index: 10;
			.line {
				height: 0.45em;
			}
			.top {
				width: 2em;
				margin-right: 0.1em;
			}
			.middle {
				opacity: 1;
			}
			.bottom {
				width: 2em;
				margin-left: 0.1em;
			}
			&.active {
				.middle {
					opacity: 0;
				}
				.top {
					width: 2.4em;
					height: 0.42em;
					transform: rotate(-46deg) translate(-1.4em);
					margin: 0;
				}
				.bottom {
					width: 2.4em;
					height: 0.42em;
					transform: rotate(46deg) translate(-1.2em);
					margin: 0;
				}
			}
		}
	}
}
</style>