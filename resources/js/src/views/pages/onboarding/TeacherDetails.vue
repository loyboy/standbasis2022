<template>
    <b-row class="match-height mx-1">
      
        <!-- Right Column -->
        <b-col lg="12" >
            <div class="customer-card">
                <b-card title="Step 2">
                <b-card-text class="mb-0 bolden">
                    Step 2
                </b-card-text>
                <b-card-text class="mb-0 bolden">Enter your teacher details in this step.</b-card-text>
                </b-card>
            </div> 
        </b-col>

        <b-col lg="12" >
            <b-card-code title="Teacher Data">
                <b-card-text  class="mb-2 bolden">
                    Upload your School's Teacher Data in the format we had instructed you to arrange it in.
                </b-card-text>

                <div>
                    <b-form-file v-model="file" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." @change="handleOnChange" />

                    <b-card-text class="my-1 bolden">
                        Selected file: <strong>{{ file ? file.name : '' }}</strong>
                    </b-card-text>
                </div>
            </b-card-code>
        </b-col>
        <hr />

        <b-col lg="12">
            <b-card-code title="Teacher Data" no-body>
                
                <!-- sort and filter-->
                <b-card-body>
                    <div class="d-flex justify-content-between  flex-wrap">

                        <!-- sorting  -->
                        <b-form-group label="Sort" label-size="sm" label-align-sm="left" label-cols-sm="2"
                            label-for="sortBySelect" class="mr-1 mb-md-0">
                            <b-input-group size="sm">
                                <b-form-select id="sortBySelect" v-model="sortBy" :options="sortOptions">
                                    <template #first>
                                        <option value="">
                                            none
                                        </option>
                                    </template>
                                </b-form-select>
                                <b-form-select v-model="sortDesc" size="sm" :disabled="!sortBy">
                                    <option :value="false">
                                        Asc
                                    </option>
                                    <option :value="true">
                                        Desc
                                    </option>
                                </b-form-select>
                            </b-input-group>
                        </b-form-group>

                        <!-- filter -->
                        <b-form-group label="Filter" label-cols-sm="2" label-align-sm="left" label-size="sm"
                            label-for="filterInput" class="mb-0">
                            <b-input-group size="sm">
                                <b-form-input id="filterInput" v-model="filter" type="search"
                                    placeholder="Type to Search" />
                                <b-input-group-append>
                                    <b-button :disabled="!filter" @click="filter = ''">
                                        Clear
                                    </b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </div>
                </b-card-body>

                <b-table striped hover responsive class="position-relative" :per-page="perPage"
                    :current-page="currentPage" :items="items" :fields="fields" :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc" :sort-direction="sortDirection" :filter="filter"
                    :filter-included-fields="filterOn" @filtered="onFiltered">
                 
                <!--    <template #cell(status)="data">
                        <b-badge :variant="status[1][data.value]">
                            {{ status[0][data.value] }}
                        </b-badge>
                    </template>-->
                </b-table>

                <!--- Pagination -->
                <b-card-body class="d-flex justify-content-between flex-wrap pt-0">

                    <!-- page length -->
                    <b-form-group label="Per Page" label-cols="6" label-align="left" label-size="sm"
                        label-for="sortBySelect" class="text-nowrap mb-md-0 mr-1 bolden">
                        <b-form-select id="perPageSelect" v-model="perPage" size="sm" inline :options="pageOptions" />
                    </b-form-group>

                    <!-- pagination -->
                    <div>
                        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" first-number
                            last-number prev-class="prev-item" next-class="next-item" class="mb-0">
                            <template #prev-text>
                                <feather-icon icon="ChevronLeftIcon" size="18" />
                            </template>
                            <template #next-text>
                                <feather-icon icon="ChevronRightIcon" size="18" />
                            </template>
                        </b-pagination>
                    </div>
                </b-card-body>

               
            </b-card-code>
        </b-col>

        <b-col cols="12" class="px-6 py-2">
            <b-button variant="gradient-primary" class="btn-relief-primary" v-if="isFilled" type="button" @click="finish" >
                Save Teacher Details
            </b-button>
        </b-col> 
 
    </b-row>
</template>

<script>
import { BRow, BCol , BCard,  BFormFile, BCardText,  BTable, BAvatar, BBadge, BFormGroup, BFormSelect, BPagination, BInputGroup, BFormInput, BInputGroupAppend, BButton, BCardBody } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardCode,
    BCardText,
    BFormFile,
    BTable,
    BAvatar,
    BBadge,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BCardBody
  },
   props: {
        teacherDetails: {
            type: Object,
            required: true,
        }
   },
   data() {
    return {
      file: null,
      isFilled: false,
      perPage: 5,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal-teacher',
        title: '',
        content: ''
      },
      fields: [
        { key: 'id', label: 'Id' },
        { key: 'first_name', label: 'First Name' },
        { key: 'last_name', label: 'Last Name', sortable: true },
        { key: 'gender', label: 'Gender', sortable: true },
        { key: 'age_range', label: 'Age Range', sortable: true },
        { key: 'bias', label: 'Bias', sortable: true },
        { key: 'course_type', label: 'Course Type', sortable: true },
        { key: 'qualification', label: 'Qualification', sortable: true },
        { key: 'experience', label: 'Experience', sortable: true },
        { key: 'photo', label: 'Photo', sortable: true },
        { key: 'office', label: 'Office', sortable: true },
        { key: 'email', label: 'Email', sortable: true }
      ],

      items: [],
   
      status: [{
        1: 'Current', 2: 'Professional', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 2: 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
    }
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }))
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  watch: {
    items: {
      handler: function (val, oldVal) {
        if (val.length > 0) {
            this.isFilled = true;
            
        }
        else{
            this.isFilled = false;
            this.teacherDetails.teaFilled = false;
        }
      },
      deep: true
    }
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
   
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    arraysEqual(a,b) { 
        //return a.sort().toString() == b.sort().toString(); 
        return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
    },
    loadData(file) {
        console.log("Reading a file ");
        this.items = [];
        let myitems = [];
        let reader = new FileReader();
         reader.readAsText(file);
         reader.onload = (evt) => {
           
            let csvHeaders = [ 'First Name', 'Last Name', 'Gender', 'Age Range', 'Bias', 'Course Type', 'Qualification', 'Experience', 'Photo', 'Office','Email'  ];
            var content = evt.target.result;
            //split csv file using "\n" for new line ( each row)
            let lines = content.split("\r");
            let firstRow = lines[0].split(",");
            
            //loop all rows except the firt row
            if ( this.arraysEqual( csvHeaders.sort() , firstRow.sort() ) === false ) {
                alert("Please make sure the Column names are exactly as the Template for Teacher we gave is.")
                return false;
            }

            delete lines[0];          

            this.items = lines.map((line,index) => {
                    var rowContent = line.split(","); 
                    let innerContent = {};

                    innerContent[ 'id' ] = index;
                    innerContent[ "first_name" ] = rowContent[0]; 
                    innerContent[ "last_name" ] = rowContent[1];
                    innerContent[ "gender" ] = rowContent[2];
                    innerContent[ "age_range" ] = rowContent[3];
                    innerContent[ "bias" ] = rowContent[4];
                    innerContent[ "course_type" ] = rowContent[5];
                    innerContent[ "qualification" ] = rowContent[6];
                    innerContent[ "experience" ] = rowContent[7];
                    innerContent[ "photo" ] = rowContent[8];
                    innerContent[ "office"] = rowContent[9];
                    innerContent[ "email"] = rowContent[10];

                    console.log( index + " >> " + JSON.stringify(innerContent) );
                    return innerContent
            })
            this.items = this.items.filter(n => n && n['last_name'] );
              
            let genderExpected = [ "m", "f" ];
            let emailValidate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            let  genderError = false;  
            let  emailError = false;           

            for (let i = 0; i < this.items.length; ++i) {
                    let rowContent = this.items[i];       
              
                    let rc =  new String(rowContent["gender"].toLowerCase()).trim();
                    let rc2 =  String(rowContent["email"]).trim();
                    
                    let findGender = genderExpected.find(o => o === rc );
                    if (!findGender){
                        genderError = true; 
                        this.items = [];
                        break;
                    }                    
                  
                    if (  String(rc2).match(emailValidate) === null ){
                        emailError = true; 
                        this.items = [];
                        break;
                    }
            }

            if (genderError) {
                this.file = null;
                alert("Check that the Gender column has the correct values i.e 'M' / 'F' ");
                return;
            }

            if (emailError) {
                this.file = null;
                alert("Check that the E-mail column has the correct values i.e 'john.doe@mail.com' ");
                return;
            }
              
              this.totalRows = this.items.length;
              console.log(  " Final " + JSON.stringify( this.items ) );           
         };
    },
    handleOnChange(e) {
      this.file = e.target.files[0];
      if (!this.file || this.file.type.indexOf("text/csv") !== 0) { alert("This is not a CSV file."); return; };  
      this.loadData(this.file);    
    },
    finish(){
      if (this.items.length > 0){
        this.teacherDetails.teaData = this.items;
        this.teacherDetails.teaFileUpload = this.file;
        this.$emit('next-step',"teacher-details");
      }

    }
  }

}

</script>
<style lang="scss">    
    .bolden{
      font-weight: bolder;
    }
</style>