'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { TokenList } from "./token-list"
import { CollectibleList } from "./collectible-list"

export function WalletTabs() {
  const [activeTab, setActiveTab] = useState("tokens")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tokens">Tokens</TabsTrigger>
        <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
      </TabsList>
      <TabsContent value="tokens">
        <TokenList />
      </TabsContent>
      <TabsContent value="collectibles">
        <CollectibleList />
      </TabsContent>
    </Tabs>
  )
}

