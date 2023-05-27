<template>
  <section id="dashboard-ecommerce">
       <b-row class="match-height">
      <b-col lg="12">
        <template>
          <b-row class="h-100 p-4">
            
            <!-- Bar Chart - Orders -->
            <b-col lg="4" md="6" cols="12" class="mb-2" >
                <statistic-card-horizontal
                    icon="BookOpenIcon"
                    color="primary"
                    :statistic=" 10 "
                    statistic-title="Capacity Development"
                    />

                <span> <a href="#"> Click Here </a> </span>
            </b-col>

            <!--/ Bar Chart - Orders -->
            <b-col lg="4" md="6" cols="12" class="mb-2">
                    <statistic-card-horizontal
                        icon="BriefcaseIcon"
                        color="secondary"
                        :statistic=" 4"
                        statistic-title="Adminsitration Resource"
                        />

                    <span> <a href="#"> Click Here </a> </span>
            </b-col>

            <b-col lg="4" md="6" cols="12" class="mb-2">
                 <statistic-card-horizontal
                        icon="FileIcon"
                        color="warning"
                        :statistic=" 120 "
                        statistic-title="Teaching Resource"
                        />

                    <span> <a href="#"> Click Here </a> </span>
            </b-col>

            <b-col lg="4" md="6" cols="12" >
                 <statistic-card-horizontal
                        icon="ToolIcon"
                        color="warning"
                        :statistic=" 32 "
                        statistic-title="Bullentin"
                        />

                    <span class="flex"> <a href="#"> Click Here </a> </span>
            </b-col>

          </b-row>
        </template>
      </b-col> 
    </b-row>
  </section>
</template>

  <script>
  import { BRow, BCol } from "bootstrap-vue";
 
  import EventList from '../dashboard/EventList.vue'
  import flatPickr from "vue-flatpickr-component";
  import { Skeleton } from "vue-loading-skeleton";
  import store from '@/store'
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";

  import useCapacity from './useCapacity'
  import capacityStoreModule from './capacityStoreModule'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'

  export default {
    components: {
      BRow,
      BCol,
      Skeleton,
      flatPickr,
      StatisticCardHorizontal,
      EventList
    },
    data() {
      return {

      }
    },
    mounted() {
   
    }, 

    created() {
      
    },

    setup() {
        const Home_APP_STORE_MODULE_NAME = 'app-CapacityHome';

        // Register module
        if (!store.hasModule(Home_APP_STORE_MODULE_NAME)) store.registerModule(Home_APP_STORE_MODULE_NAME, capacityStoreModule)
    
        // UnRegister on leave
        onUnmounted(() => {
          if (store.hasModule(Home_APP_STORE_MODULE_NAME)) store.unregisterModule(Home_APP_STORE_MODULE_NAME)
        })  
        
        const userData = ref({});

        const storedItems = JSON.parse(localStorage.getItem('userData'));
        if (storedItems){
          userData.value = storedItems;
        }

        const findIfPropisPresent = ( userData.value.role === "proprietor"  );      
        const findIfPrinisPresent = ( userData.value.role === "principal" ); 
        const findIfTeacherisPresent = ( userData.value.role === "teacher" );

        const {         
         
        } = useCapacity();      

        onMounted(async () => {
       
        })

        return {
            userData
        }
    }


  };
  </script>

  <style lang="scss">
  @import "~@core/scss/vue/pages/dashboard-ecommerce.scss";
  @import "~@core/scss/vue/libs/chart-apex.scss";
  @import "~@core/scss/vue/libs/vue-good-table.scss";
  @import "~@core/scss/vue/libs/vue-flatpicker.scss";
  </style>