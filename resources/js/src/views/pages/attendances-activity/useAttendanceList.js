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
  const isManagementSidebarActive = ref(false)
  const isLoading = ref(false)

  // Table Handlers
  const tableColumns = [    
    { key: 'att_id.teacher.school.name', label: 'School Name', sortable: true },
    { key: 'att_id.teacher.fname',label: 'Teacher First Name',  sortable: true },
    { key: 'att_id.timetable.class_stream.title',label: 'Class Name',  sortable: true },
    { key: 'att_id.timetable.class_stream.ext',label: 'Class Arm',  sortable: true },
    { key: 'att_id.timetable.subject.name',label: 'Subject Name',  sortable: true },
    { key: 'expected',label: "Principal's Expected Date of Action ",  sortable: true },
    { key: 'actual',label: "Principal's Actual Date of Action ",  sortable: true },

    { key: 'slip',label: "Principal's slip?",  sortable: true },
    { key: 'action',label: 'Status',  sortable: true },
    { key: 'comment_query',label: 'Comment(s)',  sortable: true },
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
    subjectId:null,
    status: null,
    slip: null,
    attId:null,
    dateFrom: null,
    dateTo: null
  });
  const totalActiveAttendances = ref(0)
  const totalInactiveAttendances = ref(0)
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
      .dispatch('app-AttendanceActivity/fetchAttendances', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classId,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject: filters.value.subjectId,
        status: filters.value.status,
        slip: filters.value.slip,
        attendance: filters.value.attId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { attendanceactivity, totalItems, totalSlip, totalNotSlip } = response.data
     
        attendanceItems.value = attendanceactivity
        totalAttendances.value = totalItems
        totalActiveAttendances.value = totalNotSlip
        totalInactiveAttendances.value = totalSlip   
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Attendances error: " + e);
        isLoading.value = false;   
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
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
    if (status === 1) return 'warning'
    if (status === -1) return 'danger'
    if (status === 0) return 'success'
    return 'primary'
  }

  const resolveAttendanceactionVariant = status => {
    if (status === 'approved') return 'success'
    if (status === 'queried') return 'danger'

    return 'primary'
  }
  return {
    fetchAttendances,
    handlePageChange,
    handleChange,

    totalAttendances,
    totalActiveAttendances,    
    totalInactiveAttendances,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refAttendanceListTable,
    isAttendanceSidebarActive,
    isManagementSidebarActive,
    isLoading,

    resolveAttendancestatusVariant,
    resolveAttendanceactionVariant,
    refetchData,

    filters,
    attendanceItems,
    searchValues

  }
}
