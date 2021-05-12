import {
  ScenarioBulletTemplate,
  ScenarioBulletTemplateProps,
} from './template';

export interface ScenarioBulletProps extends ScenarioBulletTemplateProps {}

const ScenarioBullet: React.FC<ScenarioBulletProps> = (props) => {
  return <ScenarioBulletTemplate {...props} />;
};

export const scenario = (props) => {
  return {
    scenario: { component: <ScenarioBullet {...props} /> },
  };
};