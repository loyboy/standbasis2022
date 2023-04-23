import Vue from 'vue'
import VueRouter from 'vue-router'
import { canNavigate } from '@/libs/acl/routeProtection'
import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/pages/dashboards/Home.vue'),
            meta: {
                pageTitle: 'Home',
                breadcrumb: [{
                        text: 'Home',
                        active: true,
                    },

                ]
            },
        },
        {
            path: '/onboarding',
            name: 'auth-onboarding',
            component: () =>
                import ('@/views/pages/onboarding/Main.vue'),
            /*meta: {
                    pageTitle: 'Onboarding',
                    breadcrumb: [{
                        text: 'Onboard your School Page',
                        active: true,
                    }, ],
                    redirectIfLoggedIn: true
            },*/

            meta: {
                layout: 'full',
                resource: 'Auth',
                redirectIfLoggedIn: true
            },
        },

        {
            path: '/teacher-dashboard',
            name: 'teacher-home',
            component: () =>
                import ('@/views/pages/dashboard/Home.vue'),
            meta: {
                pageTitle: 'Teacher Dashboard',
                breadcrumb: [{
                        text: 'Dashboard',
                        active: true,
                    },
                ]
            },
        },

        {
            path: '/proprietor-dashboard',
            name: 'proprietor-home',
            component: () =>
                import ('@/views/pages/dashboard/Home.vue'),
            meta: {
                pageTitle: 'Dashboard',
                breadcrumb: [{
                        text: 'Dashboard',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/superadmin-dashboard',
            name: 'superadmin-home',
            component: () =>
                import ('@/views/pages/dashboard/Home.vue'),
            meta: {
                pageTitle: 'Home',
                breadcrumb: [{
                        text: 'Dashboard',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/schools-list/:owner?',
            name: 'schools-home',
            component: () =>
                import ('@/views/pages/schools/SchoolsPage.vue'),
            meta: {
                pageTitle: 'Schools',
                breadcrumb: [{
                        text: "List Schools",
                        active: true,
                    },

                ]
            },
        },        

        {
            path: '/schools-edit/:id',
            name: 'schools-home-edit',
            component: () =>
                import ('@/views/pages/schools/school-edit/SchoolEdit.vue'),
            meta: {
                pageTitle: 'Schools',
                breadcrumb: [{
                        text: "Edit School",
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/schools-view/:id',
            name: 'schools-home-view',
            component: () =>
                import ('@/views/pages/schools/school-view/SchoolView.vue'),
            meta: {
                pageTitle: 'Schools',
                breadcrumb: [{
                        text: "View Information",
                        active: true
                    },

                ]
            },
        },

        //School group begins
        {
            path: '/groupschools-list',
            name: 'groupschools-home',
            component: () =>
                import ('@/views/pages/groupschools/GroupSchoolsPage.vue'),
            meta: {
                pageTitle: 'Group of Schools',
                breadcrumb: [{
                        text: 'List Group of Schools',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/groupschools-edit/:id',
            name: 'groupschools-home-edit',
            component: () =>
                import ('@/views/pages/groupschools/groupschool-edit/GroupSchoolEdit.vue'),
            meta: {
                pageTitle: 'Group of Schools',
                breadcrumb: [{
                        text: 'Edit Group of Schools',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/groupschools-view/:id',
            name: 'groupschools-home-view',
            component: () =>
                import ('@/views/pages/groupschools/groupschool-view/GroupSchoolView.vue'),
            meta: {
                pageTitle: 'Group of Schools',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

         //Teacher begins
         {
            path: '/teachers-list/:school?',
            name: 'teachers-home',
            component: () =>
                import ('@/views/pages/teachers/TeachersPage.vue'),
            meta: {
                pageTitle: 'Teachers',
                breadcrumb: [{
                        text: 'List Teachers',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/teachers-edit/:id',
            name: 'teachers-home-edit',
            component: () =>
                import ('@/views/pages/teachers/teacher-edit/TeacherEdit.vue'),
            meta: {
                pageTitle: 'Teachers',
                breadcrumb: [{
                        text: 'Edit Teachers',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/teachers-view/:id',
            name: 'teachers-home-view',
            component: () =>
                import ('@/views/pages/teachers/teacher-view/TeacherView.vue'),
            meta: {
                pageTitle: 'Teachers',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

         //Enrollment begins
         {
            path: '/enrollments-list/:school?',
            name: 'enrollments-home',
            component: () =>
                import ('@/views/pages/enrollments/EnrollmentsPage.vue'),
            meta: {
                pageTitle: 'Enrollments',
                breadcrumb: [{
                        text: 'List Enrollments',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/enrollments-edit/:id',
            name: 'enrollments-home-edit',
            component: () =>
                import ('@/views/pages/enrollments/enrollment-edit/EnrollmentEdit.vue'),
            meta: {
                pageTitle: 'Enrollments',
                breadcrumb: [{
                        text: 'Edit Enrollments',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/enrollments-view/:id',
            name: 'enrollments-home-view',
            component: () =>
                import ('@/views/pages/enrollments/enrollment-view/EnrollmentView.vue'),
            meta: {
                pageTitle: 'Enrollments',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

         //Classroom begins
         {
            path: '/classrooms-list/:school?',
            name: 'classrooms-home',
            component: () =>
                import ('@/views/pages/classrooms/ClassroomsPage.vue'),
            meta: {
                pageTitle: 'Classrooms',
                breadcrumb: [{
                        text: 'List Classrooms',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/classrooms-edit/:id',
            name: 'classrooms-home-edit',
            component: () =>
                import ('@/views/pages/classrooms/classroom-edit/ClassroomEdit.vue'),
            meta: {
                pageTitle: 'Classrooms',
                breadcrumb: [{
                        text: 'Edit Classrooms',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/classrooms-view/:id',
            name: 'classrooms-home-view',
            component: () =>
                import ('@/views/pages/classrooms/classroom-view/ClassroomView.vue'),
            meta: {
                pageTitle: 'Classrooms',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

          //Calendars begins
          {
            path: '/calendars-list/:school?',
            name: 'calendars-home',
            component: () =>
                import ('@/views/pages/calendars/CalendarsPage.vue'),
            meta: {
                pageTitle: 'Calendars',
                breadcrumb: [{
                        text: 'List Calendars',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/calendars-edit/:id',
            name: 'calendars-home-edit',
            component: () =>
                import ('@/views/pages/calendars/calendar-edit/CalendarEdit.vue'),
            meta: {
                pageTitle: 'Calendars',
                breadcrumb: [{
                        text: 'Edit Calendars',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/calendars-view/:id',
            name: 'calendars-home-view',
            component: () =>
                import ('@/views/pages/calendars/calendar-view/CalendarView.vue'),
            meta: {
                pageTitle: 'Calendars',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

        //Timetables begins
        {
            path: '/timetables-list/:school?/teacher/:teacher?',
            name: 'timetables-home',     
            component: () =>
                import ('@/views/pages/timetables/timetablesPage.vue'),
            meta: {
                pageTitle: 'Timetables',
                breadcrumb: [{
                        text: 'List Timetables',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/timetables-edit/:id',
            name: 'timetables-home-edit',
            component: () =>
                import ('@/views/pages/timetables/timetable-edit/TimetableEdit.vue'),
            meta: {
                pageTitle: 'Timetables',
                breadcrumb: [{
                        text: 'Edit Timetables',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/timetables-view/:id',
            name: 'timetables-home-view',
            component: () =>
                import ('@/views/pages/timetables/timetable-view/TimetableView.vue'),
            meta: {
                pageTitle: 'Timetables',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

         //Users begins
         {
            path: '/users-list',
            name: 'users-home',
            component: () =>
                import ('@/views/pages/users/UsersPage.vue'),
            meta: {
                pageTitle: 'Users',
                breadcrumb: [{
                        text: 'List Users',
                        active: true,
                    }

                ]
            },
        },

        {
            path: '/users-edit/:id',
            name: 'users-home-edit',
            component: () =>
                import ('@/views/pages/users/user-edit/UserEdit.vue'),
            meta: {
                pageTitle: 'Users',
                breadcrumb: [{
                        text: 'Edit Users',
                        active: true,
                    },

                ]
            },
        },

        {
            path: '/users-view/:id',
            name: 'users-home-view',
            component: () =>
                import ('@/views/pages/users/user-view/UserView.vue'),
            meta: {
                pageTitle: 'Users',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            },
        },

        //Attendances begin here
        {
            path: '/attendances-list',
            name: 'attendances-home',
            component: () =>
                import ('@/views/pages/attendances/AttendancePage.vue'),
            meta: {
                pageTitle: 'Attendances',
                breadcrumb: [{
                        text: 'List Attendances',
                        active: true
                    }
                ]
            },
        },

        {
            path: '/attendances-view/:id',
            name: 'attendances-home-view',
            component: () =>
                import ('@/views/pages/attendances/attendance-view/AttendanceView.vue'),
            meta: {
                pageTitle: 'Attendances',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            }
        },

        //Attendances teacher begin here
        {
            path: '/attendances-teacher-single',
            name: 'attendances-teacher-home',
            component: () =>
                import ('@/views/pages/attendances-teacher/TakeAttendance.vue'),
            meta: {
                pageTitle: 'Teacher Take Attendance',
                breadcrumb: [{
                        text: 'Take Attendance',
                        active: true
                    }
                ]
            },
        },
       

         //Attendances student begin here
         {
            path: '/attendances-student-list/:attendance?',
            name: 'attendances-student-home',
            component: () =>
                import ('@/views/pages/attendances-student/AttendancePage.vue'),
            meta: {
                pageTitle: 'Student Attendances',
                breadcrumb: [{
                        text: 'List Student Attendances',
                        active: true
                    }
                ]
            },
        },

        {
            path: '/attendances-student-view/:id',
            name: 'attendances-student-home-view',
            component: () =>
                import ('@/views/pages/attendances-student/attendance-view/AttendanceView.vue'),
            meta: {
                pageTitle: 'Student Attendances',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            }
        },

        //Attendances Activity begin here
        {
            path: '/attendances-activity-list/:attendance?',
            name: 'attendances-activity-home',
            component: () =>
                import ('@/views/pages/attendances-activity/AttendancePage.vue'),
            meta: {
                pageTitle: 'Attendances Activity',
                breadcrumb: [{
                        text: 'List Attendance Activity',
                        active: true
                    }
                ]
            },
        },

        //Lessonnotes begin here
        {
            path: '/lessonnotes-list',
            name: 'lessonnotes-home',
            component: () =>
                import ('@/views/pages/lessonnotes/LessonnotePage.vue'),
            meta: {
                pageTitle: 'Lessonnotes',
                breadcrumb: [{
                        text: 'List Lessonnotes',
                        active: true
                    }
                ]
            },
        },

        //Teacher only
        {
            path: '/lessonnotes-teacher',
            name: 'lessonnotes-teacher-home',
            component: () =>
                import ('@/views/pages/lessonnotes-teacher/SubmitLessonnote.vue'),
            meta: {
                pageTitle: 'Submit Lessonnotes',
                breadcrumb: [{
                        text: 'Submit Lessonnotes',
                        active: true
                    }
                ]
            },
        },
        
        {
            path: '/lessonnotes-view/:id',
            name: 'lessonnotes-home-view',
            component: () =>
                import ('@/views/pages/lessonnotes/lessonnote-view/LessonnoteView.vue'),
            meta: {
                pageTitle: 'Lessonnotes',
                breadcrumb: [{
                        text: 'View Information',
                        active: true
                    },

                ]
            }
        },

        //Lessonnotes student begin here
       {
            path: '/lessonnotes-student-list/:id',
            name: 'lessonnotes-student-home',
            component: () =>
                import ('@/views/pages/lessonnotes-student/LessonnotePage.vue'),
            meta: {
                pageTitle: 'Student Assessment',
                breadcrumb: [{
                        text: 'List Student Assessment',
                        active: true
                    }
                ]
            },
        },        

        //Lessonnotes Activity begin here
        {
            path: '/lessonnotes-activity-list/:id',
            name: 'lessonnotes-activity-home',
            component: () =>
                import ('@/views/pages/lessonnotes-activity/LessonnotePage.vue'),
            meta: {
                pageTitle: 'Lessonnotes Activity',
                breadcrumb: [{
                        text: 'List Lessonnotes Activity',
                        active: true
                    }
                ]
            },
        },
        
         //Attendances M&E begin here
         {
            path: '/mne-attendances-list',
            name: 'mne-attendances-home',
            component: () =>
                import ('@/views/pages/mne-attendance/AttendancePage.vue'),
            meta: {
                pageTitle: 'Measurement and Evaluation Attendances',
                breadcrumb: [{
                        text: 'Filter & View',
                        active: true
                    }
                ]
            }
        },

        //Lessonnotes M&E begin here
        {
            path: '/mne-lessonnotes-list',
            name: 'mne-lessonnotes-home',
            component: () =>
                import ('@/views/pages/mne-lessonnote/LessonnotePage.vue'),
            meta: {
                pageTitle: 'Measurement and Evaluation Lessonnotes',
                breadcrumb: [{
                        text: 'Filter & View',
                        active: true
                    }
                ]
            }
        },
        
      
        {
            path: '/login',
            name: 'auth-login',
            component: () =>
                import ('@/views/Login2.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
                redirectIfLoggedIn: true,
            },
        },
      
        {
            path: '/verified',
            name: 'verify-me',
            component: () =>
                import ('@/views/VerifyAccount.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
            },
        },
        {
            path: '/not-authorized',
            name: 'misc-not-authorized',
            component: () =>
                import ('@/views/NotAuthorized.vue'),
            meta: {
                layout: 'full',
                resource: 'Auth',
            },
        },
        {
            path: '/error-404',
            name: 'error-404',
            component: () =>
                import ('@/views/error/Error404.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '/refresh-app-cache',
            name: 'refresh-app-cache',
            component: () =>
                import ('@/views/RefeshCache.vue'),
            meta: {
                layout: 'full',
            },
        },
        {
            path: '*',
            redirect: '/error-404',
        },
    ],
})

router.beforeEach((to, _, next) => {
    const isLoggedIn = isUserLoggedIn()
    if (!canNavigate(to)) {
        // Redirect to login if not logged in
        if (!isLoggedIn) return next({ name: 'auth-login' })
            // If logged in => not authorized
        return next({ name: 'misc-not-authorized' })
    }
    // Redirect if logged in
    if (to.meta.redirectIfLoggedIn && isLoggedIn) {
        const userData = getUserData()
        next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
    }
    return next()
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = 'none'
    }
})
export default router