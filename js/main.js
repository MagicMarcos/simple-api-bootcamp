// const url = `https://api.agify.io?name=marcos&country_id=US`;
document.querySelector('button').addEventListener('click', () => {
	const selectedValue = document.getElementById('activityTypes').value;
	let url = `http://www.boredapi.com/api/activity?type=${selectedValue}`;
	if (selectedValue === 'any') {
		url = `http://www.boredapi.com/api/activity`;
	}
	fetch(url)
		.then(res => res.json())
		.then(data => {
			document.querySelector('h1').innerText = data.activity;
		})
		.catch(err => console.log(err));
	console.log(selectedValue);
});
