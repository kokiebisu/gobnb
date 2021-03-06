import { Icon } from '@atoms';

export interface SetCardTemplateProps {}

export const SetCardTemplate: React.FC<SetCardTemplateProps> = () => {
  return (
    <div className="rounded-lg border border-gray-300">
      <div className="w-full rounded-t-lg h-2 bg-green-600" />
      <div className="p-4">
        <div className="flex items-center">
          <div className="mr-3">
            <Icon
              variant="semantic"
              semanticType="check"
              width={18}
              fill="#268A04"
            />
          </div>
          <div>
            <div className="mb-1">
              <h3 className="text-base">You're all set!</h3>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                This helps us keep your account secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
