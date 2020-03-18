<script>
import Header from './components/Header.svelte'
import Stats from './components/Stats.svelte'
import CountrySelector from './components/CountrySelector.svelte'
let country = null
let base = 'https://covid19.mathdro.id/api'

$: url = !country ? base : `${base}/countries/${country}`

function updateCountry(e) {
	country = e.detail
}
</script>

<Header />
<main>
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
</style>