<template>
  <div>
    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon icon="UserIcon" size="19" />
      <h4 class="mb-0 ml-50">Personal Information</h4>
    </div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>
        <!-- Field: Birth Date -->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Birth Date" label-for="birth-date">
            <flat-pickr
              v-model="userData.dob"
              class="form-control"
              :config="{ dateFormat: 'Y-m-d' }"
              placeholder="YYYY-MM-DD"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Mobile -->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Mobile" label-for="mobile">
            <b-form-input id="mobile" v-model="userData.mobile" />
          </b-form-group>
        </b-col>
        <!-- Field: Gender -->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Gender" label-for="gender" label-class="mb-1">
            <b-form-radio-group
              id="gender"
              v-model="userData.gender_id"
              :options="genderOptions"
              value="male"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Header: Personal Info -->
      <div class="d-flex mt-2">
        <feather-lockIcon icon="MapPinIcon" size="19" />
        <h4 class="mb-0 ml-50">Passwords and PIN</h4>
      </div>

      <!-- Form: Personal Info Form -->
      <b-row class="mt-1">
        <!-- Field: Password-->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Current Password" label-for="current-password">
            <b-form-input id="password" />
          </b-form-group>
        </b-col>

        <!-- Field: New pasword-->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="New Password" label-for="new-password">
            <b-form-input id="new-password" placeholder="000" />
          </b-form-group>
        </b-col>

        <!-- Field: Confirm Password -->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Confirm  Password" label-for="confirm-password">
            <b-form-input id="confirm-password" placeholder="000" />
          </b-form-group>
        </b-col>

        <!-- Field: Password-->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Current PIN" label-for="current-pin">
            <b-form-input id="pin" />
          </b-form-group>
        </b-col>

        <!-- Field: New pasword-->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="New PIN" label-for="new-pim">
            <b-form-input id="new-pim" placeholder="000" />
          </b-form-group>
        </b-col>

        <!-- Field: Confirm Password -->
        <b-col cols="12" md="6" lg="4">
          <b-form-group label="Confirm  PIN" label-for="confirm-pim">
            <b-form-input id="confirm-pim" placeholder="000" />
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="mt-2">
        <b-col>
          <b-button
            variant="primary"
            class="mb-1 mb-sm-0 mr-0 mr-sm-1"
            :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          >
            Save Changes
          </b-button>
          <b-button
            variant="outline-secondary"
            :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BFormRadioGroup,
  BFormCheckboxGroup,
  BButton,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import { ref } from "@vue/composition-api";
import vSelect from "vue-select";

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    flatPickr,
    BFormInput,
    vSelect,
    BFormRadioGroup,
    BFormCheckboxGroup,
    BButton,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const languageOptions = [
      "English",
      "Spanish",
      "French",
      "Russian",
      "German",
      "Arabic",
      "Sanskrit",
    ];
    const genderOptions = [
      { text: "Male", value: "1" },
      { text: "Female", value: "2" },
    ];

    const contactOptionsOptions = ["Email", "Message", "Phone"];

    return {
      languageOptions,
      genderOptions,
      contactOptionsOptions,
    };
  },
};
</script>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-flatpicker.scss";
</style>
