import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
//import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useSchoolList( Owner = null ) {
  // Use toast
  const toast = useToast();

  const lgaCodes = {
    "abak": "96201",
    "eastern obolo": "96202",
    "eket": "96203",
    "esit eket": "96204",
    "essien udim": "96205",
    "etim ekpo": "96206",
    "etinan": "96207",
    "ibeno": "96208",
    "ibesikpo asutan": "96209",
    "ibiono ibom": "96210",
    "ika": "96211",
    "ikono": "96212",
    "ikot abasi": "96213",
    "ikot ekpene": "96214",
    "ini": "96215",
    "itu": "96216",
    "mbo": "96217",
    "mkpat enin": "96218",
    "nsit atai": "96219",
    "nsit ibom": "96220",
    "nsit ubium": "96221",
    "obot akara": "96222",
    "okobo": "96223",
    "onna": "96224",
    "oron": "96225",
    "oruk anam": "96226",
    "udung uko": "96227",
    "ukanafun": "96228",
    "uruan": "96229",
    "urue offong oruko": "96230",
    "uyo": "96231",
    "agege": "96001",
    "alimosho": "96002",
    "apapa": "96003",
    "ifako-ijaye": "96004",
    "ikeja": "96005",
    "kosofe": "96006",
    "mushin": "96007",
    "oshodi-isolo": "96008",
    "shomolu": "96009",
    "eti-osa": "96010",
    "lagos-island": "96011",
    "lagos-mainland": "96012",
    "surulere": "96013",
    "ojo": "96014",
    "ajeromi-ifelodun": "96015",
    "amuwo-odofin": "96016",
    "badagry": "96017",
    "ikorodu": "96018",
    "ibeju-lekki": "96019",
    "epe": "96020",
    "aba-north": "96301",
    "aba-south": "96302",
    "arochukwu": "96303",
    "bende": "96304",
    "ikwuano": "96305",
    "isiala-ngwa-north": "96306",
    "isiala-ngwa-south": "96307",
    "isiukwuato": "96308",
    "obingwa": "96309",
    "ohafia": "96310",
    "osisioma-ngwa": "96311",
    "ugwunagbo": "96312",
    "ukwa-east": "96313",
    "ukwa-west": "96314",
    "umuahia-north": "96315",
    "umuahia-south": "96316",
    "umu-neochi": "96317"
}

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
    schoolgroup: null,
    schoolid: null
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
            console.log("Event pull: "+ JSON.stringify(eventres))
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

    lgaCodes,
   
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
