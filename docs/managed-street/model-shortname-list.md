---
sidebar_position: 5
---

# Model Name List

_Last updated February 1, 2025_

The following list of model short-names (`mixin` values) are available for use in the `street-generated-clones` component. 

- Sidewalk Props: `"brt-station, outdoor_dining, bench_orientation_center, parklet, utility_pole, lamp-modern, lamp-modern-double, bikerack, bikeshare, lamp-traditional, palm-tree, bench, seawall, track, tree3, bus-stop, bus-stop-alternate, pride-flag, wayfinding-box, trash-bin, lending-library, residential-mailbox, USPS-mailbox, picnic-bench, large-parklet, wayfinding"`

- Vehicles: `"Bicycle_1, ElectricScooter_1, magic-carpet, Character_1_M, sedan-rig, sedan-taxi-rig, suv-rig, box-truck-rig, food-trailer-rig, fire-truck-rig, fire-ladder-rig, trash-truck-side-loading, self-driving-cruise-car-rig, self-driving-waymo-car, tuk-tuk, motorbike"`

- Transit Vehicles: `"bus, tram, trolley, minibus"`

- Cyclists: `"cyclist-cargo, cyclist1, cyclist2, cyclist3, cyclist-kid, cyclist-dutch"`

- Intersection Props: `"signal_left, signal_right, stop_sign"`

- Dividers & Street Elements: `"dividers-flowers, dividers-planting-strip, dividers-planter-box, dividers-bush, dividers-dome, safehit, bollard, temporary-barricade, temporary-traffic-cone, temporary-jersey-barrier-plastic, temporary-jersey-barrier-concrete, street-element-crosswalk-raised, street-element-traffic-island-end-rounded, street-element-sign-warning-ped-rrfb, street-element-traffic-post-k71, street-element-traffic-island, street-element-speed-hump, crosswalk-zebra-box, traffic-calming-bumps, corner-island"`

- Buildings - Mixed Use & Commercial: `"SM3D_Bld_Mixed_Corner_4fl, SM3D_Bld_Mixed_Double_5fl, SM3D_Bld_Mixed_4fl_2, SM3D_Bld_Mixed_5fl, SM3D_Bld_Mixed_4fl, arched-building-01, arched-building-02, arched-building-03, arched-building-04, sp-prop-mixeduse-2L-29ft, sp-prop-mixeduse-2L-30ft, sp-prop-mixeduse-3L-18ft, sp-prop-mixeduse-3L-22ft, sp-prop-mixeduse-3L-23ft-corner, sp-prop-mixeduse-3L-42ft, sp-prop-mixeduse-3L-78ft-corner"`

- Buildings - Residential: `"SM_Bld_House_Preset_03_1800, SM_Bld_House_Preset_09_1845, SM_Bld_House_Preset_08_1809, sp-prop-sf-1L-41ft, sp-prop-sf-1L-62ft, sp-prop-sf-2L-62ft, sp-prop-sf-2L-64ft, sp-prop-townhouse-3L-20ft, sp-prop-townhouse-3L-23ft"`

- Buildings - Other Types: `"sp-prop-bigbox-1L-220ft, sp-prop-bigbox-1L-291ft, sp-prop-gov-3L-61ft, sp-prop-parking-3L-155ft, sp-prop-parking-3L-97ft-centered"`

Not recommended to use these short-names in the `street-generated-clones` component:

- People: `"char1, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, char12, char13, char14, char15, char16"` --> instead use the `street-generated-pedestrians` component with additional logic for character placement
- Rigged People: `"a_char1, a_char2, a_char3, a_char4, a_char5, a_char6, a_char7, a_char8"` --> animation of rigged characters is yet supported