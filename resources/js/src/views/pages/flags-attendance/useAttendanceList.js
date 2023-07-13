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
    { key: 'value',label: 'Actual Count',  sortable: true }
  ]  
  
  const filters = ref({
    dateTo: new Date().toISOString().slice(0, 10),
    schoolgroup: null, 
    schoolId: null,
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
        const { student_absence, incomplete_submission, approval_delays, late_attendance, teacher_absent, teacher_expected } = response.data;
     
        attendanceItems.value = [ 
          { parameter: "Student Absence", value: student_absence, expected: "0 %" }, { parameter: "Incomplete Submission", value: incomplete_submission, expected: "0 %" }, 
          { parameter: "Attendance Approval Delays", value: approval_delays, expected: "0 %" },{ parameter: "Late Attendance(s)", value: late_attendance, expected: "0 %" }, 
          { parameter: "Teacher Subject-Class Absence", value: teacher_absent, expected: teacher_expected + " Classes" } 
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

    filters,

    attendanceItems

  }
}
