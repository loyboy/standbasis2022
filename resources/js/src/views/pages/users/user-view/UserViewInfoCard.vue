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
                <span class="card-text"> <b> {{ userData.email }} </b> </span>
              </div>

              <div class="d-flex flex-wrap" v-if=" userData.role  === 'proprietor' ||  userData.role  === 'principal' ">

                <b-button
                  :to="{ name: 'users-home-edit', params: { id: userData.timeId } }"
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
                <span class="font-weight-bold">User Name</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ userData.username }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Real Name</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ userData.name }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">User Role</span>
              </th>
              <td class="pb-50 text-capitalize light-primary">
                {{ userData.role }}
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
                {{ userData.status === 1 ? "Active" : userData.status === -1 ? "Deleted" : "Inactive" }}
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
      userData: {
        type: Object,
        required: true,
      }
    },
    setup() {
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
  