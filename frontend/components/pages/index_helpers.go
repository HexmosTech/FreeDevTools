package pages

import "fdt-templ/internal/config"

func indexAdCardClass() string {
	base := "md:px-2 md:py-2 flex flex-col justify-center items-center bg-white dark:bg-slate-900 md:border border-0 md:border-slate-200 md:dark:border-slate-900 md:rounded-xl"
	if !config.GetAdsEnabled() || !config.GetEnabledAdTypes("index")["google"] {
		return "hidden " + base
	}
	return base
}
