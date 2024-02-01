import React, { useState } from 'react'
import CommunityHeader from './CommunityHeader'
import CommunityContentBody from './CommunityContentBody'

export default function CommunityContent() {
  const [selected, setSelected] = useState('Language and region')
  return (
    <div className="max-h-[579px] overflow-y-auto">
      <CommunityHeader selected={selected} setSelected={setSelected} />
      <CommunityContentBody selected={selected} />
    </div>
  )
}
