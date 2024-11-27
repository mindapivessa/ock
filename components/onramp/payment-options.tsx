import Image from 'next/image';

interface PaymentOptionProps {
    icon: string | React.ReactElement;
    amount?: string;
    label: string;
    balance?: string;
    additionalInfo?: string;
    onClick: () => void;
  }
  
  export function PaymentOption({ icon, amount, label, balance, additionalInfo, onClick }: PaymentOptionProps) {
    return (
      <button
        onClick={onClick}
        className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:shadow-sm transition-colors"
      >
        <div className="flex items-center space-x-3">
        <div className="w-8 h-8 flex items-center justify-center">
          {typeof icon === 'string' ? (
            <Image 
              src={icon}
              alt={`${label} icon`} 
              width={32}
              height={32}
              className={icon.includes('apple') ? 'dark:invert' : ''}
            />
          ) : (
            <div className="w-6 h-6">
              {icon}
            </div>
          )}
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center gap-1">
            {amount && <span className="font-semibold text-black dark:text-white">{amount}</span>}
            <span className="text-black dark:text-white font-semibold">{label}</span>
          </div>
          {balance && (
            <div className="text-sm text-zinc-500 dark:text-zinc-500">
              Balance: {balance}
            </div>
          )}
          {additionalInfo && (
            <div className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">
              {additionalInfo}
            </div>
          )}
        </div>
        </div>
      </button>
    );
  }
  
  