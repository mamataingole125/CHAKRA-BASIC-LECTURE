
import React from 'react'
import {Box,Button,SimpleGrid, useColorMode} from "@chakra-ui/react"
import {MoonIcon,SunIcon} from "@chakra-ui/icons"

const Layout = () => {
const items=new Array(12).fill(0).map((e,i)=>i+1)
const {colorMode,toggleColorMode}=useColorMode();
  return (
   <Box border="1px solid red" padding={10} marginTop="50px">

       <Button  marginBottom={10} onClick={toggleColorMode}>
           {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
       </Button>
       {/* <SimpleGrid  
       columns={{
           base:1,
           sm:2,
           md:3,
           lg:4,
           xl:5,
           "2xl":6
       }}
       > */}
       {/* or */}

           <SimpleGrid columns={[1,2,3,4]}>
           {items.map((item,index)=>(
               <Box key={index} border="1px solid blue">{item}</Box>
           ))}
       </SimpleGrid>
   </Box>
  )
}

export default Layout










// import { Button, SimpleGrid, useColorMode } from '@chakra-ui/react'
// import React from 'react'

// const Layout = () => {
//     const items=new Array(12).fill(0).map((a,i)=>i+1)
//     const {colorMode,toggleColorMode}=useColorMode()
//   return (
//    <Box>
//        <Button onClick={toggleColorMode}>
//            {colorMode=== "light" ? <MoonIcon /> : <SunIcon/>}
//        </Button>
//     <SimpleGrid>
//     {items.map((item,index)=>{

// return (
//     <Box  key={index} border="1px solid blue">
//      {item}
//     </Box>
//    );


//     })};
//     </SimpleGrid>

//    </Box>>
  
// };

// export default Layout