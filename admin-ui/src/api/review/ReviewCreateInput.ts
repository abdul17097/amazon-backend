import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  product: ProductWhereUniqueInput;
  ratings: number;
  user: UserWhereUniqueInput;
};
