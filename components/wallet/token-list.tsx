import Image from 'next/image'

const tokens = [
  { name: 'Ethereum', symbol: 'ETH', balance: '0.45', value: '$1,115.16', icon: '/eth.svg' },
  { name: 'USDC Coin', symbol: 'USDC', balance: '76', value: '$76.84', icon: '/usdc.svg' },
  { name: 'Optimism', symbol: 'OP', balance: '20', value: '$20.00', icon: '/op.svg' },
]

export function TokenList() {
  return (
    <div className="space-y-2 mt-2">
      {tokens.map((token) => (
        <div key={token.symbol} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <div className="flex items-center space-x-3">
            <Image
              src={token.icon}
              alt={token.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{token.name}</p>
              <p className="text-sm text-gray-500">{token.balance} {token.symbol}</p>
            </div>
          </div>
          <p className="font-medium">{token.value}</p>
        </div>
      ))}
    </div>
  )
}

