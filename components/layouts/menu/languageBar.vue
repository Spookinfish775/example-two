<template>
	<div class="lang-submenu-wrapper">
		<div class="arrow"></div>
		<div class="product-submenu">
			<span @click="changeLanguage('ru')" class="sublink">RU</span>
			<span @click="changeLanguage('en')" class="sublink">EN</span>
			<span @click="changeLanguage('tm')" class="sublink">TM</span>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		changeLanguage(lang) {
			this.$i18n.setLocale(lang);
			window.location.reload();
		}
	}
};
</script>

<style lang="scss">
.lang-submenu-wrapper {
	position: relative;
	width: 6em;
	height: 13em;
	.arrow {
		position: relative;
		left: 31%;
		top: 2px;
		width: 0;
		height: 0;
		border-left: 1.2em solid transparent;
		border-right: 1.2em solid transparent;
		border-bottom: 1.2em solid $main-color;
	}
	.product-submenu {
		width: 100%;
		height: 100%;
		background-color: $main-color;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		.sublink {
			color: $default-text-color;
			font-size: 1.4em;
			font-weight: 700;
			text-transform: uppercase;
			padding-left: 1.5em;
		}
	}
}
</style>