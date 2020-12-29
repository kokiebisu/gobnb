/** Layouts */
import { Layout } from "@layout/layout.component";

/** styles **/
import layout from "@styles/layout.module.scss";
import space from "@styles/space.module.scss";

/** components */
import { Card } from "@card/card.component";
import { Button } from "@button/button.component";

/** stories */
import { border } from "@button/button.stories";

export const SharingSection: React.FC<{}> = () => {
  const sharings = ["meditate", "baking", "magic"];
  return (
    <Layout
      variant="onlinehost"
      title="How hosts are sharing their world"
      subtitle="These hosts bring the spirit of experiences to the screen with unique small group activities to do together while we're apart."
    >
      <div
        className={[space["m-v--100"]].join(" ")}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: 25,
        }}
      >
        {sharings.map((sharing, index) => {
          return (
            <div key={index}>
              <Card variant="sharing" sharing={sharing} />
            </div>
          );
        })}
      </div>
      <div className={[layout["flex"], layout["justify-center"]].join(" ")}>
        <Button {...border.args} bold title="Start creating your experience" />
      </div>
    </Layout>
  );
};