export default [
    {
        title: 'Dashboard',
        route: 'superadmin-home',
        icon: 'HomeIcon',
        permission: ["admin"]
    },

    {
        title: 'Your Dashboard',
        route: 'home',
        icon: 'HomeIcon',
        permission: ["teacher", "principal", "proprietor"]
    },

    //evaluator
    {
        title: 'Evaluator Dashboard',
        route: 'evaluation-home',
        icon: 'HomeIcon',
        permission: ["evaluator"]
    }, 
  
    {
        title: 'Evaluation List',
        route: 'evaluation-list',
        icon: 'ListIcon',
        permission: ["evaluator"]
    },

   /* {
        title: 'Evaluation Trends',
        route: 'evaluation-trending',
        icon: 'TrendingUpIcon',
        permission: ["evaluator"]
    },*/


    {
        title: 'Your Activities',
        icon: 'CommandIcon',
        permission: ["teacher"],
        children: [
            {
                title: 'Teacher Attendance',
                route: 'attendances-teacher-home'
          
            },
            {
                title: 'Teacher Lessonnote',
                route: 'lessonnotes-teacher-home'
          
            }
        ]
    },

    {
        title: 'Main Activities',
        icon: 'CommandIcon',
        permission: ["principal"],
        children: [
            {
                title: 'Live Attendance View',
                route: 'attendances-principal-home'
          
            }
        ]
    },

    { 
        title: 'School Data',
        icon: 'CircleIcon',
        permission: ["admin", "proprietor", "principal"],
        children: [
            {
                title: 'Schools',
                route: 'schools-home'              
            },
            {
                title: 'Group of Schools',
                route: 'groupschools-home'
              
            },
            {
                title: 'Teachers',
                route: 'teachers-home'
              
            },
            {
                title: 'Enrollments',
                route: 'enrollments-home'
            },
            {
                title: 'Classrooms',
                route: 'classrooms-home'
            },
            {
                title: 'Calendars',
                route: 'calendars-home'
            },
            {
                title: 'Users',
                route: 'users-home'
            },
            {
                title: 'Timetables',
                route: 'timetables-home'
            },
        ],
    },

    {
        title: 'School Performance Data',
        icon: 'CommandIcon',
        permission: ["admin", "proprietor", "principal", "teacher" ],
        children: [
            {
                title: 'Teacher Attendance Data',
                route: 'attendances-home'
          
            }, 
            {
                title: 'Student Attendance Data',
                route: 'attendances-student-home'
                
            },
            {
                title: 'Attendance Activity Data',
                route: 'attendances-activity-home'
         
            },
            {
                title: 'Teacher Lessonnote Data',
                route: 'lessonnotes-home'
            },
            {
                title: 'Student Assessment Data',
                route: 'lessonnotes-student-home'
                
            },
            {
                title: 'Lessonnote Activity Data',
                route: 'lessonnotes-activity-home'
         
            }
           
        ],
    },

    {
        title: 'Capacity Development',
        route: 'capacity-home',
        icon: 'CodepenIcon',
        permission: ["teacher"]
    },

    {
        title: 'School M&E',
        icon: 'CommandIcon',
        permission: ["teacher" ,"principal"],
        children: [
            {
                title: 'Attendance M&E',
                route: 'mne-attendances-home'
          
            },
            {
                title: 'Lessonnote M&E',
                route: 'mne-lessonnotes-home'
                
            }           
        ]
    },

    {
        title: 'School Flags',
        icon: 'CommandIcon',
        permission: ["proprietor" ,"principal"],
        children: [
            {
                title: 'Attendance Flags',
                route: 'flag-attendances-home'
          
            },
            {
                title: 'Lessonnote M&E',
                route: 'flag-lessonnotes-home'
                
            }           
        ]
    },


    {
        title: 'Settings',
        route: 'settings-home',
        icon: 'SettingsIcon',
        permission: ["admin"]
    },
    {
        title: 'Events',
        route: 'events-home',
        icon: 'RssIcon',
        permission: ["admin"]
    },
    
]