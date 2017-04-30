import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": 100 * vh,
        "width": 100 * vw
    },
    "body": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "width": 100 * vw,
        "height": 100 * vh,
        "backgroundRepeat": "no-repeat",
        "backgroundColor": "#FFC0CB",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "main": {
        "width": 100 * vw,
        "height": 100 * vh,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "coming": {
        "fontFamily": "\"Helvetica Neue\", Helvetica, sans-serif",
        "fontSize": 80,
        "fontWeight": "bold",
        "color": "white",
        "textAlign": "center"
    }
});