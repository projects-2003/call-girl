import React from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function FiltersPanel({ stateFilter, setStateFilter }) {
  const AREAS = ['All', 'Delhi', 'Chennai', 'Jharkhand'];

  return (
   <Box sx={{ width: { xs: '90%', md: 220 }, margin: "auto" }}>
  <FormControl fullWidth>
    <InputLabel
      sx={{ color: "white" }}
      id="state-label"
    >
      State By
    </InputLabel>
    <Select
      size="small"
      labelId="state-label"
      value={stateFilter}
      label="State By"
      onChange={(e) => setStateFilter(e.target.value)}
      sx={{
        color: "white",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fc05f8",   // border color set
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fc05f8",   // hover border color
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#fc05f8",   // focus border color
        },
      }}
    >
      {AREAS.map((a) => (
        <MenuItem key={a} value={a}>
          {a}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>

  );
}
