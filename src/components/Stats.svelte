<script>
import StatCard from './StatCard.svelte'
export let url = 'https://covid19.mathdro.id/api'
let stats
$: fetch(url).then(res => res.json()).then(data => { stats = data })
</script>

<section>
  {#if !stats}
    <p>loading stats...</p>
  {:else}
    <StatCard stats={stats} />
  {/if}
</section>


<style>
section {
  margin-bottom: 2rem;
}
</style>