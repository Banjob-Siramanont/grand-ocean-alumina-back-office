import type { ProductData, ProductOptionData, SpecialProductData } from '../../types/store/customerOrder/purchaseOrderSliceTypes';

export const getCookies = (name: string) => {
    let cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
};

export function deleteAndReassignId<T extends { id: number }>(
    array: T[],
    indexToDelete: number
): T[] {
    const filtered = array.filter((_, index) => index !== indexToDelete);

    return filtered.map((item, index) => ({
        ...item,
        id: index + 1,
    }));
}

export function calculateOrderTotals(
    productDatas: ProductData[],
    specialProductDatas: SpecialProductData[],
    productOptions: ProductOptionData[],
) {
    const VAT_FRACTION = 0.07; // 7% VAT

    // Calculate regular products
    const totalProductPrice = productDatas.reduce((total, product) => {
        const productOption = productOptions.find(option => option._id === product.product_id);
        return total + (productOption ? productOption.price * (Number(product.quantity) || 0) : 0);
    }, 0);

    const totalProductVat = productDatas.reduce((total, product) => {
        const productOption = productOptions.find(option => option._id === product.product_id);
        return total + (productOption ? productOption.vat * (Number(product.quantity) || 0) : 0);
    }, 0);

    // Calculate special products
    const totalSpecialProductPrice = specialProductDatas.reduce((total, product) => {
        const productOption = productOptions.find(option => option._id === product.product_id);
        const sumPrice = (productOption?.price || 0) + (Number(product.addedPrice) || 0);
        return total + (productOption ? sumPrice * (Number(product.quantity) || 0) : 0);
    }, 0);

    const totalSpecialProductVat = specialProductDatas.reduce((total, product) => {
        const productOption = productOptions.find(option => option._id === product.product_id);
        const sumVatPrice = (productOption?.vat || 0) + (VAT_FRACTION * Number(product.addedPrice) || 0);
        return total + (productOption ? sumVatPrice * (Number(product.quantity) || 0) : 0);
    }, 0);

    // Calculate totals
    const totalPrice = totalProductPrice + totalSpecialProductPrice;
    const totalVat = totalProductVat + totalSpecialProductVat;
    const grandTotal = totalPrice + totalVat;

    return {
        totalProductPrice,
        totalProductVat,
        totalSpecialProductPrice,
        totalSpecialProductVat,
        totalPrice,
        totalVat,
        grandTotal
    };
}