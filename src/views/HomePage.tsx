import { useContext, useState} from 'react';
import {useGetItems} from "../hooks/content/ContentManager";
import {ItemProps} from "../types/dataTypes";
import {Box, Flex, FormControl, FormLabel, Input, Textarea, FormErrorMessage, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import axios from 'axios';
import { CREATE_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../utils/endpoints';
import { AppContext } from '../providers/AppProvider';
import { useQueryClient } from '@tanstack/react-query';

const default_item: ItemProps = {
    name: "",
    image: "",
    quantity: 0
}

const HomePage = () => {
    const {user} = useContext(AppContext)
    const {items} = useGetItems()
    const queryClient = useQueryClient();

    const [item, setItem] = useState<ItemProps>({...default_item});
    const [error, setError] = useState<any>();

    const updateValue = (propName: "name" | "image" | "quantity", newValue: string | number) => {
        setItem(old => ({...old, [propName]: newValue}))
    }

    const handleSubmit = () => {
        console.log({item})
        axios
            .post(CREATE_ITEM, item)
            .then(res => {
                queryClient.invalidateQueries({
                    queryKey: ['items', {user: user.id}]
                })
                setItem({...default_item})
            })
            .catch(err => setError(err.response.data))
    }

    const updateItem = (instance: ItemProps) => {
        let today = new Date();
        let done_date = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`

        axios
            .put(UPDATE_ITEM(instance.id as number), {...instance, done_date})
            .then(res => {
                queryClient.invalidateQueries({
                    queryKey: ['items', {user: user.id}]
                })
            })
            .catch(err => setError(err.response.data))
    }

    const deleteItem = (todoId: number) => {
        axios
            .delete(DELETE_ITEM(todoId))
            .then(res => {
                queryClient.invalidateQueries({
                    queryKey: ['items', {user: user.id}]
                })
            })
            .catch(err => setError(err.response.data))
    }

    return (
        <>
        <Box bg={"white"} w={"full"} borderRadius={5} p={4}>
            <Flex direction={{base: 'column', sm: 'row'}}>
                <Box p={3}>
                    <FormControl id="name" isInvalid={(error && error.name)} mb={3}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" name='name' value={item?.name} onChange={(e) => updateValue("name", e.target.value)} />
                        {(error && error.name) && <FormErrorMessage>{error.name.join(', ')}</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="image" isInvalid={(error && error.image)} mb={3}>
                        <FormLabel>Image</FormLabel>
                        <Textarea name='image' value={item?.image} onChange={(e) => updateValue("image", e.target.value)}  />
                        {(error && error.image) && <FormErrorMessage>{error.image.join(', ')}</FormErrorMessage>}
                    </FormControl>
                    <FormControl id="quantity" isInvalid={(error && error.quantity)} mb={3}>
                        <FormLabel>Quantity</FormLabel>
                        <Input type='number' name='quantity' value={item?.quantity} onChange={(e) => updateValue("quantity", e.target.value)}  />
                        {(error && error.description) && <FormErrorMessage>{error.description.join(', ')}</FormErrorMessage>}
                    </FormControl>
                    <FormControl mb={3}>
                        {(error && error.non_field_errors) &&
                            <Alert status='error'>
                              <AlertIcon />
                              <AlertTitle>Unable to save item!</AlertTitle>
                              <AlertDescription>{error.non_field_errors.join(', ')}</AlertDescription>
                            </Alert>
                        }
                        <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit}>
                            Save
                        </Button>
                    </FormControl>
                </Box>
            </Flex>
        </Box>
      </>
    );
};

export default HomePage;