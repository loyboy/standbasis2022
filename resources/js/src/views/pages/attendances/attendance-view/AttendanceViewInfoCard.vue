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
                <span class="card-text"> <b> {{ attendanceData.timetable.tea_name }} </b> || <b> {{ attendanceData.timetable.sub_name }} </b> || <b> {{ attendanceData.timetable.class_name }} </b>    </span>
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
                {{ attendanceData.teacher.school.name }}
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
                {{ attendanceData.calendar.term === 1 ? "1st Term" : attendanceData.calendar.term === 2 ? "2nd Term" : attendanceData.calendar.term === 3 ? "3rd Term" : ""   }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Session</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ attendanceData.calendar.session }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Time Taken</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ String(attendanceData._date).replace(".000+00:00","") }}  
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75" 
                />
                <span class="font-weight-bold">Picture Taken</span>
              </th>
              <td>               
                  <b-avatar
                    ref="previewEl"
                    :src="new String(baseURL).replace('/api','') + attendanceData.photoPath"
                    :text="avatarText(attendanceData._desc)"
                    size="200px"
                    rounded
                  />       
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
                {{ attendanceData.done === 1 ? "Done" : attendanceData.done === -1 ? "Voided" : attendanceData.done === 2 ? "Late" : "Not Done" }}
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
  import { $themeConfig } from "@themeConfig";
  
  export default {
    components: {
      BCard, BButton, BRow, BCol, BAvatar
    },
    props: {
      attendanceData: {
        type: Object,
        required: true
      },
    },
    setup() {
      const { baseURL } = $themeConfig.app; 
      return {
        avatarText,
        baseURL
      }
    },
  }
  </script>
  
  <style>
  
  </style>
  