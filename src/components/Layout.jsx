export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex justify-center bg-zinc-50 text-white">
      <div className="w-[425px] min-h-screen px-8 py-24">
        <div className="space-y-12">{children}</div>
      </div>
    </div>
  );
}
