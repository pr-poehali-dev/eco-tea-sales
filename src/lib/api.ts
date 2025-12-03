const API_BASE = {
  auth: 'https://functions.poehali.dev/98b85263-2cf7-4ebb-8d79-dda674e43557',
  products: 'https://functions.poehali.dev/d770593d-d1ba-4cec-b777-a4282f381c61',
  orders: 'https://functions.poehali.dev/842eb1c6-6077-44be-a287-0ac4e7a78acf'
};

export const api = {
  auth: {
    register: async (username: string, password: string) => {
      const response = await fetch(API_BASE.auth, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'register', username, password })
      });
      return response.json();
    },
    login: async (username: string, password: string) => {
      const response = await fetch(API_BASE.auth, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', username, password })
      });
      return response.json();
    }
  },
  products: {
    getAll: async () => {
      const response = await fetch(API_BASE.products);
      return response.json();
    },
    getById: async (id: number) => {
      const response = await fetch(`${API_BASE.products}?id=${id}`);
      return response.json();
    },
    create: async (product: any) => {
      const response = await fetch(API_BASE.products, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      return response.json();
    },
    update: async (product: any) => {
      const response = await fetch(API_BASE.products, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });
      return response.json();
    }
  },
  orders: {
    getByUserId: async (userId: number) => {
      const response = await fetch(`${API_BASE.orders}?userId=${userId}`);
      return response.json();
    },
    create: async (userId: number, items: any[]) => {
      const response = await fetch(API_BASE.orders, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, items })
      });
      return response.json();
    }
  }
};
