import { createRouter, createWebHistory } from 'vue-router';
import constants from '@/constants/routes.constants'

const {
  landingpage,
  resources,
  contact,
  caseStudies,
  solutions,
  about
} = constants;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: landingpage.path,
      name: landingpage.name,
      component: () => import('../views/HomeView.vue')
    },

    // Solutions
    {
      path: solutions.path,
      children: [
        {
          path: solutions.testingLaboratory.path,
          name: solutions.testingLaboratory.name,
          component: () => import('../views/solutions/TestingLaboratoryView.vue')
        },
        {
          path: solutions.factoryAuditing.path,
          name: solutions.factoryAuditing.name,
          component: () => import('../views/solutions/FactoryAuditingView.vue')
        },
        {
          path: solutions.programmingPackaging.path,
          name: solutions.programmingPackaging.name,
          component: () => import('../views/solutions/TestingLaboratoryView.vue')
        },
        {
          path: solutions.trainingEducation.path,
          name: solutions.trainingEducation.name,
          component: () => import('../views/solutions/TestingLaboratoryView.vue')
        }
      ]
    },

    // case study
    {
      path: caseStudies.path,
      children: [
        {
          path: '',
          name: caseStudies.caseStudy.name,
          component: () => import('../views/case-study/CaseStudyView.vue')
        },
        {
          path: caseStudies.caseStudyDetail.path,
          name: caseStudies.caseStudyDetail.name,
          component: () => import('../views/case-study/CaseStudyDetailView.vue')
        }
      ]
    },

     // ABout
    {
      path: about.path,
      children: [
        {
          path: about.whoWeAre.path,
          name: about.whoWeAre.name,
          component: () => import('../views/about/WhoWeAreView.vue')
        },
        {
          path: about.whyWhiteHorseLabs.path,
          name: about.whyWhiteHorseLabs.name,
          component: () => import('../views/about/WhoWeAreView.vue')
        },
        {
          path: about.joinOurTeam.path,
          name: about.joinOurTeam.name,
          component: () => import('../views/about/WhoWeAreView.vue')
        },
        {
          path: about.ourLocations.path,
          name: about.ourLocations.name,
          component: () => import('../views/about/WhoWeAreView.vue')
        }
      ]
    },

    // Resources
    {
      path: resources.path,
      children: [
        {
          path: resources.newsInsight.path,
          name: resources.newsInsight.name,
          component: () => import('../views/resources/NewsView.vue')
        },
        {
          path: resources.newsInsight.newsInsightDetail.path,
          name: resources.newsInsight.newsInsightDetail.name,
          component: () => import('../views/resources/NewsDetailsView.vue')
        },
        {
          path: resources.terminology.path,
          name: resources.terminology.name,
          component: () => import('../views/resources/TerminologyView.vue')
        },
        {
          path: resources.globalCalendar.path,
          name: resources.globalCalendar.name,
          component: () => import('../views/resources/CalendarView.vue')
        },
        {
          path: resources.downloads.path,
          name: resources.downloads.name,
          component: () => import('../views/resources/DownloadView.vue')
        }
      ]
    },

    // contact
    {
      path: contact.path,
      name: contact.name,
      component: () => import('../views/ContactView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
});

export default router;
