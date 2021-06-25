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
        <span v-if="unique.status == 'err'">Invalid email or password</span>
      </v-form>
    </template>
  </div>
</template>

<script>
const axios = require('axios');
import { mapState, mapMutations } from 'vuex';

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
        const pattern = /^[\w-.+]+@([\w-]+\.)+[\w-]{2,4}$/g;
        return pattern.test(value) || 'Wrong email.';
      },
    },
  }),
  methods: {
    ...mapMutations('user', ['setUnique']),

    async login() {
      try {
        const { data } = await axios.post('/validate', this.form);
        this.validData = true;
        this.setUnique({status: data.status, id: data.data.id});
        this.$router.push('/news');
      }
      catch (e) {
        this.setUnique({status: "err"});
        this.validData = false;
        this.form.email = "";
        this.form.password = "";
        console.log("Wrong email or password!");
      }
    },
  },
  computed: {
    ...mapState("user", ['unique'])
  }
}

</script>

<style lang="scss">

</style>
