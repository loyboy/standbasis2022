export default [
    {
        title: 'Dashboard',
        route: 'superadmin-home',
        icon: 'HomeIcon',
        permission: ["admin"]
    },

    {
        title: 'Dashboard',
        route: 'home',
        icon: 'HomeIcon',
        permission: [ "teacher", "principal", "proprietor", "supervisor" ]
    },

    //Guardian
    {
        title: 'Dashboard',
        route: 'parent-window',
        icon: 'HomeIcon',
        permission: [ "guardian" ]
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

    {
        title: 'Home',
        route: 'data-analytics-user-home',
        icon: 'AirplayIcon',
        permission: [ "dashboarduser" ]
    },

    {
        title: 'FAQ',
        route: 'data-analytics-user-faq',
        icon: 'BookOpenIcon',
        permission: [ "dashboarduser" ]
    },

    {
        title: 'Forum',
        route: 'data-analytics-user-forum',
        icon: 'MessageSquareIcon',
        permission: [ "dashboarduser" ]
    },

    {
        title: 'Upload Data',
        route: 'data-analytics-user-home-upload',
        icon: 'ShareIcon',
        permission: [ "dashboarduser" ]
    },

    {
        title: 'Data Visualization',
        route: 'data-analytics-user-home-new',
        icon: 'TrendingUpIcon',
        permission: [ "dashboarduser" ]
    },

    {
        title: 'Activities',
        icon: 'ClipboardIcon',
        permission: ["teacher"],
        children: [
            {
                title: 'Attendance Taking',
                route: 'attendances-teacher-home'
          
            },
            {
                title: 'Lessonnote Submission',
                route: 'lessonnotes-teacher-home'
          
            }
        ]
    },

    {
        title: 'Activities',
        icon: 'ClipboardIcon',
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
        icon: 'ArchiveIcon',
        permission: ["admin", "proprietor", "principal"],
        children: [
            {
                title: 'Schools',
                route: 'schools-home'  ,
                permission: [ "admin" , "proprietor" ]            
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
                title: 'Timetables',
                route: 'timetables-home'
            },
        ],
    },

    {
        title: 'Records',
        icon: 'GiftIcon',
        permission: ["admin",  "principal", "teacher" ],
        children: [
            {
                title: 'Attendance Logs',
                route: 'attendances-home'
          
            }, 
            {
                title: 'Rowcalls',
                route: 'attendances-student-home'
                
            },
            {
                title: 'Attendance(s) Status',
                route: 'attendances-activity-home'
         
            },
            {
                title: 'Lessonnote Logs',
                route: 'lessonnotes-home'
            },
            {
                title: 'Lessonnote(s) Status',
                route: 'lessonnotes-activity-home'
         
            },
            {
                title: 'Assessments',
                route: 'lessonnotes-student-home'
                
            }          
           
        ],
    },

    {
        title: 'School M&E',
        icon: 'ActivityIcon',
        permission: ["teacher" ,"principal", "proprietor"],
        children: [
            {
                title: 'Attendance M&E',
                route: 'mne-attendances-home'
          
            },
            {
                title: 'Lessonnote M&E',
                route: 'mne-lessonnotes-home'
                
            },
            {
                title: 'Assessment M&E',
                route: 'mne-assessments-home'
                
            }       
        ]
    },

    {
        title: 'School Flags',
        icon: 'FlagIcon',
        permission: ["proprietor" ,"principal"],
        children: [
            {
                title: 'Attendance Flags',
                route: 'flag-attendances-home'
          
            },
            {
                title: 'Lessonnote Flags',
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