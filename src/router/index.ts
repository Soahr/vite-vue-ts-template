import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/i18n";

const routes = [
	{
		path: "/",
		name: "Home",
		meta: {
			title: "Home",
			description: "This is the home page",
		},
		component: () => import("@/views/HomeView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach(async (to, _from, next) => {
	// Set page title
	const pageTitle =
		typeof to.meta.title === "string"
			? to.meta.title
			: i18n.global.t("app_title");
	document.title = i18n.global.t("app_title") + " - " + pageTitle;

	return next();
});

export default router;
