import * as React from 'react';
import { useState } from 'react';

import font from '../../../styles/font.module.scss';
import space from '../../../styles/space.module.scss';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import { DescriptionSectionProps } from './props';

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  data = {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    space:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    access:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  layoutType = 'room',
}) => {
  const [display, setDisplay] = useState<boolean>(false);

  const changeLength = () => {
    setDisplay(!display);
  };

  const renderDescription = (description: string) => {
    const wordArray = description.split(' ');
    const newArray = [];
    for (let i = 0; i < 75; i++) {
      newArray.push(wordArray[i]);
    }
    return newArray;
  };

  const newArray = renderDescription(data.description);
  return (
    <div>
      {layoutType === 'experience' && (
        <div className={[space['m-v--16']].join(' ')}>
          <h3>What you'll do</h3>
        </div>
      )}
      {display ? (
        <div>
          <p
            className={[
              font['lh--15'],
              font['weight--300'],
              color['c--gray__2'],
            ].join(' ')}>
            {data.description}
          </p>
          <div className={[space['m-v--22']].join(' ')}>
            <h3
              className={[
                font['size--16'],
                space['m-b--6'],
                color['c--gray__3'],
                font['weight--300'],
              ].join(' ')}>
              The space
            </h3>
            <p className={[font['weight--100'], color['c--gray__2']].join(' ')}>
              {data.space}
            </p>
          </div>
          <div className={[space['p-v--8']].join(' ')}>
            <h3
              className={[
                font['size--16'],
                space['m-b--6'],
                color['c--gray__3'],
                font['weight--300'],
              ].join(' ')}>
              Guest access
            </h3>
            <p className={[font['weight--100'], color['c--gray__2']].join(' ')}>
              {data.access}
            </p>
          </div>
        </div>
      ) : (
        <>
          <p
            className={[
              font['weight--300'],
              space['m-l--4'],
              font['lh--15'],
              color['c--gray__2'],
            ].join(' ')}>
            {`${newArray.join(' ')}...`}
            <span>
              <button
                onClick={() => {
                  setDisplay(true);
                  changeLength();
                }}
                className={[
                  space['m-l--4'],
                  font['size--16'],
                  color['b-b--gray__2'],
                  color['c--gray__2'],
                  color['bg--transparent'],
                ].join(' ')}>
                read more
              </button>
            </span>
          </p>
        </>
      )}
      <div className={[space['m-t--20']].join(' ')}>
        <a
          onClick={() => {
            setDisplay(true);
            changeLength();
          }}
          className={[
            space['m-l--4'],
            color['b-b--gray__2'],
            color['c--gray__2'],
            color['bg--transparent'],
          ].join(' ')}>
          Contact host
        </a>
      </div>
    </div>
  );
};
