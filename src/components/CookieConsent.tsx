import { useEffect, useState } from "react";

const CONSENT_KEY = "petitdetail.cookie-consent.v1";

type ConsentStatus = "accepted" | "refused";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(CONSENT_KEY) === null);
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(status: ConsentStatus) {
    try {
      window.localStorage.setItem(CONSENT_KEY, status);
    } catch {
      setVisible(false);
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Préférences de cookies"
      aria-live="polite"
      className="fixed bottom-24 left-3 right-3 z-[60] rounded-2xl border border-border bg-background/95 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:bottom-6 md:left-auto md:max-w-md"
    >
      <h2 className="font-display text-xl">Votre confidentialité compte</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Nous utilisons des cookies essentiels pour assurer le bon fonctionnement de la boutique.
        Vous pouvez accepter ou continuer sans cookies optionnels.
      </p>
      <div className="mt-4 flex flex-wrap justify-end gap-2">
        <button
          type="button"
          onClick={() => saveConsent("refused")}
          className="min-h-10 rounded-full border border-border px-4 text-xs uppercase tracking-[0.12em] transition hover:border-foreground"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={() => saveConsent("accepted")}
          className="min-h-10 rounded-full bg-foreground px-4 text-xs uppercase tracking-[0.12em] text-background transition hover:opacity-80"
        >
          Accepter
        </button>
      </div>
    </aside>
  );
}
