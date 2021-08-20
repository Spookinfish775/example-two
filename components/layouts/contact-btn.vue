<template>
	<div class="contact-btn-wrapper">
		<button @click="open = true">
			<span> {{ $t("mainPage.contacts.contact") }}</span>
		</button>

		<transition name="popup">
			<div v-if="open" class="dialog">
				<div class="popup-content">
					<div class="close-btn" @click="open = false">
						<span>&#10006;</span>
					</div>
					<ContactFoem v-if="open" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import ContactFoem from "~/components/layouts/form/index.vue";
export default {
	components: {
		ContactFoem
	},
	data() {
		return {
			open: false
		};
	},
	watch: {
		open(val) {
			if (val) {
				document.body.style.overflow = "hidden";
			} else {
				document.body.style.overflow = "auto";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.popup-enter-active,
.popup-leave-active {
	transition: 0.6s;
}
.popup-enter,
.popup-leave-to {
	transform: scale(0);
}
.contact-btn-wrapper {
	button {
		min-width: 17em;
		margin: 3.2em 0 0 0;
		padding: 2.2em 2em;
		background: #89cdea;
		border-radius: 11em;
		cursor: pointer;
		@include max($small) {
			min-width: 100%;
		}
		span {
			color: $default-text-color;
			font-family: "TT Hazelnuts";
			font-style: normal;
			font-weight: 900;
			font-size: 1.8em;
			line-height: 0.8em;
			letter-spacing: 0.2em;
			text-transform: uppercase;
			@include max($small) {
				font-size: 1.6em;
			}
		}
	}
	.dialog {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		width: 100%;
		margin: 0 !important;
		z-index: 1000;
		.close-btn {
			position: absolute;
			right: 0.5em;
			top: 0.5em;
			color: $default-text-color;
			font-size: 4em;
			z-index: 100011;
			@include max($large) {
				font-size: 3em;
				color: $main-color;
			}
			@include max($small) {
				font-size: 2em;
				top: -2em;
				color: $main-color;
			}
		}
		.popup-content {
			background-color: rgba($color: $main-color, $alpha: 0.7);
			margin: 0 auto !important;
			display: flex;
			height: 100%;
			position: relative;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			overflow-y: scroll;
			z-index: 1000;
			@include max($large) {
				padding: 50em 0 0 0;
			}
			@include max($small) {
				padding: 20em 0 0 0;
			}
		}
	}
}
</style>