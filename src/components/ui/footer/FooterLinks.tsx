import React from 'react'

export default function FooterLinks() {
  const links = [
    {
      title: 'Support',
      links: ['Help Center', 'AirCover']
    },
    {
      title: 'Hosting',
      links: ['Airbnb your home']
    },
    {
      title: 'Airbnb',
      links: ['Newsroom']
    }
  ]
  return (
    <div className="px-16  ">
      <div className="border-b-[1px] border-b-[#DDDDDD] pb-[50px]">
        <div className="grid grid-cols-3 gap-6">
          {links.map((link) => (
            <div key={link.title} className="flex flex-col gap-3 text-[14px]">
              <span className="font-medium text-[#222222]">{link.title}</span>
              {link?.links &&
                link.links.map((item) => (
                  <span key={item} className=" text-[#222222]">
                    {item}
                  </span>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
