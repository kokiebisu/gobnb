/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef } from "react";
import Router from "next/router";
import { Button, $Button } from "../../../../atoms/button/web";
import { Card, $Card } from "../../../../molecules/card/web";
import { useSlider, SliderProps } from "../../../../hooks/useSlider";

/**
 * Renders the homes banner
 * @param {Object[]} hosts - List of hosts
 */
export const CommunityTemplate: React.FC<{
  title?: string;
  description?: string;
  hosts?: {
    name: string;
    stayType: string;
    location: string;
    imgUrl: string;
  }[];
}> = ({
  title = "Title",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  hosts = [undefined, undefined, undefined, undefined, undefined],
}) => {
  const width = 366;
  const sliderRef = useRef(null);
  const { state, previous, next }: SliderProps = useSlider(
    hosts,
    width,
    "banner"
  );

  return (
    <div
      css={{
        display: ["block", "block", "flex"],
        alignItems: "center",
      }}
    >
      <div css={{ position: "relative", zIndex: 500 }}>
        <div css={{ paddingLeft: ["24px", "24px", "64px"] }}>
          <div
            css={{
              maxWidth: 360,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              css={{
                marginBottom: 32,
              }}
            >
              <h1 css={{ lineHeight: 1, fontSize: 45 }}>{title}</h1>
            </div>
            <div
              css={{
                marginBottom: 32,
              }}
            >
              <h4 css={{ fontSize: 18, lineHeight: 1.5 }}>{description}</h4>
            </div>
            <div
              css={{
                display: "inline-block",
              }}
            >
              <Button
                variant={$Button.PRIMARY}
                size="md"
                title="Get started"
                onClick={() => Router.push("/become-a-host")}
                animate
              />
            </div>
          </div>
        </div>
      </div>
      <div
        css={{
          position: "relative",
          zIndex: 500,
          paddingLeft: ["24px", "24px", "64px"],
          paddingTop: 50,
        }}
      >
        <div
          css={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: 12,
            zIndex: 50,
          }}
        >
          <div
            css={{
              borderRadius: 12,
              transform: `translateX(-${state.translate}px)`,
              transition: `transform ease-out ${state.transition}s`,
              height: "100%",
              width: width * hosts.length,
              display: "flex",
            }}
          >
            {hosts.map((host, index) => {
              return (
                <div
                  key={index}
                  ref={sliderRef}
                  css={{
                    marginRight: 16,
                  }}
                >
                  <Card
                    variant={$Card.HOST}
                    host={host?.name}
                    imgUrl={host?.imgUrl}
                    stayType={host?.stayType}
                    location={host?.location}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          css={{
            marginTop: 32,
            marginRight: 32,
            display: "flex",
            justifyContent: ["flex-start", "flex-start", "flex-end"],
          }}
        >
          <div
            css={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              css={{
                marginRight: 8,
              }}
            >
              <Button
                variant={$Button.PAGINATE}
                animate
                direction="left"
                onClick={previous}
              />
            </div>
            <div>
              <Button
                variant={$Button.PAGINATE}
                animate
                direction="right"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};