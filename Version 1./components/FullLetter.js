import NextLink from "next/link";
import InternalLink from "../components/elements/InternalLink";
import PhongSignature from "../components/elements/PhongSignature";
import { UserCircle } from "../components/icons/HeroIcons";

export default function FullLetter() {
  return (
    <>
      <div className="text-black dark:text-white my-10 space-y-3 text-sm">
        <p>
          Xin chào, mình là <InternalLink href="/phong">Phong</InternalLink>, là
          người xây dựng, phát triển, và thiết kế cho{" "}
          <strong>PHONG FOUNDATION</strong>. Đây là được mình xem như là một
          trung tâm phát triển và xây dựng những gì mình làm trong xuyên suốt
          quá trình mở rộng khả năng của mình.
        </p>
        <p>
          Mình là một người sống hướng nội và không thật sự quá tốt trong việc
          thể hiện và bộc lộ bản thân để giao tiếp với những người xung quanh.
          Chính vì lý do đó, mình muốn xây dựng một điều gì đó xung quanh cuộc
          sống của mình, từ đó như một sợi dây kết nối với mọi người.
        </p>
        <p>
          Bản thân mỗi người chúng ta sinh ra đã là một điều rất rất may mắn mà
          thượng đế đã ban tặng. Mình nghĩ bất kỳ ai, bất kỳ cá nhân nào cũng có
          quyền xây dựng cho bản thân một khái niệm, một lý tưởng, một điều gì
          đó mà nó thể hiện chính xác con người họ. Năm nay mình 22+1, bản thân
          mình đang trải qua một giai đoạn có thể coi là một vòng lẩn quẩn của
          cuộc đời. Tức là chúng ta (ít nhất những người trong cùng độ tuổi này
          mà mình biết) cố gắng thoát khỏi vùng an toàn, cố gắng loại bỏ đi sự
          trì hoãn, hay ít nhất là cố gắng vượt ra khỏi ranh giới mà bản thân đã
          ở quá lâu. Đó thật sự là một giai đoạn khó khăn và nhiều thử thách,
          nhưng ai rồi cũng sẽ vượt qua bằng cách này hay cách khác, và đây sẽ
          là điều đầu tiên mà mình cần làm để biết mình đang ở đâu, có những gì
          và đã thất bại như thế nào. Nó có thể coi như là một cuốn nhất ký vậy,
          và mình muốn viết nó ra.
        </p>
        <p>Và đây là front-page cho nó.</p>
      </div>
      <div className="transform scale-75 md:scale-100 origin-top-left">
        <PhongSignature classsvg="stroke-current text-black dark:text-white" />
      </div>
      <NextLink href="/phong">
        <a>
          <div className="mt-4">
            <p className="text-black dark:text-white text-sm">
              Nguyễn Hữu Phong.
            </p>
            <div className="text-sm text-black dark:text-white inline-flex items-center p-2 space-x-1 -ml-2 mt-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              <UserCircle classNameSync="text-black dark:text-white w-7 h-7 mr-1" />
              <p>Đọc thêm xíu nữa về mình.</p>
            </div>
          </div>
        </a>
      </NextLink>
    </>
  );
}
