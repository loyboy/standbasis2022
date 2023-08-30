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
              :src="new String(baseURL).replace('/api','') + schoolData.logoPath"
              :text="avatarText(schoolData.name)"             
              size="104px" 
              rounded
            />
            <div class="d-flex flex-column ml-1">
              <div class="mb-1">
                <h4 class="mb-0">
                  {{ schoolData.name }}
                </h4>
                <span class="card-text">{{ schoolData.email }}</span>
              </div>
              <div class="d-flex flex-wrap" v-if=" userData.role  === 'admin' ">
                <b-button
                  :to="{ name: 'schools-home-edit', params: { id: schoolData.schId } }"
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
                variant="light-success"
                rounded
              >
                <feather-icon
                  icon="SmileIcon"
                  size="20"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                  {{ sCount }}
                </h5>
                <small>Students</small>
              </div>
            </div>
  
            <div class="d-flex align-items-center">
              <b-avatar
                variant="light-info"
                rounded
              >
                <feather-icon
                  icon="LayersIcon"
                  size="18"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                  {{ tCount }}
                </h5>
                <small>Teachers</small>
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
                <span class="font-weight-bold">Group of School</span>
              </th>
              <td class="pb-50">
                {{ schoolData.owner.name }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="CheckIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Gender of Students</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ schoolData.gender }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Faith</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ schoolData.faith }}
              </td>
            </tr>
            <tr>
              <th class="pb-50">
                <feather-icon
                  icon="KeyIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Operator</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ schoolData.operator }}
              </td>
            </tr>
            <tr>
              <th>
                <feather-icon
                  icon="PhoneIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">SRI Enabled?</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ schoolData.sri === 1 ? "Yes" : "No" }}
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
  import { $themeConfig } from '@themeConfig';
  import { ref } from '@vue/composition-api';
  
  export default {
    components: {
      BCard, BButton, BRow, BCol, BAvatar
    },
    props: {
      schoolData: {
        type: Object,
        required: true,
      },
      tCount:{
        type: Number,
        required: false,
      },
      sCount:{
        type: Number,
        required: false,
      }
    },
    setup() {
    //  const { resolveUserRoleVariant } = useUsersList()
      const { baseURL } = $themeConfig.app;
      const userData = ref({});
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }
      return {
        avatarText,
        baseURL,
        userData
      }
    },
  }
  </script>
  