<template>
	<div class="main-page-wrapper">
		<Hero />
		<Description />
		<OurProduts />
		<ProdutsDescription />
		<Contacts />
		<Articles />
	</div>
</template>

<script>
import Hero from "~/components/mainPage/hero.vue";
import Description from "~/components/mainPage/description.vue";
import OurProduts from "~/components/mainPage/our-products/index.vue";
import ProdutsDescription from "~/components/mainPage/products-description/index.vue";
import Contacts from "~/components/mainPage/contacts.vue";
import Articles from "~/components/mainPage/articles/index.vue";
export default {
	head: {
		title: "Bagtly zamana",
		meta: [
			{
				hid: "description",
				name: "description",
				content:
					"Хозяйственное общество «Багтлы замана» было основано в 2013 году и начало производство различных видов синтетических моющих средств и туалетного мыла в 2019 году."
			}
		]
	},
	components: {
		Hero,
		Description,
		OurProduts,
		ProdutsDescription,
		Contacts,
		Articles
	}
};
</script>

<style lang="scss">
.main-page-wrapper {
	width: 100%;
	min-height: 100vh;
	position: relative;
}
</style>