export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-3">
      <header className="flex justify-around w-full mt-4 md:mt-0 md:h-full ">
        <h2 className="text-2xl font-bold">Oferta Layout COMPANY</h2>
      </header>
      <section>
        <p>Oferta Layout Company</p>
      </section>
      {children}
    </main>
  );
}
