interface TokenChipProps {
  icon: string;
  symbol: string;
}

export function TokenChip({ icon, symbol }: TokenChipProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg py-1.5 px-3">
      <img src={icon} alt="" className="w-5 h-5" />
      <span className="text-sm font-semibold text-black dark:text-zinc-100">{symbol}</span>
    </div>
  );
}

