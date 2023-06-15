<template>
    <div>

      <b-form
                class="p-2"
                @submit.prevent="submitLessonnote()"
              >
        <b-card-body>
        
          <b-row>
                  <b-col cols="6" md="12">
                    <b-form-group label="Select Lesson Note" label-for="lessonnote">
                      <b-form-select
                        v-model="filters.lsn"
                        :options="lessonnoteOptions"
                        @change="checkIfRevert"
                      />
                    </b-form-group>
                  </b-col>

                  <b-col
                    cols="12"
                    md="4"
                    class="mb-md-0 mb-2"
                  >
                    <label>Lessonnote File</label>
                    <b-form-file accept=".doc, .docx" ref="fileInput"  v-model="file" placeholder="Choose a Lessonnote file or drop it here..." drop-placeholder="Drop file here..." @change="checkFile" />
                     <b-card-text class="my-1 bolden">
                        Selected file: <strong>{{ file ? file.name : '' }}</strong>
                    </b-card-text>
                  </b-col>
          </b-row> 

          <b-row v-if="selectedLessonnoteOption === true">
                   <b-col cols="4" md="12">
                    <span> <h2> The Lessonnote reverted back with these observations: </h2> </span>
                   </b-col>
                  <b-col cols="4" md="12">
                    <b-form-group label=" Reverted Lesson Note had bad grammar?" label-for="">
                     <b-form-checkbox
                      v-model="filters.revertedGrammar"
                      switch
                     disabled
                    />
                    </b-form-group>
                  </b-col>

                  <b-col cols="4" md="12">
                    <b-form-group label=" Reverted Lesson Note had bad Arrangement? " label-for="">
                     <b-form-checkbox
                      v-model="filters.revertedArrangement"
                      switch
                      disabled
                    />
                    </b-form-group>
                  </b-col>

                  <b-col cols="4" md="12">
                    <b-form-group label=" Reverted Lesson Note no subject matter? " label-for="">
                     <b-form-checkbox
                      v-model="filters.revertedSubject"
                      switch
                      disabled
                    />
                    </b-form-group>
                  </b-col>

          </b-row>
       
          <b-row class="filter-padding">
            <b-col
              cols="12"
              md="12"
              class="mb-md-0 mb-2"
            >
                  <b-button variant="success" class="mr-2 col-md-12" type="submit">
                    Submit Lessonnote
                  </b-button>                  
            </b-col>
          </b-row>

        </b-card-body>

      </b-form>

    </div>
</template>
  
  <script>
  import {
    BCard,
    BRow,
    BCol,
    BModal,
    BFormInput,
    BFormGroup,
    BButton,
    BSpinner,
    BTable,
    BSidebar,
    BCardBody,
    BForm,
    BMedia,
    BAvatar,
    BFormSelect,
    BFormFile,
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
  import axios from "axios";
  import { $themeConfig } from "@themeConfig";
  import router from '@/router'
  import store from '@/store'
  import { ref, onUnmounted ,onMounted, watch } from '@vue/composition-api'
  import formValidation from '@core/comp-functions/forms/form-validation'

  // Notification
  import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
  import jwtHeader from "@core/services/jwt-header";
  import useLessonnoteList from './useLessonnoteList'
  import lessonnoteStoreModule from './lessonnoteStoreModule'
  
  export default {
    components: {
    
      StatisticCardHorizontal,
      BCard,
      BRow,
      BCol,
      BModal,
      BFormInput,
      BFormGroup,
      BButton,
      BSpinner,
      BTable,
      BSidebar,
      BCardBody,
      BForm,
      BFormTags,
      BMedia,
      BAvatar,
      BFormSelect,
      BFormFile,
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

      return {  
         file: null
      }
    },

    computed: {
      selectedLessonnoteOption: function() {
          const lsnoption = this.lessonnoteOptions.find(option => option.value === this.filters.lsn);
          return String(lsnoption.text).toLowerCase().includes("reverted");  
      },
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Lessonnote_APP_STORE_MODULE_NAME = 'app-LessonnoteSubmit';
      const { baseURL } = $themeConfig.app; 

      // Register module
      if (!store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.registerModule(Lessonnote_APP_STORE_MODULE_NAME, lessonnoteStoreModule)
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Lessonnote_APP_STORE_MODULE_NAME)) store.unregisterModule(Lessonnote_APP_STORE_MODULE_NAME)
      })  
      
      const userData = ref({});
      const teacherData = ref({});
      const lessonnoteOptions = ref([  { value: null, text: "Please select Lessonnote you wish to submit" } ]);

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
        fetchLessonnotes,
        
        isLoading,

        handleChange,

        filters,

        LessonnoteItems

      } = useLessonnoteList();

      if( findIfPropisPresent || findIfTeacherisPresent || findIfPrinisPresent ){
          filters.value.teacherId = findIfTeacherisPresent && teacherData.value ? teacherData.value.teaId : null;
         // filters.value.school = findIfPrinisPresent && teacherData.value ? teacherData.value.school.schId : null;
         // filters.value.schoolgroup = (findIfPropisPresent || findIfPrinisPresent || findIfTeacherisPresent)  && teacherData.value ? teacherData.value.school.owner.id : null;
      }

      const getWeeksFromStartDate = (startDate) => {
            const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
            const today = new Date();
            console.log("My date is " + startDate)
            const weeksElapsed = Math.floor((today - startDate) / oneWeekInMilliseconds);
            return weeksElapsed;
      }

      let weekCalculated = getWeeksFromStartDate( new Date( userData.value.school_date ) )

      filters.value.week = weekCalculated

      onMounted(() => {
          fetchLessonnotes();

          setTimeout(() => {
              LessonnoteItems.value.forEach(obj => {
                  let done = obj.submission === null ? "NOT DONE" : obj.revert !== null ? "REVERTED" : "SUBMITTED"
                  let delayed = obj.delaythis === 1 ? done + "-DELAYED" : done;
                  let labeltosee = obj.subject.name + "-" + "Week-" + obj.week + "-" + obj.calendar.session + "-" + delayed
                  let valuetosee =  obj.lessonnoteId 
                  lessonnoteOptions.value.push( { value: valuetosee , text: labeltosee } )
              });
          }, 2000);      
      })
      
      return {       
       
        isLoading,
  
        fetchLessonnotes,
       
        handleChange,
        
        filters,

        LessonnoteItems,

        lessonnoteOptions,

        Lessonnote_APP_STORE_MODULE_NAME,

        baseURL

      }
    },

    methods: {
 
        handleOnChange(e) {
          this.file = e.target.files[0];
          if (this.file && (!this.file.type.startsWith("application/vnd.openxmlformats-officedocument.wordprocessingml.document") !== 0 || !this.file.type.startsWith("application/msword") ) !== 0) { 
            
            alert("This is not a Microsoft Word file."); 
            this.file = null; 
            return; 
          };  
         // this.loadData(this.file);    
        },

        checkFileType(file) {
          const allowedExtensions = ['doc', 'docx'];
          const fileExtension = file.name.split('.').pop().toLowerCase();

          if (!allowedExtensions.includes(fileExtension)) {
            this.$refs.fileInput.reset();
            alert('Please upload a Microsoft Word file.');
            return false;
          }

          return true;
        },

        checkFile(e) {
          this.file = e.target.files[0];
          if (!this.checkFileType(this.file)) {
            this.file = null;
            return;
          }
        },

        submitLessonnote(){
           const sef = this; 
           if (this.filters.lsn !== null && this.filters.lsn !== "" && this.file !== null){  
              this.isLoading = true;

              const fd = new FormData();
              fd.set("lsn", this.file );             
              axios.put( this.baseURL + "/lessonnote/file/" + this.filters.lsn, fd, { headers: jwtHeader() })
                    .then(async function (response) {                    
                      console.log( "Lesonnote File has been uploaded --> " + this.filters.lsn )
              })

             /* axios.put( this.baseURL + "/lessonnote/" + this.filters.lsn, 
                { 
                  lessonnote : { classwork : clswk, homework: hwk, test: tst, midterm: mid, finalexam: final, action: "submit" },
                  management : { quality: 0, sub_perf_classwork: 0, sub_perf_homework: 0, sub_perf_test: 0, management: 0 },
                  activity: { activity: "Expected to approve/query Lessonnote", slip: 0 }
                }
              , { headers: jwtHeader() })
                    .then(function (response) {  

                      sef.$toast({
                                component: ToastificationContent,
                                position: "top-right",
                                props: {
                                  title: 'Thanks, your Lssonnote has been submitted successfully.',
                                  icon: "CoffeeIcon",
                                  variant: "success",
                                  text: `You have successfully submitted lessonnote with name ${ this.file.name }`,
                                },
                              });
                           
                      sef.isLoading = false  
                  
                  window.location.reload();
              })*/
              if (this.selectedLessonnoteOption === false){
                    store.dispatch(`${ this.Lessonnote_APP_STORE_MODULE_NAME }/updateLessonnote`, { 
                      id: Number(sef.filters.lsn),
                      lessonnote : { action: "submit" },
                      management : { quality: 0, sub_perf_classwork: 0, sub_perf_homework: 0, sub_perf_test: 0, management: 0 },
                      activity: { activity: "Expected to approve/query Lessonnote", slip: 0 }
                    })
                      .then(response => {
                                    sef.$toast({
                                      component: ToastificationContent,
                                      position: "top-right",
                                      props: {
                                        title: 'Thanks, your Lessonnote has been submitted successfully.',
                                        icon: "CoffeeIcon",
                                        variant: "success",
                                        text: `You have successfully submitted lessonnote with name ${ this.file.name }`,
                                      },
                                    });                           
                                    sef.isLoading = false; 

                          setTimeout(() => {
                              window.location.reload();
                          },1200);
                        
                    });
              }
              else{

                  store.dispatch(`${ this.Lessonnote_APP_STORE_MODULE_NAME }/updateLessonnote`, { 
                      id: Number(sef.filters.lsn),
                      lessonnote : { action: "resubmit" },                      
                      activity: { action: "re-submitted" }
                    })
                      .then(response => {
                                    sef.$toast({
                                      component: ToastificationContent,
                                      position: "top-right",
                                      props: {
                                        title: 'Thanks, your Lessonnote has been re-submitted successfully.',
                                        icon: "CoffeeIcon",
                                        variant: "success",
                                        text: `You have successfully re-submitted lessonnote with name ${ this.file.name }`,
                                      },
                                    });                           
                                    sef.isLoading = false; 

                          setTimeout(() => {
                              window.location.reload();
                          },1200);
                        
                    });
              }
           }
           else{
              alert("Lessonnote has not been filled completely, complete form before proceeding. ")
           }
        },

        checkIfRevert(lsnchange){
          if (this.selectedLessonnoteOption){
               store.dispatch(`${ this.Lessonnote_APP_STORE_MODULE_NAME }/fetchLessonnoteActivity`, { 
                id: Number(sef.filters.lsn)
              })
                .then(response => {
                      let lsnactivity = response.data.data;   
                      this.filters.revertedGrammar =  lsnactivity.principal_query_grammar === 0 ? true : false;  
                      this.filters.revertedArrangement =  lsnactivity.principal_query_arrangement === 0 ? true : false; 
                      this.filters.revertedSubject =  lsnactivity.principal_query_subject === 0 ? true : false;            
              });
          }
        }

    }


  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }
  </style>
  
  <style lang="scss">
  @import '~@core/scss/vue/libs/vue-select.scss';
  </style>
  