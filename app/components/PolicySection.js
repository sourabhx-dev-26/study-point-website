export default function PolicySection({ title, children }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}
