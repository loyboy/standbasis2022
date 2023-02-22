import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useEventsList() {
  // Use toast
  const toast = useToast()

  const refEventListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'eventId', label: '#', sortable: true },
    { key: 'action', sortable: true },
    { key: 'module', sortable: true },
    { key: 'comment', sortable: true },
    { key: 'user', label: 'User role', sortable: true },
    { key: 'dateofevent', label: 'Date of event', sortable: true }
  ] 
  const perPage = ref(10)
  const totalEvents = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const schoolVal = ref(null)
  const schoolgroupVal = ref(null)
  const moduleFilter = ref(null)
  const searchStatus = ref(false)

  const dataMeta = computed(() => {
    const localItemsCount = refEventListTable.value ? refEventListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalEvents.value,
    } 
  })

  const refetchData = () => {
    refEventListTable.value.refresh()
  }
 
  watch([currentPage, perPage, searchQuery], () => {
    refetchData()
  })

  const fetchEvents = (ctx, callback) => {
    store
      .dispatch('app-event/fetchEvents', {
        size: perPage.value,
        page: currentPage.value - 1,
        q: searchQuery.value,
        school: schoolVal.value,
        schoolgroup: schoolgroupVal.value,
        module: moduleFilter.value
      })
      .then(response => {
        const { events, totalItems } = response.data

        callback(events)
        totalEvents.value = totalItems
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: "Error fetching Events' list",
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveEventStatusVariantAndIcon = status => {
    if (status === 'create') return { variant: 'success', icon: 'SaveIcon' }
    if (status === 'edit') return { variant: 'warning', icon: 'CheckCircleIcon' }
    if (status === 'delete') return { variant: 'danger', icon: 'ArrowDownCircleIcon' }
    if (status === 'read') return { variant: 'primary', icon: 'PieChartIcon' }

    return { variant: 'secondary', icon: 'XIcon' }
  }

  const resolveClientAvatarVariant = status => {
    if (status === 'create') return 'success'
    if (status === 'edit') return 'warning'
    if (status === 'delete') return 'danger'
    if (status === 'read') return 'primary'
    return 'primary'
  }

  return {
    fetchEvents,
    tableColumns,
    perPage,
    currentPage,
    totalEvents,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refEventListTable,

    schoolVal,
    schoolgroupVal,
    moduleFilter,
    searchStatus,

    resolveEventStatusVariantAndIcon,
    resolveClientAvatarVariant,

    refetchData,
  }
}

/**
 * 
 *  <!-- Column: Actions -->
        <!--
        <template #cell(actions)="data">
  
          <div class="text-nowrap">
            <feather-icon
              :id="`Event-row-${data.item.id}-send-icon`"
              icon="SendIcon"
              class="cursor-pointer"
              size="16"
            />
            <b-tooltip
              title="Send Event"
              class="cursor-pointer"
              :target="`Event-row-${data.item.id}-send-icon`"
            />
  
            <feather-icon
              :id="`Event-row-${data.item.id}-preview-icon`"
              icon="EyeIcon"
              size="16"
              class="mx-1"
              @click="$router.push({ name: 'apps-Event-preview', params: { id: data.item.id }})"
            />
            <b-tooltip
              title="Preview Event"
              :target="`Event-row-${data.item.id}-preview-icon`"
            />  
           
            <b-dropdown
              variant="link"
              toggle-class="p-0"
              no-caret
              :right="$store.state.appConfig.isRTL"
            >
  
              <template #button-content>
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="align-middle text-body"
                />
              </template>
              <b-dropdown-item>
                <feather-icon icon="DownloadIcon" />
                <span class="align-middle ml-50">Download</span>
              </b-dropdown-item>
              <b-dropdown-item :to="{ name: 'apps-Event-edit', params: { id: data.item.id } }">
                <feather-icon icon="EditIcon" />
                <span class="align-middle ml-50">Edit</span>
              </b-dropdown-item>
              <b-dropdown-item>
                <feather-icon icon="TrashIcon" />
                <span class="align-middle ml-50">Delete</span>
              </b-dropdown-item>
              <b-dropdown-item>
                <feather-icon icon="CopyIcon" />
                <span class="align-middle ml-50">Duplicate</span>
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </template>
        -->
 * 
 * 
 */
