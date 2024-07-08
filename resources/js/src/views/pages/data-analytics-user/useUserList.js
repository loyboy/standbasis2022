import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useUserList() {

  const isLoading = ref(false)
  const standardItem = ref({})
  const teacherItem = ref({})
  const curriculumItem = ref({})
  const academicItem = ref({})
  const academicInputList = ref([])
  const teacherInputList = ref([])
  const displayTaqColumnData = ref({})
  const displayTaqLineData = ref({})
  const displayTshsColumnData = ref({})
  const displayTshsLineData = ref({})
  const displayAcademicColumnData = ref({})
  const displayAcademicLineData = ref({})
  const academicBarYear  =  ref(null)
  const academicLineYear =  ref(null)

  const filters = ref({  
      schoolId:null,
      yearOptionAcademic:null,
      yearOptionRating:null,
      yearOptionTeacher:null,
      yearOptionCurricullum:null
  });

  const fetchStandards = (ctx) => {
     
      isLoading.value = true;

      store.dispatch('app-dashboard/fetchStandards', {   
          id: filters.value.schoolId,
          year: filters.value.yearOptionRating
        })
        .then(response => {
          
          const { data } = response.data; 
      
          standardItem.value = data
          
          isLoading.value = false;   

        })
        .catch((e) => {
          console.log("Fetch Standards: " + e);
          isLoading.value = false;   
      })

  }

  const fetchTeachers = (ctx) => {
      
      isLoading.value = true;

      store.dispatch('app-dashboard/fetchTeachers', {   
          id: filters.value.schoolId,
          year: filters.value.yearOptionTeacher
        })
        .then(response => {
          
          const { data } = response.data; 
      
          teacherItem.value = data
          
          isLoading.value = false;   

        })
        .catch((e) => {
          console.log("Fetch Teachers: " + e);
          isLoading.value = false;   
      })

  }

  const fetchCurriculum = (ctx) => {
      
    isLoading.value = true;

    store.dispatch('app-dashboard/fetchCurriculum', {   
          id: filters.value.schoolId,
          year: filters.value.yearOptionCurricullum
      })
      .then(response => {
        
        const { data } = response.data; 
    
        curriculumItem.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Curriculum: " + e);
        isLoading.value = false;   
    })

  }

  const fetchAcademic = (ctx) => {
      
    isLoading.value = true;

    store.dispatch('app-dashboard/fetchAcademic', {   
          id: filters.value.schoolId,
          year: filters.value.yearOptionAcademic
      })
      .then(response => {
        
        const { data } = response.data; 
    
        academicItem.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Academic: " + e);
        isLoading.value = false;   
    })

  }
 
  const fetchAcademicInput = (ctx) => {
      
    isLoading.value = true;

    store.dispatch('app-dashboard/fetchAcademicInput', {   
          id: filters.value.schoolId,
      })
      .then(response => {
        
        const { data } = response.data; 
    
        academicInputList.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Academic Input: " + e);
        isLoading.value = false;   
    })

  }

  const fetchTeacherInput = (ctx) => {
      
    isLoading.value = true;

    store.dispatch('app-dashboard/fetchTeacherInput', {   
          id: filters.value.schoolId,
      })
      .then(response => {
        
        const { data } = response.data; 
    
        teacherInputList.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Teacher Input: " + e);
        isLoading.value = false;   
    })

  }

  const displayTaqColumnApi = (ctx) => {
      isLoading.value = true;

      store.dispatch('app-dashboard/displayTaqColumn', {   
            id: filters.value.schoolId,
        })
        .then(response => {
          
          const data  = response.data; 
      
          displayTaqColumnData.value = data
          
          isLoading.value = false;   

        })
        .catch((e) => {
          console.log("Fetch Teacher TAG column Input: " + e);
          isLoading.value = false;   
      })
  }

  const displayTaqLineApi = (ctx) => {
    isLoading.value = true;

    store.dispatch('app-dashboard/displayTaqLine', {   
          id: filters.value.schoolId,
      })
      .then(response => {
        
        const data  = response.data; 
    
        displayTaqLineData.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Teacher TAG line Input: " + e);
        isLoading.value = false;   
    })
  }

  const displayTshsColumnApi = (ctx) => {
    isLoading.value = true;

    store.dispatch('app-dashboard/displayTshsColumn', {   
          id: filters.value.schoolId,
      })
      .then(response => {
        
        const data = response.data; 
    
        displayTshsColumnData.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Teacher TAG column Input: " + e);
        isLoading.value = false;   
    })
  }

  const displayTshsLineApi = (ctx) => {
    isLoading.value = true;

    store.dispatch('app-dashboard/displayTshsLine', {   
          id: filters.value.schoolId,
      })
      .then(response => {
        
        const data = response.data; 
    
        displayTshsLineData.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Teacher TAG line Input: " + e);
        isLoading.value = false;   
    })
  }

  const displayAcademicColumnApi = (ctx) => {
    isLoading.value = true;

    store.dispatch('app-dashboard/displayAcademicColumn', {   
          id: filters.value.schoolId,
          year: academicBarYear
      })
      .then(response => {
        
        const data = response.data; 
    
        displayAcademicColumnData.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Teacher Academic column Input: " + e);
        isLoading.value = false;   
    })
  }

  const displayAcademicLineApi = (ctx) => {
    isLoading.value = true;

    store.dispatch('app-dashboard/displayAcademicLine', {   
          id: filters.value.schoolId,
          year: academicBarYear
      })
      .then(response => {
        
        const data = response.data; 
    
        displayAcademicLineData.value = data
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Teacher Academic line Input: " + e);
        isLoading.value = false;   
    })
  }

  const handleChange = () => {
    fetchStandards();
    fetchTeachers();
    fetchCurriculum();
    fetchAcademic();
  }

  return {
  
    handleChange,

    fetchStandards,

    fetchTeachers,

    fetchCurriculum,

    fetchAcademic,

    fetchAcademicInput,

    fetchTeacherInput,

    displayTaqColumnApi,

    displayTaqLineApi,

    displayTshsColumnApi,

    displayTshsLineApi,

    displayAcademicColumnApi,

    displayAcademicLineApi,
  
    isLoading,

    academicBarYear,

    academicLineYear,

    displayTaqColumnData,

    displayTaqLineData,

    displayTshsColumnData,

    displayTshsLineData,

    displayAcademicColumnData,

    displayAcademicLineData,

    filters,

    standardItem,
    teacherItem,
    curriculumItem,
    academicItem,
    academicInputList,
    teacherInputList

  }
}