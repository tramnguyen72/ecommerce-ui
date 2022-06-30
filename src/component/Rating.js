import React from "react";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box } from "@mui/material";

export const Rating = ({ value, text, color }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <span>
                {value >= 1
                    ? <StarIcon style={{ color: `${color}` }} />
                    : value >= 0.5
                        ? <StarHalfIcon style={{ color: `${color}` }} />
                        : <StarOutlineIcon style={{ color: `${color}` }} /> 
                }
            </span>
            <span>
                {value >= 2
                    ? <StarIcon style={{ color: `${color}` }} />
                    : value >= 1.5
                        ? <StarHalfIcon style={{ color: `${color}` }} />
                        : <StarOutlineIcon style={{ color: `${color}` }} /> 
                }
            </span>
            <span>
                {value >= 3
                    ? <StarIcon style={{ color: `${color}` }} />
                    : value >= 2.5
                        ? <StarHalfIcon style={{ color: `${color}` }} />
                        : <StarOutlineIcon style={{ color: `${color}` }} /> 
                }
            </span>
            <span>
                {value >= 4
                    ? <StarIcon style={{ color: `${color}` }} />
                    : value >= 3.5
                        ? <StarHalfIcon style={{ color: `${color}` }} />
                        : <StarOutlineIcon style={{ color: `${color}` }} /> 
                }
            </span>
            <span>
                {value === 5
                    ? <StarIcon style={{ color: `${color}` }} />
                    : value >= 4.5
                        ? <StarHalfIcon style={{ color: `${color}` }} />
                        : <StarOutlineIcon style={{ color: `${color}` }} /> 
                }
            </span>
            <span style={{ marginLeft: 5, marginTop: 5 }}>{text}</span>
        </Box>
    )
};