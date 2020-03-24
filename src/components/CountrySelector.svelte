<script>
export let countries
export let country
</script>

<label
  for="country-select"
  class="block text-sm font-semibold mb-2">Choose a country:</label>

<div class="select relative inline-block text-gray-700 w-full max-w-md mb-8">
  <select
    class="inline-block text-base w-full m-0 py-2 pl-4 pr-8 leading-normal text-gray-700 bg-white border border-gray-400 rounded-sm cursor-pointer outline-none focus:border-transparent focus:shadow-outline"
    name="countries" id="country-select" bind:value={country}>
      <option class="bg-white" value="">--Please choose an option--</option>
      {#each countries as country}
      <option class="bg-white" value={country.iso3}>{country.name}</option>
      {/each}
  </select>
</div>

<style>
/* styles taken from https://github.com/mdo/wtf-forms/blob/master/wtf-forms.css and modified */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
/* Undo the Firefox inner focus ring */
select:focus:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}
/* Dropdown arrow */
.select:after {
  position: absolute;
  top: 50%;
  right: 1.25rem;
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  margin-top: -.15rem;
  pointer-events: none;
  border-top: .35rem solid;
  border-right: .35rem solid transparent;
  border-bottom: .35rem solid transparent;
  border-left: .35rem solid transparent;
}

/* Active/open */
select:active {
  color: #fff;
  background-color: #0074d9;
}

/* Media query to target Firefox only */
@-moz-document url-prefix() {
  /* Firefox hack to hide the arrow */
  select {
    text-indent: 0.01px;
    text-overflow: '';
    padding-right: 1rem;
  }
}
</style>
