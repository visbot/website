export function callback(payload: CallbackPayload): void {
	const formData = new URLSearchParams();

	Object.entries(payload).forEach(([key, value]) => {
		formData.append(key, String(value));
	});

	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(formData).toString()
	});
}
