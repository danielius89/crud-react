import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MovieIcon from '@mui/icons-material/Movie';
import NewspaperIcon from '@mui/icons-material/Newspaper';
// import HomePage from './pages/home-page';

import NewsService from './services/news-service';

const App = () => {
  const [news, setNews] = React.useState([]);

  const NewsPicture = {
    maxWidth: 'calc(100% + 16px)',
    margin: '-8px 0 0 -8px',
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  // Data manipulation functions
  const fetchAllNews = async () => {
    const fetchedNews = await NewsService.fetchAll();
    setNews(fetchedNews);
  };

  React.useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ paddingTop: 4 }}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <Box sx={{ flexGrow: 1, paddingLeft: 2, paddingTop: 2 }}>
            <Grid container spacing={2}>
              <Grid item padding={2} xs={12} md={8} sx={{ bgcolor: '#eee' }}>

                <Grid container spacing={2} paddingTop={2}>

                  <Grid item xs={12} md={6} lg={6}>
                    <Item sx={{ textAlign: 'left' }}>
                      <img
                        src="https://geekified.net/wp-content/uploads/2019/07/stranger-things-eleven-papa-800x450.jpg"
                        alt="no alt"
                        style={NewsPicture}
                      />
                      <Typography variant="h4" component="h2" align="left" color="secondary" fontWeight="700" gutterBottom>
                        Naujienos pavadinimas
                      </Typography>
                      <Stack direction="row" spacing={1} paddingBottom={2}>
                        <Chip icon={<MovieIcon />} label="Filmai" />
                        <Chip icon={<NewspaperIcon />} label="Naujienos" />

                      </Stack>
                      <Typography align="left">
                        Mere hours before “Strangers Things” season 3 gets released,
                        Chris and Dan sat down to talk about the first two seasons of the series.
                        Chris: One of the first things that comes to mind, when
                        talking about “Stranger Things”
                        is the 80s nostalgia and how it was used to create the whole storyline.

                      </Typography>

                      <Box component="div" sx={{ display: 'inline', marginRight: '15px', fontWeight: '700' }}>Autorius</Box>
                      <Box
                        component="div"
                        sx={{
                          display: 'inline', marginRight: '15px', fontWeight: '400', fontStyle: 'italic',
                        }}
                      >
                        2022-08-20
                      </Box>

                    </Item>
                  </Grid>

                  <Grid item xs={12} md={6} lg={6}>
                    <Item sx={{ textAlign: 'left' }}>
                      <img
                        src="https://geekified.net/wp-content/uploads/2019/07/stranger-things-eleven-papa-800x450.jpg"
                        alt="no alt"
                        style={NewsPicture}
                      />
                      <Typography variant="h4" component="h2" align="left" color="secondary" fontWeight="700" gutterBottom>
                        Naujienos pavadinimas
                      </Typography>
                      <Stack direction="row" spacing={1} paddingBottom={2}>
                        <Chip icon={<MovieIcon />} label="Filmai" />
                        <Chip icon={<NewspaperIcon />} label="Naujienos" />

                      </Stack>
                      <Typography align="left">
                        Mere hours before “Strangers Things” season 3 gets released,
                        Chris and Dan sat down to talk about the first two seasons of the series.
                        Chris: One of the first things that comes to mind, when
                        talking about “Stranger Things”
                        is the 80s nostalgia and how it was used to create the whole storyline.

                      </Typography>

                      <Box component="div" sx={{ display: 'inline', marginRight: '15px', fontWeight: '700' }}>Autorius</Box>
                      <Box
                        component="div"
                        sx={{
                          display: 'inline', marginRight: '15px', fontWeight: '400', fontStyle: 'italic',
                        }}
                      >
                        2022-08-20
                      </Box>

                    </Item>
                  </Grid>

                </Grid>

              </Grid>
              <Grid item padding={2} xs={12} md={4} sx={{ bgcolor: '#ddd' }}>
                <Item>šoninė juosta</Item>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default App;
