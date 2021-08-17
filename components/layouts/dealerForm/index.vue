<template>
	<div class="dealer-wrapper">
		<div class="dealer-header">
			<div class="page-title">{{ $t("dealer.title") }}</div>
			<div class="page-text dealer-subtitle">
				{{ $t("dealer.description") }}
			</div>
		</div>
		<form @submit.prevent="submitForm">
			<input
				v-model="dealerForm.name"
				type="text"
				:placeholder="namePlaceholder"
			/>
			<input
				v-model="dealerForm.companyName"
				type="text"
				:placeholder="surnamePlaceholder"
			/>
			<input
				v-model="dealerForm.email"
				type="email"
				:placeholder="emailPlaceholder"
			/>
			<div class="number">
				<select v-model="dealerForm.internationalCode">
					<option
						v-for="(code, index) in codes"
						:key="code.dial_code + index"
						:value="code.dial_code"
						>{{ code.code }}: {{ code.dial_code }}</option
					>
				</select>
				<input
					v-model="dealerForm.phoneNumber"
					type="text"
					:placeholder="numberPlaceholder"
				/>
			</div>
			<div class="location">
				<input
					v-model="dealerForm.country"
					type="text"
					:placeholder="countryPlaceholder"
				/>
				<input
					v-model="dealerForm.city"
					type="text"
					:placeholder="cityPlaceholder"
				/>
			</div>
			<textarea
				v-model="dealerForm.description"
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
import { codes } from "./codes";
export default {
	data() {
		return {
			dealerForm: {
				name: "",
				companyName: "",
				internationalCode: "",
				phoneNumber: "",
				email: "",
				country: "",
				city: "",
				description: ""
			},
			agree: false,
			namePlaceholder: this.$t("dealer.fullNamePlaceholder"),
			surnamePlaceholder: this.$t("dealer.companyPlaceholder"),
			emailPlaceholder: this.$t("dealer.emailPlaceholder"),
			numberPlaceholder: this.$t("dealer.numberPlaceholder"),
			countryPlaceholder: this.$t("dealer.countryPlaceholder"),
			cityPlaceholder: this.$t("dealer.cityPlaceholder"),
			textPlaceholder: this.$t("dealer.textPlaceholder"),
			codes: codes.sort(function(a, b) {
				if (a.dial_code > b.dial_code) {
					return 1;
				}
				if (a.dial_code < b.dial_code) {
					return -1;
				}
				// a должно быть равным b
				return 0;
			})
		};
	},
	computed: {
		valid() {
			let valid = false;
			for (const key in this.dealerForm) {
				if (this.dealerForm[key] == "") valid = false;
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
				for (const key in this.dealerForm) {
					formData.append(key, this.dealerForm[key]);
				}
				try {
					await this.$axios.post("/becomedealer", formData, options);
					for (const key in this.dealerForm) {
						this.dealerForm[key] = "";
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
.dealer-wrapper {
	width: 100%;
	min-height: 110vh;
	padding: 25em 12em 15em 12em;
	position: relative;
	.dealer-header {
		height: 10%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.dealer-subtitle {
			margin: 2em 0 5em 0;
		}
	}
	form {
		width: 85em;
		height: 60em;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		font-family: Montserrat;
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
			padding: 0em 0em 0.5em 0.5em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.2em;
			border-bottom: 2px solid $main-color;
		}
		select {
			outline: none;
			width: 80%;
			background-color: transparent;
			padding: 0em 0em 0.5em 0.5em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.2em;
			border-bottom: 2px solid $main-color;
		}
		textarea {
			outline: none;
			width: 80%;
			background-color: transparent;
			padding: 0em 0em 0.5em 0.5em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.2em;
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
				cursor: pointer;
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
				font-size: 1.2em;
				color: $main-color;
				font-family: Montserrat;
				margin-left: 1em;
				cursor: pointer;
			}
		}
		.submit {
			width: 11em;
			height: 4em;
			background-color: $blue-sky;
			border: none !important;
			padding: 0 !important;
			border-radius: 2em;
			color: $default-text-color;
			font-size: 1.8em;
			text-transform: uppercase;
			font-weight: 900;
			letter-spacing: 0.1em;
			opacity: 1;
			transition: 0.3s;
			cursor: pointer;
			&:disabled {
				opacity: 0.7;
			}
		}
	}
	@include max($large) {
		padding: 20em 4em 5em 4em;
		.dealer-header {
			margin-bottom: 7em;
			.dealer-subtitle {
				margin: 2em 0 0 0;
			}
		}
		form {
			min-height: 100vh;
			input {
				width: 80%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.6em;
			}
			select {
				width: 80%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.6em;
			}
			textarea {
				width: 80%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.6em;
			}
			.number {
				width: 80%;
				select {
					width: 30%;
				}
				input {
					width: 60%;
				}
			}
			.location {
				width: 80%;
				input {
					width: 45%;
				}
			}
			.checkbox {
				width: 80%;
				label {
					font-size: 1.6em;
					margin-left: 0em;
				}
			}
			.submit {
				width: 12em;
				height: 4em;
				border-radius: 4em;
				font-size: 2em;
				margin: 2em 0 0 0;
			}
		}
	}
	@include max($small) {
		padding: 15em 1em 5em 3em;
		justify-content: center;
		align-items: flex-start;
		.dealer-header {
			height: 10%;
			margin-bottom: 6em;
		}
		form {
			width: 100%;
			min-height: 150vh;
			input {
				width: 95%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.4em;
			}
			select {
				width: 95%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.4em;
			}
			textarea {
				width: 95%;
				padding: 0em 0em 0.7em 0.7em;
				font-size: 1.4em;
			}
			.number {
				width: 95%;
				select {
					width: 30%;
				}
				input {
					width: 60%;
				}
			}
			.location {
				width: 95%;
				height: 20%;
				flex-direction: column;
				justify-content: space-around;
				input {
					width: 100%;
				}
			}
			.checkbox {
				width: 95%;
				label {
					font-size: 1.4em;
					margin-left: 0em;
				}
			}
			.submit {
				margin-top: 2em;
				width: 100%;
				height: 4em;
				border-radius: 4em;
				font-size: 1.4em;
			}
		}
	}
}
</style>