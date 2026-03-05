type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    __sessameTrackingInitialized?: boolean;
  }
}

const DOWNLOAD_EXTENSIONS = [
  ".apk",
  ".pdf",
  ".zip",
  ".rar",
  ".7z",
  ".csv",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".ppt",
  ".pptx",
];

function pushDataLayer(event: DataLayerEvent) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, 200);
}

function isDownloadLink(link: HTMLAnchorElement) {
  if (link.hasAttribute("download")) return true;

  const rawHref = (link.getAttribute("href") || "").toLowerCase();
  return DOWNLOAD_EXTENSIONS.some((ext) => rawHref.endsWith(ext));
}

function getClickMetadata(target: HTMLElement) {
  const clickable = target.closest(
    "a, button, [role='button'], input[type='submit'], input[type='button']",
  ) as HTMLElement | null;

  if (!clickable) return null;

  const anchor = clickable.tagName.toLowerCase() === "a" ? (clickable as HTMLAnchorElement) : null;
  const url = anchor ? anchor.getAttribute("href") || "" : "";

  return {
    clickable,
    click_tag: clickable.tagName.toLowerCase(),
    click_id: clickable.id || "",
    click_classes: clickable.className || "",
    click_text: normalizeText(clickable.textContent || clickable.getAttribute("aria-label") || ""),
    click_url: url,
    click_target: anchor?.getAttribute("target") || "",
    is_download: anchor ? isDownloadLink(anchor) : false,
  };
}

function trackPageView() {
  pushDataLayer({
    event: "page_view_custom",
    page_title: document.title,
    page_path: window.location.pathname,
    page_location: window.location.href,
  });
}

function observeNavigation() {
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    trackPageView();
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    trackPageView();
  };

  window.addEventListener("popstate", trackPageView);
}

function observeClicks() {
  document.addEventListener(
    "click",
    (evt) => {
      const target = evt.target as HTMLElement | null;
      if (!target) return;

      const metadata = getClickMetadata(target);
      if (!metadata) return;

      pushDataLayer({
        event: "site_click",
        ...metadata,
        page_path: window.location.pathname,
        page_title: document.title,
      });

      if (metadata.is_download) {
        pushDataLayer({
          event: "file_download",
          file_name: metadata.click_url,
          file_url: metadata.click_url,
          link_text: metadata.click_text,
          page_path: window.location.pathname,
          page_title: document.title,
        });
      }
    },
    { capture: true },
  );
}

export function initSiteTracking() {
  if (typeof window === "undefined") return;
  if (window.__sessameTrackingInitialized) return;

  window.__sessameTrackingInitialized = true;
  window.dataLayer = window.dataLayer || [];

  trackPageView();
  observeNavigation();
  observeClicks();
}

