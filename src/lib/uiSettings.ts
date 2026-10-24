export const UI_SETTINGS_KEY = "ksic-ui-settings-v1";

export type UiSettings = {
  background: "blush" | "ivory" | "warm";
  accent: "burgundy" | "maroon" | "rose";
  density: "comfortable" | "compact";
  reveals: "on" | "off";
  utilityBar: "show" | "hide";
  corners: "soft" | "sharp";
};

export const DEFAULT_UI_SETTINGS: UiSettings = {
  background: "blush",
  accent: "burgundy",
  density: "comfortable",
  reveals: "on",
  utilityBar: "show",
  corners: "soft",
};

export function readUiSettings(): UiSettings {
  if (typeof window === "undefined") return { ...DEFAULT_UI_SETTINGS };
  try {
    const raw = window.localStorage.getItem(UI_SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_UI_SETTINGS };
    return { ...DEFAULT_UI_SETTINGS, ...(JSON.parse(raw) as Partial<UiSettings>) };
  } catch {
    return { ...DEFAULT_UI_SETTINGS };
  }
}

export function writeUiSettings(next: UiSettings) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(UI_SETTINGS_KEY, JSON.stringify(next));
  applyUiSettings(next);
  window.dispatchEvent(new Event("ksic-ui-settings-change"));
}

export function resetUiSettings() {
  writeUiSettings({ ...DEFAULT_UI_SETTINGS });
}

export function applyUiSettings(settings: UiSettings = readUiSettings()) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.dataset.uiBg = settings.background;
  root.dataset.uiAccent = settings.accent;
  root.dataset.uiDensity = settings.density;
  root.dataset.uiReveals = settings.reveals;
  root.dataset.uiUtility = settings.utilityBar;
  root.dataset.uiCorners = settings.corners;

  if (settings.utilityBar === "hide") {
    root.style.setProperty("--site-header-offset", "84px");
  } else {
    root.style.removeProperty("--site-header-offset");
  }
}
