import React, { useState } from "react";

/** components */
import { Button } from "../../../components/atoms/button/button.component";

/** styles */
import layout from "../../../styles/layout.module.scss";
import space from "../../../styles/space.module.scss";
import shape from "../../../styles/shape.module.scss";
import color from "../../../styles/color.module.scss";

/** templates */
import { Template } from "../../../components/templates/template.component";

/** contexts */
import { useToggleDispatch } from "../../../context/toggle";

export const GlobeModal: React.FC<{}> = () => {
  const toggleDispatch = useToggleDispatch();
  const [template, setTemplate] = useState("language");
  return (
    <div
      className={[
        shape["h--full"],
        shape["shadow--lg"],
        shape["br--16"],
        color["bg--white"],
      ].join(" ")}
    >
      <div className={[space["p--12"]].join(" ")}>
        <div>
          <Button
            type="modal"
            modal="close"
            onPress={() => toggleDispatch({ type: "toggle_globe" })}
          />
        </div>
      </div>

      <div className={[space["p-h--20"], space["p-v--8"]].join(" ")}>
        <div
          className={[
            layout["flex"],
            layout["items-center"],
            space["m-b--50"],
          ].join(" ")}
        >
          <div className={[space["m-r--32"]].join(" ")}>
            <Button
              type="underline"
              title="Language and region"
              font={16}
              bold
              unselected={template !== "language"}
              onPress={() => setTemplate("language")}
            />
          </div>
          <div>
            <Button
              type="underline"
              title="Currency"
              font={16}
              bold
              unselected={template !== "currency"}
              onPress={() => setTemplate("currency")}
            />
          </div>
        </div>
        <Template type={template} />
      </div>
    </div>
  );
};