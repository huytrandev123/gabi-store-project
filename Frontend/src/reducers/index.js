import * as actionType from '../action/actionType';

const init = {
    cartArr: [],
};

const reducer = (state = init, action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            // Kiểm tra sản phẩm có tồn tại trong giỏ hàng chưa
            const productInCart = state.cartArr.find((p) => p.id === action.payload.id);
            if (!productInCart) {
                // Nếu chưa tồn tại
                return {
                    cartArr: [...state.cartArr, action.payload],
                };
            } else {
                // Nếu đã tồn tại
                let newCart = state.cartArr; // tạo biến mới lưu trữ giỏ hàng hiện tại
                const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id); // tim vị trí sp để thay đổi

                // Trường hợp sp mới dc thêm vào ==> quanity === undefined
                if (newCart[objIndex].quanity === undefined) {
                    newCart[objIndex].quanity = 2;
                } else {
                    // Trường hợp sp dc thêm 2 lần trở lên
                    newCart[objIndex].quanity = newCart[objIndex].quanity + 1; // lấy số lượng trước đó + 1
                }

                return { cartArr: [...newCart] };
            }

            break;

        case actionType.DELETE_PRODUCT:
            let newCart = state.cartArr;
            const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
            newCart.splice(objIndex, 1);
            return { cartArr: [...newCart] };
            break;
        default:
            break;
    }
};
export default reducer