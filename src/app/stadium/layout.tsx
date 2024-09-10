import NavFoot from "../components/layout/NavFoot";

export default function StadiumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavFoot>{children}</NavFoot>;
}
