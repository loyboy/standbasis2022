<template>
    <div> 
        <div class="row"> 
            <b-col lg="12" sm="12">
                <section >
					<div class="container">
						<div class="row">
							<div class="col-12">

								<h1 class="pt-4">Frequent Asked Questions</h1>
								

								<section>
									
									<!--<div  v-for="(faq, index) in faqItems" :key="index">
										<div class="faq">
                                            <p class="question" @click="toggleAnswer">
                                            {{ faq.q }}
                                            </p>
                                            <p class="answer" ref="answer">
                                            {{ faq.a }}
                                            </p>
                                        </div>
									</div>-->

                  <VueFaqAccordion 
                    :items="myItems"
                  />

							  </section>

							</div>
						</div>
					</div>
				</section>  
                    
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
  import useUserList from './useUserList'
  import analyticsStoreModule from './analyticsStoreModule'
  import VueFaqAccordion from 'vue-faq-accordion'


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
      vSelect,
      VueFaqAccordion
    },

    data() {
        
        return {  
            filterWord: "",

            isOpen: false,
            myItems: [
              {
                title: 'Standbasis School Rating and Standbasis-School-Data-Dashboard; What is the relationship?',
                value: "Standbasis School Rating is a system of benchmarking school(s) curriculum teaching resources (infrastructure, processes and teachers) provision and performance against a set of reference quantities as a standard. It is the implementation of standards-based operation in schools. <br/>"+ 
                  "Standbasis Rating is neither statutory nor formal industry standards for ranking schools. It is an independent and voluntary-adoption internal administrative tool for individual and group of schools with common owners.<br/>" + 
                  "Standbasis School Rating encourages schools to leverage data and digital technologies to manage viability and sustainability imperatives in an increasingly demanding and competitive education industry.<br/>"+ 
                  "Standbasis Rating empowers physically small schools and less flamboyant schools to have a common basis for pitching their strengths big schools, apple for apple, in the student enrollment market.<br/>"+
                  "On the other hand, Standbasis Rating empowers parents to shop for the best possible value for their money scientifically, not on subjective and emotional grounds.<br/>"+
                  "Standbasis School Data Dashboard provides the visual result of Standbasis Rating at a glance, instantaneous in some cases, enterprise fashion and mobile. The dashboard provides further elaboration, departmentally, to enrich the management information derivable from school operations data."
                ,
                category: 'General FAQ'
              },
              {
                title: '<b> How Does Standbasis School Data Dashboard (SSDD) work? </b>',
                value: "SSDD receives data generated from your school operation and processes them into numbers and images that, at a glance, tell how the school is doing as far as the main business of the school – curriculum teaching proper and the supporting environment - are concerned. <br/>" +
                "Standbasis collects data from your school and process them through the relevant Standbasis technologies to produce the material that the dashboard converts and organizes into simple images that tell the important stories of your school. <br/>" +
                "SSDD is your 'ultimate independent and incorruptible' school consultant. <br/>"+
                "They tell you when to celebrate. <br/>"+
                "They tell you when to make some changes and or intervene. <br/>"+
                "They give you an incontrovertible comparison with competitors. <br/>"+
                "They arm you with a veritable value proposition to parents; giving parents a scientific basis for choosing your school over competing schools, or otherwise. <br/>" +
                "They set the agenda for 'Quality and Productivity' staff meetings. <br/>"+
                "They provide evidence for management proposals and accounting. <br/>"+ 
                "SSDD reduces an otherwise lengthy and technical analysis chores to simple observation of 'upward and downward' movement of graphs that anybody can see.",
                category: 'General FAQ'
              },
              {
                title: '<b> Can you talk me through the dashboard? </b>',
                value: "Standbasis School Data Dashboard has four screens for monitoring: <br/>" +
                       " ●	Academic performance indicators. <br/>" +
                       " ●	Teacher quality asset indicators. <br/>"+
                       " ●	School health status indicators. <br/>"+
                       " ●	Curriculum teaching policies compliance / violation indicators. <br/>"+
                       " The audio on each of those screens at dashboard.standbasis.com explain the services of each of the screens.",
                category: 'General FAQ'
              },
              {
                title: '<b> The dashboard has graphs already, where would my school data go? </b>',
                value: "The graphs that came with your dashboard have 'PLACEHOLDER' written across them. They do not represent any school right now. They would be replaced with your school graphs when you provide the data to feed them. <br/>",
                category: 'General FAQ'
              },
              {
                title: '<b> What is the scope of the offer? </b>',
                value: `<table style='border-collapse: collapse; border: 1px solid black;'>
                  <thead>
                    <tr style='background-color: #f2f2f2;'>
                      <th style='border: 1px solid black; padding: 8px;'>Item</th>
                      <th style="border: 1px solid black; padding: 8px;">Offer</th>
                      <th style="border: 1px solid black; padding: 8px;">For how long?</th>
                      <th style="border: 1px solid black; padding: 8px;">Beyond the offer?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style="border: 1px solid black; padding: 8px;">Standbasis School Data Dashboard</td>
                      <td style="border: 1px solid black; padding: 8px;">Free: Infrastructure and web hosting</td>
                      <td style="border: 1px solid black; padding: 8px;">Permanent, unless redundant for 5 years.</td>
                      <td style="border: 1px solid black; padding: 8px;">Free</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid black; padding: 8px;">Academic Performance Indicators</td>
                      <td style="border: 1px solid black; padding: 8px;">Free: Data processing</td>
                      <td style="border: 1px solid black; padding: 8px;">Three school terms and one external examination. Back-results, up to three years could be accepted above the offer to achieve an early trending.</td>
                      <td style="border: 1px solid black; padding: 8px;">Per term subscription (single subscription for two)</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid black; padding: 8px;">Teacher Asset Quality Indicators</td>
                      <td style="border: 1px solid black; padding: 8px;">Free: Data processing</td>
                      <td style="border: 1px solid black; padding: 8px;">Three school terms and one external examination. Back-results, up to three years could be accepted above the offer to achieve an early trending.</td>
                      <td style="border: 1px solid black; padding: 8px;">Per term subscription (single subscription for two)</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid black; padding: 8px;">School Health Status Indicators</td>
                      <td style="border: 1px solid black; padding: 8px;">Subscription only</td>
                      <td style="border: 1px solid black; padding: 8px;">Annually</td>
                      <td style="border: 1px solid black; padding: 8px;">Annual Subscription</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid black; padding: 8px;">Teaching Processes Policy Violation Indicators</td>
                      <td style="border: 1px solid black; padding: 8px;">Subscription only</td>
                      <td style="border: 1px solid black; padding: 8px;">Annually</td>
                      <td style="border: 1px solid black; padding: 8px;">Annual Subscription</td>
                    </tr>
                  </tbody>
                </table>`,
                category: 'General FAQ'
              },
              {
                title: '<b> Who is seeing my dashboard with me? </b>',
                value: "Your dashboard is a private property of your school, once you change the password to yours nobody can visit your dashboard without you providing access. Conversely, it you who would flaunt favorable and outstanding performance data from your dashboard for marketing purposes.",
                category: 'General FAQ'
              },
              {
                title: '<b>What happens if I stay strictly with the free services without taking any of the subscription-only services? </b>',
                value: "Your academic and teacher data, made available to Standbasis, would be processed and the two screens dedicated to those services will show your graphs. The subscription-only services screens will remain with the placeholder images. <br/>" +
                "Our service is modular, meaning that each screen can work independently and all the screens can work together. <br/>"+
                "What if I could not subscribe to any of the four services at the end of the free offer or there is a .break in subscription; will I lose the dashboard?. <br/>"+ 
                "The dashboard remains yours and available for deployment when you can. The dashboard resources would only be retrieved if the redundancy period gets to five years.",
                category: 'General FAQ'
              },
              {
                title: '<b>How many years data can be trended on the dashboard? </b>',
                value: "As a matter of policy, your data is held by us for a maximum of five years.<br/>" + 
                "In other word, you can track and trend your data generated for a period of five years and no more.<br/>" + 
                "We are open to discuss longer periods of data retention and trending on different terms.",
                category: 'General FAQ'
              },
            ]
        }
    },

    setup() {
      const { refFormObserver, getValidationState, resetForm } = formValidation(() => {})
      const Dashboard_APP_STORE_MODULE_NAME = 'app-dashboard';
   
      const { baseURL } = $themeConfig.app; 
      const userData = ref({});

      // Register module
      if (!store.hasModule(Dashboard_APP_STORE_MODULE_NAME)) store.registerModule(Dashboard_APP_STORE_MODULE_NAME, analyticsStoreModule )
  
      // UnRegister on leave
      onUnmounted(() => {
        if (store.hasModule(Dashboard_APP_STORE_MODULE_NAME)) store.unregisterModule(Dashboard_APP_STORE_MODULE_NAME)
      })   
    
      const storedItems = JSON.parse(localStorage.getItem('userData'));
      if (storedItems){
        userData.value = storedItems;
      }    
      
      return {

        Dashboard_APP_STORE_MODULE_NAME,

        baseURL

      }
    },

	methods: {
		/*toggleAnswer() {
			if (this.isOpen) {
				this.collapse();
			} else {
				this.expand();
			}
			this.isOpen = !this.isOpen;
		},
		collapse() {
			// select the answer element
			const answer = this.$refs.answer;
			answer.style.height = 0;
		},
		expand() {
			// select answer element
			const answer = this.$refs.answer;

			// set its height to its normal scroll height to expand it fully
			answer.style.height = answer.scrollHeight + "px";
		}*/
	}

  }
  </script>
  
  <style lang="scss" scoped>
  .per-page-selector {
    width: 90px;
  }

  </style>
  
  <style lang="scss" scoped>
  @import '~@core/scss/vue/libs/vue-select.scss';
  /* CSS to style the table */

  .faq :deep(.faq-wrapper) {
    max-width: 1150px;
  }

  table {
    width: 100%;
    border-collapse: separate;
    
    border-spacing: 5px; /* Adjust this for spacing */
    border: 1px solid white; /* White border */
  }

  th, td {
    padding: 10px;
    text-align: center;
  }                

  th {
    background-color: #002060; /* Blue background for the first column header */
    color: white; /* White text color */
  }

  td:nth-child(2), td:nth-child(3) {
    background-color: #a6e6a2; /* Light green background for the second and third columns */
    color: black; /* Black text color */
  }

 ::selection {
	user-select: none;
}

/* style the FAQ section */
.question {
	background: hsl(35 10% 30% / 0.1);
	text-transform: uppercase;
	cursor: pointer;
	font-weight: bold;
	box-shadow: 0px 4px 0px 0 #88888855;
	padding: 10px 0;
	transition: transform 0.2s;
	position: relative;
}

.question:hover {
	background: hsl(35 10% 30% / 0.15);
}

.question::before {
	content: "✅";
	margin: 10px;
}

/* styles when the question is clicked */
.question:active {
	transform: translateY(4px);
	box-shadow: none;
}

.answer {
	transition: 0.25s; /* smooth slide-in */
	height: 0; /* starts collapsed */
	overflow: hidden;
	line-height: 1.5;
}

.answer::before {
	content: "👉";
	margin-right: 10px;
}

/* style the toggleIcon */
.toggleIcon {
	font-size: 1.5em;
	font-weight: bold;
	position: absolute;
	right: 20px;
	display: inline-block;
	line-height: 0.5;
	color: #666;
}
  </style>
  