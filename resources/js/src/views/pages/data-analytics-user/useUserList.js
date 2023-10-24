import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useUserList() {

  const isLoading = ref(false)
  const standardItem = ref({})
  const teacherItem = ref({})
  const curriculumItem = ref({})
  const academicItem = ref({})

  const filters = ref({  
    schoolId:null
  });

  const fetchStandards = (ctx) => {
     
      isLoading.value = true;

      store.dispatch('app-dashboard/fetchStandards', {   
          id: filters.value.schoolId
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
        id: filters.value.schoolId
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
        id: filters.value.schoolId
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
        id: filters.value.schoolId
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

  const handleChange = () => {
    fetchStandards();
    fetchTeachers();
    fetchCurriculum();
    fetchAcademic();
  }

  return {
  
    handleChange,
  
    isLoading,

    filters,

    standardItem,
    teacherItem,
    curriculumItem,
    academicItem

  }
}
