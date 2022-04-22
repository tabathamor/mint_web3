import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import { Box, Button, Flex, Input, Text} from "@chakra-ui/react"

import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = "0x93b01E19f628998102895c7479D684559cf5583c";

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

  async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,
                roboPunksNFT.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);

            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleDrecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
        console.log(mintAmount, '-');

    }

    const handleIncrement = () => {
        if(mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
        console.log(mintAmount, '+');
    }

    return ( 
        <Flex justify="center" align="center" height="100vh" paddinngBottom="150px">
            <Box width="520px">
                <div>
                <Text fontSize="48px" textShadow="0 5px #000000">RoboPunks</Text>
                <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs
                </Text>
                 <p></p>
                </div>
        
            { isConnected ? (
                <div>
                    <Flex  align="center" justify="center">
                        <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color= "white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px"
                        onClick={handleDrecrement}>-
                        </Button>

                        <Input readOnly
                        fontFamily="inherit"
                        width="100px"
                        height="40px"
                        textAlign="center"
                        paddingLeft="19px"
                        marginTop="10px"
                        type="number" value={mintAmount} />

                        <Button
                        backgroundColor="#D6517D"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color= "white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        marginTop="10px" 
                        onClick={handleIncrement}>+</Button>

                    </Flex>
                    <Button
                    backgroundColor="#D6517D"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color= "white"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    marginTop="10px" 
                    onClick={handleMint}>Mint Now</Button>
                </div>
            ) : 
            <p>You must be connceted to Mint</p>}
            </Box>
        </Flex>
     );
}
 
export default MainMint;