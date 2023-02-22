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

            <div class="d-flex flex-column ml-1">
              <div class="mb-1">              
                <span class="card-text"> <b> {{ lessonnoteData.teacher.fname }} </b> || <b> {{ lessonnoteData.subject.name }} </b> || <b> {{ lessonnoteData.class_index === 7 ? "JSS1" : lessonnoteData.class_index === 8 ? "JSS2" : lessonnoteData.class_index === 9 ? "JSS3" : lessonnoteData.class_index === 10 ? "SS1" : lessonnoteData.class_index === 11 ? "SS2" : lessonnoteData.class_index === 12 ? "SS3" : "Nil" }} </b>    </span>
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
                {{ lessonnoteData.teacher.school.name }}
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
                {{ lessonnoteData.calendar.term === 1 ? "1st Term" : lessonnoteData.calendar.term === 2 ? "2nd Term" : lessonnoteData.calendar.term === 3 ? "3rd Term" : ""   }}
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
                {{ lessonnoteData.calendar.session }}
              </td>
            </tr>

            <tr>
              <th>
                <feather-icon
                  icon="StarIcon"
                  class="mr-75"
                />
                <span class="font-weight-bold">Title</span>
              </th>
              <td class="pb-50 text-capitalize">
                {{ lessonnoteData.title}}
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
      lessonnoteData: {
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
  