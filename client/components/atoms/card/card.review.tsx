import React, { useState } from 'react';
import { ReviewCardProps } from './props';

import space from '../../../styles/space.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';

export const ReviewCard: React.FC<ReviewCardProps> = ({
  imgUrl = 'https://a0.muscache.com/im/pictures/user/04d3499b-6cca-4d1a-acc4-1fc4444e1002.jpg?im_w=240',
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const handleExpand = () => {
    setDisplay(!display);
  };

  const renderDescription = (description: string) => {
    return `${description.split(' ').slice(0, 30).join(' ')}...`;
  };

  return (
    <div className={[space['p-v--12']].join(' ')}>
      <div
        className={[
          layout['flex'],
          layout['items-center'],
          space['p-b--8'],
        ].join(' ')}>
        <div style={{ height: 55, width: 55, borderRadius: 9999 }}>
          <img src={imgUrl} style={{ borderRadius: 9999 }} />
        </div>
        <div
          className={[
            space['m-l--12'],
            space['p-b--8'],
            layout['flex'],
            layout['items-center'],
          ].join(' ')}>
          <div className={[layout['flex'], layout['flex-col']].join(' ')}>
            <p className={[color['c--gray__3']].join(' ')}>Maureen</p>
            <p
              className={[
                font['size--14'],
                color['c--gray__1'],
                font['weight--300'],
              ].join(' ')}>
              October 2019
            </p>
          </div>
        </div>
      </div>
      <div className={space['m-v--12']}>
        {display || description.split(' ').length < 75 ? (
          <p className={[font['weight--100'], font['lh--15']].join(' ')}>
            {description}
          </p>
        ) : (
          <p className={[font['weight--100'], font['lh--15']].join(' ')}>
            {renderDescription(description)}
            <span
              className={[layout['inline-block'], space['m-l--6']].join(' ')}>
              <button
                className={[color['bg--transparent'], font['size--16']].join(
                  ' '
                )}
                onClick={() => handleExpand()}>
                <u>read more</u>
              </button>
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
