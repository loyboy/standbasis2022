import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useAttendanceList() {
 
  const isLoading = ref(false)
  const userData = ref({});
  const storedItems = JSON.parse(localStorage.getItem('userData'));
  if (storedItems){
    userData.value = storedItems;
  }

  const tableColumns = [    
    { key: 'teacher',label: 'Teacher',  sortable: true },
    { key: 'timetable.class_stream.title',label: 'Class',  sortable: true },
    { key: 'timetable.class_stream.ext',label: 'Extension',  sortable: true },
    { key: 'timetable.subject.name',label: 'Subject',  sortable: true },
    { key: 'timetable.time_of',label: 'Expected Time',  sortable: true },
    { key: 'done',label: 'Submission',  sortable: true },
    
    { key: 'actions' }
  ]
  
  const attendanceItems = ref([])
  const attendanceTempList = ref([])
  const filters = ref({
    schoolgroup: null, 
    schoolId: null,
    classId: null,
    calendarId: null,
    teacherId:null,
    subjectId: null,
    status: null,  
    dateFrom: null,
    dateTo: null
  });

  const fetchAttendances = (ctx) => {
    
      filters.value.dateFrom = formatDate(new Date());

      let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
      let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
      isLoading.value = true;
    
      store.dispatch('app-AttendancePrincipal/fetchAttendance', {
        size: 50,// increase limt as
        page: 0,
        q: "",
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classId,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { attendances } = response.data
    
        attendanceItems.value = attendances 
        attendanceTempList.value = attendanceItems.value      
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Attendances Managenment error: " + e);
        isLoading.value = false;   
      })
    
  }

  const handleChange = () => {
    fetchAttendances();
  }

  const formatDate = (date) => {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveAttendancestatusVariant = status => {
    if (status === 0) return 'warning'
    if (status === -1) return 'danger'
    if (status === 1) return 'success'
    if (status === 2) return 'primary'
    return 'primary'
  }

  const resolvePerformancestatusVariant = status => {
    if (status === 100) return 'success'
    if (status === 50) return 'warning'
    if (status === 0) return 'danger'
    return 'primary'
  }

  return {
    fetchAttendances,
   
    handleChange,

    tableColumns,

    isLoading,

    resolveAttendancestatusVariant,    

    resolvePerformancestatusVariant,

    filters,

    attendanceItems ,
    
    attendanceTempList

  }
}
