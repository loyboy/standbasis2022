import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useEvaluation() {

    const mnelistItems = ref([]);
    const userData = ref({});
    const isLoading = ref(false);
    const changeFieldsStudents = ref(false)
    const dyFieldsStudents = ref([]);

    const headTotal = ref(0);
    const teacherTotal = ref(0);

    const changeFieldsTeacher = ref(false)
    const dyFieldsTeacher = ref([])

    const filters = ref({
        schoolId: null,
        teacherId: null,
        enrolId: null,
        schoolgroup: null,
        supervisor: null,

        typeone: null,
        typetwo_student: null,
        typetwo_teacher: null,
        typetwo_principal: null,
        typeassess: null,
        typethree: null,
        typefour: null

    });

    userData.value = JSON.parse(localStorage.getItem('userData'));

    const dynamicFields = computed(() => {
        let fields = [];

        if (changeFieldsStudents.value === true) {
            fields = [...dyFieldsStudents.value, {
                key: 'performanceMessage',
                label: '',
                class: 'text-center text-muted',
                thClass: 'd-none',
                tdClass: 'py-4'
            }];

        } else if (changeFieldsTeacher.value === true) {
            fields = [...dyFieldsTeacher.value, {
                key: 'performanceMessage',
                label: '',
                class: 'text-center text-muted',
                thClass: 'd-none',
                tdClass: 'py-4'
            }];
        }

        return fields;
    })

    const dynamicColumnData = computed(() => {
        if (!Array.isArray(mnelistItems.value)) {
            return [];
        }

        return mnelistItems.value.map(item => {
            const performance = Number(item ? .performance);

            if (performance === 0) {
                return {
                    ...item,
                    _showDetails: true,
                    performanceMessage: 'No performance data available',
                    isPlaceholder: true
                };
            }
            return item;
        });
    });

    /*  const normalizeData = (apiData) => {
          return apiData.map(item => {
              return {
                  d1: item.d1 ? ? 0,
                  d2: item.d2 ? ? 0,
                  d3: item.d3 ? ? 0,
                  d4: item.d4 ? ? 0,
                  d5: item.d5 ? ? 0,
                  d6: item.d6 ? ? 0,
                  d7: item.d7 ? ? 0,
                  d8: item.d8 ? ? 0,
                  d9: item.d9 ? ? 0,
                  d10: item.d10 ? ? 0,
                  performance: item.performance ? ? 0,
                  student_name: (item.student_name || "").trim()
              };
          });
      }*/

    // For student assessment
    const fetchMneVariant = () => {
        isLoading.value = true;

        store.dispatch('app-MneLessonnote/fetchMne', { enrol: filters.value.typetwo_student, type: filters.value.typeassess, teacher: null, calendar: filters.value.typefour, week: filters.value.typethree })
            .then(response => {

                const { mnecolumndata, mnecolumns } = response.data;

                dyFieldsStudents.value = mnecolumns

                mnelistItems.value = mnecolumndata;

                isLoading.value = false;
                changeFieldsStudents.value = true;
                changeFieldsTeacher.value = false;
            })
            .catch((e) => {
                console.log("Fetch Mne Viewing error: " + e);
                isLoading.value = false;
            })
    }

    // For teacher lessonnote
    const fetchMneVariant2 = () => {
        isLoading.value = true;

        store.dispatch('app-MneLessonnote/fetchMne', { teacher: filters.value.typetwo_teacher, type: filters.value.typeassess, enrol: null, calendar: filters.value.typefour, week: filters.value.typethree })
            .then(response => {

                const { mnecolumndata, mnecolumns } = response.data;

                dyFieldsTeacher.value = mnecolumns

                mnelistItems.value = normalizeDataT(mnecolumndata);

                isLoading.value = false;
                changeFieldsTeacher.value = true;
                changeFieldsStudents.value = false;
            })
            .catch((e) => {
                console.log("Fetch Mne Viewing error: " + e);
                isLoading.value = false;
            })
    }

    const fetchMneVariant3 = () => {
        isLoading.value = true;

        store.dispatch('app-MneLessonnote/fetchMneTwo', { group: filters.value.schoolgroup, type: filters.value.typeassess, school: filters.value.schoolId, calendar: filters.value.typefour, week: filters.value.typethree })
            .then(response => {

                const { teacher_management, head_admin } = response.data;

                headTotal.value = head_admin;

                teacherTotal.value = teacher_management;

                isLoading.value = false;

            })
            .catch((e) => {
                console.log("Fetch Mne Viewing error: " + e);
                isLoading.value = false;
            })
    }


    const handleChange = (ctx) => {
        // console.log("Click on Teacher Me : " + filters.value.typeone + " : " + filters.value.typetwo_teacher + " :  " + filters.value.typefour);
        if (filters.value.typeone === "student" && filters.value.typetwo_student && filters.value.typefour) {
            fetchMneVariant();
            window.scrollBy(0, 200);
        } else if (filters.value.typeone === "teacher_me" && filters.value.typetwo_teacher === null && filters.value.typefour) {
            fetchMneVariant2();
            window.scrollBy(0, 200);
        } else if (filters.value.typeone === "teacher" && filters.value.typetwo_teacher && filters.value.typefour) {
            fetchMneVariant2();
            window.scrollBy(0, 200);
        } else if (userData.value.role === "proprietor" && filters.value.schoolgroup) {
            fetchMneVariant3();
            window.scrollBy(0, 200);
        } else if (userData.value.role === "supervisor" && filters.value.supervisor) {
            fetchMneVariant3();
            window.scrollBy(0, 200);
        } else {
            window.alert(" Please select all appropriate options before beginning the search. ")
        }
    }

    /**
     * Use this as the table data object: 
          [
            {
              "createdAt": "2023-04-28T13:39:31Z",
              "updatedAt": "2023-04-28T13:39:31Z",
              "jobvalueId": 1,
              "round": 1,
              "roundId": "8-1682689171",
              "value": null,
              "performance": null,
              "evaluation": {
                "createdAt": "2023-01-01T11:00:00Z",
                "updatedAt": "2023-01-01T11:00:00Z",
                "jobId": 1,
                "area": "Core Processes",
                "subarea": "Attendance management",
                "element": "Taking",
                "inquiry": "Does the school take class attendance?",
                "how": "Sight an attendance sheet within a week of exercise",
                "factor": 20,
                "optionOne": "yes = 5",
                "optionTwo": "no = 0",
                "optionThree": null,
                "optionFour": null,
                "optionFive": null
              }
            }
          ] 


             { key: 'student_name', label: 'Student Name', sortable: true  },    
      { key: 'd1',label: 'English Lang.',  sortable: true },
      { key: 'd2',label: 'Mathematics',  sortable: true },
      { key: 'd3',label: 'Basic Science',  sortable: true },
      { key: 'd4',label: 'Physical & Health Education',  sortable: true },
      { key: 'd5',label: 'Christian Religious Knowledge',  sortable: true },
      { key: 'd6',label: 'Civic Education',  sortable: true },
      { key: 'd7',label: 'Social studies',  sortable: true },
      { key: 'd8',label: 'Cultural and Creative Arts',  sortable: true },
      { key: 'd9',label: 'Agriculture',  sortable: true },
      { key: 'd10',label: 'Home Economics',  sortable: true },
      { key: 'd11',label: 'Business Studies',  sortable: true },
      { key: 'd12',label: 'Fine Arts',  sortable: true },
      { key: 'd13',label: 'Marketing',  sortable: true },
      { key: 'd14',label: 'Economics',  sortable: true },
      { key: 'd15',label: 'Geography',  sortable: true },
      { key: 'd16',label: 'French',  sortable: true },

      { key: 'performance',label: 'Performance',  sortable: true }

     * 
     */

    return {
        fetchMneVariant,

        fetchMneVariant2,

        isLoading,

        filters,

        dynamicFields,

        dynamicColumnData,

        filters,

        handleChange,

        mnelistItems,

        headTotal,

        teacherTotal

    }
}