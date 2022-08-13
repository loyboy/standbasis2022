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
            :src="transactionData.avatar"
            :text="avatarText( transactionData.customer.first_name + ' ' +transactionData.customer.last_name )"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ transactionData.customer.first_name + ' ' +transactionData.customer.last_name }}
              </h4>
              <span class="card-text">{{ transactionData.customer.email }}</span>
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
              {{ transactionData.customer ? transactionData.customer.mobile : "Unknown" }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="CheckIcon" class="mr-75" />
              <span class="font-weight-bold">Transaction Code</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{  (transactionData.transaction_code != null) ? transactionData.transaction_code :'Unknown' }}
            </td>
          </tr>
          
          <tr>
            <th class="pb-50">
              <feather-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Amount Spent</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ transactionData.amount_spent }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store Name</span>
            </th>
            <td class="pb-50">
              {{ transactionData.store ?  transactionData.store.store_name : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Transaction Type</span>
            </th>
            <td class="pb-50">
              {{ transactionData.transaction ?  transactionData.transaction : ""}}
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
    transactionData: {
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
