<template>
  <div class="webpage__login">
    <template>
      <v-form v-model="validInput">
        <div class="webpage__login-input">
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
        </div>

        <div class="webpage__login-submit">
          <span class="webpage__login-submit--error" v-show="showError">Email or password incorrect</span>
          <v-btn
            :disabled="!validInput"
            color="success"
            class="mr-4"
            @click="login"
          >
            Login
          </v-btn>
        </div>
      </v-form>
    </template>
  </div>
</template>

<script>

import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    validInput: false,
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
    ...mapActions('auth', ['makeLogin']),
    ...mapMutations('user', ['setUnique']),

    async login() {
      try {
        await this.makeLogin(this.form)
        this.$router.push('/profile');
      }
      catch (e) {
        this.setUnique({ status: 'err' });
        setTimeout(() => this.setUnique({ status: null }), 2000);
        this.form.password = "";
      }
    },
  },
  computed: {
    ...mapState('user', ['unique']),

    showError() {
      return !this.form.password && this.unique.status === 'err';
    }
  },
}

</script>

<style lang="scss">
  .v-application {
    .primary--text {
      color: #eed390 !important;
    }
    .success {
      background-color: transparent !important;
      border: 2px solid #E9C46A !important;
    }
  }
  .webpage__login {
    display: flex;
    box-sizing: border-box;
    padding: 60px 60px;

    form {
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;
      padding: 60px 60px;
      background: #1A759F;
      border-radius: 8px;

      .webpage__login-input, .webpage__login-submit {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .webpage__login-submit--error {
          margin-top: 120px;
          color: #ff5252;
          font-family: Rubik;
          font-size: 24px;
          font-weight: 400;
          line-height: 28px;
        }

        .v-btn {
          color: #E9C46A;
          width: 100%;
          max-width: 225px;
          margin-top: 200px;
          height: 64px;
          border-radius: 8px;
        }

        .v-text-field {
          width: 100%;
          max-width: 512px;
          display: flex;
          justify-content: center;

          .v-input__control .v-input__slot {
            &:before, &:after {
              display: none;
            }
          }

          .v-text-field__slot {
            height: 64px;
            background: transparent;
            box-sizing: border-box;
            label {
              color: #E9C46A;
              margin: 16px;
            }
            input {
              padding: 14px;
              max-height: 64px;
              border: 2px solid #E9C46A;
              border-radius: 8px;
            }
            input:-webkit-autofill {
              -webkit-box-shadow: 0 0 0 64px #1A759F inset !important;
            }
          }
        }
      }
    }
  }
</style>
