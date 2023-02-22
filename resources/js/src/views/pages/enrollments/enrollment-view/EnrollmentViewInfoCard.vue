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
              :src="enrollmentData.student.logo"
              :text="avatarText(enrollmentData.student.name)"             
              size="104px"
              rounded
            />
            <div class="d-flex flex-column ml-1">
              <div class="mb-1">
                <h4 class="mb-0">
                  {{ enrollmentData.student.name }}
                </h4>
                <span class="card-text">{{ enrollmentData.student.regNo }}</span>
              </div>
              <div class="d-flex flex-wrap" v-if=" userData.role  === 'proprietor' ||  userData.role  === 'principal'  ">
                <b-button
                  :to="{ name: 'enrollments-home-edit', params: { id: enrollmentData.enrolId } }"
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
              <th class="pb-50">
                <feather-icon
                  icon="UserIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Class of Student</span>
              </th>
              <td class="pb-50">
                {{ enrollmentData.classstream.title + " " + enrollmentData.classstream.ext }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="CheckIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Gender of Student</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ enrollmentData.student.gender === "M" ? "Male" : "Female" }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Status</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ enrollmentData.student.status === 1 ? "Active" : "Inactive" }}
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
      enrollmentData: {
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
  