import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useAttendanceList() {
  // Use toast
  const toast = useToast()
  
  const isLoading = ref(false)

  const filters = ref({
    schoolgroup: null, 
    schoolId: null,   
    teacherId:null
  });

  const att = ref({ reported: Math.floor((Math.random() * 100) + 50) , submitted: Math.floor((Math.random() * 100) + 50) })
  const lsn = ref({ reported: Math.floor((Math.random() * 100) + 50), submitted: Math.floor((Math.random() * 100) + 50) })
  const mne = ref({ flags: 10 })

  const fetchHomeDetails = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-Home/fetchDetails', {
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        teacher: filters.value.teacherId
      })
      .then(response => {
        const { attendances, lessonnotes, mnes } = response.data
     
        att.value = attendances
        lsn.value = lessonnotes
        mne.value = mnes
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Home details error: " + e);
        isLoading.value = false;   
      })
  }

 
  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

 

  return {
   
    isLoading, 
    filters,   
    fetchHomeDetails,
    att,
    lsn,
    mne

  }
}
