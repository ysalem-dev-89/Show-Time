import React, { useEffect, useState }  from "react";

class Fetch extends React.Component{
    constructor(props){
        super();
        this.state = {
            data: null,
            error: null,
            isLoading: true,
        }
    }


    fetchData = (url) => {
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('fetch is not working')
            }
            return res.json();
        })
        .then(data => {
            this.setState({
                data: data,
                error: null,
                isLoading: false
            })
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('Fetch Aborted');
            } else {
                this.setState({
                    error: err.message,
                    isLoading: true
                })
            }
        });
    }
    componentDidMount(){
        this.fetchData(this.props.url);
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.url !== prevProps.url){
            this.fetchData(this.props.url);
        }
    }

    returnState(){
        return  { data: this.state.data, error: this.state.error, isLoading: this.state.isLoading } 
    }
}

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('fetch is not working')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setError(err.message);
                    setIsLoading(true);
                }
            });
        return () => abortController.abort();
    }, [url])

    return { data, error, isLoading };
}

const fetchData = (url) => {
    return fetch(url)
    .then(res => {
        if (!res.ok) {
            throw new Error('fetch is not working')
        }
        return res.json();
    });
}

export  {Fetch, useFetch, fetchData};