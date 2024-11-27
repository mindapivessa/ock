import Image from 'next/image'

interface WalletButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export function WalletButton({ onClick }: WalletButtonProps) {
  return (
    <button 
      className="flex items-center space-x-2 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors" 
      onClick={onClick}
    >
      <div className="h-6 w-6 rounded-full overflow-hidden">
        <Image
          src="/basename-avatar.svg"
          alt="Wallet Avatar"
          width={24}
          height={24}
        />
      </div>
      <span className="font-semibold">paprika.base.eth</span>
    </button>
  )
}

