import { motion } from 'framer-motion';
import template from '../index.module.scss';
import { Button } from '@atoms';

export interface DestinationsSegmentTemplateProps {
  items?: { [destinationType: string]: { city: string; location: string }[] };
  categories?: { name: string; value: string }[];
  destinationType?: 'artsCulture' | 'outdoor' | 'cabins' | 'beach' | 'popular';
  handleDestinationTypeChange?: (destinationType: string) => void;
  handleDestinationRedirect?: (city: string) => void;
}

export const DestinationsSegmentTemplate: React.FC<DestinationsSegmentTemplateProps> = ({
  items,
  categories,
  handleDestinationTypeChange,
  handleDestinationRedirect,
  destinationType,
}) => {
  return (
    <div>
      <div className="flex overflow-x-auto">
        {categories.map((category, index) => {
          const { name, value } = category || {};
          return (
            <div key={index}>
              <CategoryButton
                title={name}
                selected={destinationType === value}
                onClick={() => handleDestinationTypeChange(value)}
              />
            </div>
          );
        })}
      </div>
      <div className="w-full bg-gray-200 h-0.5" />
      <div className="flex flex-wrap">
        {items[destinationType].map(({ city, location }, index) => {
          return (
            <div key={index} className={[template['destination__w']].join(' ')}>
              <Button
                block
                stretch
                variant="destination"
                city={city}
                location={location}
                onClick={() => handleDestinationRedirect(city)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CategoryButton: React.FC<{
  title: String;
  selected?: Boolean;
  onClick: () => void;
}> = ({ title, selected, onClick }) => {
  return (
    <div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="rounded-md py-4 px-3 hover:bg-gray-200"
      >
        <div>
          <h3 className="whitespace-nowrap text-md">{title}</h3>
        </div>
      </motion.button>
      <div className="flex w-full justify-center">
        <div
          className={`h-1 ${selected ? 'bg-black' : 'bg-transparent'} w-8/10`}
        />
      </div>
    </div>
  );
};
