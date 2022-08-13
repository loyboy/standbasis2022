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
            :src="voucherData.avatar"
            :text="avatarText( voucherData.customer.first_name + ' ' +voucherData.customer.last_name )"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ voucherData.customer.first_name + ' ' +voucherData.customer.last_name }}
              </h4>
              <span class="card-text">{{ voucherData.customer.email }}</span>
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
              {{ voucherData.customer ? voucherData.customer.mobile : "Unknown" }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="CheckIcon" class="mr-75" />
              <span class="font-weight-bold">Receipt Number</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{  (voucherData.reciept != null) ? voucherData.reciept :'Unknown' }}
            </td>
          </tr>
          
          <tr>
            <th class="pb-50">
              <feather-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Amount Spent</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ voucherData.amount }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store Name</span>
            </th>
            <td class="pb-50">
              {{ voucherData.store_name ?  voucherData.store_name : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store E-Mail</span>
            </th>
            <td class="pb-50">
              {{ voucherData.store_email ?  voucherData.store_email : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store Mobile</span>
            </th>
            <td class="pb-50">
              {{ voucherData.store_mobile ?  voucherData.store_mobile : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Address</span>
            </th>
            <td class="pb-50">
              {{ voucherData.address ?  voucherData.address : ""}}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Date Created</span>
            </th>
            <td class="pb-50">
              {{ voucherData.created_at ?  new Date(voucherData.created_at).toISOString().substr(0,10) : "" }}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Validated</span>
            </th>
            <td class="pb-50">
             <b>  {{ voucherData.validated === 1 ?  "Validated" : "Un-Validated" }}  </b><br/>
              <button
                  v-if="voucherData.validated === 0"
                  class="dt-button add-new btn btn-info"
                  tabindex="0"
                  type="button"
                  @click="validateVoucher(voucherData)"
                >
                  <span>Validate Voucher</span>
                </button>
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
import axios from "axios";
import jwtHeader from "@core/services/jwt-header";

export default {
  components: {
    BCard,
    BButton,
    BRow,
    BCol,
    BAvatar,
  },
  props: {
    voucherData: {
      type: Object,
      required: true,
    },
  },

  methods: {
      validateVoucher(item){
        let isConfirmed = window.confirm(`Validate this Voucher with ID: ${item.id} ?`);
        if (isConfirmed){
              axios.put( window.location.origin + "/api/v1" + "/user/voucher/validate-voucher", { id: String(item.id) } , { headers: jwtHeader() } ).then((res) => { 
                    window.history.go(-1);
              });
        }
      }
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
