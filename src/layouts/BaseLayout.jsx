import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { IconButton } from "@mui/material";
import { useOutlet } from "react-router-dom";

export const BaseLayout = ({ children }) => {
  const date = new Date()
  const outlet = useOutlet()


  return (
    <Box sx={{ display: 'flex', backgroundColor: "#e5efef", minWidth: "100vw", minHeight: "100vh", flex: 1, justifyContent: "center", padding: { xs: 4, md: 8 }, }} >
      <Box sx={{ position: "absolute", zIndex: 300 }} >
        {children}
      </Box>
      {outlet}

      <Box sx={{ width: '100%', height: 50, display: 'flex', justifyContent: 'center', color: '#ccc', backgroundColor: "#18736f", alignItems: 'center', position: 'fixed', bottom: 0, zIndex: 888, borderTop: 2 }} >
        <Avatar sx={{ width: 26, height: 26 }} src='/logo193.jpeg' />
        <Typography color={"white"} sx={{ marginLeft: 2 }} variant='subtitle2' >
          TrainIQ © {date.getFullYear()}
        </Typography>
        <IconButton
          color="default"
          aria-label="open drawer"
          edge="start"
          size="small"
          sx={{ position: "fixed", right: 15, bottom: 10, zIndex: 10 }}
        >
        </IconButton>
      </Box>
    </Box>

  )
}