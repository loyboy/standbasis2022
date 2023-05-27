import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

export default function useEvaluation() {
  
  const isLoading = ref(false)
  const isArea = ref(false)
  const isSubArea = ref(false)
  const isSchool = ref(false)
  const roundItems = ref([])
  const evaluationlistItems = ref([])
  const evaluationTempList = ref([])

  const filters = ref({  
    schoolId: null,
    userId: null,

    typeone: null, 
    typetwo_school: null,
    typetwo_schoolgroup: null,
    typetwo_schoolzone: null,
    typethree:null,
    typefour: null
  });

  const oneroundItem = ref({ 
    coreprocess : [],
    ins_resource : [],
    learning_env : [],
    total_student : [],
    sustainability : [],
    academic : [],
    sshe : []
  });
  
  // Table Handlers
  const tableColumns = [    
    { key: 'evaluation.subarea', label: 'Sub-Area', sortable: true  },    
    { key: 'evaluation.element',label: 'Element',  sortable: true },
    { key: 'evaluation.inquiry',label: 'Inquiry',  sortable: true,  thStyle: { width: "20%" } },
   
    { key: 'evaluation.optionOne',label: 'Option 1',  sortable: true , thStyle: { width: "10%" } },
    { key: 'evaluation.optionTwo',label: 'Option 2',  sortable: true , thStyle: { width: "10%" } },
    { key: 'evaluation.optionThree', label: 'Option 3',  sortable: true , thStyle: { width: "10%" } },
    { key: 'evaluation.optionFour', label: 'Option 4',  sortable: true , thStyle: { width: "10%" } },
    { key: 'evaluation.optionFive', label: 'Option 5',  sortable: true , thStyle: { width: "10%" } } 
  ]

  /*watch([filters], () => {
    if (filters.value.typefour === "fulllist"){
      console.log("Seen: fulllist")
      isSchool.value = true;
      isSubArea.value = false;
      isArea.value = false;
    }
    else if (filters.value.typefour === "subarea"){
      console.log("Seen: subarea")
      isSchool.value = false;
      isSubArea.value = true;
      isArea.value = false;
    }
    else if (filters.value.typefour === "area"){
      console.log("Seen: area")
      isSchool.value = false;
      isSubArea.value = false;
      isArea.value = true;
    }
  })*/


  const dynamicFields = computed(() => {
      let fields = [];
      if(isArea.value === true) {
        fields.push({ key: 'area', label: 'Area', sortable: true  });       
        fields.push({ key: 'performance',label: 'Performance',  sortable: true, formatter: val => `${val}` , thStyle: { width: "20%" } } );
      }

      else if(isSubArea.value === true){  
        fields.push({ key: 'area', label: 'Area', sortable: true  });      
        fields.push({ key: 'subarea', label: 'Sub-Area', sortable: true  });        
        fields.push({ key: 'performance',label: 'Performance',  sortable: true, formatter: val => `${val}` , thStyle: { width: "20%" } } );
      }

      else if(isSchool.value === true){    
        fields.push({ key: 'area', label: 'Area', sortable: true  });    
        fields.push({ key: 'subarea', label: 'Sub-Area', sortable: true  });
        fields.push({ key: 'element',label: 'Element',  sortable: true });
        fields.push({ key: 'performance',label: 'Performance',  sortable: true, formatter: val => `${val}` , thStyle: { width: "20%" } } );
      }

      return fields;
  })
  
  const completionComputed = computed(() => {

        const totalPerformanceCount = oneroundItem.value.coreprocess.length;
        let coreprocessPerformanceCount = 0;
        // Check for performance values in coreprocess

        oneroundItem.value.coreprocess.forEach((item) => {
          if (item.performance !== null) {
            coreprocessPerformanceCount++;
          }
        });

        const totalPerformanceCount2 = oneroundItem.value.ins_resource.length;
        let insResourcePerformanceCount = 0;

        // Check for performance values in ins_resource
        oneroundItem.value.ins_resource.forEach((item) => {
          if (item.performance !== null) {
            insResourcePerformanceCount++;
          }
        });

        const totalPerformanceCount3 = oneroundItem.value.learning_env.length;
        let learningEnvPerformanceCount = 0;

        // Check for performance values in learning_env
        oneroundItem.value.learning_env.forEach((item) => {
          if (item.performance !== null) {
            learningEnvPerformanceCount++;
          }
        });

        const totalPerformanceCount4 = oneroundItem.value.total_student.length;
        let totalStudentPerformanceCount = 0;

        // Check for performance values in total_student
        oneroundItem.value.total_student.forEach((item) => {
          if (item.performance !== null) {
            totalStudentPerformanceCount++;
          }
        });

        const totalPerformanceCount5 = oneroundItem.value.sustainability.length;
        let sustainabilityPerformanceCount = 0;

        // Check for performance values in sustainability
        oneroundItem.value.sustainability.forEach((item) => {
          if (item.performance !== null) {
            sustainabilityPerformanceCount++;
          }
        });

        const totalPerformanceCount6 = oneroundItem.value.academic.length;
        let academicPerformanceCount = 0;

        // Check for performance values in academic
        oneroundItem.value.academic.forEach((item) => {
          if (item.performance !== null) {
            academicPerformanceCount++;
          }
        });

        const totalPerformanceCount7 = oneroundItem.value.sshe.length;
        let sshePerformanceCount = 0;

        // Check for performance values in academic
        oneroundItem.value.sshe.forEach((item) => {
          if (item.performance !== null) {
            sshePerformanceCount++;
          }
        });

      return {
        coreprocess:  ((coreprocessPerformanceCount / totalPerformanceCount) * 100).toFixed(2),
        insresource:  ((insResourcePerformanceCount / totalPerformanceCount2) * 100).toFixed(2),
        learningenv:  ((learningEnvPerformanceCount / totalPerformanceCount3) * 100).toFixed(2),
        totalstudent: ((totalStudentPerformanceCount / totalPerformanceCount4) * 100).toFixed(2),
        sustainability: ((sustainabilityPerformanceCount / totalPerformanceCount5) * 100).toFixed(2),
        academic: ((academicPerformanceCount / totalPerformanceCount6) * 100).toFixed(2),
        sshe: ((sshePerformanceCount / totalPerformanceCount7) * 100).toFixed(2),
        total: ( ( ( (coreprocessPerformanceCount / totalPerformanceCount) * 100 ) + 
                 ( (insResourcePerformanceCount / totalPerformanceCount2) * 100 ) + 
                 ( (learningEnvPerformanceCount / totalPerformanceCount3) * 100 ) +
                 ( (totalStudentPerformanceCount / totalPerformanceCount4) * 100 ) +
                 ( (sustainabilityPerformanceCount / totalPerformanceCount5) * 100 ) +
                 ( (academicPerformanceCount / totalPerformanceCount6) * 100 ) +
                 ( (sshePerformanceCount / totalPerformanceCount7) * 100 ) 
               ) / 7 ).toFixed(2)
      }

  })

  const fetchRoundsInEvaluation = (ctx) => {
      isLoading.value = true;

      store.dispatch('app-Evaluation/fetchRounds', {   
          school: filters.value.schoolId,
          user: filters.value.userId
        })
        .then(response => {
          
          const evaluationrounds = response.data.data;
      
          roundItems.value = evaluationrounds
          
          isLoading.value = false;   

        })
        .catch((e) => {
          console.log("Fetch Evaluation for Evaluation Viewing error: " + e);
          isLoading.value = false;   
      })
  }

  const fetchOneRoundInEvaluation = (roundId) => {
      isLoading.value = true;

      store.dispatch('app-Evaluation/fetchRound', {id : roundId})
      .then(response => {
        
        const { round, coreprocesss, instrutor_resource, learning_env, total_student, sustainability, academic, sshe } = response.data;

        oneroundItem.value.round = round
        oneroundItem.value.coreprocess = coreprocesss
        oneroundItem.value.ins_resource = instrutor_resource
        oneroundItem.value.learning_env = learning_env
        oneroundItem.value.total_student = total_student
        oneroundItem.value.sustainability = sustainability
        oneroundItem.value.academic = academic
        oneroundItem.value.sshe = sshe

        isLoading.value = false;
      })
      .catch((e) => {
        console.log("Fetch Evaluation for one round Viewing error: " + e);
        isLoading.value = false;   
    })
  }

  const fetchOneRoundInEvaluationVariant = () => {
    isLoading.value = true;

    store.dispatch('app-Evaluation/fetchRound', { id : filters.value.typethree })
    .then(response => {
      
      const { coreprocesss, instrutor_resource, learning_env, total_student, sustainability, academic, sshe } = response.data;

  //    evaluationlistItems.value = [ ...coreprocesss, ...instrutor_resource, ...learning_env, ...total_student, ...sustainability , ...academic, ...sshe ]; 
      
      if (isArea.value === true){
          let obj_coreprocess, obj_instructor, obj_learning, obj_total, obj_sus, obj_academic, obj_sshe = {};        
          const average_coreprocess = coreprocesss.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / coreprocesss.length;
          const average_instructor = instrutor_resource.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / instrutor_resource.length;
          const average_learning = learning_env.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / learning_env.length;
          const average_total = total_student.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / total_student.length;
          const average_sus = sustainability.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / sustainability.length;
          const average_academic = academic.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / academic.length;
          const average_sshe = sshe.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / sshe.length;

          obj_coreprocess = { area: "Core Processes", performance: Number(average_coreprocess).toFixed(2) }
          obj_instructor = { area: "Instructor Resource", performance: Number(average_instructor).toFixed(2) }
          obj_learning = { area: "Learning Environment", performance:  Number(average_learning).toFixed(2) }
          obj_total = { area: "Total Student Environment", performance:  Number(average_total).toFixed(2) }
          obj_sus = { area: "Sustainability", performance:  Number(average_sus).toFixed(2) }
          obj_academic = { area: "Academic", performance:  Number(average_academic).toFixed(2) }
          obj_sshe = { area: "Safety, Health, Environment, Security", performance: Number(average_sshe).toFixed(2) }
          
          evaluationlistItems.value = []
          evaluationlistItems.value.push(obj_coreprocess);
          evaluationlistItems.value.push(obj_instructor);
          evaluationlistItems.value.push(obj_learning);
          evaluationlistItems.value.push(obj_total);
          evaluationlistItems.value.push(obj_sus);
          evaluationlistItems.value.push(obj_academic);
          evaluationlistItems.value.push(obj_sshe);
          evaluationTempList.value = evaluationlistItems.value
      }

      else if (isSubArea.value === true){
        let obj_coreprocess1, obj_coreprocess2, obj_coreprocess3,
        obj_instructor, 
        obj_learning1, obj_learning2, obj_learning3, obj_learning4, obj_learning5,
        obj_total1, obj_total2, obj_total3, obj_total4,
        obj_sus1, obj_sus2, obj_sus3, obj_sus4, obj_sus5, obj_sus6,
        obj_academic1, obj_academic2,
        obj_sshe1, obj_sshe2, obj_sshe3, obj_sshe4  = {};

        const average_coreprocess1 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "attendance management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "attendance management" ).length;

        const average_coreprocess2 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "lesson note management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "lesson note management" ).length;

        const average_coreprocess3 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "m&e management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "m&e management" ).length;

        const average_instructor = instrutor_resource.filter(o => String(o.evaluation.subarea).toLowerCase() === "instructor resource" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / instrutor_resource.filter(o => String(o.evaluation.subarea).toLowerCase() === "instructor resource" ).length;

        const average_learning1 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "classroom" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "classroom" ).length;

        const average_learning2 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "laboratory, studio, workshop" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "laboratory, studio, workshop" ).length;

        const average_learning3 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "library" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "library" ).length;

        const average_learning4 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "teaching aids" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "teaching aids" ).length;

        const average_learning5 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "outdoors" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "outdoors" ).length;

        const average_total1 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "games & sports" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "games & sports" ).length;

        const average_total2 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "other competitions" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "other competitions" ).length;

        const average_total3 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "socials" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "socials" ).length;

        const average_total4 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "domain relationship" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "domain relationship" ).length;

        const average_sus1 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for teachers" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for teachers" ).length;

        const average_sus2 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for non-teachers" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for non-teachers" ).length;

        const average_sus3 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "policy, guidelines & manuals" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "policy, guidelines & manuals" ).length;

        const average_sus4 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "records management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "records management" ).length;

        const average_sus5 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "technology adoption" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "technology adoption" ).length;

        const average_sus6 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "governance" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "governance" ).length;

        const average_aca1 = academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance internal" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance internal" ).length;

        const average_aca2 = academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance external" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance external" ).length;

        const average_sshe1 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "safety" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "safety" ).length;

        const average_sshe2 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "health" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "health" ).length;

        const average_sshe3 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "environment" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "environment" ).length;

        const average_sshe4 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "security" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "security" ).length;

        obj_coreprocess1 = { area: "Core Processes", subarea: "Attendance Management", performance: Number(average_coreprocess1).toFixed(2) }
        obj_coreprocess2 = { area: "Core Processes", subarea: "Lessonnote Management", performance: Number(average_coreprocess2).toFixed(2) }
        obj_coreprocess3 = { area: "Core Processes", subarea: "M&E Management", performance: Number(average_coreprocess3).toFixed(2) }
        obj_instructor = { area: "Instructor Resource", subarea: "Instructor Resource", performance: Number(average_instructor).toFixed(2) }
        obj_learning1 = { area: "Learning Environment", subarea: "Classroom", performance: Number(average_learning1).toFixed(2) }
        obj_learning2 = { area: "Learning Environment", subarea: "Laboratory, Studio, Workshop", performance: Number(average_learning2).toFixed(2) }
        obj_learning3 = { area: "Learning Environment", subarea: "Library", performance: Number(average_learning3).toFixed(2) }
        obj_learning4 = { area: "Learning Environment", subarea: "Teaching Aids", performance: Number(average_learning4).toFixed(2) }
        obj_learning5 = { area: "Learning Environment", subarea: "Outdoors", performance: Number(average_learning5).toFixed(2) }
        obj_total1 = { area: "Total Student Development", subarea: "Games And Sports", performance: Number(average_total1).toFixed(2) }
        obj_total2 = { area: "Total Student Development", subarea: "Other Competitions", performance: Number(average_total2).toFixed(2) }
        obj_total3 = { area: "Total Student Development", subarea: "Socials", performance: Number(average_total3).toFixed(2) }
        obj_total4 = { area: "Total Student Development", subarea: "Domain Relationships", performance: Number(average_total4).toFixed(2) }
        obj_sus1 = { area: "Sustainability", subarea: "Capacity Development for Teachers", performance: Number(average_sus1).toFixed(2) }
        obj_sus2 = { area: "Sustainability", subarea: "Capacity Development for Non-Teachers", performance: Number(average_sus2).toFixed(2) }
        obj_sus3 = { area: "Sustainability", subarea: "Policy, Guidelines & Manuals", performance: Number(average_sus3).toFixed(2) }
        obj_sus4 = { area: "Sustainability", subarea: "Records Management", performance: Number(average_sus4).toFixed(2) }
        obj_sus5 = { area: "Sustainability", subarea: "Technology Adoption", performance: Number(average_sus5).toFixed(2) }
        obj_sus6 = { area: "Sustainability", subarea: "Governance", performance: Number(average_sus6).toFixed(2) }
        obj_academic1 = { area: "Academic Performance", subarea: "Academic Performance Internal", performance: Number(average_aca1).toFixed(2) }
        obj_academic2 = { area: "Academic Performance", subarea: "Academic Performance External", performance: Number(average_aca2).toFixed(2) }
        obj_sshe1 = { area: "Safety, Health, Environment, Security", subarea: "Safety", performance: Number(average_sshe1).toFixed(2) }
        obj_sshe2 = { area: "Safety, Health, Environment, Security", subarea: "Health", performance: Number(average_sshe2).toFixed(2) }
        obj_sshe3 = { area: "Safety, Health, Environment, Security", subarea: "Environment", performance: Number(average_sshe3).toFixed(2) }
        obj_sshe4 = { area: "Safety, Health, Environment, Security", subarea: "Security", performance: Number(average_sshe4).toFixed(2) }
        evaluationlistItems.value = []
        evaluationlistItems.value.push(obj_coreprocess1);
        evaluationlistItems.value.push(obj_coreprocess2);
        evaluationlistItems.value.push(obj_coreprocess3);
        evaluationlistItems.value.push(obj_instructor);
        evaluationlistItems.value.push(obj_learning1);
        evaluationlistItems.value.push(obj_learning2);
        evaluationlistItems.value.push(obj_learning3);
        evaluationlistItems.value.push(obj_learning4);
        evaluationlistItems.value.push(obj_learning5);
        evaluationlistItems.value.push(obj_total1);
        evaluationlistItems.value.push(obj_total2);
        evaluationlistItems.value.push(obj_total3);
        evaluationlistItems.value.push(obj_total4);
        evaluationlistItems.value.push(obj_sus1);
        evaluationlistItems.value.push(obj_sus2);
        evaluationlistItems.value.push(obj_sus3);
        evaluationlistItems.value.push(obj_sus4);
        evaluationlistItems.value.push(obj_sus5);
        evaluationlistItems.value.push(obj_sus6);
        evaluationlistItems.value.push(obj_academic1);
        evaluationlistItems.value.push(obj_academic2);
        evaluationlistItems.value.push(obj_sshe1);
        evaluationlistItems.value.push(obj_sshe2);
        evaluationlistItems.value.push(obj_sshe3);
        evaluationlistItems.value.push(obj_sshe4);

        evaluationTempList.value = evaluationlistItems.value
      }
      else if(isSchool.value === true){

          let bigevaluation = [ ...coreprocesss, ...instrutor_resource, ...learning_env, ...total_student, ...sustainability, ...academic, ...sshe ];
          let newevaluation = bigevaluation.map(o => {            
            return {
              area: o.evaluation.area,
              subarea: o.evaluation.subarea,
              element: o.evaluation.element,
              performance: o.performance
            }
          })

          evaluationlistItems.value = newevaluation
          evaluationTempList.value = newevaluation
      }

      isLoading.value = false;

    })
    .catch((e) => {
      console.log("Fetch Evaluation for one round Viewing error: " + e);
      isLoading.value = false;   
    })
  }

  const fetchOneRoundInEvaluationVariant2 = () => {
    isLoading.value = true;

    store.dispatch('app-Evaluation/fetchRoundByGroup', { group: filters.value.typetwo_schoolgroup })
    .then(response => {

      const { coreprocesss, instrutor_resource, learning_env, total_student, sustainability, academic, sshe } = response.data;
      
      if (isArea.value === true){
          let obj_coreprocess, obj_instructor, obj_learning, obj_total, obj_sus, obj_academic, obj_sshe = {};        
          const average_coreprocess = coreprocesss.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / coreprocesss.length;
          const average_instructor = instrutor_resource.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / instrutor_resource.length;
          const average_learning = learning_env.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / learning_env.length;
          const average_total = total_student.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / total_student.length;
          const average_sus = sustainability.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / sustainability.length;
          const average_academic = academic.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / academic.length;
          const average_sshe = sshe.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.performance;
          }, 0) / sshe.length;

          obj_coreprocess = { area: "Core Processes", performance: Number(average_coreprocess).toFixed(2) }
          obj_instructor = { area: "Instructor Resource", performance: Number(average_instructor).toFixed(2) }
          obj_learning = { area: "Learning Environment", performance:  Number(average_learning).toFixed(2) }
          obj_total = { area: "Total Student Environment", performance:  Number(average_total).toFixed(2) }
          obj_sus = { area: "Sustainability", performance:  Number(average_sus).toFixed(2) }
          obj_academic = { area: "Academic", performance:  Number(average_academic).toFixed(2) }
          obj_sshe = { area: "Safety, Health, Environment, Security", performance: Number(average_sshe).toFixed(2) }
          
          evaluationlistItems.value = []
          evaluationlistItems.value.push(obj_coreprocess);
          evaluationlistItems.value.push(obj_instructor);
          evaluationlistItems.value.push(obj_learning);
          evaluationlistItems.value.push(obj_total);
          evaluationlistItems.value.push(obj_sus);
          evaluationlistItems.value.push(obj_academic);
          evaluationlistItems.value.push(obj_sshe);
          evaluationTempList.value = evaluationlistItems.value
      }

      else if (isSubArea.value === true){
        let obj_coreprocess1, obj_coreprocess2, obj_coreprocess3,
        obj_instructor, 
        obj_learning1, obj_learning2, obj_learning3, obj_learning4, obj_learning5,
        obj_total1, obj_total2, obj_total3, obj_total4,
        obj_sus1, obj_sus2, obj_sus3, obj_sus4, obj_sus5, obj_sus6,
        obj_academic1, obj_academic2,
        obj_sshe1, obj_sshe2, obj_sshe3, obj_sshe4  = {};

        const average_coreprocess1 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "attendance management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "attendance management" ).length;

        const average_coreprocess2 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "lesson note management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "lesson note management" ).length;

        const average_coreprocess3 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "m&e management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "m&e management" ).length;

        const average_instructor = instrutor_resource.filter(o => String(o.evaluation.subarea).toLowerCase() === "instructor resource" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / instrutor_resource.filter(o => String(o.evaluation.subarea).toLowerCase() === "instructor resource" ).length;

        const average_learning1 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "classroom" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "classroom" ).length;

        const average_learning2 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "laboratory, studio, workshop" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "laboratory, studio, workshop" ).length;

        const average_learning3 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "library" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "library" ).length;

        const average_learning4 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "teaching aids" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "teaching aids" ).length;

        const average_learning5 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "outdoors" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "outdoors" ).length;

        const average_total1 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "games & sports" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "games & sports" ).length;

        const average_total2 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "other competitions" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "other competitions" ).length;

        const average_total3 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "socials" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "socials" ).length;

        const average_total4 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "domain relationship" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "domain relationship" ).length;

        const average_sus1 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for teachers" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for teachers" ).length;

        const average_sus2 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for non-teachers" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for non-teachers" ).length;

        const average_sus3 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "policy, guidelines & manuals" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "policy, guidelines & manuals" ).length;

        const average_sus4 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "records management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "records management" ).length;

        const average_sus5 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "technology adoption" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "technology adoption" ).length;

        const average_sus6 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "governance" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "governance" ).length;

        const average_aca1 = academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance internal" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance internal" ).length;

        const average_aca2 = academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance external" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance external" ).length;

        const average_sshe1 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "safety" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "safety" ).length;

        const average_sshe2 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "health" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "health" ).length;

        const average_sshe3 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "environment" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "environment" ).length;

        const average_sshe4 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "security" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "security" ).length;

        obj_coreprocess1 = { area: "Core Processes", subarea: "Attendance Management", performance: Number(average_coreprocess1).toFixed(2) }
        obj_coreprocess2 = { area: "Core Processes", subarea: "Lessonnote Management", performance: Number(average_coreprocess2).toFixed(2) }
        obj_coreprocess3 = { area: "Core Processes", subarea: "M&E Management", performance: Number(average_coreprocess3).toFixed(2) }
        obj_instructor = { area: "Instructor Resource", subarea: "Instructor Resource", performance: Number(average_instructor).toFixed(2) }
        obj_learning1 = { area: "Learning Environment", subarea: "Classroom", performance: Number(average_learning1).toFixed(2) }
        obj_learning2 = { area: "Learning Environment", subarea: "Laboratory, Studio, Workshop", performance: Number(average_learning2).toFixed(2) }
        obj_learning3 = { area: "Learning Environment", subarea: "Library", performance: Number(average_learning3).toFixed(2) }
        obj_learning4 = { area: "Learning Environment", subarea: "Teaching Aids", performance: Number(average_learning4).toFixed(2) }
        obj_learning5 = { area: "Learning Environment", subarea: "Outdoors", performance: Number(average_learning5).toFixed(2) }
        obj_total1 = { area: "Total Student Development", subarea: "Games And Sports", performance: Number(average_total1).toFixed(2) }
        obj_total2 = { area: "Total Student Development", subarea: "Other Competitions", performance: Number(average_total2).toFixed(2) }
        obj_total3 = { area: "Total Student Development", subarea: "Socials", performance: Number(average_total3).toFixed(2) }
        obj_total4 = { area: "Total Student Development", subarea: "Domain Relationships", performance: Number(average_total4).toFixed(2) }
        obj_sus1 = { area: "Sustainability", subarea: "Capacity Development for Teachers", performance: Number(average_sus1).toFixed(2) }
        obj_sus2 = { area: "Sustainability", subarea: "Capacity Development for Non-Teachers", performance: Number(average_sus2).toFixed(2) }
        obj_sus3 = { area: "Sustainability", subarea: "Policy, Guidelines & Manuals", performance: Number(average_sus3).toFixed(2) }
        obj_sus4 = { area: "Sustainability", subarea: "Records Management", performance: Number(average_sus4).toFixed(2) }
        obj_sus5 = { area: "Sustainability", subarea: "Technology Adoption", performance: Number(average_sus5).toFixed(2) }
        obj_sus6 = { area: "Sustainability", subarea: "Governance", performance: Number(average_sus6).toFixed(2) }
        obj_academic1 = { area: "Academic Performance", subarea: "Academic Performance Internal", performance: Number(average_aca1).toFixed(2) }
        obj_academic2 = { area: "Academic Performance", subarea: "Academic Performance External", performance: Number(average_aca2).toFixed(2) }
        obj_sshe1 = { area: "Safety, Health, Environment, Security", subarea: "Safety", performance: Number(average_sshe1).toFixed(2) }
        obj_sshe2 = { area: "Safety, Health, Environment, Security", subarea: "Health", performance: Number(average_sshe2).toFixed(2) }
        obj_sshe3 = { area: "Safety, Health, Environment, Security", subarea: "Environment", performance: Number(average_sshe3).toFixed(2) }
        obj_sshe4 = { area: "Safety, Health, Environment, Security", subarea: "Security", performance: Number(average_sshe4).toFixed(2) }
        evaluationlistItems.value = []
        evaluationlistItems.value.push(obj_coreprocess1);
        evaluationlistItems.value.push(obj_coreprocess2);
        evaluationlistItems.value.push(obj_coreprocess3);
        evaluationlistItems.value.push(obj_instructor);
        evaluationlistItems.value.push(obj_learning1);
        evaluationlistItems.value.push(obj_learning2);
        evaluationlistItems.value.push(obj_learning3);
        evaluationlistItems.value.push(obj_learning4);
        evaluationlistItems.value.push(obj_learning5);
        evaluationlistItems.value.push(obj_total1);
        evaluationlistItems.value.push(obj_total2);
        evaluationlistItems.value.push(obj_total3);
        evaluationlistItems.value.push(obj_total4);
        evaluationlistItems.value.push(obj_sus1);
        evaluationlistItems.value.push(obj_sus2);
        evaluationlistItems.value.push(obj_sus3);
        evaluationlistItems.value.push(obj_sus4);
        evaluationlistItems.value.push(obj_sus5);
        evaluationlistItems.value.push(obj_sus6);
        evaluationlistItems.value.push(obj_academic1);
        evaluationlistItems.value.push(obj_academic2);
        evaluationlistItems.value.push(obj_sshe1);
        evaluationlistItems.value.push(obj_sshe2);
        evaluationlistItems.value.push(obj_sshe3);
        evaluationlistItems.value.push(obj_sshe4);

        evaluationTempList.value = evaluationlistItems.value
      }

      else if(isSchool.value === true){

          let bigevaluation = [ ...coreprocesss, ...instrutor_resource, ...learning_env, ...total_student, ...sustainability, ...academic, ...sshe ];
          let newevaluation = bigevaluation.map(o => {            
            return {
              area: o.evaluation.area,
              subarea: o.evaluation.subarea,
              element: o.evaluation.element,
              performance: o.performance
            }
          })

          evaluationlistItems.value = newevaluation
          evaluationTempList.value = newevaluation
      }

      isLoading.value = false;
    })
    .catch((e) => {
      console.log("Fetch Evaluation for group evaluation Viewing error: " + e);
      isLoading.value = false;   
    })
  }

  const fetchOneRoundInEvaluationVariant3 = () => {
    isLoading.value = true;

    store.dispatch('app-Evaluation/fetchRoundByZone', { zone : filters.value.typetwo_schoolzone })
    .then(response => {

      const { coreprocesss, instrutor_resource, learning_env, total_student, sustainability, academic, sshe } = response.data;

      if (isArea.value === true){
        let obj_coreprocess, obj_instructor, obj_learning, obj_total, obj_sus, obj_academic, obj_sshe = {};        
        const average_coreprocess = coreprocesss.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.length;
        const average_instructor = instrutor_resource.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / instrutor_resource.length;
        const average_learning = learning_env.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.length;
        const average_total = total_student.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.length;
        const average_sus = sustainability.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.length;
        const average_academic = academic.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / academic.length;
        const average_sshe = sshe.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.length;

        obj_coreprocess = { area: "Core Processes", performance: Number(average_coreprocess).toFixed(2) }
        obj_instructor = { area: "Instructor Resource", performance: Number(average_instructor).toFixed(2) }
        obj_learning = { area: "Learning Environment", performance:  Number(average_learning).toFixed(2) }
        obj_total = { area: "Total Student Environment", performance:  Number(average_total).toFixed(2) }
        obj_sus = { area: "Sustainability", performance:  Number(average_sus).toFixed(2) }
        obj_academic = { area: "Academic", performance:  Number(average_academic).toFixed(2) }
        obj_sshe = { area: "Safety, Health, Environment, Security", performance: Number(average_sshe).toFixed(2) }
        
        evaluationlistItems.value = []
        evaluationlistItems.value.push(obj_coreprocess);
        evaluationlistItems.value.push(obj_instructor);
        evaluationlistItems.value.push(obj_learning);
        evaluationlistItems.value.push(obj_total);
        evaluationlistItems.value.push(obj_sus);
        evaluationlistItems.value.push(obj_academic);
        evaluationlistItems.value.push(obj_sshe);
        evaluationTempList.value = evaluationlistItems.value
      }

      else if (isSubArea.value === true){
        let obj_coreprocess1, obj_coreprocess2, obj_coreprocess3,
        obj_instructor, 
        obj_learning1, obj_learning2, obj_learning3, obj_learning4, obj_learning5,
        obj_total1, obj_total2, obj_total3, obj_total4,
        obj_sus1, obj_sus2, obj_sus3, obj_sus4, obj_sus5, obj_sus6,
        obj_academic1, obj_academic2,
        obj_sshe1, obj_sshe2, obj_sshe3, obj_sshe4  = {};

        const average_coreprocess1 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "attendance management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "attendance management" ).length;

        const average_coreprocess2 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "lesson note management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "lesson note management" ).length;

        const average_coreprocess3 = coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "m&e management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / coreprocesss.filter(o => String(o.evaluation.subarea).toLowerCase() === "m&e management" ).length;

        const average_instructor = instrutor_resource.filter(o => String(o.evaluation.subarea).toLowerCase() === "instructor resource" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / instrutor_resource.filter(o => String(o.evaluation.subarea).toLowerCase() === "instructor resource" ).length;

        const average_learning1 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "classroom" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "classroom" ).length;

        const average_learning2 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "laboratory, studio, workshop" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "laboratory, studio, workshop" ).length;

        const average_learning3 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "library" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "library" ).length;

        const average_learning4 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "teaching aids" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "teaching aids" ).length;

        const average_learning5 = learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "outdoors" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / learning_env.filter(o => String(o.evaluation.subarea).toLowerCase() === "outdoors" ).length;

        const average_total1 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "games & sports" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "games & sports" ).length;

        const average_total2 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "other competitions" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "other competitions" ).length;

        const average_total3 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "socials" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "socials" ).length;

        const average_total4 = total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "domain relationship" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / total_student.filter(o => String(o.evaluation.subarea).toLowerCase() === "domain relationship" ).length;

        const average_sus1 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for teachers" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for teachers" ).length;

        const average_sus2 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for non-teachers" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "capacity development for non-teachers" ).length;

        const average_sus3 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "policy, guidelines & manuals" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "policy, guidelines & manuals" ).length;

        const average_sus4 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "records management" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "records management" ).length;

        const average_sus5 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "technology adoption" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "technology adoption" ).length;

        const average_sus6 = sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "governance" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "governance" ).length;

        const average_aca1 = academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance internal" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sustainability.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance internal" ).length;

        const average_aca2 = academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance external" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / academic.filter(o => String(o.evaluation.subarea).toLowerCase() === "academic performance external" ).length;

        const average_sshe1 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "safety" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "safety" ).length;

        const average_sshe2 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "health" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "health" ).length;

        const average_sshe3 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "environment" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "environment" ).length;

        const average_sshe4 = sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "security" ).reduce((accumulator, currentValue) => {
          return accumulator + currentValue.performance;
        }, 0) / sshe.filter(o => String(o.evaluation.subarea).toLowerCase() === "security" ).length;

        obj_coreprocess1 = { area: "Core Processes", subarea: "Attendance Management", performance: Number(average_coreprocess1).toFixed(2) }
        obj_coreprocess2 = { area: "Core Processes", subarea: "Lessonnote Management", performance: Number(average_coreprocess2).toFixed(2) }
        obj_coreprocess3 = { area: "Core Processes", subarea: "M&E Management", performance: Number(average_coreprocess3).toFixed(2) }
        obj_instructor = { area: "Instructor Resource", subarea: "Instructor Resource", performance: Number(average_instructor).toFixed(2) }
        obj_learning1 = { area: "Learning Environment", subarea: "Classroom", performance: Number(average_learning1).toFixed(2) }
        obj_learning2 = { area: "Learning Environment", subarea: "Laboratory, Studio, Workshop", performance: Number(average_learning2).toFixed(2) }
        obj_learning3 = { area: "Learning Environment", subarea: "Library", performance: Number(average_learning3).toFixed(2) }
        obj_learning4 = { area: "Learning Environment", subarea: "Teaching Aids", performance: Number(average_learning4).toFixed(2) }
        obj_learning5 = { area: "Learning Environment", subarea: "Outdoors", performance: Number(average_learning5).toFixed(2) }
        obj_total1 = { area: "Total Student Development", subarea: "Games And Sports", performance: Number(average_total1).toFixed(2) }
        obj_total2 = { area: "Total Student Development", subarea: "Other Competitions", performance: Number(average_total2).toFixed(2) }
        obj_total3 = { area: "Total Student Development", subarea: "Socials", performance: Number(average_total3).toFixed(2) }
        obj_total4 = { area: "Total Student Development", subarea: "Domain Relationships", performance: Number(average_total4).toFixed(2) }
        obj_sus1 = { area: "Sustainability", subarea: "Capacity Development for Teachers", performance: Number(average_sus1).toFixed(2) }
        obj_sus2 = { area: "Sustainability", subarea: "Capacity Development for Non-Teachers", performance: Number(average_sus2).toFixed(2) }
        obj_sus3 = { area: "Sustainability", subarea: "Policy, Guidelines & Manuals", performance: Number(average_sus3).toFixed(2) }
        obj_sus4 = { area: "Sustainability", subarea: "Records Management", performance: Number(average_sus4).toFixed(2) }
        obj_sus5 = { area: "Sustainability", subarea: "Technology Adoption", performance: Number(average_sus5).toFixed(2) }
        obj_sus6 = { area: "Sustainability", subarea: "Governance", performance: Number(average_sus6).toFixed(2) }
        obj_academic1 = { area: "Academic Performance", subarea: "Academic Performance Internal", performance: Number(average_aca1).toFixed(2) }
        obj_academic2 = { area: "Academic Performance", subarea: "Academic Performance External", performance: Number(average_aca2).toFixed(2) }
        obj_sshe1 = { area: "Safety, Health, Environment, Security", subarea: "Safety", performance: Number(average_sshe1).toFixed(2) }
        obj_sshe2 = { area: "Safety, Health, Environment, Security", subarea: "Health", performance: Number(average_sshe2).toFixed(2) }
        obj_sshe3 = { area: "Safety, Health, Environment, Security", subarea: "Environment", performance: Number(average_sshe3).toFixed(2) }
        obj_sshe4 = { area: "Safety, Health, Environment, Security", subarea: "Security", performance: Number(average_sshe4).toFixed(2) }
        evaluationlistItems.value = []
        evaluationlistItems.value.push(obj_coreprocess1);
        evaluationlistItems.value.push(obj_coreprocess2);
        evaluationlistItems.value.push(obj_coreprocess3);
        evaluationlistItems.value.push(obj_instructor);
        evaluationlistItems.value.push(obj_learning1);
        evaluationlistItems.value.push(obj_learning2);
        evaluationlistItems.value.push(obj_learning3);
        evaluationlistItems.value.push(obj_learning4);
        evaluationlistItems.value.push(obj_learning5);
        evaluationlistItems.value.push(obj_total1);
        evaluationlistItems.value.push(obj_total2);
        evaluationlistItems.value.push(obj_total3);
        evaluationlistItems.value.push(obj_total4);
        evaluationlistItems.value.push(obj_sus1);
        evaluationlistItems.value.push(obj_sus2);
        evaluationlistItems.value.push(obj_sus3);
        evaluationlistItems.value.push(obj_sus4);
        evaluationlistItems.value.push(obj_sus5);
        evaluationlistItems.value.push(obj_sus6);
        evaluationlistItems.value.push(obj_academic1);
        evaluationlistItems.value.push(obj_academic2);
        evaluationlistItems.value.push(obj_sshe1);
        evaluationlistItems.value.push(obj_sshe2);
        evaluationlistItems.value.push(obj_sshe3);
        evaluationlistItems.value.push(obj_sshe4);

        evaluationTempList.value = evaluationlistItems.value
      }

      else if(isSchool.value === true){

          let bigevaluation = [ ...coreprocesss, ...instrutor_resource, ...learning_env, ...total_student, ...sustainability, ...academic, ...sshe ];
          let newevaluation = bigevaluation.map(o => {            
            return {
              area: o.evaluation.area,
              subarea: o.evaluation.subarea,
              element: o.evaluation.element,
              performance: o.performance
            }
          })

          evaluationlistItems.value = newevaluation
          evaluationTempList.value = newevaluation
      }

      isLoading.value = false;
    })
    .catch((e) => {
      console.log("Fetch Evaluation for Jurisdiction evaluation Viewing error: " + e);
      isLoading.value = false;   
    })
  }

  const handleChange = (ctx) => {
    if (  filters.value.typeone && filters.value.typetwo_school  && filters.value.typethree && filters.value.typefour ) {
      fetchOneRoundInEvaluationVariant();
    }
    else if (  filters.value.typeone && filters.value.typetwo_schoolgroup  && filters.value.typethree && filters.value.typefour ) {
      fetchOneRoundInEvaluationVariant2();
    }
    else if (  filters.value.typeone && filters.value.typetwo_schoolzone  && filters.value.typethree && filters.value.typefour ) {
      fetchOneRoundInEvaluationVariant3();
    }
    else{
      window.alert(" please select all appropriate options before beginning the search ")
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

   * 
   */
  
  return {    
    fetchRoundsInEvaluation,
    fetchOneRoundInEvaluation,
    fetchOneRoundInEvaluationVariant,

    isLoading,

    filters,

    roundItems,

    oneroundItem,

    tableColumns,

    completionComputed,

    dynamicFields,

    isArea,

    isSubArea,

    isSchool,
    
    filters,

    handleChange,

    evaluationlistItems,

    evaluationTempList
  }
}
