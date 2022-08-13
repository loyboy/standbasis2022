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
           
            :text=" avatarText( plenticreditData.user.first_name + ' ' +plenticreditData.user.last_name ) "
            size="104px"
            rounded
          />
          <div class="d-flex flex-column ml-1">

            <div class="mb-1">
              <h4 class="mb-0">
                {{ plenticreditData.user.first_name + ' ' +plenticreditData.user.last_name }}
              </h4>
              <span class="card-text">{{ plenticreditData.user.email }}</span>
            </div>

            <div class="d-flex flex-wrap">
              <b-button                
                variant="warning"
                @click="approveLoan( plenticreditData )"
                v-if=" plenticreditData.status !== 'approved' "
              >
                Approve Loan
              </b-button>

               <b-button                
                variant="success"
                v-else
              >
               Loan Approved
              </b-button>

            </div>

            <br>
            <div class="mb-1">
              <h4 class="mb-0">
                <b>  Total Installments </b>
              </h4>

              <span class="card-text bolden"> {{ plenticreditData.plenti_loan_repayments.length }}</span>

            </div>

            <div class="mb-1">
              <h4 class="mb-0">
                <b>  Total Amount Borrowed </b>
              </h4>

              <span class="card-text bolden"> {{ plenticreditData.loan_amount }}</span>
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
              {{ plenticreditData.user ? plenticreditData.user.mobile : "Unknown" }}
            </td>
          </tr>

          <tr>
            <th class="pb-50">
              <feather-icon icon="CheckIcon" class="mr-75" />
              <span class="font-weight-bold"> Processing Status</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{  (plenticreditData.status != null) ? plenticreditData.status :'Unknown' }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon icon="StarIcon" class="mr-75" />
              <span class="font-weight-bold">Collected All Loan?</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{ plenticreditData.collected === 1 ? "Yes" : "No" }}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Date of Creation</span>
            </th>
            <td class="pb-50">
              {{ plenticreditData.created_at ? new Date(plenticreditData.created_at).toISOString().substr(0,10) : "Unknown" }}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Bank Account Name</span>
            </th>
            <td class="pb-50">
              {{ JSON.parse(plenticreditData.account_payload).account.name }}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Bank Account Type</span>
            </th>
            <td class="pb-50">
              {{ JSON.parse(plenticreditData.account_payload).account.type }}
            </td>
          </tr>

           <tr>
            <th class="pb-50">
              <feather-icon icon="FlagIcon" class="mr-75" />
              <span class="font-weight-bold">Bank Account Number</span>
            </th>
            <td class="pb-50">
              {{ JSON.parse(plenticreditData.account_payload).account.accountNumber }}
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
import jwtHeader from "@core/services/jwt-header";
import axios from "axios";
import { $themeConfig } from "@themeConfig";

export default {
  components: {
    BCard,
    BButton,
    BRow,
    BCol,
    BAvatar,
  },
  props: {
    plenticreditData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveUserRoleVariant } = useResolverList();
    const { baseURL } = $themeConfig.app;
    return {
      resolveUserRoleVariant,
      avatarText,
      baseURL,
      status
    };
  },
  methods:{
     
    approveLoan(item) {
        let isConfirmed = window.confirm(`Approve this Loan request from : ${item.user.first_name + ' ' +item.user.last_name}? `);
        if (isConfirmed) {
          axios.post(this.baseURL + "/user/plenticredit/update-loan", { id: item.id , status: 'approved', earn: true }, { headers: jwtHeader() }).then((res) => {
            alert("Approved Loan successfully.");
           this.$router.push({path: '/plenticreditloan'});
          });
        }
    }

  }
};
</script>

<style>
.bolden{
  font-weight: bold;
}
</style>
