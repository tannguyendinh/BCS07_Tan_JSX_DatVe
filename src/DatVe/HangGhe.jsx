// rcc
import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/DatVeActions";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      // ghế đã đc đặt
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      // xét ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        gheDangDat=>gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
           this.props.datGhe(ghe)
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return <span className="rowNumber  ">{hang.soGhe}</span>;
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    // console.log(connect);
    return (
      <div className="text-white text-left me-5 mt-1 ">
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.datVe.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch)=>{
  return{
    datGhe: (ghe) =>{
      dispatch(datGheAction(ghe))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe);
