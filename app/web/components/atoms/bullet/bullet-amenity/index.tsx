import { AmenityBulletTemplate, AmenityBulletTemplateProps } from './template';

export interface AmenityBulletProps extends AmenityBulletTemplateProps {}

export const AmenityBullet = (props: AmenityBulletProps): JSX.Element => {
  return <AmenityBulletTemplate {...props} />;
};
