import { factory } from './utils/factory';

export const $Card = {
  CATEGORY: 'category',
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
  TYPESTAY: 'typestay',
  ARRANGEMENTS: 'arrangements',
  CHECKIN: 'checkin',
  REVIEW: 'review',
  STAY: 'stay',
  NEARBY: 'nearby',
  ONLINE: 'online',
  PARTICIPATE: 'participate',
  AVAILABLE: 'available',
  HOST: 'host',
  SET: 'set',
  AGAIN: 'again',
  WORKS: 'works',
  SHARING: 'sharing',
  HOW: 'how',
  ANYWHERE: 'anywhere',
  HOSTING: 'hosting',
  VIDEO: 'video',
  STARTING: 'starting',
  COLLECTION: 'collection',
};

export interface CardProps {
  extendsTo?: string;
  variant?: string;
  to?: string;
  [property: string]: any;
}

/**
 * Bundles the card components
 * @param {string} extendsTo - Adds custom styling to the specified component
 * @param {string} variant - Specifies the variant of card component
 * @param {string} to - Redirects to the path when clicked
 */
export const Card: React.FC<CardProps> = ({
  extendsTo,
  variant,
  onClick,
  ...props
}) => {
  const variants: {
    [variant: string]: { component: JSX.Element };
  } = factory(props);

  if (onClick) {
    return (
      <div
        className="cursor-pointer text-left block h-full w-full"
        data-testid={`${variant}-card`}
        onClick={onClick}
      >
        {variants[variant].component}
      </div>
    );
  }

  return (
    <div data-testid={`${variant}-card`}>{variants[variant].component}</div>
  );
};
