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
    teacherId:null,

    att: 0,
    lsn: 0,

    sampleDataSeries:{
      series: [
          {
            data: null,
          }
      ]
    },
    sampleLineDataSeries: {
      series: [
        {
          data: null,
        },
      ],
    }

  });

 /* const att = ref({ reported: Math.floor((Math.random() * 100) + 50) , submitted: Math.floor((Math.random() * 100) + 50) })
  const lsn = ref({ reported: Math.floor((Math.random() * 100) + 50), submitted: Math.floor((Math.random() * 100) + 50) })
  const mne = ref({ flags: 10 })*/

  const fetchAttendances = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-Home/fetchAttendances', {
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        teacher: filters.value.teacherId
      })
      .then(response => {
        const { sessions, sessionsData } = response.data
     
        filters.value.att = sessions
        filters.value.sampleDataSeries.series[0].data = sessionsData        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

  const fetchLessonnotes = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-Home/fetchLessonnotes', {
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        teacher: filters.value.teacherId
      })
      .then(response => {
        const { sessions, sessionsData } = response.data
     
        filters.value.lsn = sessions
        filters.value.sampleLineDataSeries.series[0].data = sessionsData        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

 
  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

 

  return {
   
    isLoading, 
    filters,   
    fetchAttendances,
    fetchLessonnotes
  }
}
