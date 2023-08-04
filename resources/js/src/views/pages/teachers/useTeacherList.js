import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useTeacherList(School = null) {
  // Use toast
  const toast = useToast()

  const refTeacherListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'school.name', label: 'School Name',  sortable: true },
    { key: 'fname', label: 'First Name', sortable: true },
    { key: 'lname',label: 'Last Name',  sortable: true },
    { key: 'office',label: 'Designation',  sortable: true },
    { key: 'gender',label: 'Gender',  sortable: true },
    { key: 'bias',label: 'Bias',  sortable: true },
    { key: 'status', label: 'Status',  sortable: true },    
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalTeachers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const filters = ref({
    schoolgroup: null,
    schoolid: null
  });
 
  const totalActiveTeachers = ref(0)
  const totalInactiveTeachers = ref(0)
  const totalDeployedTeachers = ref(0)
  const totalUnderDeployedTeachers = ref(0)
  const totalOverDeployedTeachers = ref(0)

  const dataMeta = computed(() => {
    const localItemsCount = refTeacherListTable.value ? refTeacherListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalTeachers.value,
    }
  })

  const refetchData = () => {
    refTeacherListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchTeachers = (ctx, callback) => {
    store
      .dispatch('app-teacher/fetchTeachers', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: School ? null : filters.value.schoolgroup,
        school: School ? School : filters.value.schoolid
      })
      .then(response => {
        const { teachers, totalItems, totalActive, totalInactive, totalUnder, totalDeploy, totalOver } = response.data

        callback(teachers)
        totalTeachers.value = totalItems
        totalActiveTeachers.value = totalActive
        totalInactiveTeachers.value = totalInactive
        totalUnderDeployedTeachers.value = totalUnder
        totalDeployedTeachers.value = totalDeploy
        totalOverDeployedTeachers.value = totalOver
      })
      .catch((e) => {
        console.log("Fetch teachers error: " + e)
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
    fetchTeachers();
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
    fetchTeachers,
    handlePageChange,

    totalTeachers,
    totalActiveTeachers,    
    totalInactiveTeachers,
    totalDeployedTeachers,
    totalUnderDeployedTeachers,
    totalOverDeployedTeachers,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refTeacherListTable,
    filters,

    resolveUserStatusVariant,
    refetchData

  }
}
