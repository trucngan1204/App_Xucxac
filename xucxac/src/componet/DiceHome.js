import React, { Component } from 'react';
import bgPic from '../assets/img/bgGame.png'
import DiceList from './DiceList';
import { connect } from 'react-redux';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundImage: `url(${bgPic})`,
}
class DiceHome extends Component {

    render() {
        const { playGame, typeChoice, choice, matchSet, winSet, resetGame } = this.props;
        return (
            <div style={containerStyle}>
                <h1>GAME ĐỔ XÚC SẮC </h1>
                <div
                    style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <button type="button" style={{ height: 100, width: 100, border: "3px solid green", }}
                        className="btn btn-primary fs-3"
                        onClick={() => typeChoice("TÀI")}>TÀI</button>
                    <DiceList />
                    <button type="button" style={{ height: 100, width: 100, border: "3px solid green", }}
                        className="btn btn-primary fs-3"
                        onClick={() => typeChoice("XỈU")}>XỈU</button>
                </div>
                <h2>Bạn chọn: {choice}</h2>
                <h2>Số bàn thắng: {winSet}</h2>
                <h2>Tổng số bàn chơi: {matchSet}</h2>
                <button type='button' className='btn btn-success' onClick={() => {
                    playGame();
                    resetGame();
                }}>Play</button>
            </div >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        dice: state.dice.dice,
        choice: state.dice.choice,
        matchSet: state.dice.matchSet,
        winSet: state.dice.winSet
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            const action = { type: "PLAY_GAME" };
            dispatch(action);
        },
        typeChoice: (choice) => {
            const action = { type: "CHOICE_GAME", choice: choice };
            dispatch(action);
        },
        resetGame: () => {
            const action = { type: "RESET_GAME" };
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DiceHome)