import { ref, watch, computed } from '@vue/composition-api'
import store from '@/store'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default function useAttendanceList() {
  // Use toast
  const toast = useToast()
  
  const isLoading = ref(false)

  const filters = ref({
    schoolgroup: null,
    schoolId: null,   
    teacherId:null,

    congratulations: {
      name: 'Standbasis',
      saleToday: '57.6',
      role: 'superadmin'
    },

    teachersGained: {
      series: [
        {
          name: 'Teachers',
          data: null,
        },
      ],
      analyticsData: {
        teachers: 0,
      },
    },
  
    schoolsGained: { 
      series: [
        {
          name: 'Schools',
          data: null,
        },
      ],
      analyticsData: {
        schools: 0,
      },
    },

    attendance:{
      name: "Attendance",
      avgSessions: {
        sessions: 0,
        lastDays: ['Last 7 Days'],
        goal: 0, // timetable classes that are available for this period
        teachers: 0, // teachers that have done the attendance for real
        retention: 0, // % participation
        duration: 1, // duration of search in years
        Bar: {
          series: [
            {
              name: 'Attendances',
              data: [],
            },
          ],
        },
      },
      supportTracker: {
        title: 'Attendance M & E',
        lastDays: ['Last 7 Days'],
        totalFlags: 0,
        late: 0,
        noAttachment: 0,
        responseTime: 0,
        supportTrackerRadialBar: {//total attended to by the principal or assigned principal
          series: null, //[65]
        },
      }
    },

    lessonnote:{
      name:"Lessonnote",
      avgSessions: {
        sessions: 0,
        lastDays: ['Last 7 Days'],
        goal: 0, // Expected lessonnotes within this period
        teachers: 0, // teachers that have done the lessonnote per subject and week for real
        retention: 0, // % participation
        duration: 1, // duration of search in years
        Bar: {
          series: [
            {
              name: 'Lessonnotes',
              data: [14, 30, 43, 45, 49, 58, 60],
            },
          ],
        },
      },
      supportTracker: {
        title: 'Lessonnote M & E',
        lastDays: ['Last 7 Days'],
        totalFlags: 0,
        reverted: 0,
        management: 0,
        responseTime: 0,
        supportTrackerRadialBar: {//total attended to by the principal or assigned principal
          series: [63],
        },
      }
    }

  });

  
  const fetchAttendances = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-AdminHome/fetchAttendances', {
        
      })
      .then(response => {
        const { sessions, sessionsData, goals, teachers, retention } = response.data
     
        filters.value.attendance.avgSessions.sessions = sessions
        filters.value.attendance.avgSessions.Bar.series[0].data = sessionsData
        filters.value.attendance.avgSessions.goal = goals
        filters.value.attendance.avgSessions.teachers = teachers
        filters.value.attendance.avgSessions.retention = retention

        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

  const fetchAttendanceManagements = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-AdminHome/fetchAttendancesManagement', {
        
      })
      .then(response => {
        const { totalFlags, late, noAttachment, responseTime, principalData } = response.data
     
        filters.value.attendance.supportTracker.totalFlags = totalFlags
        filters.value.attendance.supportTracker.late = late
        filters.value.attendance.supportTracker.noAttachment = noAttachment
        filters.value.attendance.supportTracker.responseTime = responseTime
        filters.value.attendance.supportTracker.supportTrackerRadialBar.series = principalData

        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }


  /////////////////////////////////////////////////////////////////////////

  const fetchLessonnotes = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-AdminHome/fetchLessonnotes', {
        
      })
      .then(response => {
        const { sessions, sessionsData, goals, teachers, retention } = response.data
     
        filters.value.lessonnote.avgSessions.sessions = sessions
        filters.value.lessonnote.avgSessions.Bar.series[0].data = sessionsData
        filters.value.lessonnote.avgSessions.goal = goals
        filters.value.lessonnote.avgSessions.teachers = teachers
        filters.value.lessonnote.avgSessions.retention = retention

        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

  const fetchLessonnoteManagements = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-AdminHome/fetchLessonnoteManagements', {
        
      })
      .then(response => {
        const { totalFlags, reverted, management, responseTime, principalData } = response.data
     
        filters.value.lessonnote.supportTracker.totalFlags = totalFlags
        filters.value.lessonnote.supportTracker.reverted = reverted
        filters.value.lessonnote.supportTracker.management = management
        filters.value.lessonnote.supportTracker.responseTime = responseTime
        filters.value.lessonnote.supportTracker.supportTrackerRadialBar.series = principalData

        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

  const fetchSchool = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-AdminHome/fetchSchools', {
        
      })
      .then(response => {
        const { schools, schoolsData } = response.data
     
        filters.value.schoolsGained.analyticsData.schools = schools
        filters.value.schoolsGained.series[0].data = schoolsData
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

  const fetchTeacher = (ctx) => {
  
    isLoading.value = true;
    store
      .dispatch('app-AdminHome/fetchTeachers', {
        
      })
      .then(response => {
        const { teachers, teachersData } = response.data
     
        filters.value.teachersGained.analyticsData.schools = teachers
        filters.value.teachersGained.series[0].data = teachersData
        isLoading.value = false;   

      })
      .catch((e) => {
        console.log("Fetch error: " + e);
        isLoading.value = false;   
      })
  }

 
  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

 

  return {   
    isLoading, 
    filters,   
    fetchTeacher,
    fetchSchool,
    fetchAttendances,
    fetchAttendanceManagements,
    fetchLessonnotes,
    fetchLessonnoteManagements
  }
}
