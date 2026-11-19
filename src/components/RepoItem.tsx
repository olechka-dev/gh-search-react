import type { RepoDetails } from '../types/repo.types';
import avatarPlaceholder from './../assets/avatar.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { greyPlaceholder } from '../constants/search.constants';
import { useState } from 'react';

export function RepoItem({
  name,
  description,
  avatar,
}: Omit<RepoDetails, 'id'>) {
  const [imgUrl, setImgUrl] = useState(avatar || greyPlaceholder);

  return (
    <article className="flex h-20 flex-row gap-4 rounded-card border border-border bg-surface px-5 py-4 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="flex shrink-0 items-center">
        <LazyLoadImage
          src={imgUrl}
          alt="User image"
          placeholderSrc={greyPlaceholder}
          width={40}
          height={40}
          className="block rounded-[50%]"
          wrapperClassName="overflow-hidden rounded-full"
          onError={() => {
            setImgUrl(avatarPlaceholder);
          }}
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <header>
          <h2 className="overflow-hidden text-base leading-snug font-semibold text-ellipsis whitespace-nowrap text-foreground">
            {name}
          </h2>
        </header>
        {!!description && (
          <p className="mt-1 overflow-hidden text-sm leading-5 text-ellipsis whitespace-nowrap text-foreground-muted">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
