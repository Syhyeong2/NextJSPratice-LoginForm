import TabBar from "@/components/tab-bar";

export default function TabLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:ml-24">
      {children}
      <TabBar />
    </div>
  );
}
