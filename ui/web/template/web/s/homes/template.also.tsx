/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
import { Button, $BUTTON } from '@nextbnb/atoms';
import { Card, $CARD } from '@nextbnb/molecules';
import * as Helpers from '@nextbnb/design/helper/array';
import { useSlider } from '@nextbnb/design/hooks/useSlider';
import { useHandleContainerResize } from '@nextbnb/design/hooks/useHandleContainerResize';

/**
 * Renders the also section
 * @param {string[]} items - List of suggested cities
 */
export const AlsoTemplate: React.FC<{
  items?: any;
  title?: string;
}> = ({
  items = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ],
  title = 'Section title',
}) => {
  const containerRef = useRef<HTMLDivElement>();
  const width: number = useHandleContainerResize(containerRef)[0];
  const { state, previous, next } = useSlider(items, width, 'also');
  const displayingItems = Helpers.groupByTwo(items);

  return (
    <div css={{ overflowX: 'hidden' }}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        ref={containerRef}
      >
        <div
          css={{
            margin: '16px 0',
          }}
        >
          <h3
            css={{
              fontSize: 20,
            }}
          >
            {title}
          </h3>
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            css={{
              margin: '0 2px',
            }}
          >
            <Button
              variant={$BUTTON.paginate}
              animate
              direction="left"
              onClick={previous}
              disable={state.activeSlide === 0}
            />
          </div>
          <div
            css={{
              margin: '0 2px',
            }}
          >
            <Button
              variant={$BUTTON.paginate}
              animate
              direction="right"
              onClick={next}
              disable={
                state.activeSlide === items.length / 2 - (width > 728 ? 3 : 2)
              }
            />
          </div>
        </div>
      </div>
      <div
        css={{
          height: '100%',
          width: width * (items.length / 2),
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        <div css={{ display: 'flex' }}>
          {displayingItems.map((item, index) => {
            return (
              <div
                css={{ width: width / (width > 728 ? 3 : 2) }}
                key={index}
                // className={[section["w__nearby"]].join(" ")}
              >
                <div
                  css={{
                    marginBottom: 10,
                  }}
                >
                  <Card
                    variant={$CARD.nearby}
                    to={item[0]?.to}
                    imgUrl={item?.pic}
                    title={item[0]?.city || 'Item'}
                    subtitle={`${item[0]?.hours || 1} hour drive`}
                    size="lg"
                  />
                </div>
                <div>
                  <Card
                    variant={$CARD.nearby}
                    to={item[1]?.to}
                    imgUrl={item?.pic}
                    title={item[1]?.city || 'Item'}
                    subtitle={`${item[0]?.hours || 1} hour drive`}
                    size="lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};