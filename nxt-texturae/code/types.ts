export type product = {
    id: string;
    category: { en:string, fr:string };
    colors: { en:[string], fr:[string] };
    description: { en:string, fr:string };
    gender: { en:string, fr:string };
    image:[{imgUrl:string}];
    defaultImg:string;
    materials:{en:[string], fr:[string]};
    name:{en:string, fr:string}
    price:number;
    sizes:[number|string];
    slug_en:{current:string};
    slug_fr:{current:string};
}