import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useLessonnoteList() {
  
  const refLessonnoteListTable = ref(null)
  const isLoading = ref(false)
  const lessonnoteItems = ref([])

  // Table Handlers
  const tableColumns = [    
    { key: 'parameter',label: 'Flag Type', sortable: true, tdClass: "tdBlue"},
    { key: 'expected',label: 'Expected Count',  sortable: true },
    { key: 'value',label: 'Value',  sortable: true }
  ]  
  
  const filters = ref({
    schoolgroup: null, 
    schoolId: null,
    classId: null,//unused
    week: null,
    calendarId: null,
    teacherId:null,//unused
    subjectId: null,//unused
    dateFrom: null,//unused
    dateTo: null//unused
  });

  const refetchData = () => {
    refLessonnoteListTable.value.refresh()
  }

  const fetchLessonnotes = (ctx) => {
  
    let dateF = filters.value.dateFrom !== null ? String(filters.value.dateFrom) + " 00:00:00" : null;
    let dateT = filters.value.dateTo !== null ? String(filters.value.dateTo) + " 00:00:00" : null;
    isLoading.value = true;
    store
      .dispatch('app-LessonnoteMNE/fetchLessonnotes', {
        q: "",
        schoolgroup: filters.value.schoolgroup,
        school: filters.value.schoolId,
        class: filters.value.classId,
        week: filters.value.week,
        calendar: filters.value.calendarId,
        teacher: filters.value.teacherId,
        subject:  filters.value.subjectId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { teacher_submitted, teacher_late_closure , teacher_bad_cycles , principal_no_approval , principal_late_approval } = response.data;
     
        lessonnoteItems.value = [ 
        { parameter: "Total Submitted Lessonnote", value: teacher_submitted , expected: " 100 %" }, 
        { parameter: "Lessonnote Late Closure", value: teacher_late_closure,expected: " 0 %" }, 
        { parameter: "Lessonnote Bad Cycles", value: teacher_bad_cycles , expected: " 0 %"},
        { parameter: "Lessonnote No Approvals (Principal)", value: principal_no_approval, expected: " 0 %"},
        { parameter: "Lessonnote Late Approvals (Principal)", value: principal_late_approval, expected: " 0 %"}
      ];
        
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch Lessonnotes M&E error: " + e);
        isLoading.value = false;   
      })
  }

  const handleChange = () => {
    fetchLessonnotes();
  }

  return {
    fetchLessonnotes,
  
    handleChange,

    tableColumns,

    refLessonnoteListTable,
  
    isLoading,

    refetchData,

    filters,

    lessonnoteItems

  }
}
