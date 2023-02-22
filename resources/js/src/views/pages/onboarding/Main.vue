<template>

  <div> 
   <b-row class="d-flex justify-content-center mt-1">
      <b-link class="brand-logo">
          <img
            :src=" require('@/assets/images/logo/standbasis.png')"
            alt="Standbasis"
            class=""
            style="width: 250px; height: 70px"
          />
      </b-link>
    </b-row>
    <form-wizard
      ref="refFormWizard"
      color="#7367F0"
      :title="null"
      :subtitle="null" 
      class="steps-transparent margin-add"   
    >
     
      
      <!-- account detail tab  class="steps-transparent margin-add" -->
      <tab-content
        title="School Details"
        icon="feather icon-file-text"
        :before-change="validateSchoolAsync"
      >
        <school-details @next-step="formWizardNextStep" :school-details="schoolDetails" />
        
      </tab-content>

      <tab-content
        title="Teacher Details"
        icon="feather icon-upload-cloud"
        :before-change="validateTeacherAsync"
      >
        <teacher-details @next-step="formWizardNextStep" :teacher-details="teacherDetails" />
      </tab-content>

      <tab-content
        title="Classroom Details"
        icon="feather icon-upload-cloud"
        :before-change="validateClassroomAsync"
      >
        <classroom-details @next-step="formWizardNextStep" :classroom-details="classroomDetails"  />
      </tab-content>

      <tab-content
        title="Student Details"
        icon="feather icon-upload-cloud"
        :before-change="validateStudentAsync"
      >
        <student-details @next-step="formWizardNextStep" :student-details="studentDetails"  />
      </tab-content>

      <tab-content
        title="Timetable Details"
        icon="feather icon-upload-cloud"
        :before-change="validateTimetableAsync"
      >
        <timetable-details @next-step="formWizardNextStep" :timetable-details="timetableDetails"  />
      </tab-content>

      <tab-content
        title="Account Details"
        icon="feather icon-upload-cloud"
        :before-change="validateAccountAsync"
      >
        <account-details @next-step="formWizardNextStep" :account-details="accountDetails"  />
      </tab-content>

      <tab-content
        title="Finish Onboarding"
        icon="feather icon-upload-cloud"
      >
        <finish @next-step="formWizardNextStep" />
      </tab-content>

      <div v-if="errorMsg !== null">
          <span class="error">{{ errorMsg }}</span>
      </div>
      <!-- address -->
    <!-- <tab-content
        title="Address"
        icon="feather icon-home"
      >
        <e-commerce-checkout-step-address
          :address-details="checkoutDetails.address"
          @next-step="formWizardNextStep"
        />
      </tab-content>-->

      <!-- social link -->

      <!-- <tab-content
        title="Payment"
        icon="feather icon-credit-card"
      >
        <e-commerce-checkout-step-payment
          :payment-details="checkoutDetails.payment"
          @next-step="formWizardNextStep"
        />
      </tab-content>-->

    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import { ref } from '@vue/composition-api'
import { useRouter } from '@core/utils/utils'
import SchoolDetails from './SchoolDetails.vue'
import TeacherDetails from './TeacherDetails.vue'
import ClassroomDetails from './ClassroomDetails.vue'
import StudentDetails from './StudentDetails.vue'
import TimetableDetails from './TimetableDetails.vue'
import AccountDetails from './AccountDetails.vue'
import Finish from './Finish.vue'
import axios from "axios";
import { getCurrentInstance,onMounted } from 'vue'
import { $themeConfig } from "@themeConfig";
// Notification
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import {
  BLink
} from "bootstrap-vue";

export default {
  components: {
    FormWizard,
    TabContent,
    BLink,
    SchoolDetails,
    TeacherDetails,
    ClassroomDetails,
    StudentDetails,
    TimetableDetails,
    AccountDetails,
    Finish
  },
  data() {
    return {
      errorMsg: null,
      schoolDetails:{
          schName: "",
          schType: "",
          schOwner: 0,
          schState: "",
          schLga: "",
          schTown: "",
          schFaith:"",
          schOperator: "",
          schGender: "",
          schResidence: "",
          schLocation: "",
          schPopulation: "",
          schEmail: "",
          schPhone: "",
          schFilled: false
      },
      teacherDetails:{
        teaData: [],
        teaFileUpload: null,
        teaFilled: false
      },
      classroomDetails:{
        classData: [],
        classFileUpload: null,
        classroomFilled: false
      },
      studentDetails:{
        studentData: [],
        studentFileUpload: null,
        studentFilled: false
      },
      timetableDetails:{
        timetableData: [],
        timetableFileUpload: null,
        timetableFilled: false
      },
      accountDetails:{
        acctName: "",
        acctEmail: "",
        acctUsername: "",
        acctPassword: "",
        accountFilled: false
      },
      finish: false
    }
  },

  methods: {

    validateSchoolAsync(){
    
        if (this.schoolDetails.schFilled == false){
          this.errorMsg = "Please ensure you fill all fields in School data before proceeding to the next step";
          return false;
        }
        else {
          this.errorMsg = null;
          return true;
        }
      
    },

    validateTeacherAsync(){
    
      if (this.teacherDetails.teaFilled == false){
        this.errorMsg = "Please ensure you fill all fields in Teacher data before proceeding to the next step";
        return false;
      }
      else {
        this.errorMsg = null;
        return true;
      }
  
    },

    validateClassroomAsync(){
    
      if (this.classroomDetails.classroomFilled == false){
        this.errorMsg = "Please ensure you fill all fields in Classroom data before proceeding to the next step";
        return false;
      }
      else {
        this.errorMsg = null;
        return true;
      }

    },

    validateStudentAsync(){
    
      if (this.studentDetails.studentFilled == false){
        this.errorMsg = "Please ensure you fill all fields in Student data before proceeding to the next step ";
        return false;
      }
      else {
        this.errorMsg = null;
        return true;
      }

    },

    validateTimetableAsync(){
    
      if (this.timetableDetails.timetableFilled == false){
        this.errorMsg = "Please ensure you fill all fields in Timetable data before proceeding to the next step ";
        return false;
      }
      else {
        this.errorMsg = null;
        return true;
      }

    },

    validateAccountAsync(){
    
      if (this.accountDetails.accountFilled == false){
        this.errorMsg = "Please ensure you fill all fields in Account data before proceeding to the next step ";
        return false;
      }
      else {
        this.errorMsg = null;
        return true;
      }

    },

   formWizardNextStep (name) {
      
      if (name === "sch-details"){
        this.schoolDetails.schFilled = true;
        console.log( "School details: " + JSON.stringify(this.schoolDetails) )
        this.refFormWizard.nextTab();
      }
      else if (name === "teacher-details"){
        this.teacherDetails.teaFilled = true;
        console.log( "Teacher details: " + JSON.stringify(this.teacherDetails) )
        this.refFormWizard.nextTab();
      }
      else if (name === "classroom-details"){
        this.classroomDetails.classroomFilled = true;
        console.log( "Classroom details: " + JSON.stringify(this.classroomDetails) )
        this.refFormWizard.nextTab();
      }
      else if (name === "student-details"){
        this.studentDetails.studentFilled = true;
        console.log( "Student details: " + JSON.stringify(this.studentDetails) )
        this.refFormWizard.nextTab();
      }
      else if (name === "timetable-details"){
        this.timetableDetails.timetableFilled = true;
        console.log( "Timetable details: " + JSON.stringify(this.timetableDetails) )
        this.refFormWizard.nextTab();
      }
      else if (name === "account-details"){
        this.accountDetails.accountFilled = true;
        console.log( "Account details: " + JSON.stringify(this.accountDetails) )
        this.refFormWizard.nextTab();
      }
      else if (name === "sch-finish"){
        if (!this.schoolDetails.schFilled || !this.teacherDetails.teaFilled || !this.classroomDetails.classroomFilled || !this.studentDetails.studentFilled || !this.timetableDetails.timetableFilled  || !this.accountDetails.accountFilled) {
          this.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                      title: 'Validation error',
                      icon: "CoffeeIcon",
                      variant: "danger",
                      text: `Please ensure that all fields across all Tabs have been filled`,
                    },
          });
          return;
        }
        console.log("Finish is running!")
        this.finish = true;        
        
        //send all data to back end here
    
        const schRequest = {
          "name": this.schoolDetails.schName,
          "type_of": this.schoolDetails.schType,
          "owner": this.schoolDetails.schOwner,
          "state": this.schoolDetails.schState,
          "lga": this.schoolDetails.schLga,
          "town": this.schoolDetails.schTown,
          "faith": this.schoolDetails.schFaith,
          "operator": this.schoolDetails.schOperator,
          "gender": this.schoolDetails.schGender,
          "residence": this.schoolDetails.schResidence,
          "location": this.schoolDetails.schLocation,
          "population": this.schoolDetails.schPopulation,
          "email": this.schoolDetails.schEmail,
          "phone": this.schoolDetails.schPhone
        };

        let transformTeacher = this.teacherDetails.teaData.map( (o) => {
          return {
            "fname": o.first_name,
            "lname": o.last_name,
            "gender": o.gender,
            "agerange": o.age_range,
            "bias": o.bias,
            "coursetype": o.course_type,
            "qualification": o.qualification,
            "experience": o.experience,
            "photo": o.photo,
            "office": o.office,
            "email": o.email
          }
        }).filter((o) => {
          return o && o.lname
        });
        //formData.set("teaRequest", transformTeacher );
		const teaRequest = transformTeacher;

        let transformClass = this.classroomDetails.classData.map( (o) => {
          return {
            "title": o.class_title,
            "ext": o.class_ext,
            "class_index": o.class_index
          }
        }).filter((o) => {
          return o && o.ext
        });;
        //formData.set("classRequest", transformClass );
		const classRequest = transformClass;

        let transformStudent = this.studentDetails.studentData.map( (o) => {
          return {
            "name": o.student_name,
            "class_name": o.student_class,
            "arm": o.class_arm,
            "gender": o.student_gender,
            "regno": o.student_reg_no
          }
        }).filter((o) => {
          return o && o.class_name
        });
       // formData.set("pupRequest", transformStudent );
	    const pupRequest = transformStudent;

        let transformTimetable = this.timetableDetails.timetableData.map( (o) => {
          return {
            "tea_name": o.teacher_name,
            "class_name": o.class_name,
            "arm": o.class_arm,
            "subject": o.subject_name,
            "time": o.time,
            "day": o.day
          }
        }).filter((o) => {
          return o && o.class_name
        });
        //formData.set("timeRequest", transformTimetable );
		const timeRequest = transformTimetable;

        const accountRequest = {
          "name": this.accountDetails.acctName,
          "email": this.accountDetails.acctEmail,
          "username": this.accountDetails.acctUsername,
          "password": this.accountDetails.acctPassword
        };
		
		const formPayload = { schRequest, teaRequest, classRequest, pupRequest, timeRequest, accountRequest };
		const sef = this;
        this.$loading(true);
        axios.post( this.baseURL + "/auth/onboard", formPayload)
        .then(function (response) {         
			  sef.$loading(false);

        sef.$router.replace("/login");
			  
        sef.$toast({
				  component: ToastificationContent,
				  props: {
					title: 'Thank you for Onboarding Your School',
					icon: 'AlertTriangleIcon',
					variant: 'success',
				  },
			  });           
          }).catch((exception) => { 
            sef.$toast({
              component: ToastificationContent,
              props: {
              title: 'There is an issue with the Onboarding process, please check your form details',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
            },
            });
		    });        
      } 
    }
  },

  setup() {
    
    const { baseURL } = $themeConfig.app;
    const refFormWizard = ref(null);   
    
    return {
      refFormWizard,
      baseURL
    }
  },
}
</script>

<style lang="scss" scoped>

.margin-add{
  margin: 20px 30px 10px 30px;
}

.form-group label{
  font-weight: bold !important;
}

.error{
  font-size: 15px;
  font-weight: bold;
  color: #ea5455
}

</style>
