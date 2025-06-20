import svgToDataUri from "mini-svg-data-uri";
import plugin, { PluginAPI } from "tailwindcss/plugin";
type TailwindPlugin = ReturnType<typeof plugin>;


const largeGridBackground: TailwindPlugin = plugin(function (pluginAPI: PluginAPI) {
  const { matchUtilities, theme } = pluginAPI;
  matchUtilities(
    {
      "bg-grid": (color) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 24 24">
<rect width="24" height="24"  fill="${color}"/>
    <path d="M0,0h1v1h-1z M1,1h1v1h-1z M2,0h1v1h-1z M3,1h1v1h-1z M4,0h1v1h-1z M5,1h1v1h-1z M6,0h1v1h-1z M7,1h1v1h-1z M8,0h1v1h-1z M9,1h1v1h-1z M10,0h1v1h-1z M11,1h1v1h-1z M12,0h1v1h-1z M13,1h1v1h-1z M14,0h1v1h-1z M15,1h1v1h-1z M16,0h1v1h-1z M17,1h1v1h-1z M18,0h1v1h-1z M19,1h1v1h-1z M20,0h1v1h-1z M21,1h1v1h-1z M22,0h1v1h-1z M23,1h1v1h-1z
            M0,2h1v1h-1z M1,3h1v1h-1z M2,2h1v1h-1z M3,3h1v1h-1z M4,2h1v1h-1z M5,3h1v1h-1z M6,2h1v1h-1z M7,3h1v1h-1z M8,2h1v1h-1z M9,3h1v1h-1z M10,2h1v1h-1z M11,3h1v1h-1z M12,2h1v1h-1z M13,3h1v1h-1z M14,2h1v1h-1z M15,3h1v1h-1z M16,2h1v1h-1z M17,3h1v1h-1z M18,2h1v1h-1z M19,3h1v1h-1z M20,2h1v1h-1z M21,3h1v1h-1z M22,2h1v1h-1z M23,3h1v1h-1z
            M0,4h1v1h-1z M1,5h1v1h-1z M2,4h1v1h-1z M3,5h1v1h-1z M4,4h1v1h-1z M5,5h1v1h-1z M6,4h1v1h-1z M7,5h1v1h-1z M8,4h1v1h-1z M9,5h1v1h-1z M10,4h1v1h-1z M11,5h1v1h-1z M12,4h1v1h-1z M13,5h1v1h-1z M14,4h1v1h-1z M15,5h1v1h-1z M16,4h1v1h-1z M17,5h1v1h-1z M18,4h1v1h-1z M19,5h1v1h-1z M20,4h1v1h-1z M21,5h1v1h-1z M22,4h1v1h-1z M23,5h1v1h-1z
            M0,6h1v1h-1z M1,7h1v1h-1z M2,6h1v1h-1z M3,7h1v1h-1z M4,6h1v1h-1z M5,7h1v1h-1z M6,6h1v1h-1z M7,7h1v1h-1z M8,6h1v1h-1z M9,7h1v1h-1z M10,6h1v1h-1z M11,7h1v1h-1z M12,6h1v1h-1z M13,7h1v1h-1z M14,6h1v1h-1z M15,7h1v1h-1z M16,6h1v1h-1z M17,7h1v1h-1z M18,6h1v1h-1z M19,7h1v1h-1z M20,6h1v1h-1z M21,7h1v1h-1z M22,6h1v1h-1z M23,7h1v1h-1z
            M0,8h1v1h-1z M1,9h1v1h-1z M2,8h1v1h-1z M3,9h1v1h-1z M4,8h1v1h-1z M5,9h1v1h-1z M6,8h1v1h-1z M7,9h1v1h-1z M8,8h1v1h-1z M9,9h1v1h-1z M10,8h1v1h-1z M11,9h1v1h-1z M12,8h1v1h-1z M13,9h1v1h-1z M14,8h1v1h-1z M15,9h1v1h-1z M16,8h1v1h-1z M17,9h1v1h-1z M18,8h1v1h-1z M19,9h1v1h-1z M20,8h1v1h-1z M21,9h1v1h-1z M22,8h1v1h-1z M23,9h1v1h-1z
            M0,10h1v1h-1z M1,11h1v1h-1z M2,10h1v1h-1z M3,11h1v1h-1z M4,10h1v1h-1z M5,11h1v1h-1z M6,10h1v1h-1z M7,11h1v1h-1z M8,10h1v1h-1z M9,11h1v1h-1z M10,10h1v1h-1z M11,11h1v1h-1z M12,10h1v1h-1z M13,11h1v1h-1z M14,10h1v1h-1z M15,11h1v1h-1z M16,10h1v1h-1z M17,11h1v1h-1z M18,10h1v1h-1z M19,11h1v1h-1z M20,10h1v1h-1z M21,11h1v1h-1z M22,10h1v1h-1z M23,11h1v1h-1z
            M0,12h1v1h-1z M1,13h1v1h-1z M2,12h1v1h-1z M3,13h1v1h-1z M4,12h1v1h-1z M5,13h1v1h-1z M6,12h1v1h-1z M7,13h1v1h-1z M8,12h1v1h-1z M9,13h1v1h-1z M10,12h1v1h-1z M11,13h1v1h-1z M12,12h1v1h-1z M13,13h1v1h-1z M14,12h1v1h-1z M15,13h1v1h-1z M16,12h1v1h-1z M17,13h1v1h-1z M18,12h1v1h-1z M19,13h1v1h-1z M20,12h1v1h-1z M21,13h1v1h-1z M22,12h1v1h-1z M23,13h1v1h-1z
            M0,14h1v1h-1z M1,15h1v1h-1z M2,14h1v1h-1z M3,15h1v1h-1z M4,14h1v1h-1z M5,15h1v1h-1z M6,14h1v1h-1z M7,15h1v1h-1z M8,14h1v1h-1z M9,15h1v1h-1z M10,14h1v1h-1z M11,15h1v1h-1z M12,14h1v1h-1z M13,15h1v1h-1z M14,14h1v1h-1z M15,15h1v1h-1z M16,14h1v1h-1z M17,15h1v1h-1z M18,14h1v1h-1z M19,15h1v1h-1z M20,14h1v1h-1z M21,15h1v1h-1z M22,14h1v1h-1z M23,15h1v1h-1z
            M0,16h1v1h-1z M1,17h1v1h-1z M2,16h1v1h-1z M3,17h1v1h-1z M4,16h1v1h-1z M5,17h1v1h-1z M6,16h1v1h-1z M7,17h1v1h-1z M8,16h1v1h-1z M9,17h1v1h-1z M10,16h1v1h-1z M11,17h1v1h-1z M12,16h1v1h-1z M13,17h1v1h-1z M14,16h1v1h-1z M15,17h1v1h-1z M16,16h1v1h-1z M17,17h1v1h-1z M18,16h1v1h-1z M19,17h1v1h-1z M20,16h1v1h-1z M21,17h1v1h-1z M22,16h1v1h-1z M23,17h1v1h-1z
            M0,18h1v1h-1z M1,19h1v1h-1z M2,18h1v1h-1z M3,19h1v1h-1z M4,18h1v1h-1z M5,19h1v1h-1z M6,18h1v1h-1z M7,19h1v1h-1z M8,18h1v1h-1z M9,19h1v1h-1z M10,18h1v1h-1z M11,19h1v1h-1z M12,18h1v1h-1z M13,19h1v1h-1z M14,18h1v1h-1z M15,19h1v1h-1z M16,18h1v1h-1z M17,19h1v1h-1z M18,18h1v1h-1z M19,19h1v1h-1z M20,18h1v1h-1z M21,19h1v1h-1z M22,18h1v1h-1z M23,19h1v1h-1z
            M0,20h1v1h-1z M1,21h1v1h-1z M2,20h1v1h-1z M3,21h1v1h-1z M4,20h1v1h-1z M5,21h1v1h-1z M6,20h1v1h-1z M7,21h1v1h-1z M8,20h1v1h-1z M9,21h1v1h-1z M10,20h1v1h-1z M11,21h1v1h-1z M12,20h1v1h-1z M13,21h1v1h-1z M14,20h1v1h-1z M15,21h1v1h-1z M16,20h1v1h-1z M17,21h1v1h-1z M18,20h1v1h-1z M19,21h1v1h-1z M20,20h1v1h-1z M21,21h1v1h-1z M22,20h1v1h-1z M23,21h1v1h-1z
            M0,22h1v1h-1z M1,23h1v1h-1z M2,22h1v1h-1z M3,23h1v1h-1z M4,22h1v1h-1z M5,23h1v1h-1z M6,22h1v1h-1z M7,23h1v1h-1z M8,22h1v1h-1z M9,23h1v1h-1z M10,22h1v1h-1z M11,23h1v1h-1z M12,22h1v1h-1z M13,23h1v1h-1z M14,22h1v1h-1z M15,23h1v1h-1z M16,22h1v1h-1z M17,23h1v1h-1z M18,22h1v1h-1z M19,23h1v1h-1z M20,22h1v1h-1z M21,23h1v1h-1z M22,22h1v1h-1z M23,23h1v1h-1z" fill="${color}" fill-rule="evenodd"/>
    <g transform="translate(0.25,3.07) scale(0.02)">
      <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#4a86c8; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(-10,-2)">
        <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" style="fill:${color}; stroke:${color};" />
        <path d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10" style="fill:${color}; stroke:none;" />
        <path d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z" style="fill:${color}; stroke:${color};" />
        <path d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z" transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)" style="${color}; stroke:$none;" />
        <path d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z " style="fill:#4a86c8; stroke:none;" />
      </g>
    </g>
    <g transform="translate(22.05,21.07) scale(0.02)">
        <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#4a86c8; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path d="M 22.5,11.63 L 22.5,6" style="fill:none; stroke:#4a86c8; stroke-linejoin:miter;" id="path6570"/>
    <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style="fill:${color};fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;"/>
    <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style="fill:${color}; stroke:${color};"/>
    <path d="M 20,8 L 25,8" style="fill:none; stroke:${color}; stroke-linejoin:miter;"/>
    <path d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5" style="fill:${color}; stroke:#4a86c8;"/>
    <path d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37" style="fill:${color}; stroke:${color};"/>
  </g>
    </g>
    <g transform="translate(4.05,13.07) scale(0.02)">
        <g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:${color}; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.3)">
    <path
      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "
      style="stroke-linecap:butt;stroke-linejoin:miter;" />
    <path
      d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "
      style="stroke-linecap:butt;" />
    <path
      d="M 12,35.5 L 33,35.5 L 33,35.5"
      style="fill:none; stroke:${color}; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 13,31.5 L 32,31.5"
      style="fill:none; stroke:${color}; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 14,29.5 L 31,29.5"
      style="fill:none; stroke:${color}; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 14,16.5 L 31,16.5"
      style="fill:none; stroke:${color}; stroke-width:1; stroke-linejoin:miter;" />
    <path
      d="M 11,14 L 34,14"
      style="fill:none; stroke:${color}; stroke-width:1; stroke-linejoin:miter;" />
  </g>
    </g>
    <g transform="translate(3.05,20.07) scale(0.02)">
        <path d="m 22.5,9 c -2.21,0 -4,1.79 -4,4 0,0.89 0.29,1.71 0.78,2.38 C 17.33,16.5 16,18.59 16,21 c 0,2.03 0.94,3.84 2.41,5.03 C 15.41,27.09 11,31.58 11,39.5 H 34 C 34,31.58 29.59,27.09 26.59,26.03 28.06,24.84 29,23.03 29,21 29,18.59 27.67,16.5 25.72,15.38 26.21,14.71 26.5,13.89 26.5,13 c 0,-2.21 -1.79,-4 -4,-4 z" style="opacity:1; fill:${color}; fill-opacity:1; fill-rule:nonzero; stroke:#4a86c8; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"/>
    </g>
    <g transform="translate(10.05,2.07) scale(0.02)">
    <g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">
    <path d="M 22.5,11.63 L 22.5,6" style="fill:none; stroke:#000000; stroke-linejoin:miter;" id="path6570"/>
    <path d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25" style="fill:none;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;"/>
    <path d="M 12.5,37 C 18,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 20,16 10.5,13 6.5,19.5 C 3.5,25.5 12.5,30 12.5,30 L 12.5,37" style="fill:; stroke:${color};"/>
    <path d="M 20,8 L 25,8" style="fill:none; stroke:${color}; stroke-linejoin:miter;"/>
    <path d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.5,26.6 L 22.5,24.5 C 20,18 10.85,14 6.97,19.85 C 4.5,25.5 13,29.5 13,29.5" style="fill:${color}; stroke:#4a86c8;"/>
    <path d="M 12.5,30 C 18,27 27,27 32.5,30 M 12.5,33.5 C 18,30.5 27,30.5 32.5,33.5 M 12.5,37 C 18,34 27,34 32.5,37" style="fill:#000000; stroke:${color};"/>
  </g>
    </g>
    <!-- Координати для фігури королеви (біла клітина) -->
    <g transform="translate(19.05,9.07) scale(0.02)">
        <g style="fill:${color};stroke:#000000;stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round">

    <path d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
    style="stroke-linecap:butt;fill:#4a86c8" />
    <path d="m 9,26 c 0,2 1.5,2 2.5,4 1,1.5 1,1 0.5,3.5 -1.5,1 -1,2.5 -1,2.5 -1.5,1.5 0,2.5 0,2.5 6.5,1 16.5,1 23,0 0,0 1.5,-1 0,-2.5 0,0 0.5,-1.5 -1,-2.5 -0.5,-2.5 -0.5,-2 0.5,-3.5 1,-2 2.5,-2 2.5,-4 -8.5,-1.5 -18.5,-1.5 -27,0 z" />
    <path d="M 11.5,30 C 15,29 30,29 33.5,30" />
    <path d="m 12,33.5 c 6,-1 15,-1 21,0" />
    <circle cx="6" cy="12" r="2" />
    <circle cx="14" cy="9" r="2" />
    <circle cx="22.5" cy="8" r="2" />
    <circle cx="31" cy="9" r="2" />
    <circle cx="39" cy="12" r="2" />
    <path d="M 11,38.5 A 35,35 1 0 0 34,38.5"
    style="fill:none; stroke:${color};stroke-linecap:butt;" />
    <g style="fill:none; stroke:${color};">
      <path d="M 11,29 A 35,35 1 0 1 34,29" />
      <path d="M 12.5,31.5 L 32.5,31.5" />
      <path d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5" />
      <path d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5" />
    </g>
  </g>
    </g>
    <g transform="translate(11.05,17.07) scale(0.02)">
        <g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:${color}; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" transform="translate(0,0.6)">
    <g style="fill:000000; stroke:#000000; stroke-linecap:butt;">
      <path d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.65,38.99 6.68,38.97 6,38 C 7.35,36.54 9,36 9,36 z"/>
      <path d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z"/>
      <path d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z"/>
    </g>
    <path d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18" style="fill:none; stroke:#4a86c8; stroke-linejoin:miter;"/>
  </g>
    </g>
</svg>`,
        )}")`,
      }),
    },
    {
      values: {
        ...theme("colors"),
        accent: theme("colors.accent"),
      },
      type: ["color", "any"],
    },
  );
});

export default largeGridBackground;
