import { Box, Typography } from "@mui/material";
import { TabPanelProps } from "../type/project.type";
import { colors } from "../../../../constants/colors";
import Tab from '@mui/material/Tab';
import { withStyles } from '@material-ui/core';


export function projectTabsProps(index: number) {
    return {
        id: `project-tab-${index}`,
        'aria-controls': `project-tabpanel-${index}`,
    };
}
export function indicatorTabsProps(index: number) {
    return {
        id: `indicator-tab-${index}`,
        'aria-controls': `indicator-tabpanel-${index}`,
    };
}


export function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`project-tabpanel-${index}`}
            aria-labelledby={`project-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: "12px 12px" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export function IndicatorCustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`indicator-tabpanel-${index}`}
            aria-labelledby={`indicator-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: "12px 12px" }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export const CustomTab = withStyles({
    root: {
        borderRadius: "6px 6px 0 0 !important",
        backgroundColor: "inherit",
        color: `${colors.black} important`,
    },
    selected: {
        backgroundColor: `${colors.themeMainColor} !important`,
        color: `${colors.white} !important`
    },
    indicator: {
        backgroundColor: '#000 !important'
    }
})(Tab);



