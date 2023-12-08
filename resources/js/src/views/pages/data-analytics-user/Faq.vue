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
									
									<div  v-for="(faq, index) in faqItems" :key="index">
										<div class="faq">
                                            <p class="question" @click="toggleAnswer">
                                            {{ faq.q }}
                                            </p>
                                            <p class="answer" ref="answer">
                                            {{ faq.a }}
                                            </p>
                                        </div>
									</div>

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
        
        return {  
            faqItems: [
				{
					q: "What is ChatGPT?",
					a:
						"ChatGPT is a language generation model developed by OpenAI. It's based on the GPT (Generative Pre-trained Transformer) architecture and is designed to generate human-like text and engage in natural-sounding conversations."
				},
				{
					q: "How does ChatGPT work?",
					a:
						"ChatGPT uses a deep learning architecture called GPT, which processes input text and generates coherent and contextually relevant responses. It's trained on a vast amount of internet text to learn grammar, context, and style to generate responses that mimic human conversation."
				},
				{
					q: "What can I use ChatGPT for?",
					a:
						"ChatGPT can be used for a variety of purposes, including drafting emails, brainstorming ideas, writing code, generating creative content, providing tutoring or information on a wide range of topics, and engaging in simulated conversations."
				}
		    ],
            filterWord: "",
            isOpen: false
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
		toggleAnswer() {
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
  /* CSS to style the table */
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
  