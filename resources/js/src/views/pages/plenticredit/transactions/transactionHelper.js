import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { paginateArray, sortCompare } from '@core/utils/utils'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function transactionHelper(transaction) {
    // Use toast
    const toast = useToast()

    const refInvoiceListTable = ref(null)

    // Table Handlers
    const tableColumns = [
        { key: 'id', label: '#', sortable: true },
        { key: 'loanId', sortable: true },
        { key: 'amount', sortable: true },
        { key: 'status', sortable: true },
        { key: 'paymentDate', sortable: true },
        { key: 'installment', sortable: true },
        { key: 'actions' },  // Todo
    ]
    const perPage = ref(10)
    const totalInvoices = ref(0)
    const currentPage = ref(1)
    const perPageOptions = [10, 25, 50, 100]
    const searchQuery = ref('')
    const sortBy = ref('id')
    const isSortDirDesc = ref(true)
    const statusFilter = ref(null)

    const dataMeta = computed(() => {
        const localItemsCount = refInvoiceListTable.value ? refInvoiceListTable.value.localItems.length : 0
        return {
            from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
            to: perPage.value * (currentPage.value - 1) + localItemsCount,
            of: totalInvoices.value,
        }
    })

    const refetchData = () => {
        refInvoiceListTable.value.refresh()
    }

    watch([currentPage, perPage, searchQuery, statusFilter], () => {
        refetchData()
    })

    const fetchLoanRepaid = (ctx, callback) => {
        let sortedData = null
        if (searchQuery.value !== "") {
            const queryLowered = searchQuery.value.toLowerCase()
            const filteredData = transaction.filter(
                    transaction =>
                    /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
                    (transaction.amount == queryLowered) || (transaction.id == queryLowered)
                    // user.role === (role || user.role) &&
                    // user.currentPlan === (plan || user.currentPlan) &&
                    // user.status === (status || user.status),
                )
                /* eslint-enable  */

            sortedData = filteredData.sort(sortCompare(sortBy))
            if (isSortDirDesc) sortedData.reverse()
        } else {
            sortedData = transaction
        }


        let rows = paginateArray(sortedData, 5, currentPage.value)
        callback(rows)
        totalInvoices.value = sortedData.length

    }

    return {
        fetchLoanRepaid,
        tableColumns,
        perPage,
        currentPage,
        totalInvoices,
        dataMeta,
        perPageOptions,
        searchQuery,
        sortBy,
        isSortDirDesc,
        refInvoiceListTable,

        statusFilter,

        refetchData
    }
}