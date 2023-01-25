import Header from '../../src/components/header/Header';
import Footer from '../../src/components/footer/Footer';
import ExploreTitle from '../../src/components/explore/ExploreTitle';
import ExploreFilters from '../../src/components/explore/ExploreFilters';
import { Container, Grid} from '@mui/material';
import Card from '../../src/components/card/Card';
import React, {useEffect, useState} from 'react'

export default function Index() {


    const [nfts, setNfts] = useState([]);
    const [nftFilters, setNftFilters] = useState([])
    const [sort, setSort] = useState()
    const [price, setPrice] = useState()


    useEffect(async () => {
      const result = await fetch(`https://project-4-api.boom.dev/explore`)
      const response =  await result.json()
      
      setNfts(response.nfts)
      setNftFilters(response.filters)

    }, []);

    useEffect(async () => {
      const result = await fetch(`https://project-4-api.boom.dev/explore?sort=${sort}`)
      const response =  await result.json()
      setNfts(response.nfts)
    }, [sort])

    useEffect(async () => {
      const result = await fetch(`https://project-4-api.boom.dev/explore?price=${price}`)
      const response =  await result.json()
      setNfts(response.nfts)
    }, [price])


    const handlePriceRangeChange = (event) => {
      setPrice(event.target.value);
  }
  const handleSortByChange = (event) => {
      setSort(event.target.value);
  }

    return (
   <>     
    <Header />
        <Container maxWidth="xl" sx={{margin: '10px 0'}}>
              <Grid container>
                <Grid item xs={5}>
                   <ExploreTitle />
                </Grid>
                <Grid item xs={7}>
                   <ExploreFilters filters={nftFilters} handlePriceRangeChange={handlePriceRangeChange} handleSortByChange={handleSortByChange}/>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                   {nfts.map((n, index) => {
                       return <Grid item xs={3} key={index} >
                                 <Card  name={n.name} likes={n.likes} mediaUrl={n.mediaUrl} user={n.owner} price={n.price} currency={n.currency} timeLeft={n.timeLeft} />
                             </Grid>
                   })}
              </Grid>
        </Container>
     <Footer />
    </> 
    )
}

