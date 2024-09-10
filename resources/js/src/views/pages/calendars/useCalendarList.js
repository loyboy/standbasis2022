import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useCalendarList(School = null) {
  // Use toast
  const toast = useToast()

  const refCalendarListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'school.name',label: 'School Name',  sortable: true },
    { key: 'session', label: 'Session of School', sortable: true },
    { key: 'term',label: 'Term of School',  sortable: true },
    { key: 'holiday',label: 'Holiday Periods',  sortable: true },
    { key: 'status',label: 'Status',  sortable: true },
    
    { key: 'actions' }
  ]
  const perPage = ref(10)
  const totalCalendars = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const filters = ref({
    schoolgroup: null,
    schoolid: null,
    supervisor: null
  });

  const totalActiveCalendars = ref(0)
  const totalInactiveCalendars = ref(0)

  const dataMeta = computed(() => {
    const localItemsCount = refCalendarListTable.value ? refCalendarListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalCalendars.value,
    }//
  })

  const refetchData = () => {
    refCalendarListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchCalendars = (ctx, callback) => {
    store
      .dispatch('app-calendar/fetchCalendars', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        school: School ? School : filters.value.schoolid,
        schoolgroup: School ? null : filters.value.schoolgroup,
        supervisor: filters.value.supervisor
      })
      .then(response => {
        const { calendars, totalItems, totalActive, totalInactive } = response.data

        callback(calendars)
        totalCalendars.value = totalItems
        totalActiveCalendars.value = totalActive
        totalInactiveCalendars.value = totalInactive

      })
      .catch((e) => {
        console.log("Fetch Calendars error: " + e)
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    fetchCalendars();
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserStatusVariant = status => {
    if (status === 0) return 'warning'
    if (status === -1) return 'danger'
    if (status === 1) return 'success'
    return 'primary'
  }

  return {
    fetchCalendars,
    handlePageChange,

    totalCalendars,
    totalActiveCalendars,    
    totalInactiveCalendars,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    filters,

    refCalendarListTable,

    resolveUserStatusVariant,
    refetchData

  }
}
