<template>
	<div class="mobile-menu-wrapper">
		<transition name="slide-fade">
			<div
				class="back-button"
				@click="productMobileSubmenu = false"
				v-on:click="contactMobileSubmenu = false"
				v-if="productMobileSubmenu || contactMobileSubmenu"
			>
				<div class="arrow">
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
			</div>
		</transition>
		<div class="mobile-link-group">
			<div class="link-wrapper" @click="openProductsSubmenu">
				<a to="/" class="mobile-link">{{ $t("menu.productLink") }}</a>
				<div class="arrow">
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
			</div>
			<div class="link-wrapper">
				<nuxt-link to="/about-us" class="mobile-link">{{
					$t("menu.aboutLink")
				}}</nuxt-link>
			</div>
			<div class="link-wrapper">
				<nuxt-link to="/articles" class="mobile-link">{{
					$t("menu.articlesLink")
				}}</nuxt-link>
			</div>
			<div class="link-wrapper" @click="openContactSubmenu">
				<a to="/" class="mobile-link">{{ $t("menu.contactLink") }}</a>
				<div class="arrow">
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
			</div>
		</div>
		<div class="language-panel">
			<span class="lang">RU</span>
			<span class="lang">EN</span>
			<span class="lang">TM</span>
		</div>
		<transition name="slide-fade">
			<div class="products-mobile-submenu" v-if="productMobileSubmenu">
				<ProductSubMenu />
			</div>
		</transition>
		<transition name="slide-fade">
			<div class="products-mobile-submenu" v-if="contactMobileSubmenu">
				<ContactSubMenu />
			</div>
		</transition>
	</div>
</template>

<script>
import ProductSubMenu from "./productsLinks.vue";
import ContactSubMenu from "./contactLinks.vue";
export default {
	data() {
		return {
			productMobileSubmenu: false,
			contactMobileSubmenu: false
		};
	},

	methods: {
		openProductsSubmenu() {
			if (this.productMobileSubmenu == false) {
				this.productMobileSubmenu = true;
			} else {
				this.productMobileSubmenu = false;
			}
		},
		openContactSubmenu() {
			if (this.contactMobileSubmenu == false) {
				this.contactMobileSubmenu = true;
			} else {
				this.contactMobileSubmenu = false;
			}
		}
	},
	components: {
		ProductSubMenu,
		ContactSubMenu
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
	transform: translateX(10%);
	opacity: 0;
}
.mobile-menu-wrapper {
	position: relative;
	top: 0;
	left: 0;
	// z-index: 10;
	width: 100vw;
	height: 100vh;
	background-color: $main-color;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	.back-button {
		position: absolute;
		left: 5em;
		top: 6.2em;
		.arrow {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 11;
			.top {
				width: 2.2em;
				height: 0.45em;
				background-color: $default-text-color;
				transform: rotate(-45deg) translateX(0.7em);
			}
			.bottom {
				width: 2.2em;
				height: 0.45em;
				background-color: $default-text-color;
				transform: rotate(45deg) translateX(0.7em);
			}
		}
	}
	.mobile-link-group {
		width: 100%;
		height: 46.3em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		.link-wrapper {
			width: 92%;
			font-size: 2em;
			color: $default-text-color;
			font-weight: 900;
			padding-left: 5em;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			.mobile-link {
				text-transform: uppercase;
				color: $default-text-color;
				font-size: 1.69em;
			}
			.arrow {
				position: absolute;
				right: 0;
				.top {
					width: 1em;
					height: 0.23em;
					background-color: $default-text-color;
					transform: rotate(45deg) translateX(-3px);
				}
				.bottom {
					width: 1em;
					height: 0.23em;
					background-color: $default-text-color;
					transform: rotate(-45deg) translateX(-3px);
				}
			}
		}
	}
	.language-panel {
		padding-left: 10em;
		.lang {
			font-size: 1.8em;
			font-weight: 500;
			padding-right: 1.4em;
			color: $default-text-color !important;
			font-size: 2.5em;
		}
	}
	.products-mobile-submenu {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
	}
	@include max($small) {
		justify-content: center;
		.back-button {
			left: 2em;
			top: 2.6em;
			.arrow {
				.top {
					width: 1.6em;
					height: 0.42em;
					background-color: $default-text-color;
					transform: rotate(-45deg) translateX(0.4em);
				}
				.bottom {
					width: 1.6em;
					height: 0.42em;
					background-color: $default-text-color;
					transform: rotate(45deg) translateX(0.4em);
				}
			}
		}
		.mobile-link-group {
			width: 100%;
			height: 36.3em;
			.link-wrapper {
				font-weight: 700;
				padding-left: 2.42em;
				.mobile-link {
					font-size: 1.28em;
				}
				.arrow {
					.top {
						width: 0.8em;
						height: 0.2em;
						transform: rotate(45deg) translateX(-3px);
					}
					.bottom {
						width: 0.8em;
						height: 0.2em;
						transform: rotate(-45deg) translateX(-3px);
					}
				}
			}
		}
		.language-panel {
			padding-left: 4.8em;
			margin-top: 7.5em;
			.lang {
				font-size: 2em !important;
				font-weight: 500;
				padding-right: 1.4em;
				color: $default-text-color !important;
				font-size: 2.5em;
			}
		}
	}
}
</style>