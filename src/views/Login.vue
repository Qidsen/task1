<template>
  <div>
    <template>
      <v-form v-model="validInput">
        <v-text-field
          v-model="form.email"
          :rules="[rules.required, rules.email]"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="form.password"
          :rules="[rules.required]"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!validInput"
          color="success"
          class="mr-4"  
          @click="login"
        >
          Login
        </v-btn>
        <span v-if="!validData">Invalid email or password</span>
      </v-form>
    </template>
  </div>
</template>

<script>
const axios = require('axios');
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    validInput: false,
    validData: true,
    form: {
      email: '',
      password: '',
    },
    rules: {
      required: value => Boolean(value) || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Wrong email.';
      },
    },
  }),
  methods: {
    ...mapState("user", {
      //getStatus: 'status',
      getUserById: 'id',
    }),
    async login() {
      try {
        const { data } = await axios.post('/validate', this.form);
        this.validData = true;
        this.getUserById = data.data.id;
      }
      catch (e) {
        this.validData = false;
        this.form.email = "";
        this.form.password = "";
        console.log("Wrong email or password!");
      }
    },
  },
}

</script>

<style lang="scss">

</style>
