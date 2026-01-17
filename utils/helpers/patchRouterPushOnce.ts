import { router } from "expo-router";

export function patchRouterPushOnce() {
  if ((router as any).__pushPatched) return;

  const originalPush = router.push.bind(router);
  let locked = false;
  let lastKey = "";
  let lastAt = 0;
  const WINDOW_MS = 700;

  function hrefKey(href: any) {
    if (typeof href === "string") return href;

    try {
      return JSON.stringify(href);
    } catch {
      return String(href);
    }
  }

  router.push = ((href: any) => {
    const now = Date.now();
    const key = hrefKey(href);

    if (locked) return;
    if (key === lastKey && now - lastAt < WINDOW_MS) return;
    locked = true;
    lastKey = key;
    lastAt = now;

    try {
      originalPush(href);
    } finally {
      setTimeout(() => {
        locked = false;
      }, WINDOW_MS);
    }
  }) as typeof router.push;

  (router as any).__pushPatched = true;
}
