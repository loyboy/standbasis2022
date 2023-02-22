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
  
  const isLoading = ref(false)

  // Table Handlers
  const tableColumns = [    
    { key: 'lsn_id.teacher.school.name', label: 'School Name', sortable: true },
    { key: 'lsn_id.teacher.fname',label: 'Teacher First Name',  sortable: true },
    { key: 'lsn_id.class_index', label: 'Class Name',  sortable: true },
    { key: 'lsn_id.subject.name',label: 'Subject Name',  sortable: true },  

    { key: 'ownertype',label: "Owner of Action",  sortable: true },
    { key: 'activity',label: "Expected Action",  sortable: true },
    { key: 'expected',label: "Actor's Expected Date of Action ",  sortable: true },
    { key: 'actual',label: "Actor's Actual Date of Action ",  sortable: true },

    { key: 'slip',label: "Principal's slip?",  sortable: true },
    { key: 'action',label: 'Status',  sortable: true },
    { key: 'comment_query',label: 'Comment(s)',  sortable: true },

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
    subjectId:null,
    status: null,
    slip: null,
    lsnId:null,
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
      .dispatch('app-LessonnoteActivity/fetchLessonnotes', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classIndex,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject: filters.value.subjectId,
        status: filters.value.status,
        slip: filters.value.slip,
        lessonnote: filters.value.lsnId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { Lessonnoteactivity, totalItems, totalSlip, totalNotSlip } = response.data
     
        LessonnoteItems.value = Lessonnoteactivity
        totalLessonnotes.value = totalItems
        totalActiveLessonnotes.value = totalNotSlip
        totalInactiveLessonnotes.value = totalSlip   
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
    if (status === 1) return 'warning'
    if (status === -1) return 'danger'
    if (status === 0) return 'success'
    return 'primary'
  }

  const resolveLessonnoteactionVariant = status => {
    if (status === 'approved') return 'success'
    if (status === 'queried') return 'danger'

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
    
    isLoading,

    resolveLessonnotestatusVariant,
    resolveLessonnoteactionVariant,
    refetchData,

    filters,
    LessonnoteItems,
    searchValues

  }
}
