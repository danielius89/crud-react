import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import MovieIcon from '@mui/icons-material/Movie';
// import NewspaperIcon from '@mui/icons-material/Newspaper';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import NewsCard from './components/news-card';
// import HomePage from './pages/home-page';
import NewsService from './services/news-service';

const App = () => {
  const [news, setNews] = React.useState([]);

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
                  { news.map(({
                    title,
                    description,
                    category,
                    img,
                    author,
                    date,
                  }) => (
                    <NewsCard
                      title={title}
                      description={description}
                      category={category}
                      img={img}
                      author={author}
                      date={date}
                    />
                  ))}
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
