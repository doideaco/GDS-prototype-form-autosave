<script>
	async function saveForm(form) {
		// Get form data immediately to avoid any race conditions
		const formData = new FormData(form);
		const jsonData = Object.fromEntries(formData.entries());

		// Post the form data to the server, including empty fields
		try {
			console.log('Sending data:', jsonData);

			const response = await fetch('/THEPAGEYOUARESAVING', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(jsonData)
			});

			if (response.ok) {
				console.log('Form data saved successfully.');
			} else {
				console.error('Failed to save form data.');
			}
		} catch (error) {
			console.error('Error during form submission:', error);
		}
	}

	let saveTimer;

	const handleFormChange = (event) => {
		const form = event.target.closest('form');

		if (form && form.classList.contains('autosave')) {
			clearTimeout(saveTimer);
			saveTimer = setTimeout(() => {
				saveForm(form);
			}, 500); // Debounce delay to avoid rapid consecutive submissions
		}
	}

	document.addEventListener('change', handleFormChange);
	document.addEventListener('keyup', handleFormChange);
</script>
