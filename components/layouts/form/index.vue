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
				id="email"
			/>
			<div class="number">
				<select v-model="contactData.internationalCode">
					<option
						v-for="(code, index) in codes"
						:key="code.dial_code + index"
						:value="code.dial_code"
					>
						{{ code.code }}: {{ code.dial_code }}
					</option>
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
					this.$emit("successSended");
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
		width: 49.2em;
		background-color: $default-text-color;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid $main-color;
		padding: 5em 2.5em;
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
			width: 100%;
			background-color: transparent;
			padding: 0em 0em 1em 1em;
			margin: 0;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.8em;
			border-bottom: 2px solid $main-color;
			margin-bottom: 1.4em;
		}
		#email {
			margin: 0;
			margin-bottom: 1.4em;
		}
		select {
			outline: none;
			width: 100%;
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
			width: 100%;
			background-color: transparent;
			padding: 0em 0em 1em 1em;
			border: none;
			color: $main-color;
			font-family: Montserrat;
			font-weight: 400;
			font-size: 1.5em;
			border-bottom: 2px solid $main-color;
			resize: none;
			margin-bottom: 1.4em;
		}
		.number {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-bottom: 1.4em;
			select {
				width: 30%;
				margin: 0;
			}
			input {
				width: 60%;
				margin: 0;
			}
		}
		.location {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-bottom: 1.4em;
			input {
				width: 45%;
			}
		}
		.checkbox {
			display: flex;
			justify-content: flex-start;
			width: 100%;
			margin-bottom: 1.4em;
			input {
				position: absolute;
				z-index: -1;
				opacity: 0;
			}
			#agree + label {
				display: inline-flex;
				align-items: center;
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
				// margin-left: 1em;
			}
		}
		.submit {
			cursor: pointer;
			display: block;
			margin: 3.2em 0 0 0;
			padding: 1.5em;
			border-radius: 11.1em;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $blue-sky;
			font-family: TT Hazelnuts;
			font-style: normal;
			font-weight: 900;
			font-size: 1.8em;
			display: flex;
			align-items: center;
			text-align: center;
			letter-spacing: 0.2em;
			text-transform: uppercase;
			color: #ffffff;
			transition: 0.3s;
			&:disabled {
				opacity: 0.7;
			}
			@include max($small) {
				font-size: 1.6em;
				min-width: 100%;
				margin: 3em 0 0 0;
			}
		}
	}
	@include max($xlarge) {
		.main-form {
			width: 67.7em;
			padding: 10.8em 5.1em 6.9em 6.2em;
			input {
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.8em;
				margin-bottom: 2.2em;
			}
			#email {
				margin-bottom: 2.2em;
			}
			select {
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.8em;
			}
			textarea {
				outline: none;
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.8em;
				margin-bottom: 2.2em;
			}
			.number {
				justify-content: space-between;
				width: 100%;
				margin-bottom: 2.2em;
				select {
					width: 30%;
					margin: 0;
				}
				input {
					width: 60%;
					margin: 0;
				}
			}
			.location {
				justify-content: space-between;
				width: 100%;
				margin-bottom: 2.2em;
				input {
					width: 45%;
				}
			}
			.checkbox {
				justify-content: flex-start;
				width: 100%;
				margin-bottom: 2.2em;
				input {
					position: absolute;
					z-index: -1;
					opacity: 0;
				}
				#agree + label::before {
					width: 1.5em;
					height: 1.5em;
					margin-right: 1.5em;
				}
				label {
					font-size: 1.82em;
				}
			}
		}
	}
	@include max($large) {
		width: 100%;
		.main-form {
			width: 100%;
			padding: 17.26em 12.2em 7.04em 12.2em;
			border: none;
			input {
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.6em;
				margin-bottom: 2.5em;
			}
			#email {
				margin-bottom: 2.5em;
			}
			select {
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.8em;
			}
			textarea {
				outline: none;
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.8em;
				margin-bottom: 3.2em;
			}
			.number {
				justify-content: space-between;
				width: 100%;
				margin-bottom: 4.2em;
				select {
					width: 30%;
					margin: 0;
				}
				input {
					width: 60%;
					margin: 0;
				}
			}
			.location {
				justify-content: space-between;
				width: 100%;
				margin-bottom: 4.2em;
				input {
					width: 45%;
				}
			}
			.checkbox {
				justify-content: flex-start;
				width: 100%;
				margin-bottom: 2.2em;
				input {
					position: absolute;
					z-index: -1;
					opacity: 0;
				}
				#agree + label::before {
					width: 1.5em;
					height: 1.5em;
					margin-right: 1.5em;
				}
				label {
					font-size: 1.6em;
				}
			}
		}
	}
	@include max($small) {
		width: 100%;
		.main-form {
			width: 100%;
			padding: 6.05em 1.56em 3.9em 1.56em;
			border: none;
			input {
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.27em;
				margin-bottom: 3.1em;
			}
			#email {
				margin-bottom: 3.1em;
			}
			select {
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.27em;
			}
			textarea {
				outline: none;
				width: 100%;
				padding: 0em 0em 1em 1em;
				font-size: 1.27em;
				margin-bottom: 3.1em;
			}
			.number {
				justify-content: space-between;
				width: 100%;
				margin-bottom: 4em;
				select {
					width: 30%;
					margin: 0;
				}
				input {
					width: 60%;
					margin: 0;
				}
			}
			.location {
				flex-direction: column;
				justify-content: space-between;
				width: 100%;
				margin-bottom: 0;
				input {
					width: 100%;
				}
			}
			.checkbox {
				justify-content: flex-start;
				width: 100%;
				margin-bottom: 3.1em;
				input {
					position: absolute;
					z-index: -1;
					opacity: 0;
				}
				#agree + label::before {
					width: 1.5em;
					height: 1.5em;
					margin-right: 1.5em;
				}
				label {
					font-size: 1.27em;
				}
			}
		}
	}
}
</style>