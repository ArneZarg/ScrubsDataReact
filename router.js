import React from "react";

import FAQs from "../components/faqs/FAQs";
//import { Forum } from "@material-ui/icons";
const DataVisualization = React.lazy(() =>
  import("../components/DataVisualization/DataVisualization")
);

const SurveyOptionForm = React.lazy(() =>
  import("../components/surveyQuestionAnswerOption/SurveyOptionForm")
);

const Contacts = React.lazy(() => import("../components/Contacts/Contacts"));
const ContactUs = React.lazy(() => import("../components/contactUs/ContactUs"));
// const ConfirmationOwner = React.lazy(() =>
// import("../components/Authentication/ConfirmationOwner")
// );
const Licenses = React.lazy(() => import("../components/licenses/Licenses"));
const LicenseForm = React.lazy(() =>
  import("../components/licenses/LicenseForm")
);
const Dashboard = React.lazy(() => import("../components/dashboard/Dashboard"));
const SysAdminDashboard = React.lazy(() =>
  import("../components/sysAdminDashboard/SysAdminDashboard")
);
const FAQsPage = React.lazy(() => import("../components/faqs/FAQs"));

const File = React.lazy(() => import("../components/file/File"));
const FileForm = React.lazy(() => import("../components/file/FileForm"));
const Forums = React.lazy(() => import("../components/forums/Forums"));
const Thread = React.lazy(() => import("../components/forums/Thread"));
const Providers = React.lazy(() => import("../components/Providers/Providers"));

const ResetPassword = React.lazy(() =>
  import("../components/Authentication/ResetPassword")
);
const Locations = React.lazy(() => import("../components/locations/Locations"));
const LocationCardWide = React.lazy(() =>
  import("../components/locations/LocationCardWide")
);
const LocationForm = React.lazy(() =>
  import("../components/locations/LocationForm")
);
const InsuranceProviders = React.lazy(() =>
  import("../components/insurances/InsuranceProviders")
);
const InsuranceProviderForm = React.lazy(() =>
  import("../components/insurances/InsuranceProviderForm")
);

const MedicalData = React.lazy(() =>
  import("../components/MedicalData/MedicalData")
);

const Payment = React.lazy(() => import("../components/MedicalData/Payment"));

const ProvidersReport = React.lazy(() =>
  import("../components/Providers/ProvidersReport/ProvidersReport")
);
const ProviderNonCompliant = React.lazy(() =>
  import("../components/Providers/ProviderNonCompliant")
);

const Steps = React.lazy(() => import("../components/wizard/Steps"));
const ProgressBar = React.lazy(() =>
  import("../components/wizard/ProgressBar")
);

const Practices = React.lazy(() => import("../components/practices/Practices"));
const PracticeForm = React.lazy(() =>
  import("../components/practices/PracticeForm")
);
const ScheduleDisplay = React.lazy(() =>
  import("../components/schedules/ScheduleDisplay")
);
const ScheduleForm = React.lazy(() =>
  import("../components/schedules/ScheduleForm")
);
const ViewSchedule = React.lazy(() =>
  import("../components/schedules/ViewSchedule")
);
const Surveys = React.lazy(() => import("../components/surveys/Surveys"));
const SurveyForm = React.lazy(() => import("../components/surveys/SurveyForm"));

const InsurancePlans = React.lazy(() =>
  import("../components/insurancePlans/InsurancePlans")
);
const InsurancePlansForm = React.lazy(() =>
  import("../components/insurancePlans/InsurancePlansForm")
);
const ProviderDetailsPage = React.lazy(() =>
  import("../components/Providers/ProviderDetailsPage")
);

const Posts = React.lazy(() => import("../components/forums/Posts"));

const UserProfiles = React.lazy(() =>
  import("../components/userProfiles/UserProfiles")
);
const UserProfilesM = React.lazy(() =>
  import("../components/userProfiles/UserProfilesM")
);
const UserProfilesP = React.lazy(() =>
  import("../components/userProfiles/UserProfilesP")
);
const UserProfileForm = React.lazy(() =>
  import("../components/userProfiles/UserProfileForm")
);
const ScheduleAvailability = React.lazy(() =>
  import("../components/scheduleAvailability/ScheduleAvailability")
);

const SurveyBuilder = React.lazy(() =>
  import("../components/surveyBuilder/SurveyBuilder")
);

const SurveyQuestionsForm = React.lazy(() =>
  import("../components/surveyQuestions/SurveyQuestionsForm")
);
const SurveyDetails = React.lazy(() =>
  import("../components/surveyDetails/SurveyDetails")
);

const UserGroupProviders = React.lazy(() =>
  import("../components/userGroups/UserGroupProviders")
);
const UserGroupOfficeManager = React.lazy(() =>
  import("../components/userGroups/UserGroupOfficeManager")
);
const ManagerProviders = React.lazy(() =>
  import("../components/userGroups/ManagerProviders")
);
const NotFound = React.lazy(() =>
  import("../components/Authentication/NotFound")
);
const Lockscreen = React.lazy(() =>
  import("../components/Lockscreen/Lockscreen")
);

const SurveyInstances = React.lazy(() =>
  import("../components/surveys/instances/SurveyInstances")
);

const SurveyInstance = React.lazy(() =>
  import("../components/surveys/instances/SurveyInstance")
);

const SurveyWizard = React.lazy(() =>
  import("../components/surveys/wizard/SurveyWizard")
);

const SurveySender = React.lazy(() =>
  import("../components/surveys/sender/SurveySender")
);

const headerRoutes = [
  {
    paths: ["/lockscreen"],
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Lockscreen
  }
];

const sideBarRoutes = [
  {
    navlabel: true,
    path: "/",
    name: "Personal",
    icon: "mdi mdi-dots-horizontal",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"]
  },
  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: "mdi mdi-view-dashboard",
    roles: ["Office Manager", "Office Assistant"],
    component: Dashboard
  },
  {
    path: "/sysAdminDashboard",
    name: "System Admin Dashboard",
    icon: "mdi mdi-view-dashboard",
    mini: "B",
    roles: ["SysAdmin"],
    component: SysAdminDashboard
  },

  {
    navlabel: true,
    name: "Pages",
    icon: "mdi mdi-dots-horizontal",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"]
  },
  {
    path: "/contacts",
    name: "Contacts",
    icon: "mdi mdi-comment-processing-outline",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Contacts
  },
  {
    path: "/insurances",
    name: "Insurance Providers",
    icon: "ti-shield",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: InsuranceProviders
  },
  {
    path: "/locations",
    name: "Locations",
    icon: "mdi mdi-map-marker",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Locations
  },
  {
    path: "/file",
    name: "Files",
    roles: ["Providers", "Office Manager", "Office Assistant", "SysAdmin"],
    icon: "mdi mdi-buffer",
    component: File
  },
  {
    path: "/practices",
    name: "Practices",
    icon: "mdi mdi-contacts",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Practices
  },
  {
    collapse: true,
    path: "/providers",
    name: "Providers",
    icon: "fas fa-user-plus",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: Providers,
    child: [
      {
        path: "/providers/report",
        name: "Providers Report",
        icon: "mdi mdi-file-excel",
        roles: ["Office Manager", "Office Assistant", "SysAdmin"],
        component: ProvidersReport
      },
      {
        path: "/providers/noncompliant",
        name: "ProviderNonCompliant",
        icon: "mdi mdi-pistol",
        roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
        component: ProviderNonCompliant
      }
    ]
  },
  {
    path: "/licenses",
    name: "Licenses",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    icon: "fas fa-file-alt",
    component: Licenses
  },
  {
    path: "/faqs",
    name: "FAQs",
    roles: [
      "Provider",
      "Office Manager",
      "Office Assistant",
      "Consumer",
      "SysAdmin"
    ],
    icon: "fa fa-question",
    component: FAQs
  },
  {
    path: "/forum",
    name: "Forum",
    roles: ["Provider", "SysAdmin"],
    icon: "mdi mdi-forum",
    component: Forums
  },
  {
    path: "/scheduledisplay",
    name: "Schedules",
    icon: "mdi mdi-calendar-clock",
    roles: ["Provider", "SysAdmin"],
    component: ScheduleDisplay
  },
  {
    path: "/surveys",
    component: Surveys,
    name: "Surveys",
    icon: "mdi mdi-format-list-numbers",
    roles: ["SysAdmin"]
  },
  {
    path: "/surveyinstances",
    component: SurveyInstances,
    icon: "mdi mdi-pencil-box-outline",
    name: "Survey Instances",
    roles: ["SysAdmin"]
  },
  {
    path: "/userprofiles/all",
    name: "User Profiles",
    icon: "ti-user",
    roles: ["SysAdmin"],
    component: UserProfiles
  },
  {
    path: "/userprofiles/manager",
    name: "User Profiles",
    icon: "ti-user",
    roles: ["Office Manager"],
    component: UserProfilesM
  },
  {
    path: "/userprofiles/provider",
    name: "My Profile",
    icon: "ti-user",
    roles: ["Provider"],
    component: UserProfilesP
  },
  {
    path: "/users/groups/providers",
    name: "User Group Providers",
    icon: "mdi mdi-contacts",
    roles: ["Provider", "Office Assistant", "SysAdmin"],
    component: UserGroupProviders
  },
  {
    path: "/users/groups/manager",
    name: "User Group Manager",
    icon: "mdi mdi-contacts",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: UserGroupOfficeManager
  },
  {
    path: "/insuranceplans",
    name: "Insurance Plans",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    icon: "mdi mdi-file-powerpoint",
    component: InsurancePlans
  },
  {
    path: "/contactus",
    name: "Contact Us",
    roles: [
      "Provider",
      "Office Manager",
      "Office Assistant",
      "Consumer",
      "SysAdmin"
    ],
    icon: "icon-support",
    component: ContactUs
  },
  {
    path: "/medicaldata",
    name: "Medical Data",
    component: MedicalData,
    icon: "mdi mdi-database",
    roles: ["Consumer", "SysAdmin"]
  },
  {
    path: "/datavisualization",
    name: "Data Visualization",
    component: DataVisualization,
    icon: "mdi mdi-chart-line",
    //we need to decide on the access level of this component
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"]
  },
  {
    path: "/surveyinstances",
    component: SurveyInstances,
    name: "Survey Instances",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"]
  },
  {
    path: "/surveysender",
    component: SurveySender,
    name: "Survey Sender",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"]
  }
];

const componentRoutes = [
  {
    //system administrator only or functionality limited to associated providers only?
    paths: "/providers/report",
    name: "Providers Report",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: ProvidersReport
  },

  {
    paths: ["/providers/noncompliant"],
    name: "ProviderNonCompliant",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ProviderNonCompliant
  },
  {
    paths: [
      "/providers/new",
      "/providers/:id/edit",
      "/providers/current",
      "/providers/details",
      "/providers/expertise/:id",
      "/providers/insuranceplans/:id",
      "/providers/specializations/:id",
      "/providers/states/:id",
      "/providers/:id",
      "/providers"
    ],
    name: "Providers",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Providers
  },
  {
    paths: ["/contacts", "/contacts/:id/chats"],
    name: "Contacts",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Contacts
  },
  {
    paths: ["/file"],
    name: "Files",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: File
  },
  {
    paths: ["/file/new", "/file/:id/edit"],
    name: "Files",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: FileForm
  },
  {
    paths: ["/forum"],
    name: "forum",
    roles: ["Provider", "SysAdmin"],
    component: Forums
  },
  {
    paths: ["/forum/:id"],
    name: "Thread",
    roles: ["Provider", "SysAdmin"],
    component: Thread
  },
  {
    paths: ["/dashboard", "/"],
    name: "Admin Dashboard",
    roles: ["Office Manager", "Office Assistant"],
    component: Dashboard
  },
  {
    paths: ["/sysAdminDashboard", "/"],
    name: "System Admin Dashboard",
    roles: ["SysAdmin"],
    component: SysAdminDashboard
  },
  {
    paths: ["/userprofiles/all"],
    name: "User Profiles",
    roles: ["SysAdmin"],
    component: UserProfiles
  },
  {
    paths: ["/userprofiles/manager"],
    name: "User Profiles",
    roles: ["Office Manager"],
    component: UserProfilesM
  },
  {
    paths: ["/userprofiles/provider"],
    name: "User Profile",
    roles: ["Provider"],
    component: UserProfilesP
  },
  {
    paths: ["/userprofiles/:id/edit"],
    name: "User Profile Edit",
    roles: ["SysAdmin", "Office Manager", "Provider"],
    component: UserProfileForm
  },
  {
    paths: ["/insuranceplans"],
    name: "InsurancePlans",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: InsurancePlans
  },
  {
    paths: ["/insuranceplans/new", "/insuranceplans/:id/edit"],
    name: "InsurancePlansForm",
    roles: ["SysAdmin"],
    component: InsurancePlansForm
  },
  {
    paths: ["/insurances"],
    name: "Insurance Providers",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: InsuranceProviders
  },
  {
    paths: ["/insurances/new", "/insurances/:id/edit"],
    name: "Insurance Providers Form",
    roles: ["SysAdmin"],
    component: InsuranceProviderForm
  },
  {
    paths: ["/licenses"],
    name: "Licenses",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Licenses
  },
  {
    paths: ["/licenses/new", "/licenses/:id/edit"],
    name: "LicenseForm",
    roles: ["Provider", "SysAdmin"],
    component: LicenseForm
  },
  {
    paths: ["/locations"],
    name: "Locations",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    // locations need to be changed to SysAdmin when an admin account is available
    component: Locations
  },
  {
    paths: ["/locations/new", "/locations/:id/edit"],
    name: "Location Form",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: LocationForm
  },
  {
    paths: ["/locations/:id/view"],
    name: "View Single Location",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: LocationCardWide
  },
  {
    paths: ["/forums/posts"],
    name: "Posts",
    roles: ["Provider", "SysAdmin"],
    component: Posts
  },
  {
    paths: ["/practices"],
    name: "Practices",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Practices
  },
  {
    paths: ["/steps"],
    name: "Steps",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: Steps
  },
  {
    paths: ["/progressbar"],
    name: "ProgressBar",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ProgressBar
  },
  // {
  //   paths: ["/practiceformv2"],
  //   name: "Practice Form",
  //   roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
  //   component: PracticeFormV2
  // },
  {
    paths: ["/practices/new", "/practices/:id/edit", "/practices/:id"],
    name: "Practice Form",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: PracticeForm
  },
  {
    paths: ["/providers/:id/details"],
    name: "Insurance Provider Details",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ProviderDetailsPage
  },
  {
    paths: "/FAQs",
    name: "FAQs",
    roles: [
      "Provider",
      "Office Manager",
      "Office Assistant",
      "Consumer",
      "SysAdmin"
    ],
    component: FAQsPage
  },
  {
    paths: [
      "/schedule/availability/schedule/:id",
      "/provider/:id",
      "/availability/:id/edit",
      "/schedule/availability/:id",
      "/schedule/availability"
    ],
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ScheduleAvailability
  },
  {
    paths: ["/survey/:id/details"],
    name: "Survey Details",
    roles: ["Provider", "SysAdmin"],
    component: SurveyDetails
  },
  {
    paths: ["/survey/builder"],
    name: "Survey Builder",
    roles: ["Provider"],
    component: SurveyBuilder
  },
  {
    paths: ["/SurveyOption/new", "/SurveyOption/:id/edit"],
    name: "SurveyOptionForm",
    roles: ["Provider"],
    component: SurveyOptionForm
  },
  {
    paths: ["/survey/questions/:id/edit", "/survey/questions/new"],
    name: "Survey Questions Form",
    roles: ["SysAdmin"],
    component: SurveyQuestionsForm
  },
  {
    paths: ["/surveys"],
    name: "Surveys",
    roles: ["Provider", "SysAdmin"],
    component: Surveys
  },
  {
    paths: ["/surveyform/:id/edit", "/surveyform"],
    name: "SurveyForm",
    roles: ["Provider", "SysAdmin"],
    component: SurveyForm
  },
  {
    paths: ["/contactus"],
    name: "Contact Us",
    roles: [
      "Provider",
      "Office Manager",
      "Office Assistant",
      "Consumer",
      "SysAdmin"
    ],
    component: ContactUs
  },
  {
    //provider only
    paths: ["/users/groups/providers"],
    name: "User Group Providers",
    roles: ["Provider", "Office Assistant", "SysAdmin"],
    component: UserGroupProviders
  },
  {
    //office administrator only
    paths: ["/users/groups/manager"],
    name: "User Group Manager",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: UserGroupOfficeManager
  },
  {
    //office administrator only
    paths: ["/users/groups/manager/:id"],
    name: "Manager Providers",
    roles: ["Office Manager", "Office Assistant", "SysAdmin"],
    component: ManagerProviders
  },
  {
    paths: ["/scheduleform/", "/scheduleform/:id"],
    name: "Schedule Form",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ScheduleForm
  },
  {
    paths: "/scheduledisplay",
    name: "Schedule Display",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ScheduleDisplay
  },
  {
    paths: "/scheduleview/:id",
    name: "View Schedule",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: ViewSchedule
  },
  {
    paths: ["/resetpassword", "/resetpassword/:token"],
    roles: [
      "Provider",
      "Office Manager",
      "Office Assistant",
      "Consumer",
      "SysAdmin"
    ],
    component: ResetPassword
  },
  {
    paths: "/datavisualization",
    name: "Data Visualization",
    component: DataVisualization,
    //we need to decide on the access level of this component
    roles: ["Office Manager", "Office Assistant", "SysAdmin"]
  },
  {
    paths: ["/medicaldata"],
    name: "Medical Data",
    component: MedicalData,
    roles: ["SysAdmin", "Consumer"]
  },
  {
    paths: ["/"],
    name: "Medical Data",
    component: MedicalData,
    roles: ["Consumer"]
  },
  {
    paths: "/subscribe/:plan",
    name: "Subscribe",
    component: Payment,
    roles: ["Consumer", "SysAdmin"]
  },
  {
    paths: ["/surveyinstances"],
    name: "Survey Instances",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: SurveyInstances
  },
  {
    paths: ["/surveyinstances/:id"],
    name: "Survey Instance",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: SurveyInstance
  },
  {
    paths: ["/surveys/:id"],
    name: "Survey Wizard",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: SurveyWizard
  },
  {
    paths: ["/surveysender"],
    name: "Survey Sender",
    roles: ["Provider", "Office Manager", "Office Assistant", "SysAdmin"],
    component: SurveySender
  },
  {
    paths: ["*"],
    name: "Not Found",
    roles: [
      "Provider",
      "Office Manager",
      "Office Assistant",
      "Consumer",
      "SysAdmin"
    ],
    component: NotFound
  }
];

export { headerRoutes, sideBarRoutes, componentRoutes };
