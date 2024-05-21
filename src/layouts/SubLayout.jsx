import { Box } from '@mui/material'
import React from 'react'

export const SubLayout = ({ children }) => {
  return (
    <Box
      sx={{ height: "100%", flexDirection: "column", justifyContent: "center", width: "100%" }}
    >
      {children}
      
    </Box>
  )
}

