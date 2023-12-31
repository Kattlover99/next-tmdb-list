import { CastItem, CrewItem } from "@/types/credits";
import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "4f298a53e552283bee957836a529baec";

const commonOptions = {
    method: "GET",
    headers: {
        accept: "application/json",
    },
};

const commonParams = {
    language: "en-US",
    api_key: API_KEY,
};

export async function getMoviesByPage(type: string, page: number) {
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/movie/${type}`,
        params: {
            ...commonParams,
            page: page,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getGenres() {
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/genre/movie/list`,
        params: {
            api_key: API_KEY,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovieDataById(id: number) {
    console.log(`${API_BASE_URL}/movie/${id}`)
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/movie/${id}`,
        params: {
            api_key: API_KEY,
        },
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getMovieCreditsById(id: number) {
    console.log(`${API_BASE_URL}/movie/${id}`)
    const options = {
        ...commonOptions,
        url: `${API_BASE_URL}/movie/${id}/credits`,
        params: {
            api_key: API_KEY,
        },
    };
    try {
        const response = await axios.request(options);
        return { cast: response.data.cast as CastItem[], crew: response.data.crew as CrewItem[] };
    } catch (error) {
        console.error(error);
        return { cast: [], crew: [] }
    }
}