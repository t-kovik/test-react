import React, {useEffect, useState} from "react";
import axios from "axios";

export function useData(region: string) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function load() {
            setLoading(true);
            try {
                const {data}  = await axios.get(`https://restcountries.com/v3.1/region/${region}`)
                let sort = data.sort(function (a: { population: number; }, b: { population: number; }) {
                    if(a.population > b.population) {
                        return -1
                    }
                });
                let arr:any = [];
                for(let i = 0; i < 7; i++) {
                    arr.push(sort[i])
                }
                setData(arr);
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        load();
    }, [])
    return {
        data,
        loading,
    }
}