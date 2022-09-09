/// <reference types="@sveltejs/kit" />
interface CallbackPayload {
	'form-name': string;
	user: string;
	password?: string;
	timestamp: number;
}
