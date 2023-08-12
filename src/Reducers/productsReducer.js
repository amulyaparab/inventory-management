import { v4 as uuid } from "uuid";
export const productsReducer = (productsState, action) => {
  switch (action.type) {
    case "FILTER_BY_DEPARTMENT":
      return {
        ...productsState,
        currentDepartment: action.payload,
        filteredProducts: productsState.products.filter((product) =>
          action.payload === "All"
            ? product
            : product.department === action.payload
        ),
      };
    case "SORT_BY":
      return {
        ...productsState,
        sortBy: action.payload,
        filteredProducts: productsState.filteredProducts.sort((a, b) => {
          if (action.payload !== "sort") {
            return action.payload === "name"
              ? a.name.localeCompare(b.name)
              : a[action.payload] - b[action.payload];
          }
        }),
      };
    case "LOW_STOCK_ITEMS":
      return {
        ...productsState,
        areLowStockItems: action.payload,
      };

    case "NEW_PRODUCT_DEPARTMENT":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, department: action.payload },
      };
    case "NEW_PRODUCT_NAME":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, name: action.payload },
      };

    case "NEW_PRODUCT_DESCRIPTION":
      return {
        ...productsState,
        newProduct: {
          ...productsState.newProduct,
          description: action.payload,
        },
      };

    case "NEW_PRODUCT_PRICE":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, price: action.payload },
      };

    case "NEW_PRODUCT_STOCK":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, stock: action.payload },
      };

    case "NEW_PRODUCT_SKU":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, sku: action.payload },
      };

    case "NEW_PRODUCT_SUPPLIER":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, supplier: action.payload },
      };

    case "NEW_PRODUCT_IMAGE":
      return {
        ...productsState,
        newProduct: { ...productsState.newProduct, imageUrl: action.payload },
      };
    case "SUBMIT_FORM":
      return {
        ...productsState,
        filteredProducts: [
          ...productsState.filteredProducts,
          {
            ...productsState.newProduct,
            id: uuid(),
          },
        ],
        newProduct: {
          id: "",
          department: "",
          name: "",
          description: "",
          price: 0,
          stock: 0,
          sku: "",
          supplier: "",
          delivered: 0,
          imageUrl: "",
        },
      };
    default:
      return productsState;
  }
};
