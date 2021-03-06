/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Bullet, $BULLET, Button, $BUTTON } from '@nextbnb/atoms';

/**
 * Renders the amenity section
 * @param {string} title - Title of the section
 * @param {Object[]} amenities - List of amenities
 */
export const AmenitiesTemplate: React.FC<{
  title?: string;
  amenities?: string[];
}> = ({ title = 'Title here', amenities = ['kitchen', 'smoke'] }) => {
  return (
    <div>
      <div>
        <h3
          css={{
            fontWeight: 500,
            marginBottom: 20,
            color: 'grey.800',
            size: 24,
          }}
        >
          {title}
        </h3>
      </div>
      <div
        css={{
          marginBottom: 32,
        }}
        // className={[
        //   // section["display__amenities--wrapper"],

        // ].join(" ")}
      >
        {amenities.map((amenity, index) => {
          return (
            <Bullet
              key={index}
              variant={$BULLET.amenity}
              amenityType={amenity}
            />
          );
        })}
      </div>
      <div css={{ width: 300, margin: '14px 0' }}>
        <Button
          variant={$BUTTON.border}
          size="md"
          title="Show all 40 amenities"
        />
      </div>
    </div>
  );
};
