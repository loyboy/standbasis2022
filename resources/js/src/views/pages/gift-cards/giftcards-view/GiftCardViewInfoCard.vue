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
            :src="giftcardData.avatar"
            :text="avatarText( giftcardData.user.first_name + ' ' +giftcardData.user.last_name )"
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
              <h4 class="mb-0">
                {{ giftcardData.user.first_name + ' ' +giftcardData.user.last_name }}
              </h4>
              <span class="card-text">{{ giftcardData.user.email }}</span>
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
              {{ giftcardData.user ? giftcardData.user.mobile : "Unknown" }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="CheckIcon" class="mr-75" />
              <span class="font-weight-bold">Title</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{  (giftcardData.title != null) ? giftcardData.title :'Unknown' }}
            </td>
          </tr>
          
          <tr>
            <th class="pb-50">
              <feather-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Amount Spent</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ giftcardData.amount }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store Name</span>
            </th>
            <td class="pb-50">
              {{ giftcardData.store ?  giftcardData.store.store_name : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store E-Mail</span>
            </th>
            <td class="pb-50">
              {{ giftcardData.store ?  giftcardData.store.store_email : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Store Mobile</span>
            </th>
            <td class="pb-50">
              {{ giftcardData.store ?  giftcardData.store.store_mobile : ""}}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Points</span>
            </th>
            <td class="pb-50">
              {{ giftcardData.point ?  giftcardData.point : ""}}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Date Created</span>
            </th>
            <td class="pb-50">
              {{ giftcardData.created_at ?  new Date(giftcardData.created_at).toISOString().substr(0,10) : "" }}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Validated</span>
            </th>
            <td class="pb-50">
             <b>  {{ giftcardData.validated === 1 ?  "Validated" : "Un-Validated" }}  </b><br/>
              <button
                  v-if="giftcardData.validated === 0"
                  class="dt-button add-new btn btn-success"
                  tabindex="0"
                  type="button"
                  @click="validateGiftCard(giftcardData)"
                >
                  <span>Validate GiftCard</span>
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
    giftcardData: {
      type: Object,
      required: true,
    },
  },

  methods: {
      validateGiftCard(item){
        let isConfirmed = window.confirm(`Validate this GiftCard with ID: ${item.id} ?`);
        if (isConfirmed){
              axios.put( window.location.origin + "/api/v1" + "/user/giftcard/validate-giftcard", { id: String(item.id) } , { headers: jwtHeader() } ).then((res) => { 
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
