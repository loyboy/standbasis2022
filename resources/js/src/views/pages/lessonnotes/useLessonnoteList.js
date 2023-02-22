import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useLessonnoteList() {
  // Use toast
  const toast = useToast()

  const refLessonnoteListTable = ref(null)
  const isLessonnoteSidebarActive = ref(false)
  const isManagementSidebarActive = ref(false)
  const isLoading = ref(false)

  // Table Handlers
  const tableColumns = [    
    { key: 'teacher.school.name', label: 'School Name', sortable: true },
    { key: 'teacher.fname', label: 'Teacher First Name',  sortable: true },
    { key: 'class_index', label: 'Class Name',  sortable: true },
    { key: 'subject.name',label: 'Subject Name',  sortable: true },
    { key: 'grammar',label: 'Grammar',  sortable: true, formatter: val => val !== null ? `${val} %` : "nil" },
    { key: 'arrangement',label: 'Arrangement',  sortable: true, formatter: val => val !== null ? `${val} %` : "nil" },
    { key: 'week', label: 'Week',  sortable: true },
    { key: 'submission', label: 'Date of Submission',  sortable: true },
    { key: 'status', label: 'Status',  sortable: true },
    { key: 'calendar.session', label: 'Session',  sortable: true },
    { key: 'calendar.term', label: 'Term',  sortable: true },
    { key: 'actions' } 
  ]

  const perPage = ref(10)
  const totalLessonnotes = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  
  const LessonnoteItems = ref([])
  const filters = ref({
    schoolgroup: null,
    schoolId: null,
    classIndex: null,
    calendarId: null,
    teacherId:null,
    subjectId: null,
    week: null,
    status: null,    
    dateFrom: null,
    dateTo: null
  });
  const totalActiveLessonnotes = ref(0)
  const totalInactiveLessonnotes = ref(0)
  const searchValues = ref([])

  const dataMeta = computed(() => {
    const localItemsCount = refLessonnoteListTable.value ? refLessonnoteListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalLessonnotes.value,
    }// 
  })

  const refetchData = () => {
    refLessonnoteListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchLessonnotes = (ctx) => {
  
    let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
    let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
    isLoading.value = true;
    store
      .dispatch('app-lessonnote/fetchLessonnotes', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classIndex,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject:  filters.value.subjectId,
        week: filters.value.week,
        status: filters.value.status,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { lessonnotes, totalItems, totalSubmitted, totalNotSubmitted } = response.data
     
        LessonnoteItems.value = lessonnotes
        totalLessonnotes.value = totalItems
        totalActiveLessonnotes.value = totalSubmitted
        totalInactiveLessonnotes.value = totalNotSubmitted    
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Lessonnotes error: " + e);
        isLoading.value = false;   
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    fetchLessonnotes();
  }

  const handleChange = () => {
    currentPage.value = 1;
    isLessonnoteSidebarActive.value = false;
    fetchLessonnotes();
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveLessonnotestatusVariant = status => {
    if (status === 0) return 'warning'
    if (status === 2) return 'primary'
    if (status === 3) return 'secondary'
    if (status === -1) return 'danger'
    if (status === 1) return 'success'
    return 'primary'
  }

  return {
    fetchLessonnotes,
    handlePageChange,
    handleChange,

    totalLessonnotes,
    totalActiveLessonnotes,    
    totalInactiveLessonnotes,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refLessonnoteListTable,
    isLessonnoteSidebarActive,
    isManagementSidebarActive,
    isLoading,

    resolveLessonnotestatusVariant,
    refetchData,

    filters,
    LessonnoteItems,
    searchValues

  }
}
