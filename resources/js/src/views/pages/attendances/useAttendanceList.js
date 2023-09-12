import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useAttendanceList() {
  // Use toast
  const toast = useToast()

  const refAttendanceListTable = ref(null)
  const isAttendanceSidebarActive = ref(false)
  const isLoading = ref(false)
  const userData = ref({});
  const storedItems = JSON.parse(localStorage.getItem('userData'));
  if (storedItems){
    userData.value = storedItems;
  }

  // Table Handlers
  const tableColumns = [    
    { key: 'teacher.school.name', label: 'School Name', sortable: true, thStyle: { width: "20%" } },
    { key: 'teacher',label: 'Teacher',  sortable: true },
    { key: 'timetable.class_stream.title',label: 'Class',  sortable: true },
    { key: 'timetable.class_stream.ext',label: 'Extension',  sortable: true },
    { key: 'timetable.subject.name',label: 'Subject',  sortable: true },
    { key: '_date',label: 'Date of Submission',  sortable: true, thStyle: { width: "20%" } },
    { key: 'done',label: 'Status',  sortable: true },
    { key: 'actions' }
  ]

  const tableColumnsPrincipal = [    
    { key: 'att_id.teacher',label: 'Teacher',  sortable: true },
    { key: 'att_id.timetable.class_stream.title',label: 'Class',  sortable: true },
    { key: 'att_id.timetable.class_stream.ext',label: 'Extension',  sortable: true },
    { key: 'att_id.timetable.subject.name',label: 'Subject',  sortable: true },
    { key: 'timing',label: 'Submission',  sortable: true }, //Late , Voided, None
    { key: 'class_perf',label: 'Class Attendance(%)',  sortable: true },
    { key: 'completeness',label: 'Completeness',  sortable: true },
    { key: 'score',label: 'Performance(%)',  sortable: true },
    { key: 'att_id._date',label: 'Date',  sortable: true, thStyle: { width: "20%" } },
    { key: 'action',label: 'Action',  sortable: true },
    { key: 'comment',label: 'Comment',  sortable: true },
    { key: 'actions' }
  ]

  const perPage = ref(10)
  const totalAttendances = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  
  const attendanceItems = ref([])
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
  const totalActiveAttendances = ref(0) // good attendance
  const totalInactiveAttendances = ref(0) //late attendance
  const totalVoidAttendances = ref(0)
  const totalNotDoneAttendances = ref(0)

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
    let _DONE = 1;
    let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
    let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
    isLoading.value = true;
    
    if ( userData.value.role === "teacher" ){          
          store.dispatch('app-Attendance/fetchAttendances', {
            size: perPage.value,
            page: currentPage.value - 1,
            q: searchQuery.value,
            schoolgroup: filters.value.schoolgroup,
            school: filters.value.schoolId,
            class: filters.value.classId,
            calendar: filters.value.calendarId,
            teacher: filters.value.teacherId,
            subject:  filters.value.subjectId,
            status: filters.value.status,
            datefrom: dateF,
            dateto: dateT
          })
          .then(response => {
            const { attendances, totalItems, totalGood, totalLate, totalVoid, totalNotDone } = response.data
        
            attendanceItems.value = attendances
            totalAttendances.value = totalItems
            totalActiveAttendances.value = totalGood
            totalInactiveAttendances.value = totalLate   
            totalVoidAttendances.value = totalVoid
            totalNotDoneAttendances.value = totalNotDone

            isLoading.value = false;   

          })
          .catch((e) => {
            console.log("Fetch Attendances error: " + e);
            isLoading.value = false;   
          })
    }
    else if (userData.value.role === "principal") {
      store.dispatch('app-Attendance/fetchAttendanceManagements', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classId,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        attendancedone: _DONE,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { attendancemanagement,totalItems } = response.data
    
        attendanceItems.value = attendancemanagement    
        totalAttendances.value = totalItems   
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Attendances Managenment error: " + e);
        isLoading.value = false;   
      })
    }
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

  const resolveAttendancestatusVariant = status => {
    if (status === 0) return 'warning'
    if (status === -1) return 'danger'
    if (status === 1) return 'success'
    if (status === 2) return 'primary'
    return 'primary'
  }

  const resolveAttendancetimingVariant = status => {
    if (status === 50) return 'warning'
    if (status === 100) return 'success'
    if (status === 0) return 'danger'   
    return 'link'
  } 
  
  const resolveAttendanceclassPerfVariant = status => {
    if (status === 100) return 'success'
    if (status > 80 ) return 'success'
    if ( status > 50 && status <= 79 ) return 'warning'
    if (status < 50) return 'danger'
    return 'link'
  }
  
  const resolveAttendancecompleteVariant = status => {
    if (status === 50) return 'warning'
    if (status === 0) return 'danger'
    if (status === 100) return 'success'
    
    return 'link'
  }

  const resolveAttendancescoreVariant = status => {
    if (status === 100) return 'success'
    if (status > 80 ) return 'success'
    if ( status > 50 && status <= 79 ) return 'warning'
    if (status < 50) return 'danger'
    return 'link'
  }

  return {
    fetchAttendances,
    handlePageChange,
    handleChange,

    totalAttendances,
    totalActiveAttendances,    
    totalInactiveAttendances,
    totalVoidAttendances,
    totalNotDoneAttendances,

    tableColumns,
    tableColumnsPrincipal,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refAttendanceListTable,
    isAttendanceSidebarActive,
    isLoading,

    resolveAttendancestatusVariant,
    resolveAttendancetimingVariant,
    resolveAttendanceclassPerfVariant,
    resolveAttendancecompleteVariant,
    resolveAttendancescoreVariant,
    refetchData,

    filters,
    attendanceItems,
    searchValues

  }
}
