export default function WikiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="space-y-4">{children}</section>;
}
