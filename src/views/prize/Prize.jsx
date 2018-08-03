// @flow
import React from 'react';
import {loadPrizesRequest} from '../../redux/actions/prizeActions';
import {connect} from 'react-redux';
import {array, func} from 'prop-types';
import moment from 'moment'
import {Link} from 'react-router-dom';

class Prize extends React.Component {
    componentDidMount() {
        this.props.dispatchLoadPrizes()
    };

    renderActionButton (id, type) {
        if (type === 1) {
            return (
                <Link to={`/game-one/${id}`} className='btn btn-success' disabled>Add PRIZES</Link>
            )
        } else if (type === 2) {
            return (
                <Link to={`/game-two/${id}`} className='btn btn-warning'>ADD
                    FUND</Link>
            )
        } else if (type === 3) {
            return (
                <Link to={`/game-three/${id}`} className='btn btn-success'>ADD
                    PRIZES</Link>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <section className='content-header'>
                    <h1>Prizes</h1>
                </section>
                <section className='content'>
                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Scheduled Game | <span className='light-text'>Ongoing</span></h3>
                        </div>
                        <div className="box-body">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Cover Photo</th>
                                    <th>Title</th>
                                    <th>Game Type</th>
                                    <th>Publish Date</th>
                                    <th>Date Created</th>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.prizes.map((prize, i) =>
                                    <tr key={i}>
                                        <td>
                                            <div className='img-thumbnail square-img'>
                                                <img src={prize.imageSmall} alt='Game 3 Prize'/>
                                            </div>
                                        </td>
                                        <td>{prize.title}</td>
                                        <td>Game {prize.funType.type}</td>
                                        <td>{moment(prize.publishDate).format("Do MMM YYYY")}</td>
                                        <td>{moment(prize.createDate).format("Do MMM YYYY")}</td>
                                        <td>
                                            {this.renderActionButton(prize.id, prize.funType.type)}
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Prize.propTypes = {
    prizes: array,
    dispatchLoadPrizes: func
};

const mapStateToProps = state => {
    return {
        prizes: state.prize.loadPrizesSuccessful
    }
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchLoadPrizes() {
            dispatch(loadPrizesRequest())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Prize)
