/** @type {Partial<ThemeConfig & {extend: Partial<ThemeConfig>}> & {animation: Record<"none" | "spin" | "ping" | "pulse" | "bounce", string>; aria: Record<"busy" | "checked" | "disabled" | "expanded" | "hidden" | "pressed" | "readonly" | "required" | "selected", string>; aspectRatio: Record<"auto" | "square" | "video", string>; backgroundImage: Record<"none" | "gradient-to-t" | "gradient-to-tr" | "gradient-to-r" | "gradient-to-br" | "gradient-to-b" | "gradient-to-bl" | "gradient-to-l" | "gradient-to-tl", string>; backgroundPosition: Record<"bottom" | "center" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top", string>; backgroundSize: Record<"auto" | "cover" | "contain", string>; blur: Record<"0" | "none" | "sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "3xl", string>; borderRadius: Record<"none" | "sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full", string>; borderWidth: Record<"0" | "2" | "4" | "8" | "DEFAULT", string>; boxShadow: Record<"sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "inner" | "none", string>; brightness: Record<"0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150" | "200", string>; columns: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto" | "3xs" | "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl", string>; content: Record<"none", string>; contrast: Record<"0" | "50" | "75" | "100" | "125" | "150" | "200", string>; cursor: Record<"auto" | "default" | "pointer" | "wait" | "text" | "move" | "help" | "not-allowed" | "none" | "context-menu" | "progress" | "cell" | "crosshair" | "vertical-text" | "alias" | "copy" | "no-drop" | "grab" | "grabbing" | "all-scroll" | "col-resize" | "row-resize" | "n-resize" | "e-resize" | "s-resize" | "w-resize" | "ne-resize" | "nw-resize" | "se-resize" | "sw-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "zoom-in" | "zoom-out", string>; dropShadow: Record<"sm" | "DEFAULT" | "md" | "lg" | "xl" | "2xl" | "none", string | string[]>; flex: Record<"1" | "auto" | "initial" | "none", string>; flexGrow: Record<"0" | "DEFAULT", string>; flexShrink: Record<"0" | "DEFAULT", string>; fontFamily: Record<"sans" | "serif" | "mono", string[]>; fontSize: Record<"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl", [string, {lineHeight: string}]>; fontWeight: Record<"thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black", string>; gradientColorStopPositions: Record<"0%" | "5%" | "10%" | "15%" | "20%" | "25%" | "30%" | "35%" | "40%" | "45%" | "50%" | "55%" | "60%" | "65%" | "70%" | "75%" | "80%" | "85%" | "90%" | "95%" | "100%", string>; grayscale: Record<"0" | "DEFAULT", string>; gridAutoColumns: Record<"auto" | "min" | "max" | "fr", string>; gridAutoRows: Record<"auto" | "min" | "max" | "fr", string>; gridColumn: Record<"auto" | "span-1" | "span-2" | "span-3" | "span-4" | "span-5" | "span-6" | "span-7" | "span-8" | "span-9" | "span-10" | "span-11" | "span-12" | "span-full", string>; gridColumnEnd: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "auto", string>; gridColumnStart: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "auto", string>; gridRow: Record<"auto" | "span-1" | "span-2" | "span-3" | "span-4" | "span-5" | "span-6" | "span-full", string>; gridRowEnd: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "auto", string>; gridRowStart: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "auto", string>; gridTemplateColumns: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "none", string>; gridTemplateRows: Record<"1" | "2" | "3" | "4" | "5" | "6" | "none", string>; hueRotate: Record<"0" | "15" | "30" | "60" | "90" | "180", string>; invert: Record<"0" | "DEFAULT", string>; keyframes: Record<"spin" | "ping" | "pulse" | "bounce", Record<string, CSSDeclarationList>>; letterSpacing: Record<"tighter" | "tight" | "normal" | "wide" | "wider" | "widest", string>; lineHeight: Record<"3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "none" | "tight" | "snug" | "normal" | "relaxed" | "loose", string>; listStyleType: Record<"none" | "disc" | "decimal", string>; listStyleImage: Record<"none", string>; lineClamp: Record<"1" | "2" | "3" | "4" | "5" | "6", string>; minHeight: Record<"0" | "full" | "screen" | "min" | "max" | "fit", string>; minWidth: Record<"0" | "full" | "min" | "max" | "fit", string>; objectPosition: Record<"bottom" | "center" | "left" | "left-bottom" | "left-top" | "right" | "right-bottom" | "right-top" | "top", string>; opacity: Record<"0" | "5" | "10" | "20" | "25" | "30" | "40" | "50" | "60" | "70" | "75" | "80" | "90" | "95" | "100", string>; order: Record<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "first" | "last" | "none", string>; outlineOffset: Record<"0" | "1" | "2" | "4" | "8", string>; outlineWidth: Record<"0" | "1" | "2" | "4" | "8", string>; ringOffsetWidth: Record<"0" | "1" | "2" | "4" | "8", string>; ringWidth: Record<"0" | "1" | "2" | "4" | "8" | "DEFAULT", string>; rotate: Record<"0" | "1" | "2" | "3" | "6" | "12" | "45" | "90" | "180", string>; saturate: Record<"0" | "50" | "100" | "150" | "200", string>; scale: Record<"0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150", string>; screens: Record<"sm" | "md" | "lg" | "xl" | "2xl", string>; sepia: Record<"0" | "DEFAULT", string>; skew: Record<"0" | "1" | "2" | "3" | "6" | "12", string>; spacing: Record<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" | "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" | "72" | "80" | "96" | "px" | "0.5" | "1.5" | "2.5" | "3.5", string>; strokeWidth: Record<"0" | "1" | "2", string>; textDecorationThickness: Record<"0" | "1" | "2" | "4" | "8" | "auto" | "from-font", string>; textUnderlineOffset: Record<"0" | "1" | "2" | "4" | "8" | "auto", string>; transformOrigin: Record<"center" | "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left", string>; transitionDelay: Record<"0" | "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000", string>; transitionDuration: Record<"0" | "75" | "100" | "150" | "200" | "300" | "500" | "700" | "1000" | "DEFAULT", string>; transitionProperty: Record<"none" | "all" | "DEFAULT" | "colors" | "opacity" | "shadow" | "transform", string>; transitionTimingFunction: Record<"DEFAULT" | "linear" | "in" | "out" | "in-out", string>; willChange: Record<"auto" | "scroll" | "contents" | "transform", string>; zIndex: Record<"0" | "10" | "20" | "30" | "40" | "50" | "auto", string>}} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["Raleway", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },

    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },

    colors: {
      transparent: "transparent",
      primary: "#5540af",
      secondary: "#252426",
      white: "#ffffff",
      black: "#000000",
      yellow: "#f9e71c",
      lila: "#e6e5ec",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#f4f3f8",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
      "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
    },

    container: {
      center: true,
      padding: "1rem",
    },

    shadows: {
      default: "0 2px 18px rgba(0, 0, 0, 0.06)",
      md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
    },

    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        42: "10.5rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        190: "48rem",
        194: "49rem",
        200: "50rem",
        204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}