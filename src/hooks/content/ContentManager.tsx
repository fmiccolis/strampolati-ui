import {useContext} from "react";
import {AppContext} from "../../providers/AppProvider";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {GET_ITEMS} from "../../utils/endpoints";
import {ItemResponse} from "../../types/dataTypes";

export function useGetItems(): {status: "error" | "success" | "pending", items: ItemResponse, error: Error | null} {
    const {user} = useContext(AppContext)
    const { status, data, error} = useQuery({
        queryKey: ["items", {user: user.id}],
        queryFn: async () => {
            const {data} = await axios.get(GET_ITEMS);
            return data;
        }
    });
    return {status, items: data || {results:[],count:0,next:null,previous:null}, error}
}