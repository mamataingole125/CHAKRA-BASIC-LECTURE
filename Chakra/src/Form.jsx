import { Box, Button, Heading, HStack, Input, PinInput, PinInputField, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [isLoading,setLoading]=useState(false)
    const [otp,setOtp]=useState("")
  return (
    <Box border="1px solid red" padding={10} marginTop="50px">
        <Heading>Form</Heading>
        <Stack gap="0.5rem">
        <Box>
            <Input type="email" placeholder="email" />
        </Box>

        <Box>
            <Input type="password" placeholder="password"/>
        </Box>
        <Box>
            <HStack>
            <PinInput value={otp} onChange={(value)=>setOtp(value)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            </HStack>
        </Box>
        <Box>{otp}</Box>

        <Box>
           <Button bgGradient={"linear(to-r, green.200,pink.500)"}
           onClick={()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)
            },2000)
           }}
           isLoading={isLoading}
           >Sign Up</Button>
        </Box>
        </Stack>
    </Box>
  )
}

export default Form