import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useAttendanceList() {
  
  const refAttendanceListTable = ref(null)
  const isLoading = ref(false)
  const attendanceItems = ref([])

  // Table Handlers
  const tableColumns = [    
    { key: 'parameter', label: 'Flag Type', sortable: true, tdClass: "tdBlue" },
    { key: 'expected',label: 'Expected Count',  sortable: true },
    { key: 'value',label: 'Actual',  sortable: true }
  ]  

 // const reversedLgaCodes = ref(store.getters['app-config/lgaCodes'])
  const reversedLgaCodes = computed(() => store.getters['app-config/lgaCodes']);
  
  const filters = ref({
    dateTo: new Date().toISOString().slice(0, 10),
    schoolgroup: null, 
    schoolId: null,
    supervisor: null,
    classId: null,//unused
    calendarId: null,
    teacherId:null,//unused
    subjectId: null,//unused
    dateFrom: null//unused
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
        datefrom: null,
        dateto: dateT
      })
      .then(response => {
        const { student_absence, queried_attendance, approval_delays, approval_done, late_attendance, void_attendance, student_excused_absence, endorsement_expected, teacher_absent, teacher_expected, student_expected } = response.data;
     
        attendanceItems.value = [
         
          { parameter: "Total number of classes", value: ( Number(teacher_expected) - Number(teacher_absent) ), expected: teacher_expected } ,
          { parameter: "Student Attendance", value: student_absence, expected: student_expected }, { parameter: "Late Attendance", value: late_attendance, expected: "0" }, 
          { parameter: "Voided Attendance", value: void_attendance, expected: "0" }, { parameter: "No Attendance Submission", value: teacher_absent, expected: "0" }, 
          { parameter: "Excused Absence", value: student_excused_absence, expected: "0" }, { parameter: "Attendance Endorsement", value: approval_done, expected: teacher_expected },
          { parameter: "Late Attendance Endorsement", value: approval_delays, expected: "0" },  { parameter: "Queried Attendance", value: queried_attendance, expected: "0" }
        
        ];
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Attendances Flags error: " + e);
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

    reversedLgaCodes,

    filters,

    attendanceItems

  }
}
