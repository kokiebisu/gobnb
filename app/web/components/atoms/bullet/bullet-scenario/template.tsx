import { useScenarioBulletTemplate } from './use-template';

export type ScenarioTypeVariants =
  | 'available'
  | 'requirements'
  | 'confirmation'
  | 'welcome'
  | 'paid';
export type ScenarioBulletTemplateProps = {
  scenarioType: ScenarioTypeVariants;
};

export const ScenarioBulletTemplate = ({
  scenarioType,
}: ScenarioBulletTemplateProps): JSX.Element => {
  const { imgUrl, title, description } = useScenarioBulletTemplate({
    scenarioType,
  });
  return (
    <div>
      <div className="mb-2">
        <img style={{ width: 150 }} src={imgUrl} alt="scenario img" />
      </div>
      <div className="mb-2">
        <h3 className="text-sm">{title}</h3>
      </div>
      <div className="mb-2">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
