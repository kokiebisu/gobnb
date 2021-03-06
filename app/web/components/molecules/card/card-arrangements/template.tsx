import { Icon } from '@atoms';

export interface ArrangementsCardTemplateProps {
  type?: string;
  count?: number;
}

/**
 * Renders the arrangements card component
 * @param {Object} card - Information of the card
 */
export const ArrangementsCardTemplate: React.FC<ArrangementsCardTemplateProps> = ({
  type,
  count,
}) => {
  return (
    <div className="w-52 py-6 border border-gray-400 rounded-md">
      <div className="pl-4">
        <div className="pt-1 pb-2">
          <Icon variant="stay" stayType="doublebed" width={24} />
        </div>
        <p className="pt-1 text-gray-700">Bedroom</p>
        <div>
          <p className="text-gray-700">
            {count} {type}
          </p>
        </div>
      </div>
    </div>
  );
};
