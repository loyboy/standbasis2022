import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
//import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useLessonnoteList() {
  // Use toast 
  //const toast = useToast()
  
  const isLoading = ref(false)

  const LessonnoteItems = ref([])
  const filters = ref({
    teacherId:null,
    week: null,
    startdate: null,
    lsn: null,

    revertedGrammar: false,
    revertedArrangement: false,
    revertedSubject: false,
    revertedIncomplete: false
    
  });

  const fetchLessonnotes = (ctx) => {
    isLoading.value = true;
    store
      .dispatch('app-LessonnoteSubmit/fetchLessonnotes', {
        teacher: filters.value.teacherId,
        week: filters.value.week
      })
      .then(response => {
        const { lessonnotes, amount } = response.data
     
        LessonnoteItems.value = lessonnotes

        filters.value.startdate = lessonnotes[0].calendar.startdate
       
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Lessonnotes for Lessonnote error: " + e);
        isLoading.value = false;   
      })
  }

  const handleChange = () => {
    fetchLessonnotes();
  }

  
  return {
    fetchLessonnotes,
   
    handleChange,
   
    isLoading,
    
    filters,

    LessonnoteItems
  }
}
