import NavFoot from "../components/layout/NavFoot";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavFoot>{children}</NavFoot>;
}
