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
  const userData = ref({});
  const storedItems = JSON.parse(localStorage.getItem('userData'));
  if (storedItems){
    userData.value = storedItems;
  }

  // Table Handlers
  const tableColumns = [    
    { key: 'lessonnoteId', label: 'Lessonnote ID', sortable: true },
    { key: 'teacher.fname', label: 'Teacher First Name',  sortable: true },
    { key: 'class_index', label: 'Class Name',  sortable: true },
    { key: 'subject.name',label: 'Subject Name',  sortable: true },

    { key: 'week', label: 'Week',  sortable: true },
    { key: 'submission', label: 'Date of Submission',  sortable: true, formatter: val => val !== null ? `${val} ` : "No date yet" },
    { key: 'status', label: 'Status',  sortable: true },

    { key: 'calendar.session', label: 'Session',  sortable: true },
    { key: 'calendar.term', label: 'Term',  sortable: true },

    { key: 'actions' } 
  ]
 
    // Table Handlers 
    const tableColumnsPrincipal = [    
      { key: 'lsn_id.lessonnoteId', label: 'Lessonnote ID', sortable: true },
      { key: 'lsn_id.teacher.fname', label: 'Teacher First Name',  sortable: true },
      { key: 'lsn_id.class_index', label: 'Class Name',  sortable: true },
      { key: 'lsn_id.subject.name',label: 'Subject Name',  sortable: true },

      { key: 'lsn_id.calendar.session', label: 'Session',  sortable: true },
      { key: 'lsn_id.calendar.term', label: 'Term',  sortable: true },

      { key: 'lsn_id.week', label: 'Week',  sortable: true },
      { key: 'lsn_id.submission', label: 'Date',  sortable: true, formatter: val => val !== null ? `${val} ` : "No date yet" },

      { key: 'management',label: 'Management',  sortable: true }, //Quality
      { key: 'sub_perf_classwork',label: 'Classwork Perf.',  sortable: true },   
      { key: 'sub_perf_homework',label: 'Homework Perf.',  sortable: true },
      { key: 'sub_perf_test',label: 'Test Perf.',  sortable: true },  

      { key: 'action', label: 'Status',  sortable: true },    
     
      { key: 'actions', label: 'Actions',  sortable: true , thStyle: { width: "20%" } } 
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
    dateTo: null,

    hasClasswork: true,
    hasHomework: true,
    hasTest: true,
    hasMidTerm: false,
    hasFinalExam: false
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

  const isWithinSevenDays = (date1, date2) => {
    if (date2 < date1) {
      return false;
    }  
    let diffInMilliseconds = Math.round(date2 - date1);        
    return diffInMilliseconds <= 604800000; // 7 days in milliseconds
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchLessonnotes = (ctx) => {
  
    let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
    let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
    isLoading.value = true;
    if ( userData.value.role === "teacher" ){  
      store.dispatch('app-lessonnote/fetchLessonnotes', {
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
          const { lessonnotes, totalItems, totalSubmitted, totalClosed } = response.data
      
          LessonnoteItems.value = lessonnotes
          totalLessonnotes.value = totalItems
          totalActiveLessonnotes.value = totalSubmitted
          totalInactiveLessonnotes.value = totalClosed    
          isLoading.value = false;   

        })
        .catch((e) => {
          console.log("Fetch teacher Lessonnotes error: " + e);
          isLoading.value = false;   
        })
    }
    else if ( userData.value.role === "principal" ) {
      store.dispatch('app-lessonnote/fetchLessonnoteManagements', {
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
        status: filters.value.status, //management status o!
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { lessonnotemanagement } = response.data

        const showCurrent = lessonnotemanagement.filter( o => { 
          const expiry_date_of_submission = new Date(o.lsn_id.expected_submission).getTime();
          const late_last_date = expiry_date_of_submission + (48 * 60 * 60 * 1000);
          const todayDate = new Date().getTime();
        
          return isWithinSevenDays(todayDate, late_last_date);  //plus late submission days
        
        } )

        LessonnoteItems.value = showCurrent   
        isLoading.value = false;   

      })
      .catch((e) => {
          console.log("Fetch principal lessonnotes error: " + e);
          isLoading.value = false;   
      })
    }
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
    if (status === 0) return 'warning'
    if (status === 2) return 'primary'
    if (status === 3) return 'secondary'
    if (status === -1) return 'danger'
    if (status === 1) return 'success'
    return 'primary'
  }

  const resolveLessonnoteactionVariant = status => {
    if (status === "submit") return 'secondary'
    if (status === "re-submitted") return 'primary'
    if (status === "resubmit") return 'primary'
    if (status === "approved") return 'success'
    if (status === "revert") return 'danger'
    if (status === "closure") return 'success'
    if (status === "closed") return 'info'
    return 'primary'
  }

  const resolveLessonnotemagVariant = status => {
    if (status === 100) return 'success'
    if (status === 60) return 'primary'
    if (status === 50) return 'warning'
    if (status === 30) return 'danger'
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
    tableColumnsPrincipal,
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
    resolveLessonnotemagVariant,
    resolveLessonnoteactionVariant,
    refetchData,

    filters,
    LessonnoteItems,
    searchValues

  }
}
