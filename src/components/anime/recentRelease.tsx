import { RecentResponseType } from '@/src/../types/types';
import { useDispatch } from '@/store/store';
import React from 'react';
import Thumbnail from './thumbnail';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IRecentResults } from '@/pages/index';

export interface IRecentReleaseProps {
  title: string;
  animeList?: IRecentResults[];
}

const RecentRelease: React.FC<IRecentReleaseProps> = ({ title, animeList }) => {
  return (
    <div>
      <div className="flex items-center justify-between text-white mb-4">
        <h2 className="text-base md:text-[20px] uppercase font-semibold">
          {title}
        </h2>
        <div className="flex gap-3 items-center">
          <Link href="/recent">
            <a className="p-1 md:p-2 text-[#ededed]">
              <AiOutlineArrowRight className="h-6 w-6" />
            </a>
          </Link>
        </div>
      </div>
      <div
        // ref={rowRef}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative overflow-hidden"
      >
        {animeList?.map((anime, index) => (
          <Thumbnail
            key={index}
            id={anime.id}
            episodeNumber={anime.episodeNumber}
            image={anime.image}
            title={anime.title}
            color={anime.color}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(RecentRelease);
