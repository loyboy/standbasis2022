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
                <span class="card-text"> <b> {{ attendanceData.pupil_fullname }} </b> || <b> {{ attendanceData.attendance.timetable.subject.name }} </b> || <b> {{ attendanceData.attendance.timetable.class_stream.title }} </b>    </span>
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
                {{ attendanceData.attendance.teacher.school.name }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Date of Attendance</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ String( attendanceData.created_at ).replace(".000+00:00","")  }}
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
                {{ attendanceData.attendance.calendar.term === 1 ? "1st Term" : attendanceData.attendance.calendar.term === 2 ? "2nd Term" : attendanceData.attendance.calendar.term === 3 ? "3rd Term" : ""   }}
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
                {{ attendanceData.attendance.calendar.session }}
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
                {{ attendanceData.status === 1 ? "Present" : attendanceData.status === 2 ? "Excused" : "Absent" }}
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
      attendanceData: {
        type: Object,
        required: true,
      },
    },
    setup() {
    //  const { resolveUserRoleVariant } = useUsersList()
      return {
        avatarText
      }
    },
  }
  </script>
  
  <style>
  
  </style>
  