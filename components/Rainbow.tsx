export function RainbowText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-pink-500 to-sky-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function RainboWBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-gradient-to-r from-pink-500 to-sky-500">
      {children}
    </div>
  );
}
