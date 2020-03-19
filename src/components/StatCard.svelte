<script>
import _get from '../_get.js'
export let stats
$: confirmed = Intl.NumberFormat().format(_get(stats, 'confirmed.value', 0))
$: deaths = Intl.NumberFormat().format(_get(stats, 'deaths.value', 0))
$: recovered = Intl.NumberFormat().format(_get(stats, 'recovered.value', 0))
</script>

<article>
  <div class="stat">
    <span class="value">{confirmed}</span>
    <span class="label">confirmed</span>
  </div>
  <div class="stat">
    <span class="value">{deaths}</span>
    <span class="label">deaths</span>
  </div>
  <div class="stat">
    <span class="value">{recovered}</span>
    <span class="label">recovered</span>
  </div>
</article>

<style>
article {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  justify-content: space-between;
  max-width: 40em;
}

.stat {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 0;
  margin-bottom: 1rem;
}

.stat:last-child {
  margin-bottom: 0;
}

.stat:last-child .value {
  margin-bottom: 0;
}

.value {
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: .5rem;
}

.label {
  text-transform: uppercase;
  font-weight: 400;
  font-size: .875rem;
  letter-spacing: .05em;
}

@media all and (min-width: 760px) {
  article {
    padding: 2rem;
    flex-direction: row;
  }

  .stat {
    margin-bottom: 0;
    flex-direction: column;
    text-align: center;
    padding: 0 .5rem;
  }

  .stat:last-child .value {
    margin-bottom: .5rem;
  }
}
</style>