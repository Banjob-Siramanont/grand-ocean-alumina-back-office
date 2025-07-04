export type ProductData = {
    id: number;
    product_id: string;
    quantity: string;
    note: string;
};

export type SpecialProductData = {
    id: number;
    product_id: string;
    quantity: string;
    addedPrice: string;
    note: string;
};

export type ProductOptionData = {
    _id: string;
    product_name: string;
    price: number;
    vat: number;
};

export type CustomerCompanyOptionData = {
    _id: string;
    company_name: string;
};

export type PurchaseOrderData = {
    selectedCustomerCompany: string;
    poNumber: string;
    orderDate: string;
    expiredDate: string;
    shippingAddress: string;
    productDatas: ProductData[];
    specialProductDatas: SpecialProductData[];
    productOptionDatas: ProductOptionData[];
    customerCompanyOptionDatas: CustomerCompanyOptionData[];
};

export type Payload<Key extends keyof PurchaseOrderData> = {
    value: PurchaseOrderData[Key];
    variableName: Key;
}