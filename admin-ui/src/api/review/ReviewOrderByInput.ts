import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  ratings?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
