
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <section className="w-full max-w-xl rounded-2xl border border-slate-200 bg-surface p-8 shadow-lg">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-xl font-bold text-white">
          10X
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
          Graduation Project
        </p>

        <h1 className="text-3xl font-bold text-text-main">
          10X Shop
        </h1>

        <p className="mt-3 leading-7 text-text-muted">
          Your modern shopping experience starts here.
          Discover products, manage your cart and place
          your order with ease.
        </p>

        <div className="mt-7 rounded-xl bg-indigo-50 p-4">
          <p className="font-semibold text-brand">
            Project environment is ready.
          </p>
          <p className="mt-1 text-sm text-slate-600">
            React, TypeScript and Tailwind CSS v4 are configured.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            CORE
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            FULL
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            BONUS
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
