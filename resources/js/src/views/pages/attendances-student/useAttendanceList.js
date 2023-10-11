import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
//import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useAttendanceList() {
  // Use toast
  const toast = useToast()

  const refAttendanceListTable = ref(null)
  const isAttendanceSidebarActive =  ref(false);
  const isLoading = ref(false)

  // Table Handlers
  const tableColumns = [    
    { key: 'student.school.name', label: 'School Name', sortable: true , thStyle: { width: "20%" } },
    { key: 'student.name',label: 'Student Full Name',  sortable: true },
    { key: 'attendance.timetable.class_stream.title',label: 'Class Name',  sortable: true },
    { key: 'attendance.timetable.class_stream.ext',label: 'Class Arm',  sortable: true },
    { key: 'attendance.timetable.subject.name',label: 'Subject Name',  sortable: true },
    { key: 'attendance.attId',label: 'Attendance ID',  sortable: true , thStyle: { width: "10%" } },
    { key: 'observation',label: 'Observation',  sortable: true , thStyle: { width: "10%" } },
    { key: 'status',label: 'Status',  sortable: true },
    { key: 'remark',label: 'Remark',  sortable: true },
    { key: 'actions' }
  ]
  const perPage = ref(10)
  const totalAttendances = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const userData = ref({});
  const storedItems = JSON.parse(localStorage.getItem('userData'));
  if (storedItems){
    userData.value = storedItems;
  }

  const attendanceItems = ref([])
  const filters = ref({
    schoolgroup: null,
    schoolId: null,
    classId: null,
    calendarId: null,
    teacherId:null,
    subjectId: null,
    studentId: null,
    status: null,
    attId:null,
    dateFrom: null,
    dateTo: null
  });
 
  const totalPresentAttendances = ref(0)
  const totalAbsentAttendances = ref(0)
  const totalExcusedAttendances = ref(0)
  const searchValues = ref([])

  const dataMeta = computed(() => {
    const localItemsCount = refAttendanceListTable.value ? refAttendanceListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalAttendances.value,
    }//
  })

  const refetchData = () => {
    refAttendanceListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchAttendances = (ctx) => {

    let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
    let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
    isLoading.value = true;

    store
      .dispatch('app-AttendanceStudent/fetchAttendances', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classId,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject: filters.value.subjectId,
        student: filters.value.studentId,
        status: filters.value.status,
        attendance: filters.value.attId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { attendances, totalItems, totalPresent, totalAbsent, totalExcused } = response.data

        attendanceItems.value = attendances
        totalAttendances.value = totalItems
        totalPresentAttendances.value = totalPresent
        totalAbsentAttendances.value = totalAbsent
        totalExcusedAttendances.value = totalExcused
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Student Attendances error: " + e);
        isLoading.value = false;   
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    console.log("Cal: " + filters.value.calendarId);
    filters.value.calendarId = userData.value.cal_id;
    fetchAttendances();
  }

  const handleChange = () => {
    currentPage.value = 1;
    isAttendanceSidebarActive.value = false;
    fetchAttendances();
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveVariant = status => {
    if (status === 0) return 'warning'
    if (status === -1) return 'danger'
    if (status === 1) return 'success'
    return 'primary'
  }

  const resolveVariantObs = status => {
    if (status === "uncomfortable") return 'warning'
    if (status === "distracted") return 'warning'
    if (status === "unhappy") return 'danger'
    if (status === "") return 'success'
    return 'primary'
  }

  return {
    fetchAttendances,
    handlePageChange,
    handleChange,

    totalAttendances,
    totalPresentAttendances,    
    totalAbsentAttendances,
    totalExcusedAttendances,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refAttendanceListTable,

    resolveVariant,
    resolveVariantObs,
    isAttendanceSidebarActive,
    isLoading,

    refetchData,

    filters,
    attendanceItems,
    searchValues

  }
}
