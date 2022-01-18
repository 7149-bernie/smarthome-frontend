import React from "react";
import {Box} from "./Box";
import ReactJson from "react-json-view";
import {Dimension} from "../logic/Dimension";
import {DimensionalMeasured} from "../logic/DimensionalMeasured";
import {Themeable} from "../Themeable";
import {utilizeGlobalTheme} from "../logic/App";
import {OverflowBehaviour} from "../logic/OverflowBehaviour";
import {Text} from "./Text";
import {FlexBox} from "./FlexBox";
import {ReactComponent as ExpandIcon} from "../assets/icons/ic-20/ic20-unfold-more.svg";
import {ReactComponent as CollapseIcon} from "../assets/icons/ic-20/ic20-unfold-less.svg";
import {Icon} from "./Icon";
import {FlexDirection} from "../logic/FlexDirection";
import {Justify} from "../logic/Justify";
import {getOr} from "../logic/Utils";

export type ObjectJSONDisplayProps = {
    object: any,
    title?: string
    showControls?: boolean,
    pure?: boolean
}

export type ObjectJSONDisplayState = {
    collapsed: boolean
}

export class ObjectJSONDisplay extends React.Component<ObjectJSONDisplayProps, ObjectJSONDisplayState> {

    constructor(props: ObjectJSONDisplayProps) {
        super(props);
        this.state = {
            collapsed: true
        };
    }

    private toggleCollapse(collapse?: boolean) {
        this.setState({
            collapsed: getOr(collapse, !this.state.collapsed)
        });
    }

    private renderTitle(): JSX.Element {
        if (this.props.title === undefined) {
            return <></>;
        } else {
            return <Text text={this.props.title}/>;
        }
    }

    private renderControls(): JSX.Element {
        if (this.props.showControls) {
            return (
                <FlexBox flexDir={FlexDirection.ROW}>
                    <Icon icon={<ExpandIcon/>} onClick={() => this.toggleCollapse(false)}/>
                    <Icon icon={<CollapseIcon/>} onClick={() => this.toggleCollapse(true)}/>
                </FlexBox>
            );
        } else {
            return <></>;
        }
    }

    render() {
        const theme: Themeable.Theme = utilizeGlobalTheme();
        return (
            <Box overflowXBehaviour={OverflowBehaviour.SCROLL} width={DimensionalMeasured.of(100, Dimension.percentage)}
                 gapX={DimensionalMeasured.of(10, Dimension.px)} gapY={DimensionalMeasured.of(10, Dimension.px)}>
                {getOr(this.props.pure, true) ? <></> :
                    <FlexBox flexDir={FlexDirection.ROW} justifyContent={Justify.SPACE_BETWEEN}>
                        {this.renderTitle()}
                        {this.renderControls()}
                    </FlexBox>}
                <div style={{width: "100%", overflowX: "scroll"}}>
                    <ReactJson collapsed={this.state.collapsed} displayDataTypes={false} src={this.props.object}
                               enableClipboard={false} displayObjectSize={false} theme={"grayscale"}
                               iconStyle={"square"} style={{
                        width: "100%",
                        backgroundColor: theme.colors.backgroundHighlightColor.css()
                    }}/>
                </div>
            </Box>
        );
    }
}