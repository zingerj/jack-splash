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
        "fontFamily": "\"Helvetica Neue\", Helvetica, sans-serif",
        "width": 100 * vw,
        "height": 100 * vh,
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "splat": {
        "width": 200,
        "marginTop": -70,
        "marginRight": 0,
        "marginBottom": 80,
        "marginLeft": 0
    },
    "coming": {
        "fontSize": 80,
        "fontWeight": "bold",
        "color": "white"
    },
    "join": {
        "border": "none",
        "background": "#fff",
        "borderRadius": 10,
        "width": 230,
        "height": 90,
        "fontSize": 50,
        "cursor": "pointer",
        "color": "#FFC0CB",
        "fontWeight": "bold",
        "outline": "none",
        "letterSpacing": 2,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "marginTop": 110,
        "marginRight": 0,
        "marginBottom": -10,
        "marginLeft": 0,
        "boxShadow": "0px 0px 5px 5px rgba(0,0,0,0.3)"
    },
    "join:hover": {
        "boxShadow": "0px 0px 8px 8px rgba(0,0,0,0.3)"
    },
    "join:active": {
        "outline": 0
    }
});