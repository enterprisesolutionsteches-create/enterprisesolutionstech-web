import ms from "ms.macro";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter();

  useEffect(() => {
    const date = new Date();
    date.setTime(date.getTime() + ms("1 year"));

    document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`;
  }, [locale, defaultLocale]);
}
