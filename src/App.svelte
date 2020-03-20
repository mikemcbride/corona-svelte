<script>
import { format } from 'date-fns'
import Header from './components/Header.svelte'
import Stats from './components/Stats.svelte'
import CountrySelector from './components/CountrySelector.svelte'
let country = null
let base = 'https://covid19.mathdro.id/api'
let countries = []

fetch(`${base}/countries`).then(res => res.json()).then(data => {
	countries = formatCountryData(data)
})

function formatCountryData(data) {
	let { countries: _countries, iso3 } = data
	
	return Object.keys(_countries).map(c => {
		let twoLetterCode = _countries[c]
		let threeLetterCode = iso3[twoLetterCode]

		return {
			name: c,
			code: threeLetterCode
		}
	})
}

let lastUpdated

fetch(base).then(res => res.json()).then(data => lastUpdated = format(new Date(data.lastUpdate), 'PPPPpp'))

$: url = !country ? base : `${base}/countries/${country}`
</script>

<Header />
<main>
	<span class="update-alert">Last updated on {lastUpdated}</span>
	<h2>Global Stats:</h2>
	<Stats />
	<CountrySelector bind:country {countries} />
	{#if country !== null}
	<Stats {url} />
	{/if}
</main>


<style>
main {
	padding: 1rem;
}

h2 {
	margin: 0 0 1rem;
}

.update-alert {
	background-color: #d2eaff;
	color: #0074d9;
	padding: .5rem 1rem;
	border-radius: .125rem;
	font-weight: 600;
	font-size: .875rem;
	display: inline-block;
	margin-bottom: 1rem;
}
</style>