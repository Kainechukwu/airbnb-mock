import React from 'react'

export default function FooterLinks() {
  const links = [
    {
      title: 'Support',
      links: [
        'Help Center',
        'AirCover',
        'Anti-discrimination',
        'Disability support',
        'Cancellation options',
        'Report neighbourhood concern'
      ]
    },
    {
      title: 'Hosting',
      links: [
        'Airbnb your home',
        'AirCover for Hosts',
        'Hosting resources',
        'Community forum',
        'Hosting responsibbility',
        'Airbnb-friendly apartments'
      ]
    },
    {
      title: 'Airbnb',
      links: [
        'Newsroom',
        'New features',
        'Careers',
        'Investors',
        'Gift cards',
        'Airbnb.org emergency stays'
      ]
    }
  ]
  return (
    <div className="px-6 md:px-16   ">
      <div className="border-b-[1px] border-b-[#DDDDDD] pb-[50px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {links.map((link) => (
            <div key={link.title} className="flex flex-col">
              <div className="flex flex-col gap-3 text-[14px]">
                <span className="font-semibold text-[#222222]">
                  {link.title}
                </span>
                {link?.links &&
                  link.links.map((item) => (
                    <span key={item} className="font-normal text-[#222222]">
                      {item}
                    </span>
                  ))}
              </div>
              <div
                className={`${
                  link.title !== 'Airbnb' ? 'block' : 'hidden'
                } h-8 border-b-[1px] border-b-[#DDDDDD] md:hidden`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
