import { create } from 'zustand';
import { Query } from 'appwrite';
import { db, ID } from '../utils/appwriteConfig.js';

const dbID = '672e83fb002462e2866e';
const productsID = '672f2e48000001875417';
const categoriesID = '672f1592000d8f8b1c98';
const usersID = '672f3942000ec2e792ff';

const findProductById = (pid) =>
  useProductsStore.getState().products.find((p) => p.$id == pid);

const findCartIndex = (pid) =>
  useCartStore.getState().cart.findIndex((c) => c.product.$id == pid);

export const useCartStore = create((set, get) => ({
  cart: [],
  changeTemaxia: (pid, amount) => {
    const product = findProductById(pid);
    if (product) {
      const index = findCartIndex(product.$id);
      if (index >= 0) {
        set((s) => ({
          cart: s.cart.map((c) =>
            c.product.$id == pid ? { ...c, temaxia: amount } : c
          ),
        }));
      }
    }
  },
  deleteFromCart: (pid) => {
    const product = findProductById(pid);
    if (product) {
      const index = findCartIndex(product.$id);
      if (index >= 0) {
        set((s) => ({
          cart: s.cart.filter((c) => c.product.$id != product.$id),
        }));
      }
    }
  },
  addToCart: (pid, temaxia) => {
    const tem = parseInt(temaxia);
    const product = findProductById(pid);
    if (product) {
      const index = findCartIndex(product.$id);
      if (index >= 0) {
        set((s) => ({
          cart: s.cart.map((c) =>
            c.product.$id == product.$id
              ? { ...c, temaxia: c.temaxia + tem }
              : c
          ),
        }));
      } else {
        const cartItem = { product: product, temaxia: tem };
        set((s) => ({
          cart: [...s.cart, cartItem],
        }));
      }
    }
  },
}));


export const useUserStore = create((set) => ({
  name: '',
  email: '',
  isLogin: false,
  error: '',
  registered: false,
  logOut: () => {
    set({isLogin: false, error: '', name: '', email: ''})
  },
  registerUser: async (name, email, password) => {
    const res = await db.createDocument(dbID, usersID, ID.unique(), {
      name,
      email,
      password,
    });
    if (res.$id) {
      set({
        name: res.name,
        email: res.email,
        isLogin: true,
        error: '',
        registered: true
      });
    } else {
      set({ error: 'Somthing went wrong. Try Again', isLogin: false, registered: false });
    }
  },
  loginUser: async (email, passwd) => {
    const res = await db.listDocuments(dbID, usersID, [
      Query.and([Query.equal('email', email), Query.equal('password', passwd)]),
    ]);
    if (res.total == 0) {
      set({ error: 'Wrong Email or Password. Try Again', isLogin: false });
    } else {
      set((s) => ({
        ...s,
        name: res.documents[0].name,
        email: res.documents[0].email,
        isLogin: true,
        error: '',
      }));
    }
  },
}));


export const useProductsStore = create((set) => ({
    products: [],
    categories: [],
    mostpopular: [],
    loading: true,
    getProducts: async () => {
      set({ loading: true });
      const productsList = await db.listDocuments(dbID, productsID, [
        Query.limit(50),
        Query.offset(0),
      ]);
      const categoriesList = await db.listDocuments(dbID, categoriesID, [
        Query.orderAsc('title'),
    ]);
      set({ categories: categoriesList.documents });
      set({ products: productsList.documents });
      set(s => ({mostpopular: s.products.filter(p => p.rating > 4.5)}))
      set({ loading: false });
    },
  }));