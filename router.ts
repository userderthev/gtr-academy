import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { auth } from "./firebase";

import AuthLayout from "./layout/AuthLayout.vue";
import DashboardLayout from "./layout/DashboardLayout.vue";
import * as Views from "./views";

import dev from "./components/dev/devComponent.vue";
import * as Components from "./components";
import FrontPage from "./components/FrontPage.vue";
import { store } from "@/store";

function randomQuery(): string {
  return Math.floor(Math.random() * 1000).toString();
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "frontpage",
    component: FrontPage
  },
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: Views.Home, //() => import("Views.Home.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "home"
        }
      },
      {
        path: "subscriptions",
        name: "subscriptions",
        redirect: "/subscriptions/trading-academy?w=" + randomQuery(),
        component: Views.Subscriptions, //() => import("Views.Subscriptions.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "subscriptions"
        },
        children: [
          {
            path: "trading-academy",
            name: "trading-academy",
            component: Components.Subscriptions.TradingAcademy,
            meta: {}
          },
          {
            path: "gtr-system",
            name: "gtr-system",
            component: Components.Subscriptions.GTRSystem,
            meta: {}
          },
          {
            path: "distributor-license",
            name: "distributor-license",
            component: Components.Subscriptions.DistributorLicense,
            meta: {}
          }
        ]
      },
      {
        path: "commissions",
        name: "commissions",
        component: Views.Commissions, //() => import("Views.Commissions.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "commissions"
        }
      },
      {
        path: "withdrawals",
        name: "withdrawals",
        component: Views.Withdrawals, //() => import("Views.Withdrawals.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "withdrawals"
        }
      },
      {
        path: "payments",
        name: "payments",
        component: Views.Payments, //() => import("Views.Payments.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "payments"
        }
      },
      {
        path: "unilevel",
        name: "unilevel",
        component: Views.Unilevel, //() => import ("Views.Unilevel.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "unilevel"
        }
      },
      {
        path: "binary-network",
        name: "binary-network",
        component: Views.BinaryNetwork, //() => import ("Views.BinaryNetwork.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "binary-network"
        }
      },
      {
        path: "profile",
        name: "profile",
        component: Views.Profile, //() => import ("Views.Profile.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "profile"
        }
      },
      {
        path: "queries",
        name: "queries",
        component: Views.Queries, //() => import ("Views.Queries.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "queries"
        }
      },
      {
        path: "channels",
        name: "channels",
        component: Views.Channels, //() => import ("Views.Channels.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "channels"
        }
      },
      {
        path: "alerts",
        name: "alerts",
        component: Views.Alerts, //() => import ("Views.Alerts.vue"),
        meta: {
          requiresAuth: true,
          accessKey: "alerts"
        }
      },
      {
        path: "sys-config",
        name: "sys-config",
        component: Views.SysConfig,
        redirect: "/sys-config/payouts",
        meta: {
          requiresAuth: true,
          accessKey: "sys-config"
        },
        children: [
          {
            path: "payouts",
            name: "Payouts",
            component: Components.SysConfig.Payouts,
            meta: {}
          },
          {
            path: "schedules-configuration",
            name: "SchedulesConfiguration",
            component: Components.SysConfig.SchedulesConfiguration,
            meta: {}
          },
          {
            path: "profile-permissions",
            name: "ProfilePermissionsConfiguration",
            component: Components.SysConfig.ProfilePermissionsConfiguration,
            meta: {}
          },
          {
            path: "user-profiles",
            name: "UserProfilesConfiguration",
            component: Components.SysConfig.UserProfilesConfiguration,
            meta: {}
          }
        ]
      },
      {
        path: "payouts",
        name: "payouts",
        component: Views.Payouts,
        meta: {
          requiresAuth: true,
          accessKey: "payouts"
        }
      }
    ]
  },
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: Views.Login
      },
      {
        path: "/registro",
        name: "register",
        component: Views.Register,
        props: true,
        children: [
          {
            path: ":username/:side",
            name: "registration",
            component: Views.Register,
            props: true
          }
        ]
      },
      {
        path: "/reset-password/:token",
        name: "resetPassword",
        component: Views.ResetPassword,
        props: true
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: About
  // },
  {
    path: "/dev",
    name: "dev",
    component: dev
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Views.NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const hasPermission = store.getters["auth/getUserPermissions"].find
    ? store.getters["auth/getUserPermissions"].find(
        (x: string) => x == to.meta.accessKey
      ) || false
    : false;

  // console.debug("-----------");
  // console.debug("auth.currentUser", auth.currentUser?.displayName);
  // console.debug("from", from);
  // console.debug("to", to);
  // console.debug(store.getters["auth/getUserPermissions"].length);
  // console.debug("requiresAuth", requiresAuth);
  // console.debug("hasPermission", hasPermission);
  // console.debug("to.meta.accessKey", to.meta.accessKey);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else if (
    requiresAuth &&
    store.getters["auth/getUserPermissions"].length <= 0
  ) {
    next("/login");
  } else if (hasPermission || to.meta.accessKey == undefined) {
    next();
  } else {
    next("/denied");
  }
});

export default router;
