"use client";

import { useEffect, useState } from "react";
import {
  CMS_HOME_CHANGE,
  DEFAULT_CMS_HOME,
  readCmsHome,
  type CmsHomeSettings,
} from "@/lib/cmsHome";

export function useCmsHome() {
  const [settings, setSettings] = useState<CmsHomeSettings>(() => ({
    ...DEFAULT_CMS_HOME,
    collectionImages: {},
    uniquePillarImages: {},
    uniquePillarCopy: {},
  }));

  useEffect(() => {
    const sync = () => setSettings(readCmsHome());
    sync();
    window.addEventListener(CMS_HOME_CHANGE, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CMS_HOME_CHANGE, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return settings;
}
