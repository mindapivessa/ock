import Image from 'next/image';

interface TokenChipProps {
  icon: string;
  symbol: string;
}

export function TokenChip({ icon, symbol }: TokenChipProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg py-1.5 px-3">
      <Image src={icon} alt="" width={20} height={20} />
      <span className="text-sm font-semibold text-black dark:text-zinc-100">{symbol}</span>
    </div>
  );
}

