import TabBar from "@/components/tab-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:ml-48">
      <div className="border-slate-400 border-x-[1px] h-full">{children}</div>
      <TabBar />
    </div>
  );
}
