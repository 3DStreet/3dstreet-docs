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
            Solutions <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenuPrimitive.Link asChild>
                  <div className="Callout">
                    <img src="/img/3dstreet-logo-stacked.svg" alt="logo" />
                    <div className="CalloutHeading">3DStreet</div>
                    <p className="CalloutText">
                      Street Design Software
                    </p>
                  </div>
                </NavigationMenuPrimitive.Link>
              </li>

              <ListItem href="/planning/" title="Urban Planning">
                For urban planners and economic development agencies.
              </ListItem>
              <ListItem href="/education/" title="Education">
                For students and educators from Pre-K to Post-Doc.
              </ListItem>
              <ListItem href="/advocacy/" title="Transportation and Land Use Advocacy">
                For staff and volunteers from neighborhood associations to global NGOs.
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Trigger className="NavigationMenuTrigger">
            Product <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenuPrimitive.Trigger>
          <NavigationMenuPrimitive.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem
                title="Instant Street Design"
                href="/#instant-street-design"
              >
                Drag-and-drop to place linear 3D streets and 90º intersections with modifiable components.
              </ListItem>
              <ListItem title="Combine with 3D Maps" href="/#combine-with-3d-maps">
                Blend 3D street models with 3D map tiles to visualize projects in real world context.
              </ListItem>
              <ListItem
                title="Batteries Included"
                href="/#batteries-included"
              >
                Built-in library of over 200 unique and accurately scaled urban 3D models.
              </ListItem>
              <ListItem
                title="One-Click Import"
                href="/#one-click-import"
              >
                Convert Streetmix and StreetPlan typical cross-sections from 2D to 3D with automatic procedural extrusion.
              </ListItem>
              <ListItem
                title="Export for AR, VR and 3D post-processing"
                href="/#export-for-ar-vr"
              >
                Export to glTF, JSON, and other formats for use in XR and advanced 3D rendering.
              </ListItem>
              <ListItem
                title="Share and Remix"
                href="/#share-and-remix"
              >
                Create from any desktop browser, share with colleagues, and remix with the community. 
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
              <ListItem title="Community" href="https://discord.gg/VN242sx9qu" target="_blank">
                Join the 3DStreet Discord to get involved.
              </ListItem>
              <ListItem
                title="For Developers"
                href="/docs/contributing"
              >
                Explore our GitHub repositories and learn how to contribute to the 3DStreet codebase.
              </ListItem>
            </ul>
          </NavigationMenuPrimitive.Content>
        </NavigationMenuPrimitive.Item>

        <NavigationMenuPrimitive.Item>
          <NavigationMenuPrimitive.Link
            className="NavigationMenuLink"
            href="/docs/pricing"
          >
            Pricing
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
