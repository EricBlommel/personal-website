<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment} class="rounded-2xl shadow-none drop-shadow-none bg-amber-500">
  count is {count}
</button>
