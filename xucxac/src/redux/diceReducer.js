const initialState = {
    dice: [],
    choice: "",
    matchSet: 0,
    winSet: 0,
}
const diceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLAY_GAME":
            if (!state.choice) {
                alert("Vui lòng chọn TÀI hoặc XỈU");
                return { ...state };
            }
            const dice = [];
            let sum = 0;
            for (let i = 0; i < 3; i++) {
                dice.push(Math.floor(Math.random() * 6) + 1);
                sum += dice[i];
            }
            let match = state.matchSet + 1;
            let win = 0;

            if (sum < 11 && state.choice === "XỈU") {
                win += 1;
                alert("Chúc mừng bạn đã thắng")
            }
            else {
                if (sum < 11 && state.choice === "XỈU") {
                    win += 1;
                    alert("Chúc mừng bạn đã thắng")
                }
                else alert("Chúc bạn may mắn lần sau")
            }
            return { ...state, dice: dice, matchSet: match, winSet: win };
        case "CHOICE_GAME":
            return { ...state, choice: action.choice };
        case "RESET_GAME":
            return { ...state, dice: [], choice: "" }
        default:
            return state;
    }
}
export default diceReducer;
