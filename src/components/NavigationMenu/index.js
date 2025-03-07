import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

const NavigationMenu = () => {
  return (
    <NavigationMenuPrimitive.Root className="NavigationMenuRoot">
      <NavigationMenuPrimitive.List className="NavigationMenuList">
        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="NavigationMenuTrigger">
            Learn <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenuPrimitive.Link asChild>
                  <a className="Callout" href="/docs/what-is-3dstreet">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">3DStreet</div>
                    <p className="CalloutText">
                      Open-source 3D street editor for better street design.
                    </p>
                  </a>
                </NavigationMenuPrimitive.Link>
              </li>

              <ListItem href="/docs/getting-started" title="Getting Started">
                Quick tutorial to get you up and running with 3DStreet.
              </ListItem>
              <ListItem href="/docs/features" title="Features">
                Explore the features that make 3DStreet powerful.
              </ListItem>
              <ListItem href="/docs/examples" title="Examples">
                Real-world examples of 3DStreet in action.
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="NavigationMenuTrigger">
            Resources <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem
                title="Documentation"
                href="/docs/"
              >
                Comprehensive guides and reference documentation.
              </ListItem>
              <ListItem
                title="Blog"
                href="/blog/"
              >
                Latest news, updates, and insights from the 3DStreet team.
              </ListItem>
              <ListItem title="Community" href="/docs/community">
                Join the 3DStreet community and get involved.
              </ListItem>
              <ListItem
                title="Contribute"
                href="/docs/contribute"
              >
                Learn how to contribute to the 3DStreet project.
              </ListItem>
              <ListItem
                title="Showcase"
                href="/docs/showcase"
              >
                See how others are using 3DStreet to reimagine streets.
              </ListItem>
              <ListItem
                title="FAQ"
                href="/docs/faq"
              >
                Frequently asked questions about 3DStreet.
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className="NavigationMenuLink"
            href="https://github.com/3DStreet/3dstreet"
          >
            GitHub
          </NavigationMenuPrimitive.Link>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>

      <div className="ViewportPosition">
        <NavigationMenuPrimitive.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuPrimitive.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenuPrimitive.Link>
    </li>
  )
);

export default NavigationMenu;
