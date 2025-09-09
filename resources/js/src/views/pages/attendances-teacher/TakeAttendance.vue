<template>
    <div>
      <!-- Excused should be a toggle and Added ----- 26th May, 2023 --->
      <b-form
                v-if=" takeAttendance === false "
                class="p-2"
                @submit.prevent="beginAttendance()"
              >

        <b-card-body> 
            <b-row>
                  <b-col cols="12" md="12" v-if=" userData.role === 'teacher' ">
                    <b-form-group label="Select Attendance You Have for Today" label-for="attendance">
                      <b-form-select
                        v-model="filters.attId"
                        :options="attendanceOptions"                       
                      />
                    </b-form-group>
                  </b-col>
            </b-row>        

            <b-row class="filter-padding">
              <b-col
                cols="12"
                md="12"
                class="mb-md-0 mb-2 ml-4 mr-4"
              >
                  <b-button v-if=" filters.attId !== null " variant="info" class="mr-2 col-md-12" type="submit">
                    Take Attendance
                  </b-button>                  
              </b-col>
            </b-row>
        </b-card-body>

      </b-form>

      <div class="row" v-if=" takeAttendance === true "> 
        <b-col lg="8" sm="12">

              <b-table
                        striped
                        responsive
                        class="mb-0"
                        :busy="isLoading"
                        :items="rowcallData"
                        :fields="fields"
                    >
                        <template #table-busy>
                          <div class="text-center text-danger my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            <strong>Loading...</strong>
                          </div>
                        </template>

                        <template #cell(index)="data">
                          {{ data.value }}
                        </template>
                        <template #cell(pupil_fullname)="data">
                          {{ data.value }}
                        </template>
                        <template #cell(status)="data">
                          <b-form-checkbox :checked="data.value" v-model="data.item.status" />
                        </template>
                        <template #cell(remark)="data">
                          <b-form-input :checked="data.value" v-model="data.item.remark" :disabled=" data.item.status === true " />
                        </template>                                             
              </b-table>

              <b-button variant="info" class="mr-2 my-4  col-md-12" @click="submitAttendance">
                  Submit Attendance
              </b-button>  

        </b-col>

        <b-col lg="4" sm="12">
            <fieldset> 
              <b-card
                no-body
                class="card-statistics"
              >
                <b-card-header>
                  <b-card-title>Snap Picture</b-card-title>
                </b-card-header>

                <b-card-body >
                  <b-row>

                    <b-col
                      lg="12"
                      sm="6"
                    >
                      
                      <div class="web-camera-container">

                        <div class="camera-button">
                            <button type="button" class="button is-rounded" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                              <span v-if="!isCameraOpen">Open Camera</span>
                              <span v-else>Close Camera</span>
                          </button>
                        </div>
                        
                        <div v-show="isCameraOpen && isLoading" class="camera-loading">
                          <ul class="loader-circle">
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                        
                        <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
                          
                         <!-- <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>-->

                          <video v-show="!isPhotoTaken" ref="camera" :width="300" :height="210" autoplay></video>
                          
                          <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="300" :height="210"></canvas>

                        </div>
                        
                        <!--<div v-if="isCameraOpen && !isLoading" class="camera-shoot"> -->
                          <button type="button" class="button camera-shoot" @click="takePhoto" v-if="isCameraOpen && !isLoading">
                           <!-- <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png"> -->
                            <span v-if="!isPhotoTaken"> Take Picture </span>
                            <span v-if="isPhotoTaken"> Re-Take Picture </span>
                          </button>
                        <!--</div>-->
                        
                        <!--<div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
                          <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                            Download
                          </a>
                        </div>-->

                      </div>

                    </b-col>
                  </b-row>
                </b-card-body>

              </b-card>
            </fieldset>
        </b-col>
        
      </div>

    </div>
</template>
  
<script>
  import {
    BCardHeader, 
    BCardBody,
    BCard,
    BCardTitle,
    BRow,
    BCol,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BForm,
    BFormText,
    BMedia,
    BAvatar,
    BFormSelect,
    BFormTags,
    BCardText,
    BFormDatepicker,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BFormCheckbox
  } from 'bootstrap-vue';
  import StatisticCardHorizontal from "@core/components/statistics-cards/StatisticCardHorizontal.vue";
  import vSelect from 'vue-select'
  import router from '@/router'
  import axios from "axios";
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import { avatarText } from '@core/utils/filter'
  import formValidation from '@core/comp-functions/forms/form-validation'
    import { $themeConfig } from "@themeConfig";
  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import jwtHeader from "@core/services/jwt-header";
  import useAttendanceList from './useAttendanceList'
  import attendanceStoreModule from './attendanceStoreModule'


  export default {
    components: {    
      StatisticCardHorizontal,
      BCardHeader, 
      BCardBody,
      BCard,
      BCardTitle,
      BRow,
      BCol,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BForm,
      BFormText,
      BFormTags,
      BMedia,
      BAvatar,
      BFormSelect,
      BCardText,
      BFormDatepicker,
      BLink,
      BBadge,
      BDropdown,
      BDropdownItem,
      BPagination,
      BFormCheckbox,
      vSelect
    },

    data() {
     
        let takeAttendance = false;
        let rowcallData = []


        return {  
          takeAttendance,
          imageFile: null,
          rowcallData,
          isCameraOpen: false,
          isPhotoTaken: false,
          isShotPhoto: false,
          isLoading: false,
          link: '#',
          fields: [{
                key: "pupil_fullname",
                label: "Student Name"
              },
              {
                key: "status",
                label: "Present?"
              },
              {
                key: "remark",
                label: "Remark"
              }
            ]
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Attendance_APP_STORE_MODULE_NAME = 'app-AttendanceTake';
      const LATE_TIME_IN_MINUTES = 10;
      const { baseURL } = $themeConfig.app; 

      // Register module
      if (!store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.registerModule(Attendance_APP_STORE_MODULE_NAME, attendanceStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Attendance_APP_STORE_MODULE_NAME)) store.unregisterModule(Attendance_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
    //  const camera = ref(null);
      const teacherData = ref({});
      const dayData = ref([ "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday", "Saturday" ]);
      const attendanceOptions = ref([  { value: null, text: "Please select Attendance for you" } ]);
 
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }

      const storedItems2 = JSON.parse(localStorage.getItem('teacherData'));
      if (storedItems2){
        teacherData.value = storedItems2;
      }

      const findIfPropisPresent = ( userData.value.role === "proprietor"  );
      const findIfTeacherisPresent = ( userData.value.role === "teacher" );
      const findIfPrinisPresent = ( userData.value.role === "principal" );  
      
      const {
        fetchAttendances,
        
        isLoading,
        
        handleChange,

        filters,

        attendanceItems

      } = useAttendanceList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
          filters.value.schoolId = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
          filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent) && teacherData.value ? teacherData.value.school.owner.id : null;
      }

      const isWithinOneHour = (date1, date2) => {
        if (date2 < date1) {
          return false;
        }  
        let diffInMilliseconds = Math.round(date2 - date1);
        console.log("DiffinMilliseconds within 1 hour: "+ diffInMilliseconds);
        return diffInMilliseconds <= 7200000; 
      }

      const isWithinTenMinutes = (date1, date2) => {
        if (date2 < date1) {
          return false;
        }  
        let diffInMilliseconds = Math.round(date2 - date1);
        return diffInMilliseconds > 300000 && diffInMilliseconds <= 600000; // 600000 milliseconds = 10 minutes
      }

      //
       const isWithinFiveMinutes = (date1, date2) => {
        if (date2 < date1) {
          return false;
        }  
        let diffInMilliseconds = Math.round(date2 - date1);        
        return diffInMilliseconds <= 300000; // five minutes
      }

       // Watch for changes in attendanceItems
      watch(attendanceItems, (newAttendances) => {
        if (newAttendances && newAttendances.length > 0) {
          // Reset options to initial state
          attendanceOptions.value = [{ value: null, text: "Please select Attendance for you" }];
          
          // Add new options
          newAttendances.forEach(obj => {
            const done = obj.done === 0 ? "NOT DONE" : "CONCLUDED";
            let labeltosee = obj.timetable.subject.name + "-" + obj.timetable.class_stream.title + obj.timetable.class_stream.ext + "-" + obj.timetable.time_of + "-" + new String(dayData.value[ Number(obj.timetable.day_of) - 1 ]).toUpperCase() + "-" + done  
            let valuetosee = obj.timetable.class_stream.clsId + "!" + obj.attId + "!" + obj.timetable.class_stream.title + "!" + obj.timetable.time_of +  "!"  + obj._date
            attendanceOptions.value.push( { value: valuetosee , text: labeltosee } )  
          });
        }
      }, { immediate: true });

      onMounted(async () => {
          await fetchAttendances();     
      })
      
      return {
        
        isLoading,
  
        fetchAttendances,

        handleChange,

        isWithinOneHour,

        isWithinTenMinutes,

        isWithinFiveMinutes,
        
        filters,
       
        attendanceItems,

        userData,

        attendanceOptions,

        Attendance_APP_STORE_MODULE_NAME,

        LATE_TIME_IN_MINUTES,

        baseURL

      }
    },

    methods: {   

      submitAttendance(){
          const sef = this; 
          this.isLoading = true
          let attId = String(this.filters.attId).split("!");

          let splitTime = String( attId[3] ).split(":"); // Timing from Database
          let targetTime = new Date();
          targetTime.setHours( Number(splitTime[0]), splitTime[1] == "00" ? 0 : Number(splitTime[1]), splitTime[2] == "00" ? 0 : Number(splitTime[2]) );       

          let the_timing =  this.isWithinFiveMinutes( targetTime, new Date() ) ? 100 : this.isWithinTenMinutes( targetTime, new Date() ) ? 50 : 0; 
          console.log("Target Time: " + targetTime );
          console.log("Real Time: " + new Date() );

          let the_completeness = (this.imageFile !== null) ? 100 : 50;

          let newRowData = this.rowcallData.map((row) => { 
            row.status = row.status === true ? 1 : 0;
            return row;  
          })

          let the_classperf = (newRowData.filter((row) => row.status === 1 ).length / newRowData.length ) * 100 ;

          if( this.imageFile !== null ){
              const fd = new FormData();
                fd.set("att", this.imageFile );             
                axios.put( this.baseURL + "/attendance/file/" + attId[1], fd, { headers: jwtHeader() })
                .then(async function (response) {                    
                    console.log( "Attendance File has been uploaded --> " + attId[1] );
                })
          }          
         
          setTimeout(() => {      
              store.dispatch(`${ this.Attendance_APP_STORE_MODULE_NAME }/updateAttendance`, { 
              attendance : { period : "", done: the_timing === 100 ? 1 : the_timing === 50 ? 2 : the_timing === 0 ? -1 : 0 },
              id: Number(attId[1]),              
              management : { timing: the_timing, class_perf: the_classperf, completeness: the_completeness, score:  Math.round( (the_timing + the_completeness) / 2 ) , action: 0 },
              activity: { activity: "Expected to approve/query Attendance", slip: 0 }
              })
              .then(response => { 
                  console.log("Attendance 1st Phase done: " + response.data.success );                         
              });
          },1200);
         

          store.dispatch(`${ this.Attendance_APP_STORE_MODULE_NAME }/updateAttendanceRowcall`, newRowData )
            .then(response => { 
            //  let myval = response.data.data;
              let className = String(this.filters.attId).split("!");
             
                          sef.$toast({
                            component: ToastificationContent,
                            position: "top-right",
                            props: {
                              title: 'Thanks, your Attendance has been taken successfully.',
                              icon: "CoffeeIcon",
                              variant: "success",
                              text: `You have successfully submitted attendance with Classname - ${ className[2] }`,
                            },
                          });                      

              setTimeout(() => {
                        window.location.reload();
                    },1800);
                    
              sef.isLoading = false 
              sef.takeAttendance = false;           
          });

      },
      
      beginAttendance() {      
        const sef = this; 
        if (this.filters.attId !== null && this.filters.attId !== ""){    

           //
            let classId = String(this.filters.attId).split("!");

            let timeOfAtt = classId[3];  
            let dateOfAtt = classId[4]; 
            let splitTime = String( timeOfAtt ).split(":");

            let targetTime = new Date( dateOfAtt );
            targetTime.setHours( Number(splitTime[0]), splitTime[1] == "00" ? 0 : Number(splitTime[1]), splitTime[2] == "00" ? 0 : Number(splitTime[2]) );

            console.log("Target Time: " + targetTime );
            console.log("Real Time: " + new Date() );
          
            if ( this.isWithinOneHour( targetTime, new Date() ) ) { 

                this.takeAttendance = true;
                this.isLoading = true
                //im using only Class ID
                store.dispatch(`${ this.Attendance_APP_STORE_MODULE_NAME }/fetchEnrollments`, { id : Number(classId[0]) })
                .then(response => { 
                  let myval = response.data.data;
                  myval.forEach( (obj,i) => {
                    let index = i;
                    sef.rowcallData.push( { index: Number(index+1) , pupil_fullname: obj.student.name, status: true, remark: "", stu_id: obj.student.pupId, att_id: Number(classId[1])  } )
                  }); 
                  sef.isLoading = false            
                });  

            }
            
            else{
              alert("Sorry 🙁, you do not have any class this period!! ")
            }
                   
        }
        else{
            alert("You have not selected an Attendance!")
        }
      },

     toggleCamera() {
        if(this.isCameraOpen) {
          this.isCameraOpen = false;
          this.isPhotoTaken = false;
          this.isShotPhoto = false;
          this.stopCameraStream();
          this.imageFile = null;
        } else {
          this.isCameraOpen = true;
          this.createCameraElement();
        }
     },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});

			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
				})
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
			});

    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
       this.isLoading = true;
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
        this.isLoading = false;
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 300, 210);

      const imageDataURL = document.getElementById("photoTaken").toDataURL("image/jpeg");
      const blobBin = window.atob(imageDataURL.split(",")[1]);
      const array = [];
      for (let i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
      }
      const blob = new Blob([new Uint8Array(array)], { type: "image/jpeg" });
      const myFile = new File([blob], 'attendance.jpg', { type: blob.type });
      
      this.imageFile = myFile;

      this.isLoading = false;
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    }

    }

  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  .web-camera-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;

  
  .camera-button {
    margin-bottom: 2rem;
  }
  
  .camera-box {    
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;
      
      &.flash {
        opacity: 1;
      }
    }
  }
  
  .camera-shoot {
    margin: 1rem 0;
    
    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      
      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }
  
  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;
    
    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }
    
    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;
      
      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;
        
        &:nth-child(2) {
          animation-delay: .2s;
        }
        
        &:nth-child(3) {
          animation-delay: .4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1
    }
    50% {
      opacity: .4
    }
    100% {
      opacity: 1
    }
  }
}

  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  