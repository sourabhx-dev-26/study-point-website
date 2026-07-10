const colorClasses = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
  sky: "bg-sky-50 text-sky-700 border-sky-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
};

export default function FeatureCard({
  label,
  title,
  description,
  color = "blue",
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div
        className={`mb-5 inline-flex h-12 min-w-12 items-center justify-center rounded-lg border px-3 text-sm font-bold ${
          colorClasses[color] || colorClasses.blue
        }`}
      >
        {label}
      </div>
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}
