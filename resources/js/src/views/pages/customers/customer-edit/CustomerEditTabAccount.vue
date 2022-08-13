<template>
  <div>
    <!-- Media -->
    <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="userData.avatar"
          :text="avatarText(userData.fullName)"
          :variant="`light-${resolveUserRoleVariant(userData.role)}`"
          size="90px"
          rounded
        />
      </template>
      <h4 class="mb-1">
        {{ userData.fullName }}
      </h4>
      <div class="d-flex flex-wrap">
        <b-button variant="danger" @click="$refs.refInputEl.click()">
          <input
            ref="refInputEl"
            type="file"
            class="d-none"
            @input="inputImageRenderer"
          />
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon icon="EditIcon" class="d-inline d-sm-none" />
        </b-button>
        <b-button variant="outline-secondary" class="ml-1">
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon icon="TrashIcon" class="d-inline d-sm-none" />
        </b-button>
      </div>
    </b-media>
    <validation-observer ref="userUpdateValidation">
      <b-form class="auth-login-form mt-2" @submit.prevent>
        <!-- User Info: Input Fields -->
        <b-form>
          <b-row>
            <!-- Field: Username -->
            <b-col cols="12" md="4">
              <b-form-group label="Username" label-for="username">
                <b-form-input id="username" v-model="userData.username" />
              </b-form-group>
            </b-col>

            <!-- Field: Full Name -->
            <b-col cols="12" md="4">
              <b-form-group label="Name" label-for="full-name">
                <b-form-input id="full-name" v-model="userData.fullName" />
              </b-form-group>
            </b-col>

            <!-- Field: Email -->
            <b-col cols="12" md="4">
              <b-form-group label="Email" label-for="email">
                <b-form-input
                  id="email"
                  v-model="userData.email"
                  type="email"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Status -->
            <b-col cols="12" md="4">
              <b-form-group label="Status" label-for="user-status">
                <v-select
                  v-model="status"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  :options="statusOptions"
                  :reduce="(val) => val.value"
                  :clearable="false"
                  input-id="user-status"
                  placeholder="Select a status"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Role -->
            <b-col cols="12" md="4">
              <b-form-group label="Mobile" label-for="Mobile">
                <b-form-input
                  id="mobile"
                  v-model="userData.mobile"
                  type="number"
                />
              </b-form-group>
            </b-col>

            <!-- Field: Email -->
            <b-col cols="12" md="4">
              <b-form-group label="Address" label-for="address">
                <b-form-input
                  id="address"
                  v-model="userData.address"
                  type="text"
                />
              </b-form-group>
            </b-col>
          </b-row>
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
            <!-- Field: Gender -->
            <b-col cols="12" md="6" lg="4">
              <b-form-group
                label="Gender"
                label-for="gender"
                label-class="mb-1"
              >
                <b-form-radio-group
                  id="gender"
                  v-model="userData.gender_id"
                  :options="genderOptions"
                  value="male"
                />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>

        <!-- Action Buttons -->
        <b-button
          variant="success"
          class="mb-1 mb-sm-0 mr-0 mr-sm-1"
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
          @click="handleSubmit"
        >
          Save Changes
        </b-button>
        <b-button
          variant="outline-secondary"
          type="reset"
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        >
          Reset
        </b-button>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import {
  BButton,
  BMedia,
  BAvatar,
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  BTable,
  BCard,
  BCardHeader,
  BCardTitle,
  BFormCheckbox,
  BFormRadioGroup,
  BFormCheckboxGroup,
} from "bootstrap-vue";
import vSelect from "vue-select";
import useJwt from "@/auth/jwt/useJwt";
import { ref } from "@vue/composition-api";
import useResolverList from "@/useResolverList";
import { avatarText } from "@core/utils/filter";
import flatPickr from "vue-flatpickr-component";
import { useInputImageRenderer } from "@core/comp-functions/forms/form-utils";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BButton,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect,
    flatPickr,
    BFormRadioGroup,
    BFormCheckboxGroup,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const genderOptions = [
      { text: "Male", value: "1" },
      { text: "Female", value: "2" },
    ];
    const { resolveUserRoleVariant } = useResolverList();
    const status =
      props.userData.status != null ? props.userData.status.status : "";
    const roleOptions = [
      { label: "Admin", value: "admin" },
      { label: "Author", value: "author" },
      { label: "Editor", value: "editor" },
      { label: "Maintainer", value: "maintainer" },
      { label: "Subscriber", value: "subscriber" },
    ];

    const statusOptions = [
      { label: "Pending", value: "Pending" },
      { label: "Active", value: "Active" },
      { label: "Inactive", value: "Inactive" },
      { label: "Suspended", value: "Suspended" },
    ];

    const permissionsData = [
      {
        module: "Admin",
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: "Staff",
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: "Author",
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: "Contributor",
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: "User",
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ];

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null);
    const previewEl = ref(null);

    const { inputImageRenderer } = useInputImageRenderer(
      refInputEl,
      (base64) => {
        // eslint-disable-next-line no-param-reassign
        props.userData.avatar = base64;
      }
    );

    return {
      resolveUserRoleVariant,
      avatarText,
      roleOptions,
      statusOptions,
      permissionsData,
      status,
      genderOptions,
      refInputEl,
      previewEl,
      inputImageRenderer,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.userUpdateValidation.validate().then((success) => {
        if (success) {
          this.$loading(true);
          useJwt
            .updateUserAccount(this.userData)
            .then((response) => {
              let userName =
                response.data.data.user.first_name +
                " " +
                response.data.data.user.last_name;
              this.$loading(false);
              this.$router.replace({ path: "/customers" }).then(() => {
                this.$toast({
                  component: ToastificationContent,
                  position: "top-right",
                  props: {
                    title: `${userName}`,
                    icon: "CoffeeIcon",
                    variant: "success",
                    text: `Account was updated successfully`,
                  },
                });
              });
            })
            .catch((error) => {
              // this.$refs.loginForm.setErrors(error.response.data.error)
            });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "~@core/scss/vue/libs/vue-select.scss";
</style>
