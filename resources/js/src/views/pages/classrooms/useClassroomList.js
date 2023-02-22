import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useClassroomList(School = null) {
  // Use toast
  const toast = useToast()

  const refClassroomListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'title', label: 'Class Name', sortable: true },
    { key: 'ext',label: 'Class Extension',  sortable: true },
    { key: 'status',label: 'Status',  sortable: true },
    { key: 'school.name',label: 'School Name',  sortable: true },
    { key: 'actions' }
  ]
  const perPage = ref(10)
  const totalClassrooms = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const filters = ref({
    schoolgroup: null,
    schoolid: null
  });
 
  const totalActiveClassrooms = ref(0)
  const totalInactiveClassrooms = ref(0)

  const dataMeta = computed(() => {
    const localItemsCount = refClassroomListTable.value ? refClassroomListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalClassrooms.value,
    }//
  })

  const refetchData = () => {
    refClassroomListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchClassrooms = (ctx, callback) => {
    store
      .dispatch('app-classroom/fetchClassrooms', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        school: School ? School : filters.value.school,
        schoolgroup: School ? null : filters.value.schoolgroup
      })
      .then(response => {
        const { classrooms, totalItems, totalActive, totalInactive } = response.data

        callback(classrooms)
        totalClassrooms.value = totalItems
        totalActiveClassrooms.value = totalActive
        totalInactiveClassrooms.value = totalInactive

      })
      .catch((e) => {
        console.log("Fetch Classrooms error: " + e)
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
    fetchClassrooms();
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
    fetchClassrooms,
    handlePageChange,

    totalClassrooms,
    totalActiveClassrooms,    
    totalInactiveClassrooms,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refClassroomListTable,
    filters,

    resolveUserStatusVariant,
    refetchData

  }
}
