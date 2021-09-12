<template>
  <div id="footer">
    <div class="">
      <div class="container-fluid fadeInUp wow" data-wow-duration="0.5s">
        <b-row cols="1" cols-md="2" class="pt-3" align-v="center">
          <b-col>
            <p>
              Copyright © 2021 - Todos los derechos reservados. <br />
              Desarrollado por camporamaria@gmail.com
            </p>
          </b-col>
          <b-col class="text-right">
            <a href="#">Aviso Legal</a> <br />
            <a href="#">Política de privacidad</a>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#footer {
  font-size: 12px;
  margin-bottom: 0;
  background-color: #123;
  color: white;
  height: 90px;
  padding: 40px 40px 90px 280px;
  @media (max-width: 991px) {
    padding-left: 40px;
  }
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
<script>
export default {
  name: "Footer",
  data: () => {
    return {};
  },
};
</script>
