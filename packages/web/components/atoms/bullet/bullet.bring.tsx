import { CheckInverse } from '@svg/original';

/**
 * Renders the bring bullet
 * @param {string} title - Description of the bullet
 */
export const BringBullet: React.FC<{
  title?: string;
}> = ({ title = 'Description here' }) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <CheckInverse width={24} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
};