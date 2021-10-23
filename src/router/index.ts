import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
    alias: "/cables",
		name: "cables",
		component: () => import("@/components/CableList.vue"),
	},
	{
		path: "/cables/new",
		name: "cables-new",
		component: () => import("@/components/CableForm.vue"),
	},
	{
		path: "/cables/:id",
		name: "cable-details",
		component: () => import("@/components/CableDetail.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
