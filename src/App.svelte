<script>
import format from 'date-fns/lightFormat'
import Header from './components/Header.svelte'
import Stats from './components/Stats.svelte'
import CountrySelector from './components/CountrySelector.svelte'
let country = null
let base = 'https://covid19.mathdro.id/api'
let countries = []

fetch(`${base}/countries`).then(res => res.json()).then(data => {
	countries = data.countries
})

let lastUpdated

fetch(base).then(res => res.json()).then(data => lastUpdated = format(new Date(data.lastUpdate), 'yyyy-MM-dd h:mm:ss a'))

$: url = !country ? base : `${base}/countries/${country}`
</script>

<Header />
<main class="p-4">
	<span class="bg-gray-200 text-blue-600 px-4 py-2 rounded-xs font-semibold text-sm inline-block mb-4">Last updated on {lastUpdated}</span>
	<h2 class="text-2xl font-bold mb-4">Global Stats:</h2>
	<Stats />
	<CountrySelector bind:country {countries} />
	{#if country !== null}
	<Stats {url} />
	{/if}
</main>