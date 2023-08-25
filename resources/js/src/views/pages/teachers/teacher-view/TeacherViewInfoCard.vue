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
              :src="new String(baseURL).replace('/api','') + teacherData.photoPath"
              :text="avatarText(teacherData.fname + teacherData.lname)"
             
              size="104px"
              rounded
            />
            <div class="d-flex flex-column ml-1">
              <div class="mb-1">
                <h4 class="mb-0">
                  {{ teacherData.fname }} {{ teacherData.lname }}
                </h4>
                <span class="card-text">{{ teacherData.email }}</span>
              </div>
              <div class="d-flex flex-wrap" v-if=" userData.role  === 'admin' ">
                <b-button
                  :to="{ name: 'teachers-home-edit', params: { id: teacherData.teaId } }"
                 
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
  
          <!-- User Stats -->
          <div class="d-flex align-items-center mt-2">

            <div class="d-flex align-items-center mr-2">
              <b-avatar
                variant="light-warning"
                rounded
              >
                <feather-icon
                  icon="SmileIcon"
                  size="20"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                    {{ classTaught }}
                </h5>
                <small>Classes Taught</small>
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
                  icon="FileTextIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Course Type</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ teacherData.coursetype }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="CheckIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Gender of Teacher</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ teacherData.gender === 'M' ? "Male" : "Female" }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Bias</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ teacherData.bias }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Experience</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ teacherData.experience }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Designation</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ teacherData.office }}
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
                {{ teacherData.status === 1 ? "Active" : "Inactive" }}
              </td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-card>
  </template>
  
  <script>
  import { 
    BCard, BButton, BAvatar, BRow, BCol
  } from 'bootstrap-vue'
  import { avatarText } from '@core/utils/filter'
  import { $themeConfig } from '@themeConfig'
  import { ref } from '@vue/composition-api'

  export default {
    components: {
      BCard, BButton, BRow, BCol, BAvatar
    },
    props: {
      teacherData: {
        type: Object,
        required: true
      },
      classTaught:{
        type: Number,
        required: false
      }
    },
    setup() {
      const { baseURL } = $themeConfig.app;
      const userData = ref({});
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }
      return {
        baseURL,
        avatarText,
        userData
      }
    },
  }
  </script>
  
  <style>
  
  </style>
  