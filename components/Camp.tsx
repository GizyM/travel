import React from 'react'
import Image from 'next/image';
import { PEOPLE_URL } from '@/constants';

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }) => {
  return (
    <div className={`campsite ${backgroundImage}`}>
      <div className="campsite__inner">
        <div className="campsite__top">
            <div className="campsite__icon-wrap">
                <Image src="/folded-map.svg" alt="map" width={28} height={28} />
            </div>

            <div className="campsite__meta">
                <h4 className="campsite__title">{title}</h4>
                <p className="campsite__subtitle">{subtitle}</p>
            </div>
        </div>

        <div className="campsite__bottom">
            <span className="campsite__people">
                {PEOPLE_URL.map((url) => (
                    <span className="campsite__person" key={url}>
                        <Image 
                        src={url} 
                        alt="person" 
                        width={52} 
                        height={52} 
                        className="campsite__person-img"
                        />
                    </span>
                ))}
            </span>

            <p className="campsite__joined">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
    return (
        <section className="camp">
            <div className="camp__scroll">
                <CampSite 
                backgroundImage="bg-img-1"
                title="Triund Hill Camp"
                subtitle="Dharamshala, India"
                peopleJoined="50+ People Joined"
                 />
                <CampSite 
                backgroundImage="bg-img-2"
                title="Mountain View Camp"
                subtitle="Somewhere in the Wilderness"
                peopleJoined="50+ People Joined"
                 />
            </div>

            <div className="camp__cta-row">
                <div className="camp__cta">
                    <h2 className="camp__cta-title">
                        <strong>Feeling Lost</strong> And Not Knowing the Way?
                    </h2>

                    <p className="camp__cta-text">
                        Starting from the anxiety of the climbers when visting a new 
                        climbing location, the possibility of getting lost is very large.
                        That's why we are here for those of you who want to start an adventure.
                    </p>

                    <Image 
                    src="/quote.svg"
                    alt="quote"
                    width={186}
                    height={219}
                     className="camp__quote"
                    />
                </div>
            </div>
        </section>
    );
};

export default Camp;
