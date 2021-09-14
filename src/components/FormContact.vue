<template>
  <section id="form_contact" class="section">
    <div class="container px-lg-5">
      <div class="bg-ligth p-5 fadeInUp wow" data-wow-duration="0.5s">
        <b-row cols="1" cols-md="2" class="pt-3" align-v="center">
          <b-col lg="6" class="">
            <h2>
              Diseño experiencia <br />
              para los <s>usuarios</s>
              <span class="text-principal">Personas</span>
            </h2>
            <p>
              El UX es aplicable tanto a productos digitales, como: web, app,
              interfaces… como a medios impresos: logos, manuales, pakaging,
              revistas, folletos, gigantografias, banner, etc.
            </p>
          </b-col>

          <b-col lg="6" class="text-left">
            <h3 class="text-principal">Envíame un mensaje!</h3>
            <b-form-group
              description=""
              label="Nombre"
              label-for="nameContact"
              :invalid-feedback="invalidFeedbackName"
              :valid-feedback="validFeedbackName"
              :state="stateName"
            >
              <b-form-input
                id="nameContact"
                v-model="nombre"
                trim
                size="lg"
                :state="stateName"
                @keyup="dirty.name = true"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              description=""
              label="Correo electrónico"
              label-for="emailContact"
              :invalid-feedback="invalidFeedbackEmail"
              :valid-feedback="validFeedbackEmail"
              :state="stateEmail"
            >
              <b-form-input
                id="emailContact"
                v-model="correo"
                trim
                size="lg"
                :state="stateEmail"
                @keyup="dirty.email = true"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-textarea
                id="msnContact"
                v-model="mensaje"
                placeholder="Escribe tu mensaje..."
                rows="4"
                max-rows="8"
              ></b-form-textarea>
            </b-form-group>

            <b-alert :variant="sentStatus" :show="sent">
              Correo enviado
            </b-alert>

            <b-button
              pill
              class="btn-enviar py-2 px-4"
              :disabled="!stateEmail || !stateName"
              @click="sendMessage()"
            >
              Enviar mensaje
            </b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#form_contact {
  background-image: url("../../public/assets/mpt.png");
  background-color: #fd4375;
  .bg-ligth {
    background-color: #eae8ed;
  }
  .text-principal {
    color: #fd4375;
  }
  .btn-secondary {
    background: #fd4375;
    border-color: #fd4375;
    :active {
      background: crimson;
      border-color: crimson;
    }
  }

  span {
    font-family: "Indie Flower", cursive;
  }
  #msnContact,
  #emailContact,
  #nameContact {
    font-size: 0.9em;
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "FormContact",
  data: () => {
    return {
      nombre: "",
      correo: "",
      mensaje: "",
      sent: false,
      sentStatus: "success",
      dirty: {
        name: false,
        email: false,
      },
    };
  },
  computed: {
    stateEmail() {
      if (!this.dirty.email) {
        return;
      }
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.correo).toLowerCase());
    },
    invalidFeedbackEmail() {
      if (!this.stateEmail) {
        return "Introduce una dirección de correo valida";
      }
      return "Verifica tu correo";
    },
    validFeedbackEmail() {
      return this.stateEmail === true ? "" : "";
    },

    stateName() {
      if (!this.dirty.name) {
        return;
      }
      return this.nombre.length >= 3;
    },
    invalidFeedbackName() {
      if (this.nombre.length > 3) {
        return "";
      }
      if (this.nombre.length > 0) {
        return "Introduce tu nombre";
      }
      return "Upps! al parecer no haz colocado tu nombre";
    },
    validFeedbackName() {
      return this.stateName === true ? "" : "Este nombre no es valido";
    },
  },
  methods: {
    sendMessage() {
      const data = {
        name: this.nombre,
        email: this.correo,
        message: this.mensaje,
      };

      axios
        .post("http://learningscrum.cl/enviar.php", data)
        .then(() => {
          this.sent = true;
          this.sentStatus = "success";

          this.nombre = "";
          this.correo = "";
          this.mensaje = "";

          this.dirty.name = false;
          this.dirty.email = false;

          setTimeout(() => {
            this.sent = false;
          }, 5000);
        })
        .catch(() => {
          this.sent = true;
          this.sentStatus = "danger";
          setTimeout(() => {
            this.sent = false;
          }, 5000);
        });
    },
  },
};
</script>
