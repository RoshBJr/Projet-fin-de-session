type User = {
    id: number;
    name: string;
    email:string;
    username:string;
    website:string;
    company:{name:string, catchPhrase:string};
}

type Params = {
    params:{id:number};
}