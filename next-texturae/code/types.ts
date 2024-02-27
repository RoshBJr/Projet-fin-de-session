export type product = {
    _id: string;
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
    patterns:{en:[string], fr:[string]};
    styles:{en:[string], fr:[string]};
    fits:{en:[string], fr:[string]};
    collars:{en:[string], fr:[string]};
    slug_en:{current:string};
    slug_fr:{current:string};
}

export type cartSpecs  = {
    id:string;
    quantity:number;
    color:string;
    size:number|string;
    pattern:string;
    material:string;
}