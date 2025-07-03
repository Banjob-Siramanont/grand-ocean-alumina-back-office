export type ProductData = {
    id: number;
    product_id: string;
    amount: string;
    note: string;
};

export type PurchaseOrderData = {
    selectedCustomerCompany: string;
    poNumber: string;
    orderDate: string;
    expiredDate: string;
    shippingAddress: string;
    productDatas: ProductData[];
};

export type Payload<Key extends keyof PurchaseOrderData> = {
    value: PurchaseOrderData[Key];
    variableName: Key;
}