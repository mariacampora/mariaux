<template>
  <div id="preloader">
    <div class="preloader preloader-dark">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#prealoader {
  background-color: #000;
  .preloader .lds-ellipsis {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
    top: 50%;
    left: 50%;
  }
}
</style>
<script>
export default {
  name: "Preloader",
  data: () => {
    return {};
  },
};
</script>
