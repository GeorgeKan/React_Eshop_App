import { create } from 'zustand';
import { Query } from 'appwrite';
import { db, ID } from '../utils/appwriteConfig.js';

const dbID = '672e83fb002462e2866e';
const productsID = '672f2e48000001875417';
const categoriesID = '672f1592000d8f8b1c98';
const usersID = '672f3942000ec2e792ff';

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