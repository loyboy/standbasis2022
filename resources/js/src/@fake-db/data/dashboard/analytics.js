import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  congratulations: {
    name: 'John',
    saleToday: '57.6',
    role: 'superadmin'
  },

 teachersGained: {
    series: [
      {
        name: 'Group of Schools',
        data: [2, 0, 0, 1, 2, 5, 1],
      },
    ],
    analyticsData: {
      teachers: 10,
    },
  },

  schoolsGained: { 
    series: [
      {
        name: 'Schools',
        data: [3, 3, 1, 0, 0, 1, 8],
      },
    ],
    analyticsData: {
      schools: 20,
    },
  },

  attendance:{
      name: "Attendance",
      avgSessions: {
        sessions: 2700,
        lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
        goal: 9000, // timetable classes that are available for this period
        teachers: 5000, // teachers that have done the attendance for real
        retention: 90, // % participation
        duration: 1, // duration of search in years
        salesBar: {
          series: [
            {
              name: 'Sessions',
              data: [75, 125, 225, 175, 125, 75, 25],
            },
          ],
        },
      },
      supportTracker: {
        title: 'Attendance M & E',
        lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
        totalFlags: 163,
        late: 48,
        noAttachment: 53,
        responseTime: 1,
        supportTrackerRadialBar: {//total attended to by the principal or assigned principal
          series: [65],
        },
      }
  },

  lessonnote:{
    name:"Lessonnote",
    avgSessions: {
      sessions: 300,
      lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
      goal: 9000, // Expected lessonnotes within this period
      teachers: 5000, // teachers that have done the lessonnote per subject and week for real
      retention: 90, // % participation
      duration: 1, // duration of search in years
      salesBar: {
        series: [
          {
            name: 'Sessions',
            data: [14, 30, 43, 45, 49, 58, 60],
          },
        ],
      },
    },
    supportTracker: {
      title: 'Lessonnote M & E',
      lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
      totalFlags: 110,
      late: 59,
      noAttachment: 13,
      responseTime: 1,
      supportTrackerRadialBar: {//total attended to by the principal or assigned principal
        series: [63],
      },
    }
  },


  // Unused ------------------------------------------------------
  timeline: {
    step1: {
      title: '12 Invoices have been paid',
      subtitle: 'Invoices have been paid to the company.',
      img: require('@/assets/images/icons/json.png'),
      fileName: 'data.json',
      duration: '12 min ago',
    },
    step2: {
      title: 'Client Meeting',
      subtitle: 'Project meeting with john @10:15am',
      avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
      avatarName: 'John Doe (Client)',
      occupation: 'CEO of Infibeam',
      duration: '45 min ago',
    },
    step3: {
      title: 'Create a new project for client',
      subtitle: 'Add files to new design folder',
      duration: '2 day ago',
      avatars: [
        { userImg: require('@/assets/images/portrait/small/avatar-s-9.jpg'), name: 'Billy Hopkins' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-6.jpg'), name: 'Amy Carson' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-8.jpg'), name: 'Brandon Miles' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-7.jpg'), name: 'Daisy Weber' },
        { userImg: require('@/assets/images/portrait/small/avatar-s-20.jpg'), name: 'Jenny Looper' },
      ],
    },
    step4: {
      title: 'Create a new project for client',
      duration: '5 day ago',
      subtitle: 'Add files to new design folder',
    },
  },
  salesChart: {
    series: [
      {
        name: 'Sales',
        data: [90, 50, 86, 40, 100, 20],
      },
      {
        name: 'Visit',
        data: [70, 75, 70, 76, 20, 85],
      },
    ],
  },
  appDesign: {
    date: '03 Sep, 20',
    title: 'App design',
    subtitle: 'You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design',
    teams: [
      { name: 'Figma', color: 'light-warning' },
      { name: 'Wireframe', color: 'light-primary' },
    ],
    members: [
      { img: require('@/assets/images/portrait/small/avatar-s-9.jpg'), color: 'primary' },
      { text: 'PI', color: 'light-danger' },
      { img: require('@/assets/images/portrait/small/avatar-s-14.jpg'), color: 'primary' },
      { img: require('@/assets/images/portrait/small/avatar-s-7.jpg'), color: 'primary' },
      { text: 'AL', color: 'light-secondary' },
    ],
    planing: [
      { title: 'Due Date', subtitle: '12 Apr, 21' },
      { title: 'Budget', subtitle: '$49251.91' },
      { title: 'Cost', subtitle: '$840.99' },
    ],
  }
  // End Unused --------------------------------------------------


}
/* eslint-disable global-require */
mock.onGet('/analytics/data').reply(() => [200, data])
