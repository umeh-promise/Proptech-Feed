import Navbar from "./_components/navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex h-dvh flex-col">
      <Navbar />
      <main className="font-openRunde flex-1 overflow-y-auto xl:overflow-hidden text-grey-100">
        {children}
      </main>
    </section>
  );
}
