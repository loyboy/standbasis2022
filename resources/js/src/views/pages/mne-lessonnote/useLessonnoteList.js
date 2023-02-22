import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useLessonnoteList() {
  
  const refLessonnoteListTable = ref(null)
  const isLoading = ref(false)
  const lessonnoteItems = ref([])

  // Table Handlers
  const tableColumns = [    
    { key: 'parameter', label: 'Parameter', sortable: true },
    { key: 'value',label: 'Value',  sortable: true }
  ]  
  
  const filters = ref({
    schoolgroup: null, 
    schoolId: null,
    classId: null,
    week: null,
    calendarId: null,
    teacherId:null,
    subjectId: null,
    dateFrom: null,
    dateTo: null
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
        const { teacher_low_quality, teacher_late_closure, teacher_bad_cycles, teacher_no_approval } = response.data;
     
        lessonnoteItems.value = [ { parameter: "Lessonnote Low Quality", value: teacher_low_quality }, { parameter: "Lessonnote Late Closure", value: teacher_late_closure }, 
        { parameter: "Lessonnote Bad Cycles", value: teacher_bad_cycles },{ parameter: "Lessonnote No Approvals", value: teacher_no_approval } ];
        
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
