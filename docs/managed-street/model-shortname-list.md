---
sidebar_position: 5
---

# Model Name List

_Last updated October 10, 2025_

The following list of model short-names (`mixin` values) are available for use in the `street-generated-clones` component.

- Sidewalk Props: `"brt-station, outdoor_dining, bench_orientation_center, parklet, utility_pole, lamp-modern, lamp-modern-double, bikerack, bikeshare, lamp-traditional, palm-tree, bench, seawall, track, tree3, bus-stop, bus-stop-alternate, pride-flag, wayfinding, wayfinding-box, trash-bin, lending-library, residential-mailbox, USPS-mailbox, picnic-bench, large-parklet, sp-tree-honeylocust-24ft, sp-tree-buroak-24ft, sp-tree-japaneselilac-20ft, sp-tree-palm-26ft, sp-tree-palm-28ft, sp-tree-purpleplum-16ft, sp-tree-small-15ft, sp-furn-bench1-5x2ft, sp-furn-bench2-5x2ft, sp-furn-busstop-roundshelter-12x13ft, sp-furn-busstop-shelter-12x4ft, sp-furn-farmertent1-10x10ft, sp-furn-farmertent2-10x10ft, sp-furn-foodcart-5dot5x9ft, sp-furn-table-2x7ft, sp-furn-table-blue-7x7ft, sp-light-flowerP-bannerBY-13ft, sp-light-flowerY-bannerRG-13ft, sp-median-planterbox-tall-06x30ft, ssp-median-planterbox-tall-10x30ft, sp-parking-planter-5x8ft"`

- Vehicles: `"Bicycle_1, ElectricScooter_1, sedan-rig, sedan-taxi-rig, suv-rig, box-truck-rig, food-trailer-rig, fire-truck-rig, fire-ladder-rig, trash-truck-side-loading, self-driving-cruise-car-rig, self-driving-waymo-car, tuk-tuk, motorbike"`

- Transit Vehicles: `"bus, tram, trolley, minibus"`

- Cyclists & Bikes: `"bike-only-cargo, bike-only-dutch, bike-only-hybrid, cyclist-cargo, cyclist1, cyclist2, cyclist3, cyclist-kid, cyclist-dutch"`

- Intersection Props: `"signal_left, signal_right, stop_sign"`

- Dividers & Street Elements: `"dividers-flowers, dividers-planting-strip, dividers-planter-box, dividers-bush, dividers-dome, safehit, bollard, temporary-barricade, temporary-traffic-cone, temporary-jersey-barrier-plastic, temporary-jersey-barrier-concrete, street-element-crosswalk-raised, street-element-traffic-island-end-rounded, street-element-sign-warning-ped-rrfb, street-element-traffic-post-k71, street-element-traffic-island, street-element-speed-hump, crosswalk-zebra-box, crosswalk-rainbow-box, crosswalk-double-box, crosswalk-piano-box, traffic-calming-bumps, corner-island"`

- Signs: `"sp-sign-speed-limit-10mph, sp-sign-speed-limit-15mph, sp-sign-speed-limit-20mph, sp-sign-speed-limit-25mph, sp-sign-speed-limit-30mph, sp-sign-speed-limit-35mph, sp-sign-speed-limit-40mph, sp-sign-speed-limit-45mph, sp-sign-speed-limit-50mph, sp-sign-speed-limit-55mph, sp-sign-speed-limit-60mph, sp-sign-speed-limit-65mph, sp-sign-speed-limit-70mph, sp-sign-speed-limit-75mph, sp-sign-speed-limit-80mph"`

- Buildings - Mixed Use & Commercial: `"SM3D_Bld_Mixed_Corner_4fl, SM3D_Bld_Mixed_Double_5fl, SM3D_Bld_Mixed_4fl_2, SM3D_Bld_Mixed_5fl, SM3D_Bld_Mixed_4fl, arched-building-01, arched-building-02, arched-building-03, arched-building-04, sp-prop-mixeduse-2L-29ft, sp-prop-mixeduse-2L-30ft, sp-prop-mixeduse-3L-18ft, sp-prop-mixeduse-3L-22ft, sp-prop-mixeduse-3L-23ft-corner, sp-prop-mixeduse-3L-42ft, sp-prop-mixeduse-3L-78ft-corner"`

- Buildings - Residential: `"SM_Bld_House_Preset_03_1800, SM_Bld_House_Preset_09_1845, SM_Bld_House_Preset_08_1809, sp-prop-sf-1L-41ft, sp-prop-sf-1L-62ft, sp-prop-sf-2L-62ft, sp-prop-sf-2L-64ft, sp-prop-townhouse-3L-20ft, sp-prop-townhouse-3L-23ft"`

- Buildings - Other Types: `"sp-prop-bigbox-1L-220ft, sp-prop-bigbox-1L-291ft, sp-prop-gov-3L-61ft, sp-prop-parking-3L-155ft, sp-prop-parking-3L-97ft-centered"`

- People: `"char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, char12, char13, char14, char15, char16"`

Not recommended to use these models:
- Rigged/Animated People: `"a_char1, a_char2, a_char3, a_char4, a_char5, a_char6, a_char7, a_char8"` --> animation of rigged characters is not yet fully supported
- Hidden/Deprecated: `"Character_1_M, magic-carpet, crosswalk-rainbow, crosswalk-double, crosswalk-mural, crosswalk-piano"` --> these models have `display: "none"` in catalog.json and are not intended for general use (use the `-box` versions for crosswalks)