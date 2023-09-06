import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
//import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useLessonnoteList() {
  // Use toast 
  const toast = useToast()

  const refLessonnoteListTable = ref(null) 
  const isLessonnoteSidebarActive = ref(false) 
  
  const isLoading = ref(false)

  // Table Handlers
  const tableColumns = [    
    { key: 'lsn.title', label: 'Lessonnote Name', sortable: true },
    { key: 'enrol.student.name', label: "Student Name",  sortable: true },   
    { key: 'lsn.teacher.school.name', label: 'School Name', sortable: true },
    { key: 'lsn.teacher.fname', label: 'Teacher First Name',  sortable: true },
    { key: 'lsn.class_index', label: 'Class Name',  sortable: true },
    { key: 'lsn.subject.name', label: 'Subject Name',  sortable: true },  

    { key: '_type', label: "Assessment Type",  sortable: true },
    { key: 'score', label: "Percentage Score",  sortable: true },
    { key: '_date', label: "Date of Submission ",  sortable: true },   

    { key: 'actions' }
  ]
  const perPage = ref(10) 
  const totalLessonnotes = ref(0)
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

  const LessonnoteItems = ref([])
  const filters = ref({
    schoolgroup: null,
    schoolId: null,
    classIndex: null,
    calendarId: null,
    teacherId:null,
    subjectId:null,
    studentId: null,
    assessType: null,
    scoreRange: null,
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
      .dispatch('app-LessonnoteStudent/fetchLessonnotes', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classIndex,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject: filters.value.subjectId,
        student: filters.value.studentId,
        type: filters.value.assessType,
        score: filters.value.scoreRange,
        lessonnote: filters.value.lsnId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { lessonnotes, totalItems, passedAssessment, notPassedAssessment } = response.data
     
        LessonnoteItems.value = lessonnotes
        totalLessonnotes.value = totalItems
        totalActiveLessonnotes.value = passedAssessment
        totalInactiveLessonnotes.value = notPassedAssessment   
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Lessonnotes error: " + e);
        isLoading.value = false;   
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    console.log("Cal: " + filters.value.calendarId);
    filters.value.calendarId = userData.value.cal_id;
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
    if (status <= 49) return 'danger'
    if (status <= 59 && status >= 50) return 'warning'
    if (status <= 69 && status >= 60) return 'primary'
    if (status >= 70) return 'success'
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
