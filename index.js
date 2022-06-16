import AntDesignFontFaceCSS from "@native-base/icons/FontsCSS/AntDesignFontFaceCSS";
import MaterialIconsFontFaceCSS from "@native-base/icons/FontsCSS/MaterialIconsFontFaceCSS";

const fontsCSS = AntDesignFontFaceCSS + MaterialIconsFontFaceCSS;

const style = document.createElement("style");
style.type = "text/css";
if (style.styleSheet) {
  style.styleSheet.cssText += fontsCSS;
} else {
  style.appendChild(document.createTextNode(fontsCSS));
}
document.head.appendChild(style); 