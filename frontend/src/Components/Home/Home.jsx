import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../Api"
import { Container, Stack, Typography, Button, Paper } from '@mui/material';
import { Item } from "./HomeStyles";

export const Homepage = () => {
  const [state, setSate] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`${baseUrl}/flat`).then((res) => {
      setSate(res.data);
    });
  };

  return (
    <Container>
      {
        state && state.length ? (
          <Stack p={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
            {
              state.map((row) => (
                <Paper key={row._id}>
                  <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}                    
                  >
                    <Item>
                      <img src={row.Image} alt="Image" />
                    </Item>
                    <Item>
                      <Typography variant="h6" color="initial">Flat No : {row.No}</Typography>
                    </Item>
                    <Item>
                      <Typography variant="h6" color="initial">Block : {row.Block}</Typography>
                    </Item>
                    <Item>
                      <Typography variant="h6" color="initial">Members : {row.Members.length}</Typography>
                    </Item>
                    <Stack direction={'row'}
                    >
                      <Item>
                        <Button variant="outlined">Edit</Button>
                      </Item>
                      <Item>
                        <Button variant="outlined">Delete</Button>
                      </Item>
                    </Stack>
                    <br />
                  </Stack>
                </Paper>
              ))
            }
          </Stack>
        ) : (
          <Stack>Loading...</Stack>
        )
      }
    </Container >
  );
};


{/* <tr key={e._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img src={e.Image} alt="Image" />
                  </td>
                  <th>{e.Members}</th>
                  <td>{e.Type}</td>
                  <td>{e.Block}</td>
                  <td>{e.No}</td>
                  <td>
                    <Button variant="outlined">Edit</Button>
                  </td>
                  <td>
                    <Button variant="outlined">Delete</Button>
                  </td>
                </tr> */}