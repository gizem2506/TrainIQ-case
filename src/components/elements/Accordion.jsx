import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, ListItemIcon } from '@mui/material';

export const DazeAccordion = ({ children, title, icon, disabled, onClick, hidearrow }) => {
  return (
    <Box onClick={onClick}  >

      <Accordion sx={{ transform: "scaleY(0.9)" }} disabled={disabled} >
        <AccordionSummary
          sx={{ m: 0, pl: 1 }}
          expandIcon={<ExpandMoreIcon sx={{ display: hidearrow ? "none" : "" }} fontSize='small' />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <ListItemIcon  >
            {icon}
          </ListItemIcon>
          <Typography fontSize={13} variant='subtitle1' >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0, margin: 0, pl: 1 }} >
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>


  );
}