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

            <div class="d-flex flex-column ml-1">
              <div class="mb-1">              
                <span class="card-text"> <b> {{ calendarData.session }} </b> </span>
              </div>

              <div class="d-flex flex-wrap" v-if=" userData.role  === 'admin' ">

                <b-button
                  :to="{ name: 'calendars-home-edit', params: { id: calendarData.calendarId } }"
                  variant="success"
                >
                  Edit
                </b-button>

                <b-button
                  variant="outline-danger"
                  class="ml-1"                  
                >
                  Delete
                </b-button>
                
              </div>
            </div>

          </div>
        </b-col>
  
        <!-- Right Col: Table -->
        <b-col
          cols="12"
          xl="6"
        >
          <table class="mt-2 mt-xl-0 w-100">
                 
            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">School Name</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ calendarData.school.name }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Term</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ calendarData.term === 1 ? "1st Term" : calendarData.term === 2 ? "2nd Term" : calendarData.term === 3 ? "3rd Term" : ""   }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Status</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ calendarData.status === 1 ? "Active" : "Inactive" }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Start Time</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ calendarData.startdate !== null ? calendarData.startdate : "Not available" }}
              </td>
            </tr>

             <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Start Time</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ calendarData.enddate !== null ? calendarData.enddate : "Not available" }}
              </td>
            </tr>

          </table>

        </b-col>

      </b-row>

    </b-card>
  </template>
  
  <script>
  import {
    BCard, BButton, BAvatar, BRow, BCol,
  } from 'bootstrap-vue'
  import { avatarText } from '@core/utils/filter'
  import { ref } from '@vue/composition-api'
  
  export default {
    components: {
      BCard, BButton, BRow, BCol, BAvatar,
    },
    props: {
      calendarData: {
        type: Object,
        required: true,
      },
    },
    setup() {
    //  const { resolveUserRoleVariant } = useUsersList()
      const userData = ref({});
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }
      return {
        avatarText,
        userData
      }
    },
  }
  </script>
  
  <style>
  
  </style>
  