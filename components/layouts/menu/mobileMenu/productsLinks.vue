<template>
	<div class="product-links-wrapper">
		<div class="product-link-group">
			<div class="link-wrapper">
				<router-link to="/production/ak-nur" class="product-link">{{
					$t("menu.productSubMenuLinks[0]")
				}}</router-link>
			</div>
			<div class="link-wrapper">
				<router-link to="/production/ay-nur" class="product-link">{{
					$t("menu.productSubMenuLinks[1]")
				}}</router-link>
			</div>
			<div class="link-wrapper">
				<router-link to="/production/pakize" class="product-link">{{
					$t("menu.productSubMenuLinks[2]")
				}}</router-link>
			</div>
			<div class="link-wrapper">
				<router-link to="/production/ak-nur-oxy" class="product-link">{{
					$t("menu.productSubMenuLinks[3]")
				}}</router-link>
			</div>
		</div>
	</div>
</template>


<style lang="scss">
.product-links-wrapper {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: $main-color;
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	.product-link-group {
		width: 100%;
		height: 20em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		.link-wrapper {
			width: 92%;
			color: $default-text-color;
			font-weight: 900;
			padding-left: 5em;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			.product-link {
				font-size: 1.69em;
				text-transform: uppercase;
				color: $default-text-color;
			}
		}
	}
	@include max($small) {
		.product-link-group {
			width: 100%;
			height: 30em;
			.link-wrapper {
				font-weight: 700;
				padding-left: 2em;
				.product-link {
					font-size: 1.4em;
				}
			}
		}
	}
}
</style>