import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
//import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useSchoolList( Owner = null ) {
  // Use toast
  const toast = useToast()

  const refSchoolListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'name', label: 'School Name', sortable: true },
    { key: 'owner.name',label: 'School Owner',  sortable: true },
    { key: 'type_of', label: 'School Type',  sortable: true },
    {
      key: 'gender',
      label: 'Gender of Students',
      sortable: true
    },

    {
      key: 'passwordchange',
      label: 'Dashboard Password',
      sortable: true,
    },

    {
      key: 'dashboarduser',
      label: 'Is DashboardUser?',
      sortable: true,
    },
    
    { key: 'status', label: 'School Status',  sortable: true },

    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalSchools = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const totalSecondarySchools = ref(0)
  const totalPrimarySchools = ref(0)

  const filters = ref({
    schoolgroup: null
  });

  const dataMeta = computed(() => {
    const localItemsCount = refSchoolListTable.value ? refSchoolListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalSchools.value,
    }//
  })

  const refetchData = () => {
    refSchoolListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchSchools = (ctx, callback) => {
    store
      .dispatch('app-school/fetchSchools', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        owner: Owner ? Owner : filters.value.schoolgroup
      })
      .then(async response => {
        const { schools, totalItems, totalSecondary, totalPrimary } = response.data

        for(let i = 0; i < schools.length; i++) {
         let eventres = await store.dispatch('app-school/getSchoolDashboard', { id: schools[i].schId });

         let event = eventres.data.data;

         schools[i]["passwordchange"] = event !== null ? true : false;
        }

        callback(schools);
        totalSchools.value = totalItems
        totalSecondarySchools.value = totalSecondary
        totalPrimarySchools.value = totalPrimary

      })
      .catch((e) => {
        console.log("Fetch schools error: " + e);
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    fetchSchools();
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

  const resolveDashboardVariant = status => {
    if (status === 0) return 'warning'
    if (status === 1) return 'success'
    
    return 'primary'
  }

  const resolvePasswordVariant = status => {
    if (status === false) return 'warning'
    if (status === true) return 'success'    
    return 'primary'
  }

  return {
    fetchSchools,
    handlePageChange,
    totalSchools,
    totalSecondarySchools,
    totalPrimarySchools,
   
    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refSchoolListTable,
    filters,

    resolveUserStatusVariant,
    resolveDashboardVariant,
    resolvePasswordVariant,
    refetchData

  }
}
