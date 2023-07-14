import "./BaiTapBookingTicket.css";
import ThongTinGheDat from "./ThongTinGheDat";
import danhSachGhe from "./../DaTa/danhSachGhe.json";
import HangGhe from "./HangGhe";



import React, { Component, Fragment } from "react";

export default class DatVe extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };
  render() {
    return (
      <div
        className="font"
        style={{
          position: "fixed ",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed ",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="container-fluid ">
            <div className="row">
              {/* bên trái đặt vé  */}
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className=" fs30 mt-3 text-light">Màn Hình</div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
              {this.renderHangGhe()}

              </div>


              {/* bên phải show thông tin vé */}
              <div className="col-4 ">
                <ThongTinGheDat />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
