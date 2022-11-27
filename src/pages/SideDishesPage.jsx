import React, {useEffect, useState} from "react";
import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";
import {api} from "../api";

export const SideDishesPage = () => {
  const [sides, setSides] = useState([]);


  useEffect(() => {
    function getIngredients() {
      api.get('/recipes/side-dishes')
        .then(response => setSides(response.data))
    }

    getIngredients();
  }, []);



  return (
    <Box px={5}>
      {sides && (
        <>
          <Heading display="flex" justifyContent="center" color={"teal"} mb={"25px"}>Přílohy</Heading>
          <UnorderedList display={"grid"} justifyContent={"center"}>
            {sides.map((side) => (
              <ListItem key={side}>
                {side}
              </ListItem>
            ))}
          </UnorderedList>
        </>
      )}
    </Box>
  )
}
