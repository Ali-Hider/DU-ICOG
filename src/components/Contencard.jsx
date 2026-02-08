export default function ContentCard({ children }) {
  return (
    <section className="container mx-auto px-6 py-16 max-w-5xl">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
        {children}
      </div>
    </section>
  );
}
