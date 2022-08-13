<template>
  <b-card>
    <b-row>

      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
          <b-avatar
            :src="userData.avatar"
            :text="avatarText( userData.customer.first_name + ' ' +userData.customer.last_name )"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ userData.customer.first_name + ' ' +userData.customer.last_name }}
              </h4>
              <span class="card-text">{{ userData.customer.email }}</span>
            </div>
           
          </div>
        </div>

      </b-col>

      <!-- Right Col: Table -->
      <b-col cols="12" xl="6">
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th class="pb-50">
              <feather-icon icon="UserIcon" class="mr-75" />
              <span class="font-weight-bold">Mobile Number</span>
            </th>
            <td class="pb-50">
              {{ userData.customer ? userData.customer.mobile : "Unknown" }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="CheckIcon" class="mr-75" />
              <span class="font-weight-bold">Network</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{  (userData.newtwork != null) ? userData.newtwork :'Unknown' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Amount Spent</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ userData.amount }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Request Type</span>
            </th>
            <td class="pb-50">
              {{ userData.request_type }}
            </td>
          </tr>
         
        </table>
      </b-col>

    </b-row>
  </b-card>
</template>

<script>
import { BCard, BButton, BAvatar, BRow, BCol } from "bootstrap-vue";
import { avatarText } from "@core/utils/filter";
import useResolverList from "@/useResolverList";

export default {
  components: {
    BCard,
    BButton,
    BRow,
    BCol,
    BAvatar,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();

    return {
      resolveUserRoleVariant,
      avatarText,
      status
    };
  },
};
</script>

<style>
</style>
