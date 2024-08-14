<script>

	async function saveForm(form) {

		const formData = new FormData(form);
		const jsonData = Object.fromEntries(formData);

		console.log('Sending data:', jsonData);

		const response = await fetch('/THEPAGEYOUARESAVING', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(jsonData)
		});

	}

	let saveTimer;

	const handleFormChange = (event) => {
		const form = event.target.closest('form');

		if (form && form.classList.contains('autosave')) {
			clearTimeout(saveTimer);
			saveTimer = setTimeout(() => {
				saveForm(form);
			}, 5000);
		};
	}

	document.addEventListener('change', handleFormChange);
	document.addEventListener('keyup', handleFormChange);

</script>
