<template>
  <div id="backtop">
    <a
      id="back-to-top"
      class="rounded-circle"
      title=""
      aria-label="Back to Top"
      style="display: inline"
    >
      <fa-icon :icon="['fas', 'chevron-up']" />
    </a>
  </div>
</template>
<script>
export default {
  name: "BackTop",
  data: () => {
    return {};
  },
};
</script>
