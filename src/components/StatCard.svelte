<script>
import _get from '../_get.js'
export let stats
$: confirmed = Intl.NumberFormat().format(_get(stats, 'confirmed.value', 0))
$: deaths = Intl.NumberFormat().format(_get(stats, 'deaths.value', 0))
$: recovered = Intl.NumberFormat().format(_get(stats, 'recovered.value', 0))
</script>

<article class="border border-gray-300 rounded-sm p-4 inline-flex flex-col flex-1 justify-between lg:py-8 lg:px-0 lg:flex lg:flex-row">
  <div class="flex flex-col-reverse justify-center p-0 mb-4 lg:mb-0 lg:flex-col lg:text-center lg:py-0 lg:px-8">
    <span class="text-5xl font-normal mb-2">{confirmed}</span>
    <span class="uppercase font-normal text-sm tracking-wide">confirmed</span>
  </div>
  <div class="flex flex-col-reverse justify-center p-0 mb-4 lg:mb-0 lg:flex-col lg:text-center lg:py-0 lg:px-8">
    <span class="text-5xl font-normal mb-2">{deaths}</span>
    <span class="uppercase font-normal text-sm tracking-wide">deaths</span>
  </div>
  <div class="flex flex-col-reverse justify-center p-0 mb-0 lg:mb-0 lg:flex-col lg:text-center lg:py-0 lg:px-8">
    <span class="text-5xl font-normal mb-0 lg:mb-2">{recovered}</span>
    <span class="uppercase font-normal text-sm tracking-wide">recovered</span>
  </div>
</article>
