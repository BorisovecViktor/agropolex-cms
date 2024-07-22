import {
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { grey } from '@mui/material/colors'

import { useFilters } from 'api/hooks/use-filters'
import { FOOTER_HEIGHT, HEADER_HEIGHT, MAIN_SPACING } from 'layout/app-layout'

export const ProductFilters = () => {
  const { data } = useFilters()

  return (
    <Paper
      sx={{
        width: '20%',
        height: `calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT} - (2 * ${MAIN_SPACING}))`,
        overflow: 'auto',
      }}
    >
      {data?.map(({ id, title, content }) =>
        content ? (
          <Accordion disableGutters key={id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="filter-item"
            >
              <Stack direction="row" spacing={0.5}>
                <Typography color="primary">{title}</Typography>
                <Typography component="span" color={grey[500]}>
                  {content.length}
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                {content.map(({ id, title }) => (
                  <FormControlLabel
                    key={id}
                    control={<Checkbox size="small" id={title} />}
                    label={title}
                  />
                ))}
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        ) : (
          <FormControlLabel
            key={id}
            control={<Checkbox size="small" id={title} />}
            label={title}
            sx={{ width: '100%', margin: 0 }}
          />
        ),
      )}
    </Paper>
  )
}
