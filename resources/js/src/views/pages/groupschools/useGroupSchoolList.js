import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useSchoolGroupList() {
  // Use toast
  const toast = useToast()

  const refSchoolGroupListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'name', label: 'Group Name', sortable: false },
    { key: 'createdAt',label: 'Created At',  sortable: true },
    { key: 'updatedAt', label: 'Updated At',  sortable: true },  
    { key: 'actions' }
  ]
  const perPage = ref(10)
  const totalGroupSchools = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('name')
  const isSortDirDesc = ref(true)

  const dataMeta = computed(() => {
    const localItemsCount = refSchoolGroupListTable.value ? refSchoolGroupListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalGroupSchools.value,
    }//
  })

  const refetchData = () => {
    refSchoolGroupListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchSchoolGroups = (ctx, callback) => {
    store
      .dispatch('app-schoolgroup/fetchGroups', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value
      })
      .then(response => {
        const { schoolgroups, totalItems } = response.data

        callback(schoolgroups)
        totalGroupSchools.value = totalItems;     

      })
      .catch((e) => {
        console.log("Fetch school group error: " + e)
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
    fetchSchoolGroups();
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchSchoolGroups,
    handlePageChange,
    totalGroupSchools,
 
    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refSchoolGroupListTable,

    resolveUserStatusVariant,
    refetchData

  }
}
