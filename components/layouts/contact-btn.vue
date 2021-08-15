<template>
	<div class="contact-btn-wrapper">
		<button @click="open = true">
			<span> {{ $t("mainPage.contacts.contact") }}</span>
		</button>
		<vue-modaltor
			:bg-overlay="'#043480'"
			:visible="open"
			@hideModal="open = false"
			:show-close-button="false"
			:show-title="false"
		>
			<template #header> <span></span></template>
			<template #body>
				<ContactFoem v-if="open" />
			</template>
		</vue-modaltor>
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
	methods: {
		openForm() {
			console.log("openForm");
		}
	}
};
</script>

<style lang="scss" scoped>
.contact-btn-wrapper {
	button {
		width: 15em;
		margin: 3.2em 0 0 0;
		padding: 2.2em 2em;
		background: #89cdea;
		border-radius: 11em;
		cursor: pointer;
		@include max($small) {
			width: 100%;
		}
		span {
			color: $default-text-color;
			font-family: "TT Hazelnuts";
			font-style: normal;
			font-weight: 900;
			font-size: 1.3em;
			line-height: 0.8em;
			letter-spacing: 0.2em;
			text-transform: uppercase;
		}
	}
}
</style>