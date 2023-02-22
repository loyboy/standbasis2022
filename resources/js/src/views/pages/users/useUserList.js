import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useUserList( School = null ) {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    
    { key: 'username', label: 'User Name', sortable: true },
    { key: 'role',label: 'User Role',  sortable: true },
    { key: 'status',label: 'User Status',  sortable: true },
    { key: 'email',label: 'Email',  sortable: true },
    
    { key: 'actions' }
  ]
  const perPage = ref(10)
  const totalUsers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const filters = ref({
    schoolgroup: null,
    teacherid: null,
    schoolid: null
  });
 
  const totalActiveUsers = ref(0)
  const totalInactiveUsers = ref(0)
  const totalDeletedUsers = ref(0)

  const dataMeta = computed(() => {
    const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value,
    }//
  })

  const refetchData = () => {
    refUserListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchUsers = (ctx, callback) => {
    store
      .dispatch('app-user/fetchUsers', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: School ? null : filters.value.schoolgroup,
        school: School ? School : filters.value.schoolid,
        teacher: School ? null : filters.value.teacherid
      })
      .then(response => {
        const { users, totalItems, totalActive, totalInactive, totalDeleted } = response.data

        callback(users)
        totalUsers.value = totalItems
        totalActiveUsers.value = totalActive
        totalInactiveUsers.value = totalInactive
        totalDeletedUsers.value = totalDeleted

      })
      .catch((e) => {
        console.log("Fetch Users error: " + e)
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
    fetchUsers();
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
    fetchUsers,
    handlePageChange,

    totalUsers,
    totalActiveUsers,    
    totalInactiveUsers,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refUserListTable,

    resolveUserStatusVariant,
    refetchData,

    filters

  }
}
