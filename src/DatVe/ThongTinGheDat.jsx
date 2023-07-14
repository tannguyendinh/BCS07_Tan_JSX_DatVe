import React, { Component } from "react";

import { connect } from "react-redux";
// import { HUY_GHE } from "../redux/types/DatVeType";
import { huyGheAction } from "../redux/actions/DatVeActions";

class ThongTinGheDat extends Component {
  render() {
    return (
      <div>
        <div className="fs35 text-danger mt-2 text-center">
          Danh sách ghế bạn chọn
        </div>

        <div className="mt-5">
          <button className="gheDuocChon me-3"></button>
          <span className="text-light fs20 ">Ghế Đã Đặt</span>
          <br />
          <button className="gheDangChon me-3"></button>
          <span className="text-light fs20">Ghế Đang Chọn</span>
          <br />
          <button className="ghe ms-0 me-3"></button>
          <span className="text-light fs20">Ghế Trống</span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light fs20 ">
                <th>Số Ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning fs-5">
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>

                    <td>
                      <i
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                        className="fa-solid fa-xmark"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-white fs-5">
                <td></td>
                <td>Tổng tiền</td>
                <td >
                  {this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { danhSachGheDangDat: state.datVe.danhSachGheDangDat };
};

export default connect(mapStateToProps)(ThongTinGheDat);
