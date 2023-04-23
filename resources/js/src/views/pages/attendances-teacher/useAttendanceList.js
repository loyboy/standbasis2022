import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useAttendanceList() {
  
//  const refAttendanceListTable = ref(null)
  const isLoading = ref(false)
  const attendanceItems = ref([])

  const filters = ref({  
    teacherId:null,
    attId: null
  });

  const fetchAttendances = (ctx) => {
      let todayDate = new Date().toISOString().slice(0, 10);
      isLoading.value = true;

      store.dispatch('app-AttendanceTake/fetchAttendances', {   
          teacher: filters.value.teacherId,
          today: todayDate
        })
        .then(response => {
          
          const { attendances, amount } = response.data;
      
          attendanceItems.value = attendances
          
          isLoading.value = false;   

        })
        .catch((e) => {
          console.log("Fetch Attendances for Submit Attendance error: " + e);
          isLoading.value = false;   
      })

  }

  const handleChange = () => {
    fetchAttendances();
  }

  return {
    
    fetchAttendances,
  
    handleChange,
  
    isLoading,

    filters,

    attendanceItems

  }
}
