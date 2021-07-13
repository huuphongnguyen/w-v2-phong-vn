import Container from "../components/Container";
import { NextSeo } from "next-seo";
import PhongSignature from "../components/elements/PhongSignature";
import { CopyToClipboard } from "react-copy-to-clipboard";
import NextImage from "next/image";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import reacthottoast, { Toaster } from "react-hot-toast";

const url = "https://phong.vn/contact";
const title = "Liên hệ – PHONG FOUNDATION";
const description =
  "Những thông tin liên hệ liên quan đển PHONG FOUNDATION. Bạn có thể liên hệ với chúng tôi thông qua email hoặc các mạng xã hội.";

export default function Contact() {
  const CopySuccessful = () => reacthottoast.success("Copied");

  return (
    <Container>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <div className="flex flex-col mx-auto bg-gray-100 dark:bg-gray-900 items-start max-w-4xl my-2 md:my-10 p-5 md:p-10 rounded-xl">
        <div className="flex space-x-2">
          <span className="text-3xl font-domainet md:text-5xl text-black dark:text-white">
            /
          </span>
          <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Liên hệ
          </h1>
        </div>
        <div className="text-black dark:text-white mb-10 space-y-3 text-sm leading-7">
          <p>
            Bạn có thể liên hệ mình qua{" "}
            <a
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-400  to-blue-500 text-md xl font-black"
              href="mailto:touch@phong.vn"
            >
              Email
            </a>
            ,{" "}
            <a
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-md xl font-black"
              href="sms://huuphong.nguyen@icloud.com.&body=Hello"
            >
              iMessage
            </a>{" "}
            nếu bạn sử dụng các thiết bị của Apple,{" "}
            <span
              className="cursor-pointer"
              onClick={() =>
                toast(
                  <div>
                    <h3 className="text-xl font-bold font-carbonbold text-black">
                      Session
                    </h3>
                    <p className="text-sm text-gray-500">
                      Session là một trong những ứng dụng chat ẩn danh bảo mật
                      nhất hiện nay. Tìm hiểu và tải ứng dụng tại{" "}
                      <a
                        href=""
                        target="_blank"
                        className="font-bold text-blue-500"
                      >
                        đây
                      </a>
                      .
                    </p>
                    <div>
                      <h4 className="font-carbonbold text-bold uppercase text-black">
                        Session ID:
                      </h4>
                      <p className="text-blue-500 font-carbonbold text-sm flex">
                        051197cf6e06d5d6ab60b2a6747f2c
                        <br />
                        93723bd39f2a11209d39467c38aa48494156
                      </p>
                      <CopyToClipboard text="051197cf6e06d5d6ab60b2a6747f2c93723bd39f2a11209d39467c38aa48494156">
                        <button
                          className="my-2 px-2 py-1 bg-gray-200 rounded-xl text-black uppercase font-carbonbold focus:outline-none transform transition-all active:scale-90"
                          onClick={() => CopySuccessful()}
                        >
                          Copy Session ID
                        </button>
                      </CopyToClipboard>
                      <div className=" w-full-80">
                        <img src="/images/session-contact-phong-vn-qrcode.jpg" />
                      </div>
                      <Toaster position="top-center" reverseOrder={false} />
                    </div>
                  </div>
                )
              }
            >
              <a className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400  to-purple-500 text-md xl font-black">
                Session
              </a>
            </span>{" "}
            nếu bạn không muốn mình biết bạn là ai (trong trường hợp bạn muốn ẩn
            danh để đảm bảo an toàn). Hãy cứ thoải mái và vui vẻ nhắn bất kỳ
            điều gì với mình nếu bạn gặp phải vấn đề gì đó mà bạn nghĩ mình có
            thể giúp bạn. Mình sẽ giúp bằng tất cả những gì mình biết.
          </p>
          <ToastContainer
            position="top-left"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={true}
          />
          <p className="mt-4 leading-8">
            Ngoài ra, bạn có thể liên hệ với mình thông qua các mạng xã hội, bạn
            chỉ cần inbox trực tiếp, mình sẽ cố gắng kiểm tra tin nhắn khi có
            thể. Đây là những mạng xã hội mà mình đang sử dụng:{" "}
            <a
              className="font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 p-1 rounded-lg"
              href="https://instagram.com/isnhp"
            >
              <p className="inline-flex items-center pl-7">
                <img
                  className="flex items-center absolute w-6 h-6 mr-1 transform -translate-x-6 translate-y-1"
                  src="/icons/instagram.svg"
                />
                Instagram
              </p>
            </a>{" "}
            cho mục đích riêng tư (mình thường xuyên sử dụng Instagram để xem
            hình, đăng mấy thứ mà mình thích và để đồng bộ stories sang các nên
            tảng khác thôi. Hiện tại chỉ có 1 người mình chấp nhận follower [một
            người cho mình rất nhiều cảm hứng và động lực]) -{" "}
            <a
              className="font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 p-1 rounded-lg"
              href="https://www.facebook.com/thereisadonutonthetable/"
            >
              <p className="inline-flex items-center pl-7">
                <img
                  className="flex items-center absolute w-6 h-6 mr-1 transform -translate-x-6 translate-y-1"
                  src="/icons/facebook.svg"
                />
                Facebook
              </p>
            </a>{" "}
            cho bạn bè, hóng hớt -{" "}
            <a
              className="font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 p-1 rounded-lg"
              href="https://snapchat.com/isnhp"
            >
              <p className="inline-flex items-center pl-8">
                <img
                  className=" absolute w-6 h-6 mr-1 transform -translate-x-7"
                  src="/icons/snapchat.svg"
                />
                Snapchat
              </p>
            </a>{" "}
            để Netflix & Chill *jkd* -{" "}
            <a
              className="font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 p-1 rounded-lg"
              href="https://telegram.com/isnhp"
            >
              <p className="inline-flex items-center pl-8">
                <img
                  className=" absolute w-5 h-5 mr-1 transform -translate-x-6"
                  src="/icons/telegram.svg"
                />
                Telegram
              </p>
            </a>{" "}
            để làm việc *I mean "works" - và{" "}
            <a
              className="font-bold bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 p-1 rounded-lg"
              href="https://twitter.com/isnhp"
            >
              <p className="inline-flex items-center pl-8">
                <img
                  className=" absolute w-5 h-5 mr-1 transform -translate-x-6"
                  src="/icons/twitter.svg"
                />
                Twitter
              </p>
            </a>{" "}
            để cập nhật thông tin từ những người rất rất giỏi.
          </p>
        </div>
        <div className="transform scale-75 md:scale-100 origin-top-left">
          <PhongSignature classsvg="stroke-current text-black dark:text-white" />
        </div>
      </div>
    </Container>
  );
}
