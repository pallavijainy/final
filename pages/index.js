import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import Head from 'next/head'



export default function Home({data}) {
  return (
    <>
      <Head>
        <title>pallavi-portfolio-website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
    <Box>
    <Image
  borderRadius='full'
  boxSize='150px'
  src={data.avatar_url}
  alt={data.name}
/>

<Heading>{data.name}</Heading>
<Text>{data.login}</Text>
<Text>Followers:- {data.followers}</Text>
<Heading>{data.location}</Heading>
<Text>{data.bio}</Text>
<Text>Teck Stack:- NextJS | chakra ui</Text>
<Text>Experience and Education:- Full stack developer | BCOM | Typescript</Text>
<Box>
  <Button>
    Resume
  </Button>
</Box>




    </Box>
      </main>
    </>
  )
}

export async function getStaticProps(context){
  let res=await fetch(`https://api.github.com/users/pallavijainy`)
  let data=await res.json()
  return{
    props:{
      data:data
    }
  }
}
