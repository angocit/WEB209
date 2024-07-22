import React, { useContext } from "react";
import { cartCT } from "../../../context/cartcontext";
import { api } from "../../../config/axios";
interface ICartDetail {
  _id: string;
  userId: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Product {
  ProductId: string;
  quantity: number;
  variants: any[];
  _id: string;
}
type Props = {
  cartdetail: ICartDetail;
  edit: boolean;
};

const CartTable = ({ cartdetail, edit }: Props) => {
  const { cart, setCart } = useContext(cartCT);
  const changeCart = async (
    productid: number | string,
    quantity: number | string
  ) => {
    const products = cart.products.map((item: any) => {
      if (item.ProductId == productid) {
        item.quantity = Number(quantity);
      }
      return item;
    });
    // console.log(products); // products  là mảng sau khi đã cập nhật số lượng
    const { data } = await api.put("cart/" + cart._id, {  // Lưu thông giỏ hàng vào DB
      ...cart,
      products: products,
    });
    setCart(data); // Set lại state giỏ hàng được share qua Context
  };
  const DeleteProductInCart = async (productid: number | string) => {
    if (confirm("Bạn chắc chứ?")) {
      const products = cart.products.filter(
        (item: any) => item.ProductId != productid
      );  // Loại bỏ sản phẩm có id muốn xóa ở trong mảng
      const { data } = await api.put("cart/" + cart._id, {
        ...cart,
        products: products,
      });  // Lưu thông tin giỏ hàng
      setCart(data); // Set lại state giỏ hàng được share qua Context
    }
  };
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className="px-6 py-3">STT</th>
          <th className="px-6 py-3">Ảnh</th>
          <th className="px-6 py-3">Tên sản phẩm</th>
          <th className="px-6 py-3">Số lượng</th>
          <th className="px-6 py-3">Đơn giá</th>
          <th className="px-6 py-3">Thành tiền</th>
          {edit && <th className="px-6 py-3"></th>}
        </tr>
      </thead>
      <tbody>
        {cartdetail?.products.map(
          ({ ProductId, quantity }: any, index: number) => (
            <tr key={ProductId._id}>
              <td>{index + 1}</td>
              <td>
                <img width={90} src={ProductId.image} />
              </td>
              <td>{ProductId.name}</td>
              <td>
                {edit ? (
                  <input
                    onChange={(e) => changeCart(ProductId._id, e.target.value)}
                    min={1}
                    type="number"
                    defaultValue={quantity}
                  />
                ) : (
                  <>{quantity}</>
                )}
              </td>
              <td>{ProductId.price}</td>
              <td>{ProductId.price * quantity}</td>
              {edit && (
                <td onClick={() => DeleteProductInCart(ProductId._id)}>
                  <button>Xóa</button>
                </td>
              )}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default CartTable;
