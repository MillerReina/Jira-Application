import { Inter } from '@next/font/google'
import { Layout } from './components/layouts'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { EntryList, NewEntry } from './components/ui';
import { EntryStatus } from '@/interfaces'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title='Home Page'>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={4} >
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title="Pendientes">
              </CardHeader>
              <NewEntry></NewEntry>
              <CardContent>
                <EntryList status={EntryStatus.pending} ></EntryList>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title="En Progreso">
              </CardHeader>
              <CardContent>
                <EntryList status={EntryStatus.inProgress}></EntryList>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4} >
            <Card sx={{ height: 'calc(100vh - 100px)' }}>
              <CardHeader title="Completadas">
              </CardHeader>
              <CardContent>
                <EntryList status={EntryStatus.finished}></EntryList>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Layout>
    </>
  )
}
