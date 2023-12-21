import CTA from "@/app/components/cta";

export default function RootLayout({ children }) {
  return (
    <div className="bg-slate-100">
      {children}
      <CTA />
    </div>
  );
}
