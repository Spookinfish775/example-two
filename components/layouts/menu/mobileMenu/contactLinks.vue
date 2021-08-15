<template>
	<div class="contact-links-wrapper">
		<div class="contact-link-group">
			<div class="link-wrapper">
				<a to="/" class="contact-link">{{ $t("menu.contactsSubMenuLink") }}</a>
			</div>
		</div>
		<div class="contact-info">
			<div class="info">
				<img src="/img/phone.svg" alt="phone" />
				<div class="text">
					<p>+99312 576239</p>
					<p>+99312 576240</p>
				</div>
			</div>
			<div class="info">
				<img src="/img/mail.svg" alt="mail" />
				<div class="text">
					<p>info@bagtlyzamana.com</p>
				</div>
			</div>
			<div class="info">
				<img src="/img/location.svg" alt="location" />
				<div class="text">
					<p>
						{{ $t("menu.contactsSubMenuLocation") }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.contact-links-wrapper {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: $main-color;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.contact-link-group {
		width: 100%;
		height: 40.3em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		.link-wrapper {
			width: 92%;
			color: $default-text-color;
			font-weight: 900;
			padding-left: 8em;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			.contact-link {
				font-size: 3.38em;
				text-transform: uppercase;
				color: $default-text-color;
			}
		}
	}
	.contact-info {
		width: 100%;
		height: 36em;
		position: absolute;
		bottom: 0;
		padding-left: 5em;
		.info {
			padding: 5px;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;

			img {
				width: 2em;
				margin: 0.4em 2em 2em 2em;
			}
			.text {
				width: 62em;
				p {
					font-size: 2.38em;
					font-weight: 300;
					color: $default-text-color;
				}
			}
		}
	}
	@include max($small) {
		justify-content: center;
		align-items: center;
		.contact-link-group {
			width: 100%;
			height: 40.3em;
			justify-content: space-between;
			align-items: flex-start;
			.link-wrapper {
				font-weight: 700;
				padding-left: 2.3em;
				justify-content: space-between;
				align-items: center;
				.contact-link {
					font-size: 2.56em;
				}
			}
		}
		.contact-info {
			width: 100%;
			height: 36em;
			padding-left: 0em;
			.info {
				padding: 5px;
				justify-content: flex-start;
				align-items: flex-start;
				img {
					width: 2.9sem;
					margin: 0.9em 2em 2em 2em;
				}
				.text {
					width: 62em;
					p {
						font-size: 1.71em;
						font-weight: 400;
						line-height: 2em;
					}
				}
			}
		}
	}
}
</style>