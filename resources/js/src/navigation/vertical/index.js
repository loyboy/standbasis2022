export default [
    {
        title: 'Dashboard',
        route: 'superadmin-home',
        icon: 'HomeIcon',
        permission: ["admin"]
    },

    {
        title: 'Teacher Dashboard',
        route: 'home',
        icon: 'HomeIcon',
        permission: ["teacher", "principal", "proprietor"]
    },

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
        title: 'School M&E Data',
        icon: 'CommandIcon',
        permission: ["admin", "proprietor"],
        children: [
            {
                title: 'Attendance M&E Data',
                route: 'mne-attendances-home'
          
            },
            {
                title: 'Lessonnote M&E Data',
                route: 'mne-lessonnotes-home'
                
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