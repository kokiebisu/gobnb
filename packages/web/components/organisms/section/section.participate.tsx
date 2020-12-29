/** styles */
import font from "@styles/font.module.scss";
import space from "@styles/space.module.scss";
import color from "@styles/color.module.scss";
import layout from "@styles/layout.module.scss";

/** components */
import { Card } from "@card/card.component";

/**
 * Renders the participate section
 * @param {string[]} participates - Ways to participate
 */
export const ParticipateSection: React.FC<{
  participates?: string[];
}> = ({ participates = ["call", "private", "request"] }) => {
  return (
    <div>
      <div>
        <h3
          className={[
            font["weight--500"],
            space["m-b--20"],
            color["c--gray__3"],
            font["size--24"],
          ].join(" ")}
        >
          How to participate
        </h3>
      </div>
      <div className={[layout["flex"], space["m-b--32"]].join(" ")}>
        {participates.map((participate, index) => {
          return (
            <div key={index} className={[space["m-r--16"]].join(" ")}>
              <Card variant="participate" categoryType={participate} />
            </div>
          );
        })}
      </div>
    </div>
  );
};