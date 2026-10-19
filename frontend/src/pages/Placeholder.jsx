export default function Placeholder({ title, phase }) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-white p-10 text-center fade-up">
      <h1 className="text-2xl font-bold text-navy">{title}</h1>
      <p className="mt-2 text-sm text-navy-soft">
        This page is planned for <span className="font-semibold text-accent">{phase}</span>.
      </p>
    </div>
  )
}