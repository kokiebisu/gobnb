import { Priority } from './priority';
import { Help } from './help';
import { Ready } from './ready';
import { Community } from './community';
import { All } from './all';
import { Banner } from './banner';
import { Hosting } from './hosting';

export const $Segment = {
  ALL: 'all',
  HELP: 'help',
  BANNER: 'banner',
  COMMUNITY: 'community',
  HOSTING: 'hosting',
  PRIORITY: 'priority',
  READY: 'ready',
};

export interface SegmentProps {
  extendsTo?: string;
  variant?: string;
  [property: string]: any;
}

/**
 * Bundles the button components
 * @param {string} extendsTo - Add custom styling to the specified component
 * @param {string} type - Specifies the type of button component
 * @param {Object} children - A JSX that will be part of the component
 */
export const Segment: React.FC<SegmentProps> = ({
  extendsTo = '',
  variant = 'help',
  children,
  onClick,
  to,
  block,
  animate,
  ...props
}) => {
  const variants: { [variant: string]: any } = {
    help: <Help {...props} />,
    priority: <Priority {...props} />,
    community: <Community {...props} />,
    ready: <Ready {...props} />,
    all: <All {...props} />,
    banner: <Banner {...props} />,
    hosting: <Hosting {...props} />,
  };

  return <div data-testid={`${variant}-landing`}>{variants[variant]}</div>;
};