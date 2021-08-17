<template>
	<div class="form-wrapper">
		<form @submit.prevent="submitForm" class="main-form">
			<input
				v-model="contactData.firstName"
				type="text"
				:placeholder="namePlaceholder"
			/>
			<input
				v-model="contactData.lastName"
				type="text"
				:placeholder="surnamePlaceholder"
			/>
			<input
				v-model="contactData.email"
				type="email"
				:placeholder="emailPlaceholder"
			/>
			<div class="number">
				<select v-model="contactData.internationalCode">
					<option
						v-for="(code, index) in codes"
						:key="code.dial_code + index"
						:value="code.dial_code"
						>{{ code.code }}: {{ code.dial_code }}</option
					>
				</select>
				<input
					v-model="contactData.phoneNumber"
					type="text"
					:placeholder="numberPlaceholder"
				/>
			</div>
			<div class="location">
				<input
					v-model="contactData.country"
					type="text"
					:placeholder="countryPlaceholder"
				/>
				<input
					v-model="contactData.city"
					type="text"
					:placeholder="cityPlaceholder"
				/>
			</div>
			<textarea
				v-model="contactData.description"
				cols="15"
				rows="5"
				:placeholder="textPlaceholder"
			></textarea>
			<div class="checkbox">
				<input v-model="agree" type="checkbox" id="agree" />
				<label for="agree">{{ $t("form.agreePlaceholder") }}</label>
			</div>
			<button :disabled="!agree" type="submit" class="submit">
				{{ $t("dealer.submitPlaceholder") }}
			</button>
		</form>
	</div>
</template>

<script>
import { codes } from "~/components/layouts/dealerForm/codes.js";
export default {
	data() {
		return {
			contactData: {
				firstName: "",
				lastName: "",
				internationalCode: "",
				phoneNumber: "",
				email: "",
				country: "",
				city: "",
				description: ""
			},
			agree: false,
			namePlaceholder: this.$t("form.namePlaceholder"),
			surnamePlaceholder: this.$t("form.surnamePlaceholder"),
			emailPlaceholder: this.$t("form.emailPlaceholder"),
			numberPlaceholder: this.$t("form.numberPlaceholder"),
			countryPlaceholder: this.$t("form.countryPlaceholder"),
			cityPlaceholder: this.$t("form.cityPlaceholder"),
			textPlaceholder: this.$t("form.textPlaceholder"),
			codes: codes.sort(function(a, b) {
				if (a.dial_code > b.dial_code) {
					return 1;
				}
				if (a.dial_code < b.dial_code) {
					return -1;
				}
				return 0;
			})
		};
	},
	computed: {
		valid() {
			let valid = false;
			for (const key in this.contactData) {
				if (this.contactData[key] == "") valid = false;
				else valid = true;
			}
			return valid;
		}
	},
	methods: {
		async submitForm(e) {
			if (!this.valid) {
				alert(this.$t("validationMessage"));
			} else {
				let options = {
					"Content-Type": "multipart/form-data"
				};
				let formData = new FormData();
				for (const key in this.contactData) {
					formData.append(key, this.contactData[key]);
				}
				try {
					await this.$axios.post("/feedback", formData, options);
					for (const key in this.contactData) {
						this.contactData[key] = "";
					}
					this.agree = false;
					alert(this.$t("successSended"));
				} catch (error) {
					console.log(error, { error });
				}
			}
		}
	}
};
</script>

<style lang="scss">
.form-wrapper {
	.main-form {
		height: 70em;
		background-color: $default-text-color;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		border: 1px solid $main-color;
		.close-button {
			display: none;
		}
		input {
			&::placeholder {
				/* Chrome, Firefox, Opera, Safari 10.1+ */
				color: $blue-sky;
				opacity: 1; /* Firefox */
			}

			&:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: $blue-sky;
			}

			&::-ms-input-placeholder {
				/* Microsoft Edge */
				color: $blue-sky;
			}
		}
		textarea {
			&::placeholder {
				/* Chrome, Firefox, Opera, Safari 10.1+ */
				color: $blue-sky;
				opacity: 1; /* Firefox */
			}

			&:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: $blue-sky;
			}

			&::-ms-input-placeholder {
				/* Microsoft Edge */
				color: $blue-sky;
			}
		}
		input {
			outline: none;
			width: 80%;
			background-color: transparent;
			padding: 0em 0em 1em 1em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.5em;
			border-bottom: 2px solid $main-color;
		}
		select {
			outline: none;
			width: 80%;
			background-color: transparent;
			padding: 0em 0em 1em 1em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.5em;
			border-bottom: 2px solid $main-color;
		}
		textarea {
			outline: none;
			width: 80%;
			background-color: transparent;
			padding: 0em 0em 1em 1em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.5em;
			border-bottom: 2px solid $main-color;
			resize: none;
		}
		.number {
			display: flex;
			justify-content: space-between;
			width: 80%;
			select {
				width: 30%;
			}
			input {
				width: 60%;
			}
		}
		.location {
			display: flex;
			justify-content: space-between;
			width: 80%;
			input {
				width: 45%;
			}
		}
		.checkbox {
			display: flex;
			justify-content: flex-start;
			width: 80%;
			input {
				position: absolute;
				z-index: -1;
				opacity: 0;
			}
			#agree + label {
				display: inline-flex;
				align-items: center;
				user-select: none;
			}
			#agree + label::before {
				content: "";
				display: inline-block;
				width: 1.5em;
				height: 1.5em;
				flex-shrink: 0;
				flex-grow: 0;
				border: 1px solid $main-color;
				margin-right: 1.5em;
				background-repeat: no-repeat;
				background-position: center center;
				background-size: 50% 50%;
			}
			#agree:checked + label::before {
				border-color: $main-color;
				background-color: $main-color;
				background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
			}
			label {
				font-weight: 400;
				font-size: 1.82em;
				color: $main-color;
				font-family: Montserrat;
				margin-left: 1em;
			}
		}
		.submit {
			width: 11.39em;
			height: 4.09em;
			background-color: $blue-sky;
			border: none !important;
			padding: 0 !important;
			border-radius: 2em;
			color: $default-text-color;
			font-size: 1.5em;
			text-transform: uppercase;
			font-weight: 900;
			letter-spacing: 0.1em;
			transition: 0.3s;
			&:disabled {
				opacity: 0.7;
			}
		}
	}
	@include max($large) {
		.main-form {
			width: 100%;
			height: 150vh;
			position: relative;
			justify-content: center;
			.close-button {
				display: block;
				position: absolute;
				right: 3em;
				top: 3em;
				width: 3.9em;
				height: 3.9em;
				img {
					width: 100%;
				}
			}
			input {
				margin-bottom: 3em;
				width: 70%;
				padding: 0em 0em 0.7em 0.7em;
				font-weight: 400;
				font-size: 2.71em;
				border-bottom: 2px solid $main-color;
			}
			select {
				margin-bottom: 3em;
				width: 70%;
				padding: 0em 0em 0.7em 0.7em;
				font-weight: 400;
				font-size: 2.71em;
				border-bottom: 2px solid $main-color;
			}
			textarea {
				margin-bottom: 3em;
				width: 70%;
				padding: 0em 0em 0.7em 0.7em;
				font-weight: 400;
				font-size: 2.71em;
				border-bottom: 2px solid $main-color;
			}
			.number {
				width: 70%;
				select {
					width: 30%;
				}
				input {
					width: 60%;
				}
			}
			.location {
				display: flex;
				justify-content: space-between;
				width: 70%;
				input {
					width: 45%;
				}
			}
			.checkbox {
				margin-bottom: 4em;
				width: 70%;
				#agree + label::before {
					width: 1.5em;
					height: 1.5em;
					margin-right: 1.5em;
				}
				label {
					font-weight: 400;
					font-size: 2.71em;
					margin-left: 1em;
				}
			}
			.submit {
				width: 14.41em;
				height: 4.8em;
				font-size: 2.45em;
				font-weight: 900;
				border-radius: 4em;
				letter-spacing: 0.1em;
			}
		}
	}
	@include max($small) {
		.main-form {
			width: 100%;
			height: 170vh;
			padding: 5em 1em;
			.close-button {
				display: block;
				position: absolute;
				right: 2em;
				top: 2em;
				width: 2em;
				height: 2em;
				img {
					width: 100%;
				}
			}
			input {
				margin-bottom: 1.1em;
				width: 90%;
				padding: 0em 0em 0.7em 0.7em;
				font-weight: 400;
				font-size: 1.5em;
				border-bottom: 2px solid $main-color;
			}
			select {
				margin-bottom: 1.1em;
				padding: 0em 0em 1em 1em;
				font-weight: 400;
				font-size: 1.5em;
			}
			textarea {
				margin-bottom: 1.1em;
				width: 90%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.5em;
			}
			.number {
				width: 90%;
				select {
					width: 30%;
				}
				input {
					width: 60%;
				}
			}
			.location {
				display: flex;
				flex-direction: column;
				height: 15em;
				justify-content: space-around;
				width: 90%;
				input {
					width: 100%;
				}
			}
			.checkbox {
				margin-bottom: 1.1em;
				width: 90%;
				label {
					font-size: 1.5em;
				}
			}
			.submit {
				width: 100%;
				margin: 1em 0;
				height: 4em;
				font-size: 2em;
				border-radius: 4em;
				letter-spacing: 0.2em;
			}
		}
	}
}
</style>