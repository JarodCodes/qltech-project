import { useQuery } from "@apollo/client";
import React from "react";
import { GET_GAMES } from "../graphql/queries/crudQueries.ts";

const GamesList = ()=>
{
    const {loading, error, data} = useQuery(GET_GAMES);
    if (loading) {
        return <p>Loading games....</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }
    return data.games.map(game => (
        <div key={game.id}>
            <p>Name: {game.name}</p>
            <p>Description: {game.description}</p>
        </div>
    ))
}

export default GamesList