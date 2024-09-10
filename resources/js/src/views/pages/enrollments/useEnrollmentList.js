import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useEnrollmentList(School = null) {
  // Use toast
  const toast = useToast()

  const refEnrollmentListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'student.name', label: 'Student Name', sortable: true },
    { key: 'student.gender',label: 'Student Gender',  sortable: true },
    { key: 'classstream.title',label: 'Student Class Name',  sortable: true },
    { key: 'classstream.ext',label: 'Student Class Arm',  sortable: true },
    { key: 'student.school.name',label: 'School Name',  sortable: true },
    { key: 'calendar.term',label: 'Calendar Term',  sortable: true },
    { key: 'calendar.session',label: 'Calendar Session',  sortable: true },
    { key: 'student.status', label: 'Status',  sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalEnrollments = ref(0)
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
 
  const totalPrimaryEnrollmentsMale =  ref(0);
  const totalPrimaryEnrollmentsFemale = ref(0);
  const totalSecEnrollmentsJuniorFemale = ref(0);
  const totalSecEnrollmentsJuniorMale = ref(0);
  const totalSecEnrollmentsSeniorFemale = ref(0);
  const totalSecEnrollmentsSeniorMale = ref(0);

  const dataMeta = computed(() => {
    const localItemsCount = refEnrollmentListTable.value ? refEnrollmentListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalEnrollments.value,
    }//
  })

  const refetchData = () => {
    refEnrollmentListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchEnrollments = (ctx, callback) => {
    store
      .dispatch('app-enrollment/fetchEnrollments', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        schoolgroup: School ? null: filters.value.schoolgroup,
        school: School ? School : filters.value.schoolid,
        supervisor: filters.value.supervisor
      })
      .then(response => {
        const { enrollments, totalItems, totalPMale, totalPFemale , totalJunSecMale , totalJunSecFemale, totalSenSecMale , totalSenSecFemale } = response.data
//
        callback(enrollments)
        totalEnrollments.value = totalItems
        totalPrimaryEnrollmentsMale.value = totalPMale
        totalPrimaryEnrollmentsFemale.value = totalPFemale
        totalSecEnrollmentsJuniorFemale.value = totalJunSecFemale;
        totalSecEnrollmentsJuniorMale.value = totalJunSecMale;
        totalSecEnrollmentsSeniorFemale.value = totalSenSecFemale;
        totalSecEnrollmentsSeniorMale.value = totalSenSecMale;

      })
      .catch((e) => {
        console.log("Fetch Enrollments error: " + e);
      })
  }

  const handlePageChange = (value) => {
    currentPage.value = value;
    fetchEnrollments();
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserStatusVariant = status => {
    if (status === 0) return 'warning'
    if (status === -1) return 'danger'    
    if (status === 1) return 'success'
    if (status === -99) return 'link'
    return 'primary'
  }

  const resolveUserTermVariant = status => {
    if (status === 1) return 'warning'
    if (status === 2) return 'info'    
    if (status === 3) return 'secondary'
    return 'primary'
  }

  return {
    fetchEnrollments,
    handlePageChange,

    totalEnrollments,
    totalPrimaryEnrollmentsMale,
    totalPrimaryEnrollmentsFemale,
    totalSecEnrollmentsJuniorFemale,
    totalSecEnrollmentsJuniorMale,
    totalSecEnrollmentsSeniorFemale,
    totalSecEnrollmentsSeniorMale,

    tableColumns,
    perPage,
    currentPage,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,

    refEnrollmentListTable,
    filters,

    resolveUserStatusVariant,
    resolveUserTermVariant,
    refetchData

  }
}
