import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useAttendanceList() {
  
  const refAttendanceListTable = ref(null)
  const isLoading = ref(false)
  const attendanceItems = ref([])

  // Table Handlers
  const tableColumns = [    
    { key: 'parameter', label: 'Parameter', sortable: true },
    { key: 'value',label: 'Value',  sortable: true }
  ]  
  
  const filters = ref({
    schoolgroup: null, 
    schoolId: null,
    classId: null,
    calendarId: null,
    teacherId:null,
    subjectId: null,
    dateFrom: null,
    dateTo: null
  });

  const refetchData = () => {
    refAttendanceListTable.value.refresh()
  }

  const fetchAttendances = (ctx) => {
  
    let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
    let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
    isLoading.value = true;
    store
      .dispatch('app-AttendanceMNE/fetchAttendances', {
        q: "",
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classId,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject:  filters.value.subjectId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { teacher_attendance, class_attendance, late_attendance, completeness_attendance } = response.data;
     
        attendanceItems.value = [ { parameter: "Teacher Attendance", value: teacher_attendance }, { parameter: "Class Attendance", value: class_attendance }, 
        { parameter: "Late Attendance", value: late_attendance },{ parameter: "Attendance Completeness", value: completeness_attendance }   ];
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Attendances M&E error: " + e);
        isLoading.value = false;   
      })
  }

  const handleChange = () => {
    fetchAttendances();
  }

  return {
    fetchAttendances,
  
    handleChange,

    tableColumns,

    refAttendanceListTable,
  
    isLoading,

    refetchData,

    filters,

    attendanceItems

  }
}
