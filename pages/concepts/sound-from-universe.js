import Container from "../../components/Container";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import {
  Air,
  ArrowUpRight,
  Clipboard,
  CloudDownload,
  Edit,
  File,
  Inbox,
  Leaf,
  Pin,
  Telescope,
  VictoryHand,
} from "akar-icons";
import NextImage from "next/image";
import ExternalLink from "../../components/elements/ExternalLink";
import CallOut from "../../components/elements/block/CallOut";
import Paragraph from "../../components/elements/block/Paragraph";
import Quote from "../../components/elements/block/Quote";
import Heading1 from "../../components/elements/block/Heading1";
import Heading2 from "../../components/elements/block/Heading2";
import QuotePeople from "../../components/elements/block/QuotePeople";

export default function SoundFromUniverse() {
  const seotitle = `'Sound from Universe'`;
  const seodescrip = `Sound from Universe là một khái niệm trong việc hình thành và xây dựng suy nghĩ của não bộ theo một chiều hướng tích cực hơn. Được xây dựng trên các định luật và quy tắc nổi tiếng về suy nghĩ, và được tinh chỉnh cho phù hợp hơn với Phong`;
  const seourl = `https://phong.vn/concepts/sound-from-universe`;
  const seopreviewimg =
    "/static/images/dispo-la-gi-tai-sao-minh-thich-dispo/dispo-la-gi-tai-sao-minh-thich-dispo-feature-img.png";

  const bannerImagesData = [
    "/static/images/sound-from-universe/sound-from-universe-banner-img1.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img2.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img3.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img4.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img5.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img6.gif",
  ];

  return (
    <Container>
      <NextSeo
        title={seotitle}
        description={seodescrip}
        canonical={seourl}
        openGraph={{
          seotitle,
          seodescrip,
          seourl,
          images: [
            {
              url: seopreviewimg,
              alt: seotitle,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://phong.vn/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="space-y-2 border_dash_animated dark:border_dash_animated_dark">
          <div>
            <h1 className="text-2xl font-bold uppercase font-carbon-bold text-black dark:text-white">
              'Sound from Universe'
            </h1>
            <p className="text-sm text-black dark:text-white">
              Một khái niệm trong việc hình thành và xây dựng suy nghĩ của não
              bộ theo một chiều hướng tích cực hơn. Được xây dựng trên các định
              luật và quy tắc về suy nghĩ và nhận thức, được tinh chỉnh cho phù
              hợp hơn với Phong
            </p>
          </div>
          <div>
            <div className="grid grid-cols-6 my-4">
              {bannerImagesData.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-w-1 aspect-h-1">
                    <NextImage
                      src={image}
                      layout="fill"
                      className="object-cover"
                      quality={50}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-black dark:text-white grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="">
              <a href="#" target="_blank">
                <div className="flex py-1 items-center text-sm group">
                  <CloudDownload className="mr-1" size={22} />
                  Download PDF (available when done)
                  <ArrowUpRight
                    className="mr-1 opacity-0 group-hover:opacity-100"
                    size={22}
                  />
                </div>
              </a>
              <a
                href="https://www.notion.so/isnhp/Sound-from-Universe-580bc4fad2dd48e882fe3bff6e16f840"
                target="_blank"
              >
                <div className="flex py-1 items-center text-sm group">
                  <Inbox className="mr-1" size={22} />
                  Read on Notion
                  <ArrowUpRight
                    className="mr-1 opacity-0 group-hover:opacity-100"
                    size={22}
                  />
                </div>
              </a>
              <a
                href="https://github.com/huuphongnguyen/phong.vn/blob/main/pages/concepts/sound-from-universe.js"
                target="_blank"
              >
                <div className="flex py-1 items-center text-sm group">
                  <Edit className="mr-1" size={22} />
                  Edit on Github
                  <ArrowUpRight
                    className="mr-1 opacity-0 group-hover:opacity-100"
                    size={22}
                  />
                </div>
              </a>
              <div className="flex py-1 items-center text-sm">
                <Air className="mr-1" size={22} />
                Status: Đang viết
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Pin className="mr-1" size={22} />
                Published at: 2021-02-15
              </div>
              <div className="flex items-center text-sm">
                <File className="mr-1" size={22} />
                Written by: Nguyễn Hữu Phong
              </div>
              <div className="flex items-center text-sm">
                <Telescope className="mr-1" size={22} />
                Experiment by: Nguyễn Hữu Phong
              </div>
              <div className="flex items-center text-sm">
                <Clipboard className="mr-1" size={22} />
                Review by: Nguyễn Hữu Phong
              </div>
            </div>
          </div>
        </div>

        <div className="text-black dark:text-white">
          <Heading1>Giới thiệu</Heading1>
          <Paragraph>
            Sound from Universe là một khái niệm Phong muốn phát triển dựa trên
            những khái niệm của Luật Hấp Dẫn (Laws of Attraction - New thought).
            Đây là một bộ quy tắc các nguyên lý giúp sử dụng bộ não một cách
            thuần thục hơn. Sound from Universe được tinh chỉnh và tái khái niệm
            giúp phù hợp hơn với những người bắt đầu hoặc chưa từng tiếp xúc
            loại khái niệm này. Việc viết ra những quy tắc , khái niệm, dự đoán,
            trải nghiệm của Sound from Universe được thực hiện vào cùng một thời
            điểm bởi tác giá.
          </Paragraph>
          <Heading1>Tóm lược</Heading1>
          <Paragraph>
            Từ lâu, bản thân Phong từng có một suy nghĩ về việc não bộ chúng ta
            được kiểm soát hoặc được tiếp nhận thông tin từ một nguồn phát nào
            đó bên ngoài trái đất, hoặc bên trong lòng trái đất. Đó là suy nghĩ
            của Phong, Phong vẫn chưa định hình chính xác được nguồn phát đó đến
            từ đâu, nó đến từ vũ trụ xa xôi bên ngoài kia - nơi mà Phong ngước
            nhìn lên, hay bên dưới lòng đất nơi mà chúng ta nhìn xuống, hay
            nguồn phát nằm trong chính bên trong não bộ của chúng ta. Đến thời
            điểm hiện tại, khi có thời gian tìm hiểu sâu hơn vào từng ngóc
            ngách, cũng như các khái niệm liên quan và nổi bật là{" "}
            <ExternalLink
              href="https://en.wikipedia.org/wiki/Law_of_attraction_(New_Thought)"
              colortexthover="rainbow_text_hover"
            >
              Laws of Attraction
            </ExternalLink>
            , những suy nghĩ mà Phong có nó không phải là đầu tiên, đã có rất
            nhiều người có suy nghĩ này và họ đã phát triển nó lên ở một tầm rất
            cao nơi họ có thể kiểm soát được não bộ và tạo ra một thứ gọi là
            Luật Hấp Dẫn hay Sự Hấp Dẫn giúp tác động lên những bộ não khác xung
            quanh. Cũng vì lý do này, Phong muốn thử trải nghiệm nó một cách có
            quy tắc hơn và khái niệm hơn khi viết lại toàn bộ quá trình Phong
            thực hiện, cũng như những chỉnh sửa liên quan và gọi nó là "Sound
            from Universe".
          </Paragraph>
          <Quote>
            Nếu bất cứ khi nào bạn đang làm một điều gì đó hoặc đang đi một
            hướng đi nào đó, có một điều khách quan* diễn ra và bạn cảm thấy nó
            thật sự trùng hợp và giúp ích cho mục tiêu hiện tại. Bạn có thể hiểu
            rằng, vũ trụ đang gửi đến não bộ của bạn một thông điệp rõ ràng
            "Đúng hướng rồi đấy, hãy tiếp tục và đừng bỏ cuộc".
          </Quote>
          <Paragraph>
            *Yếu tố khách quan đó thường sẽ không liên quan hoặc không có bất kỳ
            mối liên hệ nào với bạn, nếu nó có thì bạn phải cân nhắc kỹ vì nó có
            thể là một cái bẫy.
          </Paragraph>
          <Paragraph>
            Những dòng đầu tiên của Sound from Universe được viết vào 4:42 phút
            sáng ngày 26/02/2021. Đây cũng là lần đầu tiên sau rất lâu rồi Phong
            mới ngủ vào lúc 10 giờ tối và dậy lúc 3 giờ sáng, theo Luật Hấp Dẫn
            thì khoảng thời gian từ 3 giờ đến 5 giờ sáng cũng chính là thời gian
            não tiếp nhận và giao tiếp tốt nhất đến não bộ. Đó cũng là thời gian
            Vũ trụ gửi một thông điệp hoặc nhiều thông điệp đến bản thân.
          </Paragraph>
          <Paragraph>
            "Sound from Universe" cũng sẽ là nghiên cứu đầu tiên và nghiêm túc
            nhất mà Phong thực hiện về não bộ, về cách vận hành và nâng cấp nó.
            Phong từng được đọc đâu đó rằng là dần dần con người sẽ nghiên cứu
            nhiều hơn về não bộ, về bản thân của Phong trong tương lai, nơi mọi
            người tìm hiểu và đặt nhiều câu hỏi liên quan hơn đến bản thân về{" "}
            <strong>
              Vai trò của bản thân và sứ mệnh của bản thân trong Vũ trụ này
            </strong>
            . Những câu hỏi có phần hơn mông lung dẫn sẽ trở nên cơ bản trong
            một xã hội tương lai nơi mà Phong sẽ đến đó vào một ngày của tương
            lai.
          </Paragraph>
          <ol className="text-sm list-decimal px-5 leading-6 mb-2">
            <li>Có tồn tại mối liên hệ nào giữa con người và Vũ Trụ?</li>
            <li>
              Con người có thật sự được gửi đến Trái Đất hay được mang đến đây
              với một sứ mệnh được giao?
            </li>
            <li>
              Con người có thật sự điều khiển được não bộ ở một cấp độ cao hơn?
            </li>
            <li>
              Làm thế nào để có thể lắng nghe những thông điệp của Vũ trụ gửi
              đến não bộ một cách rõ ràng hơn?
            </li>
            <li>Nguồn phát nằm ở đâu?</li>
          </ol>

          <Heading1>
            1. Những quy tắc cơ bản của 'Sound from Universe'{" "}
          </Heading1>
          <Paragraph>
            Những quy tắc này được xây dựng dựa trên trải nghiệm, khái niệm,
            hiện tượng từ nhiều nguồn khác nhau và được xây dựng trên trải
            nghiệm cá nhân của Phong.
          </Paragraph>
          <Heading2>
            1.1. Ngủ thật sớm và cố gắng thức dậy trong khoảng thời gian 3 giờ
            sáng đến 5 giờ sáng
          </Heading2>
          <Paragraph>
            Trong một video Phong vô tình xem được trên Youtube của một Youtuber
            người Việt chuyên thực hiện những video về Luật Hấp Dẫn có tên "3
            Cách Tận Dụng Sức Mạnh từ Vũ Trụ nếu Bạn Giật Mình Thức Dậy vào lúc
            3h đến 5h Sáng" (
            <ExternalLink
              href="https://www.youtube.com/watch?v=OOl9fNT79xY"
              colortexthover="rainbow_text_hover"
            >
              Xem video trên Youtube
            </ExternalLink>
            ) có nhắc đến khoảng thời gian này. 3 giờ đến 5 giờ sáng thật sự là
            một khoảng thời gian đáng sợ, đó là khoảng thời gian thể trạng con
            người trở nên yếu nhất (trong trường hợp chúng ta không ngủ và thức
            đến giờ này), cũng là thời gian mà phần lớn mọi người xung quanh
            trong bán kính 1 muối giờ đang chìm trong giấc ngủ say. Nếu như
            chúng ta thức dậy trong khoảng thời gian này sau một khoảng thời
            gian dài chìm trong giấc ngủ, cụ thể là nếu chúng ta ngủ sớm trước
            10 giờ thì khoảng thời gian dậy từ 3 giờ đến 5 giờ sáng sẽ trở nên
            rất tỉnh táo và có phần bị điều khiển bởi não bộ.
          </Paragraph>
          <Quote>
            Trong vũ trụ này không có điều gì là ngẫu nhiên cả, những thứ đang
            diễn ra và sẽ diễn ra đều được lập trình sẵn dựa trên những điều mà
            Vũ trụ mong muốn - những điều mà sứ mệnh của chúng ta phải thực hiện
            khi được gửi đến Trái Đất, dựa trên những thỉnh cầu hoặc những thông
            điệp mà não bộ gửi ngược đến vũ trụ. Bất cứ mọi thứ đang diễn ra
            được quyết định bởi 50% sứ mệnh và 50% mong muốn của não bộ, chính
            vì điều này mà không phải ai cũng có thể thực hiện được sứ mệnh được
            giao. - Trích trong video bên trên
          </Quote>
          <Paragraph>
            Có 3 loại thông điệp từ Vũ trụ sẽ được gửi đến não bộ trong khoảng
            thời gian này:
          </Paragraph>
          <ol className="text-sm list-disc px-5 leading-6 mb-2">
            <li>
              <span className="text-red-500 font-bold">
                Bạn là người được chọn và Vũ trụ sẽ giúp bạn tạo ra một điều
                tuyệt vời
              </span>{" "}
              - Nếu bạn vô tình thức dậy vào khoảng thời gian 3 giờ đến 5 giờ
              sáng, đó không phải là điều ngẫu nhiên mà là một sự sắp đặt của Vũ
              trụ dành cho bạn. Tại sao không phải bất kỳ ai khác mà lại là bạn
              thực dậy trong khoảng thời gian này? Vì vũ trụ muốn bạn thức dậy
              và nó muốn gửi đến bạn một thông điệp và muốn bạn thực hiện một
              điều gì đó. Điều này, Phong cũng từng đã trải nghiệm và nó thật sự
              diệu kỳ, khi cơ thể ở trong trạng thái tốt nhất vào khoảng thời
              gian này, nó giúp chúng ta có thể làm được rất nhiều điều hơn. Một
              trong những ví dụ mà Phong thấy có thể dễ dàng thấy nhất là việc
              Tim Cook - CEO của Apple thường dậy lúc 4 giờ sáng để bắt đầu một
              ngày mới (điều này phần lớn được thực hiện bởi những CEO của các
              công ty hàng đầu thế giới bởi nó giúp họ có đủ mọi tỉnh táo để làm
              việc và suy nghĩ),{" "}
              <strong>
                Phong tự hỏi có phải là họ đã / đang thực hiện việc kiểm soát
                não bộ ở tầng cao để giúp tiếp nhận và thực hiện tốt nhất những
                thông điệp từ Vũ trụ hay không?. Và chúng ta có lẽ hoàn toàn có
                thể chủ động thực hiện điều vô tình này.
              </strong>
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Một lời giải đáp cho những vấn đề nan giải của bạn, Vũ trụ sẽ
                giúp bạn có được sự sáng suốt để vận hành tối đa những gì bạn có
                để giải quyết vấn đề
              </span>{" "}
              - Điều này có thể được giải thích dựa trên khoa học. Khi cơ thể đủ
              tỉnh táo và tràn đầy năng lượng, não bộ sẽ đủ nguồn năng lượng để
              vận hành tối đa giúp tận dụng mọi vùng trên não bộ giúp chúng ta
              có thể sáng suốt giải quyết những vấn đề nan giải.{" "}
              <strong>
                Với cá nhân Phong hiểu và quy tắc quan trọng trong "Sound from
                Universe", não bộ như một cổ máy và nó cần nguồn năng lượng để
                vận hành một cách tốt nhất, khi có đủ năng lượng và khả năng
                điều khiển, não bộ sẽ giúp cho cơ thể thực hiện, giải quyết được
                rất nhiều vấn đề.
              </strong>
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Thấu hiểu bản thân hơn
              </span>
              -{" "}
              <strong>
                Mình là ai? Mình đến với trái đất làm gì? Mình có sử mệnh gì ở
                không gian và thời gian này? Bản thân mình và Vũ trụ này có mối
                liên kết thế nào? Đó là những câu hỏi của con người trong tương
                lai và sẽ là những câu hỏi bắt buộc cơ bản mà một con người cần
                trả lời.
              </strong>{" "}
              Trong khoảng thời gian này não bộ cũng sẽ giúp cơ thể thấu hiểu rõ
              bản thân hơn thông qua những thông điệp mà nó nhận từ vũ trụ. Nếu
              thực tâm bản thân chúng ta hỏi những câu hỏi này, muốn não bộ hỏi
              những câu hỏi này để vũ trụ thì chúng ta sẽ có khả năng và đủ năng
              lượng nhất thực hiện điều này trong khoảng thời gian này. Vũ trụ
              trong một khoảnh khắc cũng sẽ trả lời chúng ta thông qua một suy
              nghĩ thoáng qua hoặc một quyết định bất chợt.
            </li>
          </ol>
          <CallOut emoji="💡" bgcolor="bg-yellow-50">
            Nếu bạn để ý, thức dậy vào khung giờ này sẽ giúp cả ngày hôm đó của
            bạn sẽ dài ra. Điều này không chỉ ở cảm giác là nó dài ra mà nó có
            thể do ảnh hưởng của việc giản nở thời gian trong việc thay đổi đồng
            hồ sinh học. Có một nghiên cứu đang thực hiện để tìm sự tồn tại của
            điều này. Có thể nó không tồn tại nhưng nếu bạn thử một lần thức dậy
            vào thời điểm này, cả ngày hôm đó của bạn sẽ trở nên dài hơn thấy
            rõ. Những điều bạn làm, những hoạt động trong ngày hôm đó sẽ trở nên
            tốn ít thời gian hơn và bạn hoàn thành nó trọn vẹn hơn.
          </CallOut>
          <Heading2>1.2. Loại bỏ phần lớn Wishful Thinking</Heading2>
          <Paragraph>
            Wishful Thinking có thể hiểu nôm na là Suy nghĩ viễn vông. Trong một
            hội nghị với các nhà lãnh đạo và doanh nhân Ả Rập #Entspresso,{" "}
            <ExternalLink
              href="https://www.google.com/search?sxsrf=ALeKk02MmRupycWlTrjKpfNX2jd6LdBx6g%3A1614477605429&ei=Jfk6YOHfGfTomAW72qXIBA&q=elon+musk&oq=elon+musk&gs_lcp=Cgdnd3Mtd2l6EAMyDQgAEMcBEKMCELADEEMyDQgAEMcBEKMCELADEEMyBwgAELADEEMyBwgAELADEEMyBwguELADEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEENKBQg4EgExUPIJWPIJYO8MaAFwAHgAgAGeAYgB_wGSAQMxLjGYAQCgAQGqAQdnd3Mtd2l6yAELwAEB&sclient=gws-wiz&ved=0ahUKEwihhq3hvYvvAhV0NKYKHTttCUkQ4dUDCA0&uact=5"
              colortexthover="rainbow_text_hover"
            >
              Elon Musk
            </ExternalLink>{" "}
            đã từng phát biểu rằng:
          </Paragraph>
          <QuotePeople
            imgwhosaid="https://media.giphy.com/media/3jcgPn9fzfaXc1EHJC/giphy.gif"
            namewhossaid="Elon Musk"
            reflink="https://youtu.be/4HizRthlYD8?t=128"
            reftitle="#Entspresso talking"
          >
            One of the biggest mistakes people generally make and I’m guilty of
            a two is wishful thinking, you know, like you want something to be
            true even if it isn’t true and so you ignore other things that you
            ignore the real truth because of what you want to be true, this is a
            very difficult trap to avoid.
          </QuotePeople>
          <Paragraph>
            Wishful Thinking thật sự là một khái niệm có phần khá rộng bởi nó
            gần như bao hàm rất nhiều mặt và chiếm rất nhiều phần, cũng như được
            sử dụng rất nhiều trong suy nghĩ của mỗi người chúng ta. Nói một
            cách dễ hiểu hơn, phần lớn mọi người ngay cả bản thân mình thường
            dành phần lớn thời gian để suy nghĩ về những điều phần lớn không
            diễn ra. Chúng ta suy nghĩ về những điều có phần không thật sự chính
            xác và có phần phóng đại hóa để thỏa mãn sự ham muốn trong suy nghĩ.
            Bởi vì chúng phần lớn không diễn ra ở hiện tại mà chỉ có thể xảy ra
            trong tương lai (với một tỉ lệ thành công rất rất nhỏ vì chúng
            thường vượt ngoài khả năng và nhận thức của môi trường xung quanh
            với các yếu tố khách quan). Bản thân Phong từng trải qua một giai
            đoạn dài bị rơi vào khoảng nguy hiểm này và nó đã tạo ra những tác
            hại không chỉ về mặt tâm lý, sinh lý, mà còn là về mặt thể chất và
            tinh thần. Nếu không nhận thức và tìm cách loại bỏ nó càng nhiều
            càng tốt, dần dần chính não bộ của chúng ta sẽ không còn sáng suốt
            nữa và trở nên chay lì trước những sự việc đang diễn ra.
          </Paragraph>
          <Paragraph>
            Những điểm hại mà Wishful Thinking có thể gây tác động đến chúng ta
            mà có thể được liệt kê dựa trên những trải nghiệm bản thân và những
            hậu quả mà nó mang lại có thể kể đến
          </Paragraph>
          <ol className="text-sm list-disc px-5 leading-6 mb-2">
            <li>
              <span className="text-red-500 font-bold">
                Tạo ra một thế giới ảo bên trong suy nghĩ và khiến não bộ rơi
                vào "khoảng chết"
              </span>{" "}
              : Đây chính là một hậu quả lâu dài của việc có quá nhiều Wishful
              Thinking khi những suy nghĩ viễn vông này dần vẽ ra từng mảng từng
              mảng của những vấn đề mà chúng ta đang đối mặt. Chúng ta thường sẽ
              có xu hướng tạo ra các Wishful Thinking khi một tình huống, một
              vật sự việc không thật sự đi theo đúng hướng mong muốn. Ban đầu
              thì những suy nghĩ viễn vông này sẽ chỉ xảy ra với những tình
              huống lớn và có phần hiếm xảy ra nhưng dần nó sẽ bắt đầu xảy ra
              dày đặt hơn với những việc bình thường hơn với cấp độ tăng cao.
              Việc càng có nhiều Wishful Thinking được hình thành sẽ khiến não
              bộ bị các suy nghĩ này che lấp đi khả năng phần tích và đánh giá
              thể giới thực, thay vào đó não bộ sẽ dùng để vẽ ra những gì mà nó
              muốn và vượt ra ngoài khả năng xảy ra. Từ đó, một thế giới ảo bên
              trong não bộ được hình thành và có thể gọi nó là Universe of
              Minds. "Khoảng chết" được nhắc đến là khoảng thời gian và không
              gian mà não bộ mất nhận thức và khả năng đánh giá với tình huống -
              môi trường - sự vật & sự việc ở thế giới thực.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Sử dụng quá nhiều năng lượng để vận hành não bộ trong việc kích
                hoạt các giác quan
              </span>{" "}
              : Việc có quá nhiều suy nghĩ viễn vông cũng tiêu tốn rất nhiều
              năng lượng. Nếu bạn từng có khoảng thời gian suy nghĩ viễn vông
              chắc hẳn bạn có thể cảm nhận được phần nào cơ thể như căng ra và
              bạn cảm thấy có phần hơi mệt mỏi nhẹ khi dừng lại và trở về thế
              giới thật. Điều này chính là hậu quả của việc não bộ sử dụng năng
              lượng liên tục để tạo ra các tình huống và lý lẽ bên trong Wishful
              Thinking. Những năng lượng này đáng lý ra sẽ được dùng cho các
              việc phân tích và đánh giá thế giới thực. Bản thân Phong cảm nhận
              rõ ràng rằng khi hạn chế rơi vào các suy nghĩ viễn vông này, Phong
              có thể sáng suốt và nhạy bén hơn trong các tình huống ở thế giới
              thực.{" "}
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Mất cảm giác với thế giới quan hiện thực và góp phần mang đến
                nguy cơ hình thành các suy nghĩ lệch lạc
              </span>{" "}
              : Việc sử dụng nhiều Wishful Thinking sẽ khiến cho não bộ mất đi
              cảm giác với thế giới quan hiện thực bởi nó sẽ luôn chuyển đổi suy
              nghĩ vào thế giới ảo của Wishful Thinking. Khi những dòng suy nghĩ
              viễn vông diễn ra, não bộ cũng sẽ ý thực được rằng nó kiểm soát và
              muốn các yếu tố đi theo mong muốn nên rất dễ dẫn đến các suy nghĩ
              lệch lạc hay thậm chí lệch ra khỏi các tiêu chuẩn đạo đức và tôn
              giáo. Não bộ trong thời gian này cũng dần hình thành suy nghĩ bí
              mật, có nghĩa nó sẽ tự động gửi 1 thông điệp đến chính nó rằng các
              suy nghĩ này là bí mật và sẽ ẩn danh tác động lên thế giới thực.
              Đây cũng chính là Wishful Thinking bên trong một Wishful Thinking
              khác và hiện tượng này sẽ xảy ra khi não bộ bắt đầu dần bị biến
              đổi sang hướng lệch lạc.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Góp phần đưa cảm xúc bản thân dễ rơi vào trạng thái hụt hẫn hay
                căng thẳng ở trạng thái báo động
              </span>{" "}
              : Wishful Thinking đôi khi không hoàn toàn diễn ra mà có thể rơi
              vào trạng thái nghĩ ở một số khoảng thời gian nhất định, và trong
              khoảng thời gian này thì não bộ sẽ dùng thế giới thực để đối chiếu
              kết quả với thế giới mà nó xây dựng bên trong Wishful Thinking.
              Tất nhiên, phần lớn những kết quả hay những gì diễn ra ở thế giới
              thực sẽ không giống hoặc thậm chí đi theo chiều hướng ngược lại so
              với thế giới ảo trong các suy nghĩ viễn vông. Não bộ sẽ ý thức và
              phân biệt được hai loại này nhưng hoàn toàn đánh mất khả năng tự
              chủ và tạo ra cảm xúc hụt hẫn hoặc thậm chí là căng thẳng. Dễ hiểu
              hơn, chúng ta có thể liên tưởng đến việc hy vọng quá nhiều vào một
              điều chưa xảy ra và nghĩ rằng nó nên xảy ra và các điều tuyệt vời
              mà bản thân sẽ có được khi nó diễn ra. Và rồi khi thế giới thực
              không diễn ra đúng như những gì nó muốn thì cảm xúc tiêu cực / hụt
              hẫn / căng thẳng sẽ cùng nhau xảy ra ở một múc độ nhất định nào
              đó. Nó chắc chắn sẽ tăng dần khả năng ảnh hưởng và cường độ nếu
              xảy ra trong thời gian dài. Và khi nó đạt đến cực độ, não bộ có
              thể hình thành những hướng đi nguy hiểm như mất cảm xúc vào thế
              giới thực và có phần yêu thích hơn thế giới mà Wishful Thinking
              diễn ra.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Cáng cân cảm xúc bị lệch hẳn về phía tiêu cực
              </span>{" "}
              : Cảm xúc tiêu cực sẽ dễ dàng diễn ra hơn đối với những tình huống
              và sự việc / sự vật bình thường hoặc ít tác động trước đây.
              Wishful Thinking lúc này sẽ không chỉ là những mong muốn ở cảm xúc
              vừa đủ nữa mà là cảm xúc bị tác động. Cụ thể hơn, khi một sự việc
              / tình huống diễn ra, thay vì suy nghĩ tích cực và chấp nhận những
              điểm nhỏ nhặt / những lỗi không đáng có hay không thật sự ảnh
              hưởng nhiều thì những suy nghĩ tiêu cực sẽ hình thành. Và khi các
              suy nghĩ tiêu cực hình thành, Wishful Thinking sẽ đóng vai trò như
              một người phán quyết độc ác tác động* tác động lên tình huống / sự
              việc đó. * có nghĩa là ở góc nhìn của não bộ. Điều này hoàn toàn
              tác động trực tiếp lên chính não bộ nhưng lại mang đến cảm giác
              thỏa mãn và thích thú cho người có suy nghĩ này. Đây có thể coi là
              một hậu quả rất đáng sợ vì khi não bộ không còn được tỉnh táo hay
              các cảm xúc thõa mãn hay thích thú không còn xảy ra vì các suy
              nghĩ này không còn đủ mạnh. Con người có thể dùng hành động ở thế
              giới thực để kích thích cảm giác này ở não bộ. Điểm nguy hiểm nhất
              chính là hành động ở thế giới thực là thực tại và não bộ sẽ không
              thể kiểm soát được hành vi.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Tạo ra một lý lẽ giả khiến chúng ta dễ rơi vào Wishful Thinking
                hơn
              </span>{" "}
              : Một trong những điều cuối mà Wishful Thinking tạo ra đáng sợ là
              nó sẽ khiến não bộ suy nghĩ ra một lý do để biện hộ chính nó. Đây
              là một điều khiến cho não bộ bảo vệ nó khỏi các suy nghĩ loại trừ.
              Wishful Thinking phần lớn sẽ biện hộ cho chính nó bằng việc cho
              rằng bản thân nó sẽ là một loại động lực giúp cho não bộ mạnh mẽ
              hơn và vượt qua được những khó khăn hiện tại ở thế giới thực mà
              đạt được thế giới ảo nó tạo ra. Não bộ có thật sự kiểm tra những
              biện hộ này hay không? Bản thân mình nghĩ là có bởi não bộ được
              hình thành dựa trên cơ chế đánh giá - phân tích tình huống. Vậy
              tại sao não bộ vẫn bị thuyết phục ở phần lớn thời gian, phải chăng
              hệ thống kiểm tra không thật sự tốt hay không đủ mạnh để phản biện
              lại những biện hộ mà Wishful Thinking tạo ra? Bởi vì Wishful
              Thinking biện hộ lý lẽ của nó đúng ở khởi đầu và đúng khi mức độ
              còn thấp. Não bộ chỉ thật sự phát hiện ra điều này khi thời gian
              đánh giá diễn ra lâu dài và được lặp lại nhiều lần. Các biện hộ
              bảo vệ chính nó của Wishful Thinking đúng ở giai đoạn đầu nhưng sẽ
              dần trở nên mất kiểm soát về sau, và phần lớn thì những suy nghĩ
              viễn vông này sẽ xảy ra rất dài nên nó chắc chắn nó sẽ vượt qua
              được giai đoạn kiểm thử và đánh lừa được não bộ ở phần lớn trường
              hợp.{" "}
            </li>
          </ol>
          <Paragraph>
            Vậy Wishful Thinking có mang lại những lợi ích gì không khi nó mang
            lại quá nhiều điểm có phần bất lợi? Bản thân mình nghĩ nó giúp não
            bộ suy nghĩ xa hơn, rộng hơn, và sâu hơn rất nhiều. Tuy nhiên, những
            lợi ích mà nó mang lại chỉ thật sự có ích khi bản thân não bộ kiểm
            soát được nó ở thế giới thực. Nếu như mất kiểm soát ở thế giới thực
            thì Wishful Thinking sẽ không những mang lại lợi ích mà nó biến
            chúng ta trở thành một người ảo tưởng bên trong lẫn bên ngoài. Phần
            lớn những người kiểm soát được Wishful Thinking và tận dụng được tối
            đa lợi ích của nó đều biết cách dừng nó ở những điểm thích hợp và cố
            gắng đạt được nó ở thế giới thực. Dễ nhận biết là mọi người sẽ thấy
            những người kiểm soát được Wishful Thinking giống như những gã điên.
            Nổi tiếng nhất chính là những người như{" "}
            <ExternalLink
              href="https://www.google.com/search?sxsrf=ALeKk02MmRupycWlTrjKpfNX2jd6LdBx6g%3A1614477605429&ei=Jfk6YOHfGfTomAW72qXIBA&q=elon+musk&oq=elon+musk&gs_lcp=Cgdnd3Mtd2l6EAMyDQgAEMcBEKMCELADEEMyDQgAEMcBEKMCELADEEMyBwgAELADEEMyBwgAELADEEMyBwguELADEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEENKBQg4EgExUPIJWPIJYO8MaAFwAHgAgAGeAYgB_wGSAQMxLjGYAQCgAQGqAQdnd3Mtd2l6yAELwAEB&sclient=gws-wiz&ved=0ahUKEwihhq3hvYvvAhV0NKYKHTttCUkQ4dUDCA0&uact=5"
              colortexthover="rainbow_text_hover"
            >
              Elon Musk
            </ExternalLink>
            ,{" "}
            <ExternalLink
              href="https://www.google.com/search?q=steve+jobs&oq=steve+jobs&aqs=chrome..69i57j0l3j46j0j69i65j69i61.1271j0j9&sourceid=chrome&ie=UTF-8"
              colortexthover="rainbow_text_hover"
            >
              Steve Jobs
            </ExternalLink>
            ,{" "}
            <ExternalLink
              href="https://www.google.com/search?q=nikolas+tesla&oq=nikolas+tesla&aqs=chrome..69i57j46j0i10i22i30j0i22i30l7.3419j0j9&sourceid=chrome&ie=UTF-8"
              colortexthover="rainbow_text_hover"
            >
              Nikolas Tesla
            </ExternalLink>
            , hay những người đã thật sự thúc đẩy nhân loại đi lên, phần lớn họ
            đều kiểm soát được yếu tố này. Có một câu nói được Steve Jobs nói mà
            mình có thể thấy nó là hệ quả của việc kiểm soát và hiểu về Wishful
            Thinking ở mức độ rất cao.
          </Paragraph>
          <QuotePeople
            imgwhosaid="https://media.giphy.com/media/p6z2lHvl4Da4U/giphy.gif"
            namewhossaid="Steve Jobs"
            reflink="https://abcnews.go.com/Technology/steve-jobs-death-20-best-quotes/story?id=14681795"
            reftitle="Steve Jobs - 20 Quotes - ABC News"
          >
            The people who are crazy enough to think they can change the world
            are the ones who do.
          </QuotePeople>
          <Paragraph>
            Và nếu không kiểm soát được Wishful Thinking họ sẽ trở thành những
            gã điên không thể thay đổi được thế giới.
          </Paragraph>
          <Heading2>
            1.3. Luyện tập kiên trì từ những điều nhỏ nhất cho đến khi nó trở
            thành bình thường
          </Heading2>
          <Paragraph>
            Với những người không thật sự có khả năng kiên trì tốt, luyện tập từ
            những điều nhỏ nhất là một điều khá tốt. Cụ thể làm một việc gì đó
            nhỏ, một cách nhẹ nhàng lặp lại hàng ngày cho đến khi nó dần trở
            thành bình thường. Một trong những điều khó khăn nhất chính là làm
            một việc gì đó hằng ngày và vượt qua cảm giác chán nản mà nó mang
            lại. Sau khoảng thời gian đó thì những việc này sẽ trở nên bình
            thường và não bộ sẽ dần hình thành một thói quen dựa theo hành động
            đó. Việc làm một việc nhỏ với một sự hào hứng và yêu thích ở thời
            điểm ban đầu, chấp nhận và quyết tâm nó thực hiện hằng ngày là điều
            cần thiết. Tuy nhiên, nếu sau một khoảng thời gian, sự nhiệt huyết -
            quyết tâm hay sự hào hứng mất đi mà thay vào đó là cảm giác chững
            lại và muốn không làm nữa sẽ xảy ra, điều này hoàn toàn bình thường.
            Lúc này, thử thách mới thật sự bắt đầu và nhiệm vụ là vượt qua nó.
          </Paragraph>
          <Paragraph>
            Về cơ bản, thói quen được hình thành từ những điều lặp đi lặp lại,
            những điều này lại được hình thành bởi tính chất cuộc sống, những
            điều này cũng là hệ quả cuộc việc vượt qua được sự chán chường trong
            các hành vi lặp lại. Một ví dụ cơ bản có thể dễ dàng liên tưởng là
            việc viết nhật ký. Phần lớn những người bỏ việc viết nhật ký đến từ
            việc họ không vượt qua được giai đoạn thử thách để biến một hành
            động lặp đi lặp lại trở thành thói quen. Các cảm giác nặng nề và
            ngao ngán sẽ góp phần đánh bại ý chí. Và nếu nó vượt qua được giai
            đoạn này, tính kiên trì sẽ được nâng lên một tầm mới ở một cấp độ
            cao hơn trong sự chịu đựng.
          </Paragraph>
          <Paragraph>
            Một trong những cách luyện tập tính kiên trì theo hướng này mà Phong
            cảm thấy vừa có lợi, vừa hội tụ đủ các thử thách để giúp bạn có thể
            rèn luyện tính kiên trì ngày qua ngày chính là sử dụng Duolingo.{" "}
            <ExternalLink
              href="https://www.google.com/search?q=duolingo&oq=duolingo&aqs=chrome..69i57j69i59j35i39j69i59j0l2j69i60j69i61.1463j0j4&sourceid=chrome&ie=UTF-8"
              colortexthover="rainbow_text_hover"
            >
              Duolingo
            </ExternalLink>{" "}
            là một ứng dụng học ngoại ngữ có thể coi là phổ biến nhất hiện nay
            trên thiết bị di động. Điểm đặc biệt là Duolingo được thiết kế để
            giúp bạn tiếp cận cách học ngôn ngữ thông qua sự lặp đi lặp lại. Các
            bài học là một sự lặp đi lặp lại rất nhiều lần đến khi nó trở thành
            thói quen và hằn sâu vào não bộ của bạn. Việc này giúp bạn có thể
            rèn luyện tính kiên trì và sự lặp lại ngay trong suốt quá trình học.
            Điểm đặc biệt hơn của ứng dụng này chính là Streak, điểm ghi nhận
            liên tục. Mỗi ngày nếu bạn vượt qua giới hạn đã đặt cho bản thân
            bằng cách hoàn thành các bài học, bạn sẽ nhận được 1 ngày streak, và
            nếu bạn từ bỏ 1-3 ngày (trong trường hợp bạn có dùng Freeze Streak,
            một vật phẩm trong ứng dụng giúp bạn không mất toàn bộ Streak khi
            nghỉ 1-2 ngày để phòng tránh trường hợp bất khả kháng từ bên ngoài).
            Việc bạn mất toàn bộ streak sẽ mang đến một cảm giác rất khó tả,
            giống như việc bạn hoàn toàn thất bại vậy. Chính vì điều này mà bạn
            có một động lực vô hình đánh thẳng vào tâm lý không bỏ cuộc. Bạn sẽ
            có thể bất ngờ khi gặp những người có điểm streak ở những con số
            đáng sợ 3000-5000-7000, có nghĩa trong từng ấy ngày liên tiếp họ đã
            sử dụng ứng dụng mỗi ngày. Đến khi bạn dùng ứng dụng này bạn sẽ thấy
            điều đó là thật sự ngượng mộ. Tất nhiên, với số streak như vậy, phần
            thưởng cho bạn là bạn đã hiểu rất nhiều về ngôn ngữ mà bạn đang học.
            Sự lặp lại trong Duolingo được hiểu như một sự lặp lại kép và nó
            giúp bạn có thể luyện tập tính kiên trì rất cao.
          </Paragraph>
          <Paragraph>
            Cơ bản là mọi thứ điều có thể giúp bạn luyện tập tính kiên trì mà
            không chỉ gói gọn trong những điều sử dụng một cái gì đó. Thực tế,
            nếu bạn thực hiện điều đầu tiên{" "}
            <strong>
              1.1. Ngủ thật sớm và cố gắng thức dậy trong khoảng thời gian 3 giờ
              sáng đến 5 giờ sáng
            </strong>
            , bạn cũng có thể luyện tập tính kiên trì rồi. Những gì nằm ngoài
            thói quen hiện tại của bạn có xu hướng lặp đi lặp lại đều rèn luyện
            cho chính não bộ một tính kiên trì nhất định.
          </Paragraph>
          <div className="w-full p-2 my-2 flex items-center space-x-2 justify-center">
            <VictoryHand />
            <p className="text-black dark:text-white uppercase font-bold inline-flex">
              More soon
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
