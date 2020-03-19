<script>
import { format } from 'date-fns'
import Header from './components/Header.svelte'
import Stats from './components/Stats.svelte'
import CountrySelector from './components/CountrySelector.svelte'
let country = null
let base = 'https://covid19.mathdro.id/api'

let lastUpdated

fetch(base).then(res => res.json()).then(data => lastUpdated = format(new Date(data.lastUpdate), 'PPPPpp'))

$: url = !country ? base : `${base}/countries/${country}`

function updateCountry(e) {
	country = e.detail
}
</script>

<Header />
<main>
	<span class="update-alert">Last updated on {lastUpdated}</span>
	<h2>Global Stats:</h2>
	<Stats />
	<CountrySelector on:selected={updateCountry} />
	{#if country !== null}
	<Stats url={url} />
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