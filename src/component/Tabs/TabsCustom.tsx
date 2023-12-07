import { withStyles } from '@material-ui/core';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { colors } from '../../constants/colors';
import { TabPanelProps } from '../../pages/home/information/type/project.type';
import { Box, Typography } from '@mui/material';

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