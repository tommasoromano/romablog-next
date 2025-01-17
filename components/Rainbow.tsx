export function RainbowText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-lime-400 via-cyan-400 to-violet-600 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function RainboWBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-gradient-to-r from-pink-400 to-sky-400">
      {children}
    </div>
  );
}
