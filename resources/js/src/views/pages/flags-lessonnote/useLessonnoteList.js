import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

const userDataItem = JSON.parse(localStorage.getItem('userData'));

export default function useLessonnoteList() {
  
  const refLessonnoteListTable = ref(null)
  const isLoading = ref(false)
  const lessonnoteItems = ref([])

  // Table Handlers
  const tableColumns = [    
    { key: 'parameter',label: 'Flag Type', sortable: true, tdClass: "tdBlue"},
    { key: 'expected',label: 'Expected Count',  sortable: true },
    { key: 'value',label: 'Actual',  sortable: true }
  ]  
  
  const filters = ref({
    schoolgroup: null, 
    schoolId: null,
    classId: null,//unused
    schoolyear: "2025/2026",
    schoolterm: null,
    week: null,
    calendarId: null,//unused
    teacherId:null,//unused
    subjectId: null,//unused
    dateFrom: null,//unused
    dateTo: null//unused
  });

  const refetchData = () => {
    refLessonnoteListTable.value.refresh()
  }

  const extractValues = () => {
    const parts = userDataItem.cal_txt.split("|").map((part) => part.trim());

    if (parts.length === 3) {
      const weekPart = parts[0];
      const sessionPart = parts[1];
      const termPart = parts[2];

      const weekMatch = weekPart.match(/Week (\d+)/);
      filters.value.week = weekMatch && weekMatch[1] ? Number(weekMatch[1]) : "";

      filters.value.schoolyear  = sessionPart;

      const termMatch = termPart.match(/Term (\d+)/);
      filters.value.schoolterm = termMatch && termMatch[1] ? Number(termMatch[1]) : "";
    }
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
        week: filters.value.week,
        schoolyear: filters.value.schoolyear,
        schoolterm: filters.value.schoolterm,

        class: filters.value.classId,
        teacher: filters.value.teacherId,
        subject:  filters.value.subjectId,
        datefrom: dateF,
        dateto: dateT
      })
      .then(response => {
        const { total_lessonnotes, teacher_submitted, teacher_late_submitted , 
                teacher_late_approval , teacher_no_approval , teacher_queried , 
                teacher_bad_cycles , teacher_late_closure , teacher_no_closure
              } = response.data;
     
      lessonnoteItems.value = [ 
        { parameter: "Total Lessonsnote (LN) Submission", value: teacher_submitted  , expected: total_lessonnotes }, 
        { parameter: "LN Late Submission", value: teacher_late_submitted , expected: "0" }, 
        { parameter: "LN Late Approval", value: teacher_late_approval , expected: "0"},
        { parameter: "LN No Approval", value: teacher_no_approval , expected: "0"},
        { parameter: "LN Queried", value: teacher_queried, expected: "0"},
        { parameter: "LN With Quality Issues", value: teacher_bad_cycles, expected: "0"},
        { parameter: "LN Late Closure", value: teacher_late_closure, expected: "0"},
        { parameter: "LN No Closure", value: teacher_no_closure, expected: "0"}
      ];
        
        isLoading.value = false;   

        store
        .dispatch('app-LessonnoteMNE/fetchLessonnotesStudents', {
          q: "",
          schoolgroup: filters.value.schoolgroup,
          school: filters.value.schoolId,
          class: filters.value.classId,
          week: filters.value.week,
          schoolyear: filters.value.schoolyear,
          schoolterm: filters.value.schoolterm,
          
          calendar: filters.value.calendarId,
          student: null,
          subject:  filters.value.subjectId,
          datefrom: dateF,
          dateto: dateT
        })
        .then(response => {
          const { student_homework, student_classwork , student_test , students } = response.data;
       
          lessonnoteItems.value = [
            ...lessonnoteItems.value,
            { parameter: "LN assessment performance: > 50% (Classwork)", value: student_classwork , expected: students }, 
            { parameter: "LN assessment performance: > 50% (Homework)",  value: student_homework , expected: students},
            { parameter: "LN assessment performance: > 50% (Test)",      value: student_test, expected: students}            
          ];
          
          isLoading.value = false;   
  
        })
        .catch((e) => {
          console.log("Fetch Lessonnotes M&E error: " + e);
          isLoading.value = false;   
        })

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

    extractValues,

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
