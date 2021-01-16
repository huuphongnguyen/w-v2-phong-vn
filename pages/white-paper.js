import Container from "../components/Container";
import { NextSeo } from "next-seo";

const url = "https://phong.vn/white-paper";
const title = "White Paper – PHONG FOUNDATION";
const description =
  "Một vài dòng giới thiệu về dự án PHONG FOUNDATION, những ý tưởng và khái niệm phía sau. Được viết bởi Nguyễn Hữu Phong";

export default function WhitePaper() {
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
        <h1 className="font-domainet text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          White-Paper
        </h1>
        <div className="text-black">
          Xây dựng bởi <strong>Nguyễn Hữu Phong</strong>.
          <br />
          Dùng để phát triển{" "}
          <span className="font-domainet">PHONG FOUNDATION</span>.
        </div>
        <div className=" text-blue-500 flex items-center space-x-1 my-2 p-1 rounded-md hover:bg-gray-200">
          <div>
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              ></path>
            </svg>
          </div>
          <a href="https://dl.dropbox.com/s/wl563216tuzqj6d/White-Paper-Update-20210116.pdf?dl=0">
            Tải về bản PDF
          </a>
        </div>
        <div className="text-black dark:text-white my-10 space-y-3 text-sm">
          <p>
            Mỗi người đều có thể tạo ra một cái gì đó đại diện cho con người của
            họ. Chúng ta có quyền và được tự do làm điều đó, và nó sẽ quyết định
            con người mà chúng ta sẽ trở thành - đôi khi nó không phải là điều
            chúng ta muốn ở thời kỳ ban đầu.
          </p>
          <h2 className="font-bold text-xl">/ Concept</h2>
          <p>
            Concept còn được hiểu là một khái niệm, một định nghĩa, một cách
            diễn đạt.
          </p>
          <p>
            Dưới góc độ ý kiến của một cá nhân, bất kỳ ai cũng đều có thể xây
            dựng cho bản thân một Concept. Tuy nhiên, nó cần phải phù hợp và
            khiến bản thân người tạo ra nó cảm thấy hạnh phúc và thỏa mãn trước
            khi nó được truyền tải đến mọi người. Một Concept nó có thể trải dài
            qua nhiều mặt - nhiều góc độ của người tạo ra nó, những điều mà họ
            muốn bản thân mình sẽ thích hợp nhất. Đôi khi một Concept được viết
            ra hoàn toàn phù hợp ở thời điểm ban đầu nhưng dần chính sự thay đổi
            về suy nghĩ - nhận thức - hay tư duy khiến cho Concept đó mất đi sự
            tự chủ từ chính người tạo ra và nó dần bị quên lãng. Trong một vài
            trường hợp thì Concept được chuyển giao cho một người có khả năng
            duy trì và phát triển theo đúng hướng mà người tạo ra nó mong muốn.
            Dẫu vậy, phần lớn trường hợp thì Concept đó thường bị dừng lại và
            được thay thế bởi một phiên bản khác tốt hơn.
          </p>
          <p>
            Concept thường được xây dựng dựa trên 3 yếu tố chính là Nhận Thức,
            Tầm Nhìn, và Cảm Nhận. Yếu tố thứ 4 chính là Cảm Xúc, yếu tố này
            không được chú trọng vào thời điểm ban đầu mà thường bị bỏ qua hoặc
            không ý thức được nó tồn tại. Cho đến một khoảng thời gian nhất
            định, yếu tố thứ 4 chính là điểm khiến cho 3 yếu tố xây dựng ban đầu
            bị lung lay và không còn được chú trọng. Khi một Concept được vững
            mạnh thì 4 yêu tố này luôn được kiểm soát một cách tương đối. Không
            thể kiểm soát chúng tuyệt đối trong toàn bộ thời gian bởi con người
            không được sinh ra để có thể làm được điều ấy.
          </p>
          <h3 className="font-bold">C / Nhận thức</h3>
          <p>
            Nhận thức là yếu tố được sử dụng ban đầu, khó có thể nắm giữ và sử
            dụng nhất bởi nó thường tạo ra một sự nhầm lãn nhất định. Nhận thức
            không thể được chứng minh và nó chỉ có một chiều nhất định trong
            xuyên suốt quá trình vận hành của mình. Nhân thức được hình thành ở
            một thời điểm nào đó trong quá trình phát triển của con người, nghĩa
            là khi chúng ta thoát khỏi giai đoạn vô tư và trẻ con. Nhận thức
            trong thuở sơ khai sẽ không thể được dùng một cách tốt nhất bởi nó
            không khác gì một tờ giấy trắng. Trong suốt quá trình phát triển -
            học tập - trao dồi - được giảng dạy, nhận thức sẽ dần được hình
            thành và tờ giấy trắng sẽ được viết những dòng đầu tiên. Tuy nhiên,
            nhận thức sẽ phải thay đổi liên tục bởi nó không giống nhau ở từng
            thời điểm mà được chỉnh sửa liên tục trong từng giai đoạn của con
            người. Điểm đặc biệt ở nhận thức là nó không có một chuẩn mực hay
            một đáp án chính xác hoặc một khuôn khổ nhất định nào mà chỉ được so
            sánh - đối chiếu - và tự chấp nhận.
          </p>
          <p>
            Nhận thức trong Concept là một yếu tố đảm bảo Concept luôn theo đúng
            chuẩn mực xã hội và những điều mà phần lớn con người muốn hướng đến,
            muốn cảm nhận, và muốn đắm chìm vào nó. Concept bị ảnh hưởng nhiều
            bởi yếu tố Nhận Thức trong suốt quá trình ban đầu nó hình thành và
            sẽ là yếu tố quan trọng nhất quyết định Concept đó sẽ đi theo hướng
            nào và lựa chọn con đường ra sao.
          </p>
          <p>
            Nhận thức trong Concept được phát triển dựa vào 2 móc câu chính là
            Tính hợp pháp và Tính chấp thuận, và móc câu phụ là Tính linh hoạt.
          </p>
          <h4 className="text-xs font-bold">
            C / NT / (Main Hook) Tính hợp pháp
          </h4>
          <p>
            Tính Hợp Pháp là móc câu phải luôn được dùng để giữ Yếu tố Nhận Thức
            trong khuôn khổ. Một trong những vấn đề nguy hiểm nhất chính là việc
            để cho Nhận Thức mất sợi dây kết nối với với móc câu này. Một khi
            Yếu tố Nhận Thức không được kiểm soát bởi Tính Hợp Pháp, sẽ rất
            nhiều hướng đi được hình thành và khiến cho Concept đi theo một
            chiều hướng hoàn toàn sai lệch không chỉ ở góc độ vĩ mô mà thỉnh
            thoảng xảy ra ở mức vi mô. Trong một số trường hợp, bản thân người
            xây dựng Concept không nhận ra hoặc không kiểm soát được các yếu tố
            sai lệch bên trong phạm vi vi mô của Nhận Thức mà Tính Hợp Pháp
            không thể can thiệp. Sau một khoảng thời gian dài, khi được phát
            hiện, sự mất kiểm soát được hình thành từ việc Yếu tố Nhận Thức mất
            liên lạc với Tính hợp pháp sẽ hiện hành, và nó sẽ được xem như một
            tế bào ung thư rất khó để chữa trị và nguy cơ khiến cho toàn bộ
            Concept bị phá hủy là rất dễ xảy ra.
          </p>
          <h4 className="text-xs font-bold">
            C / NT / (Main Hook) Tính chấp thuận
          </h4>
          <p>
            Tính Chấp Thuận là móc câu đảm bảo Yếu tố Nhận Thức được công nhận
            qua các quá trình xây dựng và cải thiện. Móc câu này đảm bảo Yếu tố
            Nhận Thức luôn được cập nhật liên tục thay vì bị trì hoãn ở một định
            kiến nào đó hay một suy nghĩ nào đó.
          </p>
          <p>
            Tính Chấp Thuận sẽ cần phải được hình thành ở hai phía bao gồm chủ
            quan và khách quan. Tuy nhiên, trong phần lớn trường hợp, để đảm bảo
            tính bền vững và không bị tác động xấu, móc câu này nên chỉ được xem
            xét trên mức độ chủ quan. Khi Yếu tố Nhận Thức được xây dựng từ móc
            câu Tính Chấp Thuận trên cơ sở chủ quan sẽ giúp cho nó được tự chủ
            khả năng xây dựng mà không quá lệ thuộc vào các yếu tố bên ngoài,
            chính vì điều này giúp cho tính bền vững và khả năng linh hoạt dễ
            dàng được kiểm soát. Khả năng Linh Hoạt sẽ được liệt kê trong phần
            kế tiếp và nó có một mối liên hệ mật thiết với Tính Chấp Thuận ở
            luận điểm Chủ Quan. Về mặt khách quan, Tính Chấp Thuận sẽ khó có thể
            được xây dựng theo chiếu hướng mong muốn nhưng nó cũng phải được xem
            xét ở góc độ này cho dù là nhỏ nhất đi nữa. Trong phần lớn quá trình
            phát triển, Yếu tố Nhận Thức sẽ luôn được cập nhật và chỉnh sửa để
            phù hợp với con người và môi trường xung quanh. Do đó, Tính Chấp
            Thuận sẽ đảm nhận vai trò như một luật lệ từ hướng Khách Quan lẫn
            Chủ Quan xem xét và kiểm soát yếu tố Nhận Thức không làm cho nó quá
            lệch lạc.
          </p>
          <h4 className="text-xs font-bold">
            C / NT / (Support Hook) Tính linh hoạt
          </h4>
          <p>
            Tính linh hoạt là được xem xét như là một móc câu hỗ trợ (support
            hook) trong việc xây dựng Yếu tố Nhận Thức. Tính linh hoạt phải luôn
            được đảm bảo hỗ trợ liên tục hai móc câu chính trong quá trình phát
            triển Yếu tố Nhận Thức bởi luôn luôn sẽ xảy ra các sự xung đột, sai
            trái, tự huyễn hoặc, tự chấp thuận (phần lớn những yếu tố này xuất
            phát từ sự mất kiểm soát trong phạm vi vi mô của Tính hợp pháp và
            Tính Chấp Thuận). Tính linh hoạt lúc này sẽ đảm bảo có nhiều hướng
            đi và nhiều lựa chọn để giảm tải áp lực cho Yếu tố Nhận Thức. Khi áp
            lực được giảm tải bởi nhiều sự lựa chọn và khả năng lựa chọn được mở
            rộng, hai móc câu chính sẽ được xem xét kỹ lưỡng hơn và giảm thiểu
            tối đa khả năng sản sinh ra những lỗ hổng mà chúng ta có thể xem là
            các tế bào ung thư bên trong phạm vi vi mô khó phát hiện hoặc bị bỏ
            qua.
          </p>
          <h3 className="font-bold">C / Tầm nhìn</h3>
          <p>
            Tầm nhìn là yếu tố khó xác định và kiểm soát nhất. Nói một cách đơn
            giản thì Yếu tố Tầm Nhìn chỉ có thể được đánh giá và xác định khi
            mọi giao đoạn của quá trình phát triển đã diễn ra một thời gian dài.
            Tất nhiên, nó cũng không đảm bảo sự chính xác hay phù hợp tuyệt đối
            bởi nó chịu sự tác động liên tục và có thể thay đổi vào từng thời
            điểm, từng tình huống, hoặc bị ảnh hưởng bởi một sự kiện nào đó
            không lường trước. Phần lớn thời gian, Yếu tố tầm nhìn sẽ được hình
            thành liên tục bởi người xây dựng và cũng sẽ được chỉnh sửa - cập
            nhật liên tục ở mức vi mô nhưng vẫn giữ cốt lõi ở mức vĩ mô.
          </p>
          <p>
            Tầm Nhìn là một yếu tố có thể coi là một kết luận từ nhiều dữ liệu
            được tổng hợp bởi các yếu tố khác trong Concept kết hợp với khả năng
            và năng lực của người xây dựng. Yếu tố này không nên được đề cao quá
            mức nhưng bắt buộc phải có để đảm bảo Tính Nhận Thức có một kim chỉ
            nam hướng đến. Nếu như Yếu tố Tầm Nhìn không được sử dụng thì Yếu tố
            Nhận Thức sẽ giống như một con tàu trôi vô định giữa đại đương. Yếu
            tố Tầm Nhìn không đảm bảo chắc chắn rằng toàn bộ Concept sẽ đi đến
            đích đến cuối cùng hay sẽ thành công vượt bậc, nó chỉ đảm bảo
            Concept biết mình nên đi về hướng nào và có một chuẩn mực để giữ
            những yếu tố khác hoạt động.
          </p>
          <h3 className="font-bold">C / Cảm nhận</h3>
          <p>
            Yếu tố cảm nhận được hình thành và xây dựng bởi hai yếu tố nền là
            Trải nghiệm người dùng (User Experience) và Trải nghiệm thử nghiệm
            (Trial Experience). Hai yếu tố nền này là nền móng giúp xây dựng Yếu
            tố Cảm Nhận đi đúng hướng mong muốn. Điều cần làm là phải tạo ra một
            vòng lặp liên hồi giữa hai yếu tố nền này để có thể đảm bảo Yếu tố
            Cảm Nhận được cập nhật xuyên suốt quá trình phát triển.
          </p>
          <h4 className="text-xs font-bold">
            C / CN / Trải nghiệm người dùng (User Experience)
          </h4>
          <p>
            Trải nghiệm người dùng (User Experience) là một khái niệm không quá
            mới mẻ được hình thành rõ ràng nhất trong những năm gần đây đặc biệt
            trong lĩnh vực thiết kế và phát triển công nghệ. Dần dần trong quá
            trình phát triển thần kỳ ấy của con người, Trải nghiệm người dùng
            dần trở thành một chìa khóa hay còn gọi là điểm quyết định giúp một
            mục tiêu nào đó được sự chấp thuận cao hơn. Một trong những ví dụ về
            việc áp dụng các nghiên cứu và đặt User Experience làm trọng tâm của
            mọi thứ là Apple by Steve Jobs. Khi Trải nghiệm người dùng trở thành
            một yếu tố được đặt lên hàng đầu thì nó sẽ luôn là một kim chỉ nam
            đúng đắng cho bất kỳ sản phẩm / dịch vụ / lý tưởng hay bất kỳ thứ gì
            khác có mục tiêu là con người. Con người luôn đặt bản thân nói chung
            và cảm nhận bản thân nói riêng làm điểm tiếp xúc đầu tiên trong việc
            tương tác hoạt động. Chính vì điều này mà Trải nghiệm người dùng là
            điểm nhỏ nhoi nhưng có thể coi là quan trọng nhất.
          </p>
          <p>
            Quay trở lại với yếu tố nền này, Trải nghiệm người dùng phải luôn
            được đặc lên hàng đầu trong quá trình xây dựng Yếu tố cảm nhận. Tất
            nhiên nó sẽ nằm trên yếu tố Trải nghiệm thử nghiệm. Một vòng lặp
            đứng sẽ được hình thành giữa khoảng hở của 2 yếu tố nền này.
          </p>
          <h4 className="text-xs font-bold">
            C / CN / Trải nghiệm thử nghiệm (Trial Experience)
          </h4>
          <p>
            Trải nghiệm thử nghiệm (Trial Experience) là một chiều song song của
            Trải nghiệm người dùng. Yếu tố nền này sẽ đóng vai trò như một sân
            sau và được thử nghiệm nội bộ bởi những người xây dựng. Toàn bộ các
            yếu tố liên quan được đưa lên trên tầng nền bên trên là Trải nghiệm
            người dùng đều được đồng bộ với tầng dưới là Trải nghiệm thử nghiệm.
            Trong một số khía cạnh, yếu tố này sẽ bao gồm thêm rất nhiều điều
            mới hoặc thử nghiệm trước khi nó được chấp thuận và được đẩy lên
            tầng trên.
          </p>
          <p>
            Vòng lặp được hình thành giữa hai tầng yếu tố nền sẽ được cập nhật -
            chỉnh sửa liên tục để đảm bảo mọi thứ luôn phải được hoàn hảo nhất
            trên góc độ Nhận Thức và Tầm nhìn của người xây dựng.
          </p>
          <h3 className="font-bold">C / Cảm xúc</h3>
          <p>
            Yếu tố Cảm Xúc là yếu tố đặc biệt nhất trong quá trình hình thành và
            phát triển Concept bởi nó thường bị bỏ qua hoặc không được chú trọng
            trong thời điểm ban đầu. Tuy nhiên, khi Concept diễn ra được một
            khoảng thời gian nhất định hoặc trải qua các giai đoạn khó khăn với
            nhiều lỗ hổng trong Yếu tố Nhận Thức hoặc Yếu tố Tầm Nhìn bị ảnh
            hưởng trầm trọng bỏi các yếu tố chủ quan, yếu tố Cảm Xúc sẽ bắt đầu
            phát huy khả năng của nó và dần được phát hiện ra sự tồn tại của nó
            bởi người xây dựng. Thực tế thì yếu tố này đã tồn tại từ thuở sơ
            khai, trước cả khi Yếu tố Nhận Thức hay Yếu tố Tầm Nhìn được sinh
            ra, chỉ là người xây dựng không nhìn thấy hoặc quên mất sự tồn tại
            của nó.
          </p>
          <p>
            Khi Yếu tố Cảm Xúc dần hiện hình rõ ràng và trở thành một cơn sóng
            ngược - đôi khi là sóng thuận chiều, người xây dựng Concept sẽ rất
            dễ dàng buông xuôi hoặc cố gắng trong tuyệt vọng và phó mặt cho yếu
            tố này kiểm soát. Vào thời điểm đó thì Yếu tố Cảm Xúc sẽ tạo ra một
            vòng lặp luân hồi không điểm dừng để giảm giữ người xây dựng và
            khiến họ mất dần sức lực. Đến một thời điểm nào đó, người xây dựng
            sẽ chết trong vòng lặp đó hoặc từ bỏ Concept để thoát khỏi vòng lặp
            ấy. Tuy nhiên, nếu thoát khỏi ra vòng lặp ấy mà từ bỏ đi Concept thì
            người xây dựng đã hoàn toàn thất bại.
          </p>
          <p>
            Yếu tố cảm xúc giống như một tấm gươn phản chiếu lại chính người xây
            dựng và khiến bản thân người xây dựng bị trói buộc trong chính con
            người họ khiến họ dần mất kiểm soát vào việc xây dựng Concept. Bản
            thân người xây dựng phải ý thức được điều này, một khi ý thức được
            điều này thì họ sẽ có thể thoát khỏi vòng lặp mà Yếu tố Cảm Xúc tạo
            ra, họ mới có thể bẻ gãy vòng lặp ấy và thoát khỏi nó nhưng vẫn giữ
            được sự tồn tại của Concept. Cách duy nhất để phát hủy vòng lặp là
            bẻ gãy ngay đoạn tiếp xúc, đó chính là quy tắc và là con đường duy
            nhất.
          </p>
        </div>
      </div>
    </Container>
  );
}
