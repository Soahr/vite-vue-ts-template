import { createI18n } from "vue-i18n";

import en from "@/locales/en.json";

// create a simple i18n instance
// with auto-detected default language
// based on the browser locale

const i18n = createI18n({
	locale: navigator.language,
	fallbackLocale: "en",
	messages: {
		en,
	},
});

export default i18n;
