import {Color} from "./Color";
import {dimension, DimensionalMeasured} from "./logic/DimensionalMeasured";
import {Dimension} from "./logic/Dimension";
import {CSSProperties} from "react";
import {ObjectVisualMeaning} from "./logic/ObjectVisualMeaning";
import {time, TimeMeasured} from "./logic/TimeMeasured";
import {TimeUnit} from "./logic/TimeUnit";

export function getMeaningfulColors(meaning: ObjectVisualMeaning, theme: Themeable.Theme): MeaningfulColors {
    switch (meaning) {
        case ObjectVisualMeaning.SUCCESS:
            return {
                main: theme.colors.primaryColor,
                lighter: theme.colors.primaryHighlightColor,
                iconColored: theme.colors.primaryHighlightColor,
                icon: theme.colors.iconColor
            };
        case ObjectVisualMeaning.INFO:
            return {
                main: theme.colors.primaryColor,
                lighter: theme.colors.primaryHighlightColor,
                iconColored: theme.colors.primaryHighlightColor,
                icon: theme.colors.iconColor
            };
        case ObjectVisualMeaning.WARNING:
            return {
                main: theme.colors.warnColor,
                lighter: theme.colors.warnHighlightColor,
                iconColored: theme.colors.warnHighlightColor,
                icon: theme.colors.iconColor
            };
        case ObjectVisualMeaning.ERROR:
            return {
                main: theme.colors.errorColor,
                lighter: theme.colors.errorHighlightColor,
                iconColored: theme.colors.errorHighlightColor,
                icon: theme.colors.iconColor
            };
        case ObjectVisualMeaning.UI_NO_HIGHLIGHT:
            return {
                main: theme.colors.backgroundHighlightColor,
                // todo choose more consistent way
                lighter: theme.colors.borderPrimaryColor,
                iconColored: theme.colors.borderPrimaryColor,
                icon: theme.colors.iconColor
            };
    }
}

export type MeaningfulColors = {
    main: Color,
    lighter: Color,
    icon: Color,
    iconColored: Color
}

export namespace Themeable {

    export type ColorPallet = {
        backgroundColor: Color,
        backgroundHighlightColor: Color,
        backgroundDeactivatedColor: Color,
        iconColor: Color,
        fontPrimaryColor: Color,
        fontPrimaryInvertedColor: Color,
        fontSecondaryColor: Color,
        fontDeactivatedColor: Color,
        primaryColor: Color,
        primaryHighlightColor: Color,
        errorColor: Color,
        errorHighlightColor: Color,
        warnColor: Color,
        warnHighlightColor: Color,
        borderPrimaryColor: Color,
        borderColorSecondaryColor: Color,
        borderPrimaryShadowColor: Color
    }

    export type Theme = {
        colors: ColorPallet,
        radii: {
            defaultObjectRadius: DimensionalMeasured
        },
        margins: {
            smallTextVerticalMargin: DimensionalMeasured
        },
        paddings: {
            defaultObjectPadding: DimensionalMeasured,
            defaultButtonPadding: DimensionalMeasured,
            defaultTextIconPadding: DimensionalMeasured,
        },
        hovers: {
            hoverLightFilter: DimensionalMeasured
        },
        transitions: {
            mainTime: TimeMeasured
        },
        texts: {
            fontFamily: string,
            complete: {
                boldSmallHeader: CSSProperties,
                boldSmallHeaderDeactivated: CSSProperties,
                secondaryDescription: CSSProperties
            }
        }
    }

    export const defaultThemePallet: ColorPallet = {
        backgroundColor: Color.ofHex("#171717"),
        backgroundHighlightColor: Color.ofHex("#222429"),
        backgroundDeactivatedColor: Color.ofHex("#434750"),
        iconColor: Color.ofHex("#FFFFFF"),
        fontPrimaryColor: Color.ofHex("#FFFFFF"),
        fontPrimaryInvertedColor: Color.ofHex("#000000"),
        fontSecondaryColor: Color.ofHex("#C6C6C6"),
        fontDeactivatedColor: Color.ofHex("#4F4F4F"),
        primaryColor: Color.ofHex("#71D99E"),
        primaryHighlightColor: Color.ofHex("#A9E5C3"),
        errorColor: Color.ofHex("#D93240"),
        errorHighlightColor: Color.ofHex("#e55561"),
        warnColor: Color.ofHex("#FBBE63"),
        warnHighlightColor: Color.ofHex("#ffd387"),
        borderPrimaryColor: Color.ofHex("#30363D"),
        borderColorSecondaryColor: Color.ofHex("#FBBE63"),
        borderPrimaryShadowColor: Color.ofHex("#71D99E", .13)
    }

    export const defaultTheme: Theme = {
        colors: defaultThemePallet,
        radii: {
            defaultObjectRadius: DimensionalMeasured.of(6, Dimension.px)
        },
        margins: {
            smallTextVerticalMargin: DimensionalMeasured.of(3, Dimension.px)
        },
        paddings: {
            defaultObjectPadding: DimensionalMeasured.of(16, Dimension.px),
            defaultButtonPadding: DimensionalMeasured.of(8, Dimension.px),
            defaultTextIconPadding: dimension(4, Dimension.px)
        },
        hovers: {
            hoverLightFilter: DimensionalMeasured.of(120, Dimension.percentage)
        },
        transitions: {
            mainTime: time(100, TimeUnit.ms)
        },
        texts: {
            // todo implement global font family
            fontFamily: "Operator Mono",
            complete: {
                boldSmallHeader: {
                    margin: 0,
                    fontFamily: "OperatorMono",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "19px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.03em",
                    color: `${defaultThemePallet.fontPrimaryColor.css()}`
                },
                boldSmallHeaderDeactivated: {
                    margin: 0,
                    fontFamily: "OperatorMono",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "19px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.03em",
                    color: `${defaultThemePallet.fontDeactivatedColor.css()}`
                },
                secondaryDescription: {
                    margin: 0,
                    fontFamily: "OperatorMono",
                    fontStyle: "normal",
                    fontWeight: 350,
                    fontSize: "14px",
                    lineHeight: "17px",
                    display: "flex",
                    alignItems: "center",
                    letterSpacing: "0.03em",
                    color: `${defaultThemePallet.fontSecondaryColor.css()}`
                }
            }
        },
    }
}
