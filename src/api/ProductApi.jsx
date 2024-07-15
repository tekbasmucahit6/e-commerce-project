// api/data.js
const ProductApi = async () => {
    const response = await fetch('/api/your-endpoint');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

export default ProductApi;
