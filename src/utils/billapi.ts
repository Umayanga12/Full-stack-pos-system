const BASE_URL = 'http://localhost:3020/bill'; // Your base URL

export const fetchFromApi = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}


const createBill = async (bill: {
    billDate : Date,
    billTotal : Number,
    items:[{
        productID:String,
        unitPrice:Number,
        quantity:Number,
        total:Number
    }],
 }) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bill),
    };

    return fetchFromApi('bill', options);
}

const fetchBillById = async (id: string) => {
    return fetchFromApi(`bill/${id}`);
}

const updateBill = async (id: string, updates: {
    billDate?: Date,
    billTotal?: Number,
    items:[{
        productID:String,
        unitPrice:Number,
        quantity:Number,
        total:Number
    }],
}) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
    };

    return fetchFromApi(`bill/${id}`, options);
}


const deleteBill = async (id: string) => {
    const options = {
        method: 'DELETE',
    };

    return fetchFromApi(`bill/${id}`, options);
};


export{
    createBill,
    updateBill,
    fetchBillById,
    deleteBill
}
