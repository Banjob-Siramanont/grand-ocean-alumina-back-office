// repair return replace product ตั้งใจเขียนให้ซ้ำกัน เพราะเผื่ออนาคตจะมีตัวใดตัวนึงเปลี่ยน จะได้แก้ไขง่าย (ไม่อยากผูกว่าต้องมีหน้าตาเหมือนกันทั้งหมด)
export type RepairProductData = {
    id: number;
    product_id: string;
    quantity: string;
    note: string;
};

export type ReturnProductData = {
    id: number;
    product_id: string;
    quantity: string;
    note: string;
};

export type ReplaceProductData = {
    id: number;
    product_id: string;
    quantity: string;
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

export type ClaimData = {
    selectedCustomerCompany: string;
    poNumber: string;
    invoiceNumber: string;
    shippingDate: string;
    shippingAddress: string;
    repairProductDatas: RepairProductData[];
    returnProductDatas: ReturnProductData[];
    replaceProductDatas: ReplaceProductData[];
    productOptionDatas: ProductOptionData[];
    customerCompanyOptionDatas: CustomerCompanyOptionData[];
};

export type Payload<Key extends keyof ClaimData> = {
    value: ClaimData[Key];
    variableName: Key;
}