// Deliberately not a client component and not driven by a React effect:
// its whole point is to be visible before hydration finishes, so its
// dismissal can't depend on hydration finishing either — on a slow/
// low-power device, waiting for React to boot before hiding the loader
// would mean the loader stays up exactly when it's needed most. The
// inline script below runs the moment the browser parses it, hides the
// loader on `load`, and needs no framework runtime to do it.
export default function PageLoader() {
  return (
    <>
      <div
        id="page-loader"
        aria-hidden="true"
        // The inline script below mutates this element's style/dataset
        // directly (possibly before hydration even runs), which React
        // has no way to predict from the server render — that's the
        // point, not a bug, so tell it not to warn/patch over it.
        suppressHydrationWarning
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500 dark:bg-neutral-950"
      >
        <div className="relative h-16 w-16">
          <div className="absolute inset-2 animate-pulse rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 opacity-25 blur-md" />
          <div className="absolute inset-0 rounded-full border-4 border-neutral-200 dark:border-neutral-800" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500 border-r-violet-500" />
        </div>
      </div>
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `(function(){
            function hide(){
              var el = document.getElementById('page-loader');
              if (!el || el.dataset.hidden) return;
              el.dataset.hidden = '1';
              el.style.opacity = '0';
              el.style.pointerEvents = 'none';
              setTimeout(function(){ el.style.display = 'none'; }, 500);
            }
            if (document.readyState === 'complete') {
              setTimeout(hide, 250);
            } else {
              window.addEventListener('load', hide);
              setTimeout(hide, 6000);
            }
          })();`,
        }}
      />
    </>
  );
}
