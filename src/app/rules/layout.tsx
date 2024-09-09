import NavFoot from "../components/layout/NavFoot";

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavFoot>{children}</NavFoot>;
}
