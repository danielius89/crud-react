import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Modal, Grid } from '@mui/material/';
import Container from '@mui/material/Container';
// import MovieIcon from '@mui/icons-material/Movie';
// import NewspaperIcon from '@mui/icons-material/Newspaper';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Header from './components/header';
import NewsForm from './components/news-form';
import NewsCard from './components/news-card';
// import HomePage from './pages/home-page';
import NewsService from './services/news-service';

const App = () => {
  const [news, setNews] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [newsBeingEdited, setNewsBeingEdited] = React.useState(null);

  // UX functions
  const closeModal = () => {
    setModalOpen(false);
    setNewsBeingEdited(null);
  };

  // Data manipulation functions
  const fetchAllNews = async () => {
    const fetchedNews = await NewsService.fetchAll();
    setNews(fetchedNews);
  };

  const createNews = async (newsProps) => {
    await NewsService.create(newsProps);
    await fetchAllNews();
    closeModal();
  };

  const editNews = (id) => {
    const foundNews = news.find((c) => c.id === id);
    setNewsBeingEdited(foundNews);
    setModalOpen(true);
  };

  const updateNews = async (newsProps) => {
    await NewsService.update(newsBeingEdited.id, newsProps);
    await fetchAllNews();
    closeModal();
  };

  const removeNews = async (id) => {
    await NewsService.remove(id);
    fetchAllNews();
  };

  React.useEffect(() => {
    fetchAllNews();
  }, []);

  // Stylized item
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
                    id,
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
                      onDelete={() => removeNews(id)}
                      onEdit={() => editNews(id)}
                    />
                  ))}
                </Grid>

              </Grid>
              <Grid item padding={2} xs={12} md={4} sx={{ bgcolor: '#ddd' }}>

                <Header openModal={() => setModalOpen(true)} />
                <Modal open={modalOpen} onClose={closeModal}>
                  <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: '400px',
                  }}
                  >
                    <NewsForm
                      onSubmit={newsBeingEdited ? updateNews : createNews}
                      formTitle={newsBeingEdited ? 'Puodelio redagavimas' : 'Naujienos įkėlimas'}
                      submitText={newsBeingEdited ? 'Atnaujinti' : 'Sukurti'}
                      color={newsBeingEdited ? 'warning' : 'success'}
                      initValues={newsBeingEdited}
                    />
                  </Box>
                </Modal>

              </Grid>

            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default App;
