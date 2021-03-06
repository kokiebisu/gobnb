import template from '@template/index/index.module.scss';

import { Card, $Card } from '@card';

export interface CategorySegmentTemplateProps {
  items?: { imgUrl: string; title: string; to: string }[];
}

/**
 *
 * @param {Object[]} items - List of categories to be displayed
 */
export const CategorySegmentTemplate: React.FC<CategorySegmentTemplateProps> = ({
  items,
}) => {
  return (
    <div>
      <div className="px-8">
        <div
          style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
          className={[template['category__carousel']].join(' ')}
        >
          {items.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  variant={$Card.CATEGORY}
                  imgUrl={item?.imgUrl}
                  title={item?.title}
                  to={item?.to}
                  extendsTo={[template['category__card']].join(' ')}
                />
              </div>
            );
          })}
          <div className={template['category__space']}></div>
        </div>
      </div>
    </div>
  );
};
