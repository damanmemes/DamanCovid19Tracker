window.onload = function() {
	getCovidStats();
}

function getCovidStats() {
    fetch('https://api.covid19india.org/state_district_wise.json')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let active = data.Gujarat.districtData.Valsad.active;
		let confirmed = data.Gujarat.districtData.Valsad.confirmed;
		let deceased = data.Gujarat.districtData.Valsad.deceased;
		let recovered = data.Gujarat.districtData.Valsad.recovered;
		let recovered_today = data.Gujarat.districtData.Valsad.delta.recovered;
		let confirmed_today = data.Gujarat.districtData.Valsad.delta.confirmed;
		let date = Date()


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