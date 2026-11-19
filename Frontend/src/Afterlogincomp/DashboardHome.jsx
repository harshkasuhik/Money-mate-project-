const sections = [
  {
    title: "Transactions",
    description: "See your recent activity and add a transaction.",
    value: "transaction",
  },
  {
    title: "Goals",
    description: "Keep your savings goals in one place.",
    value: "goals",
  },
  {
    title: "Budget",
    description: "Review and manage your spending plan.",
    value: "budget",
  },
];

const DashboardHome = ({ onNavigate }) => (
  <div className="mx-auto max-w-6xl p-5 sm:p-8">
    <section className="rounded-2xl bg-slate-900 p-6 text-black sm:p-8">
      <p className="text-sm font-medium text-emerald-300">MONEY MATE</p>
      <h1 className="mt-3 text-2xl font-semibold sm:text-3xl">
        Welcome to your dashboard
      </h1>
      <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
        A simple place to keep track of your transactions, goals, and budget.
      </p>
      <button
        type="button"
        onClick={() => onNavigate("transaction")}
        className="mt-5 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
      >
        View transactions
      </button>
    </section>

    <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => (
        <button
          key={section.value}
          type="button"
          onClick={() => onNavigate(section.value)}
          className="rounded-xl border border-slate-200 bg-white p-5 text-left transition hover:border-emerald-300 hover:shadow-sm"
        >
          <h2 className="font-semibold text-slate-900">{section.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {section.description}
          </p>
          <span className="mt-4 inline-block text-sm font-medium text-emerald-700">
            Open
          </span>
        </button>
      ))}
    </section>
  </div>
);

export default DashboardHome;
