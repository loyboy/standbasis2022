import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'
 
// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useTimetableList(School = null, Teacher = null) {
  // Use toast
  const toast = useToast()

  const refTimetableListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    
    { key: 'school.name', label: 'School Name', sortable: true },
    { key: 'teacher.fname',label: 'Teacher Name',  sortable: true },
    { key: 'class_stream.title',label: 'Class Name',  sortable: true },
    { key: 'class_stream.ext',label: 'Class Arm',  sortable: true },
    { key: 'subject.name',label: 'Subject Name',  sortable: true },
    { key: 'time_of',label: 'Time of Class',  sortable: true },
    { key: 'day_of',label: 'Day of Class',  sortable: true },
    { key: 'status',label: 'Status',  sortable: true },
    { key: 'actions' }
  ]
  const perPage = ref(10)
  const totalTimetables = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const dayData = ref([ "Sunday", "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" ]);
  const filters = ref({
    schoolgroup: null,
    schoolid: null,
    teacherid: null
  });
 
  const totalActiveTimetables = ref(0)
  const totalInactiveTimetables = ref(0)
  const totalDeletedTimetables = ref(0)

  const dataMeta = computed(() => {
    const localItemsCount = refTimetableListTable.value ? refTimetableListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalTimetables.value,
    }//
  })

  const refetchData = () => {
    refTimetableListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchTimetables = (ctx, callback) => {
    store
      .dispatch('app-timetable/fetchTimetables', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: School || Teacher ? null: filters.value.schoolgroup,
        school: School ? School : filters.value.schoolid,
        teacher: Teacher ? Teacher : filters.value.teacherid
      })
      .then(response => {
        const { timetables, totalItems, totalActive, totalInactive, totalDeleted } = response.data

        callback(timetables)
        totalTimetables.value = totalItems
        totalActiveTimetables.value = totalActive
        totalInactiveTimetables.value = totalInactive
        totalDeletedTimetables.value = totalDeleted

      })
      .catch((e) => {
        console.log("Fetch Timetables error: " + e)
        /*toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching schools list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })*/
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    fetchTimetables();
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveTimetableStatusVariant = status => {
    if (status === 0) return 'warning'
if (status === -1) return 'danger'
    if (status === 1) return 'success'
    return 'primary'
  }

  return {
    fetchTimetables,
    handlePageChange,

    totalTimetables,
    totalActiveTimetables,    
    totalInactiveTimetables,

    dayData,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refTimetableListTable,
    filters,

    resolveTimetableStatusVariant,
    refetchData

  }
}
