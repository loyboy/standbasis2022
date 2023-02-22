<template>
    <b-card>
  
      <b-row>
  
        <!-- User Info: Left col -->
        <b-col
          cols="12"
          xl="6"
          class="d-flex justify-content-between flex-column"
        >
          <!-- User Avatar & Action Buttons -->
          <div class="d-flex justify-content-start">
            <b-avatar
              :src="schoolgroupData.logo"
              :text="avatarText(schoolgroupData.name)"
             
              size="104px"
              rounded
            />
            <div class="d-flex flex-column ml-1">
              <div class="mb-1">
                <h4 class="mb-0">
                  {{ schoolgroupData.name }}
                </h4>
              
              </div>
              <div class="d-flex flex-wrap">
                <b-button
                  :to="{ name: 'groupschools-home-edit', params: { id: schoolgroupData.id } }"
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
                  icon="LayoutIcon"
                  size="20"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                  {{ schCount  }}
                </h5>
                <small>Schools</small>
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

            <div class="d-flex align-items-center">
              <b-avatar
                variant="light-danger"
                rounded
              >
                <feather-icon
                  icon="SmileIcon"
                  size="18"
                />
              </b-avatar>
              <div class="ml-1">
                <h5 class="mb-0">
                  {{ stuCount }}
                </h5>
                <small>Students</small>
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
                {{ schoolgroupData.name }}
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
                {{ schoolgroupData.status === 1 ? "Active" : "Inactive" }}
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
  
  export default {
    components: {
      BCard, BButton, BRow, BCol, BAvatar,
    },
    props: {
      schoolgroupData: {
        type: Object,
        required: true,
      },
      tCount:{
        type: Number,
        required: false,
      },
      schCount:{
        type: Number,
        required: false,
      },
      stuCount:{
        type: Number,
        required: false,
      }
    },
    setup() {
      return {
        avatarText
      }
    },
  }
  </script>
  
  <style>
  
  </style>
  