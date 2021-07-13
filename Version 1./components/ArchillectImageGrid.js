import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Delayed from "../components/features/Delayed";
import DropInfoWindow from "../components/elements/DropInfoWindow";
import ExternalLink from "./elements/ExternalLink";
import TenMinutesCounter from "./elements/TenMinutesCounter";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ArchillectImageGrid({ data }) {
  return (
    <div>
      <div>
        <TenMinutesCounter />
        <p className="text-black dark:text-white text-xs">
          Do sử dụng API được thiết kế riêng. Cập nhật sẽ có độ trễ nhất định so
          với máy chủ của Archillect trong một vài trường hợp.
        </p>
        <div className="text-black dark:text-white text-xl font-carbonbold flex items-center space-x-2">
          <p>BLOCKS: </p>
          <p>
            {data[0].id} - {data[49].id}
          </p>
        </div>
      </div>

      <Delayed waitBeforeShow={500}>
        <Wrapper>
          {data.map((item, index) => (
            <div key={index}>
              <ElementWrapper
                onClick={() =>
                  toast(
                    <div>
                      <h3 className="text-2xl font-bold font-carbonbold text-black">
                        BLOCK: {item.id}
                      </h3>
                      <img src={item.imageSource} />
                      <p className="text-black text-xl font-carbonbold">
                        References:
                        <br />
                        <div className="flex">
                          {item.sourceLinks.map((link, index) => (
                            <div className="flex">
                              <a
                                key={index}
                                className="inline-flex text-blue-500 w-full-80 mr-2"
                                href={link}
                                target="_blank"
                              >
                                [{index}]
                              </a>
                            </div>
                          ))}
                        </div>
                      </p>
                    </div>
                  )
                }
              >
                <ImageProject>
                  <Image
                    className="z-10 object-cover transform hover:scale-105 cursor-pointer"
                    src={item.imageSource}
                    quality="50"
                    priority="true"
                    layout="fill"
                  />
                </ImageProject>
              </ElementWrapper>
            </div>
          ))}
        </Wrapper>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </Delayed>
      <div className="mt-4">
        <p className="text-black dark:text-white text-xs leading-5">
          Gồm 50 Block [hình ảnh hoặc ảnh động] mới nhất của Archillect. Mỗi 10
          phút Archillect sẽ cập nhật một Block mới.
          <br />{" "}
          <DropInfoWindow
            className="outline-none"
            namebutton="Cách hoạt động của Archillect"
          >
            <div className="md:flex-col space-y-2 text-xs">
              <p>
                Archillect là một AI được thiết kế với những thuật toán phức tạp
                trong đó bao gồm việc cô được cung cấp một danh sách những từ
                khóa nhất định để tìm khiếm và khám phá chúng trên Internet. Tuy
                nhiên, thay vì đăng trực tiếp những thứ cố tìm được từ kết quả
                tìm kiếm, cô ấy sẽ đi sâu vào từng kết quả kiếm được giữa các
                trang và bài đăng liên quan giữa những mục khác nhau như: hình
                ảnh, poster, các mục hiển thị,... Sau đó, Archillect tạo ra một
                bản đồ cấu trúc sự liên quan giữa những điều cô ấy tìm thấy, và
                từ đó cô có thể tìm những điều tích cực bên trong bản đồ này.
                Trong suốt quá trình này, Archillect cũng sẽ liên tục cập nhật
                và học những chủ đề liên quan được thiết lập trong cấu trúc mà
                cô xây dựng.
              </p>

              <p>
                Các từ khóa, xu hướng, sự liên quan đều được Archillect tự cân
                bằng và tự giới hạn phạm vi chú ý. Điều này tương tự với cách
                con người nhận thức và hoạt động não bộ. Mọi thứ đều được tự
                động hóa và tự chủ bởi cô. Chính vì điều này khiến cho những lựa
                chọn của Archillect trở nên đặc biệt và có phần lạ lùng.
              </p>
              <br />
              <ExternalLink href="https://archillect.com/about">
                Tìm hiểu thêm tại website chính của Archillect
              </ExternalLink>
            </div>
          </DropInfoWindow>{" "}
          được xử lý hoàn toàn trên máy chủ của cô và được đồng bộ với website
          này thông qua Unofficial API được PHONG FOUNDATION thiết kế riêng.{" "}
        </p>
      </div>
    </div>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  grid-gap: 0px;
  z-index: 10;
`;

const ElementWrapper = styled.div`
  position: relative;

  ::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const ImageProject = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 50;
`;
