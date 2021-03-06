/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Button, $Button } from '@nextbnb/atoms';
import { Layout, $Layout } from '@nextbnb/layout';
import { Card, $Card } from '@nextbnb/molecules';

export const WorksTemplate: React.FC<{}> = () => {
  const categories = ['design', 'share', 'submit', 'setup'];
  return (
    <div>
      <Layout variant={$Layout.HOMES} title="How hosting works">
        <div>
          {categories.map((category, index) => {
            return (
              <div css={{ marginBottom: 8 }} key={index}>
                <Card variant={$Card.WORKS} work={category} />
              </div>
            );
          })}
        </div>
        <div
          css={{
            marginTop: 32,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant={$Button.BORDER}
            bold
            title="Start creating your experience"
          />
        </div>
      </Layout>
    </div>
  );
};
