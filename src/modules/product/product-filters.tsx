import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { grey } from '@mui/material/colors'

export const ProductFilters = () => (
  <Box width="15%">
    <Accordion defaultExpanded disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Seller `}
          <Typography component="span" color={grey[500]}>
            11
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 6"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 7"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 8"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 9"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 10"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Seller 11"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Brand `}
          <Typography component="span" color={grey[500]}>
            4
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Brand 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Brand 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Brand 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Brand 4"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="filter-item"
      >
        <Typography color="primary">
          {`Type `}
          <Typography component="span" color={grey[500]}>
            5
          </Typography>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 1"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 2"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 3"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 4"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Type 5"
          />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  </Box>
)
