window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
    fetch('https://api.covid19india.org/state_district_wise.json')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let active = data["Dadra and Nagar Haveli and Daman and Diu"].districtData["Dadra and Nagar Haveli"].active;
		let confirmed = data["Dadra and Nagar Haveli and Daman and Diu"].districtData["Dadra and Nagar Haveli"].confirmed;
		let deceased = data["Dadra and Nagar Haveli and Daman and Diu"].districtData["Dadra and Nagar Haveli"].deceased;
		let recovered = data["Dadra and Nagar Haveli and Daman and Diu"].districtData["Dadra and Nagar Haveli"].recovered;
		let recovered_today = data["Dadra and Nagar Haveli and Daman and Diu"].districtData["Dadra and Nagar Haveli"].delta.recovered;
		let confirmed_today = data["Dadra and Nagar Haveli and Daman and Diu"].districtData["Dadra and Nagar Haveli"].delta.confirmed;


		document.getElementById('active').innerHTML = active;
		document.getElementById('confirmed').innerHTML = confirmed;
		document.getElementById('deceased').innerHTML = deceased;
		document.getElementById('recovered').innerHTML = recovered;
		document.getElementById('recovered_today').innerHTML = recovered_today;
		document.getElementById('confirmed_today').innerHTML = confirmed_today;





	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours


	function newFunction() {
		return console.log(resp.json);
	}
}