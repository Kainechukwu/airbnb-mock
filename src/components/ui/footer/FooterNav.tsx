import React, { useState } from 'react'
import FooterNavResults from './FooterNavResults'
export default function FooterNav() {
  const navs = [
    'Popular',
    'Arts & culture',
    'Outdoors',
    'Mountains',
    'Beach',
    'Unique stays',
    'Categories',
    'Things to do',
    'Airbnb-friendly apartments'
  ]

  const footerResults = [
    {
      title: 'Canmore',
      desc: 'Apartment rentals'
    },

    {
      title: 'Benlamadena',
      desc: 'Beach house rentals'
    },
    {
      title: 'Marbella',
      desc: 'Cottage rentals'
    },
    {
      title: 'Mijas',
      desc: 'Apartment rentals'
    },
    {
      title: 'Pressccot',
      desc: 'Apartment rentals'
    },

    {
      title: 'Sonoma',
      desc: 'Beach house rentals'
    },
    {
      title: 'Joutenheim',
      desc: 'Pet-friendly rentals'
    },
    {
      title: 'Santa Barbara',
      desc: 'Apartment rentals'
    },
    {
      title: 'Monterey',
      desc: 'Apartment rentals'
    },

    {
      title: 'Anaheim',
      desc: 'Beach house rentals'
    },
    {
      title: 'Helheim',
      desc: 'Cottage rentals'
    },
    {
      title: 'Mijas',
      desc: 'Apartment rentals'
    }
  ]
  const [selected, setSelected] = useState('Popular')
  return (
    <div className="mt-2">
      <div className="flex items-center gap-[32px] border-b-[1px] border-b-[#DDDDDD] ">
        {navs.map((nav) => (
          <div
            onClick={() => setSelected(nav)}
            key={nav}
            className={`${
              selected.toLowerCase() == nav.toLowerCase()
                ? 'border-[#222222] text-[#222222] '
                : 'border-transparent text-[#727272] '
            } flex cursor-pointer flex-col items-center justify-center border-b-[2px] pb-4   pt-6 font-semibold  `}
          >
            <span className="text-sm">{nav}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-6 gap-4 pt-[36px]">
        {footerResults.map((res) => (
          <FooterNavResults key={res.title} title={res.title} desc={res.desc} />
        ))}
      </div>
    </div>
  )
}
