import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useEvaluation() {  
  
  const mnelistItems = ref([]) 
  const userData = ref({});   
  const isLoading = ref(false)
  const changeFieldsStudents = ref(false)
  const dyFieldsStudents = ref([])

  const changeFieldsTeacher = ref(false)
  const dyFieldsTeacher = ref([])

  const tableKey = ref(1)
  const clwTotal = ref(0)
  const hwkTotal = ref(0)
  const tstTotal = ref(0)

  const filters = ref({  
    guardianId: null,
    dateTo: new Date().toISOString().slice(0, 10),

    typeone: null, 
    typetwo_student: null,
    typethree: null, // week
    typefour: null //calendar
   
  });

  userData.value = JSON.parse(localStorage.getItem('userData'));

  const dynamicFields = computed(() => {
      let fields = [];

      if(changeFieldsStudents.value === true) {
        fields = dyFieldsStudents.value
      }

      return fields;
  })
 
  const fetchMneVariant = () => {
      isLoading.value = true;
      let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;

      store.dispatch('app-Parent/fetchMneAttendance', { enrol: filters.value.typetwo_student, date: dateT  })
      .then(response => {
        
        const { mnecolumndata, mnecolumn } = response.data;

        dyFieldsStudents.value = mnecolumn        
       
        mnelistItems.value = mnecolumndata;

        isLoading.value = false;
        tableKey.value = tableKey.value++;
        changeFieldsStudents.value = true;
      
      })
      .catch((e) => {
        console.log("Fetch Parent Viewing error: " + e);
        isLoading.value = false;   
    })
  }  

  const fetchMneVariant2 = () => {
    isLoading.value = true;

    store.dispatch('app-Parent/fetchMneAssessment', { enrol: filters.value.typetwo_student, week: filters.value.typethree  })
    .then(response => {
      
      const {  classwork, homework, test } = response.data;

      clwTotal.value = classwork;

      hwkTotal.value = homework;

      tstTotal.value = test;

      isLoading.value = false;
    
    })
    .catch((e) => {
      console.log("Fetch Parent Viewing error: " + e);
      isLoading.value = false;   
    })
  } 

  const handleChange = (ctx) => {
    if (  filters.value.typetwo_student && filters.value.dateTo ) {
      fetchMneVariant();
      window.scrollBy(0, 200);
    }

    else if (  filters.value.typetwo_student && filters.value.typethree ) {
      fetchMneVariant2();
      window.scrollBy(0, 200);
    }

    else{
      window.alert(" Please select all appropriate options before beginning the search. ")
    }    
  }

  return {    
    fetchMneVariant,

    fetchMneVariant2,
  
    isLoading,

    filters,

    dynamicFields,
    
    filters,

    handleChange,

    mnelistItems,

    tableKey,

    clwTotal,

    hwkTotal,

    tstTotal

  }
}
